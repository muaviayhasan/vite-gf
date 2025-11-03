import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ProductSlider } from "../../../../services/script";
import parse from 'html-react-parser';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class glassProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockSize: 50,
      limit: 8,
      products: [],
      category: this.props.match.params.category,
      length: 0,
      skeleton: 8,
      per_page: 16,
      page_num: 1,
      res_length: 0,
      loadMore: false,
      loading: true,
    };
    this.loadMoreProducts = this.loadMoreProducts.bind(this);
  }

  async componentDidMount() {
    let checkCategory = this.state.category;

    let skuCriteria = {
      category: this.state.category,
      per_page: this.state.per_page,
      page_num: this.state.page_num,
    };

    const res = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/category/per_page/page_num`,
      method: "post",
      data: skuCriteria,
    });

    let checkFinish = res.data.findIndex(function(data) {
      return checkCategory == data.material_type;
    });

    this.setState({
      products: [...this.state.products, ...res.data],
      page_num: this.state.page_num + 1,
      res_length: res.data.length,
      length: checkFinish,
      loadMore: false,
      loading: false,
    });
    window.scrollBy(0, -1000);
  }

  getPriceRange(list, key) {
    let values = 0;
    let html = "<font class='text-danger'>£</font>";
    if (list) {
      for (var i in list) {
        if (list[i][key] > values) {
          values = list[i][key];
        }
      }
      for (var i = 1; i < 6; i++) {
        if (values > this.state.blockSize * i) {
          html += "<font class='text-danger'>£</font>";
        } else {
          html += "<font>£</font>";
        }
      }
    }
    return html;
  }

  getImagePath(index) {
    let images = this.state.products[index].images;
    if (images) {
      let image = images.filter(function(img) {
        return img.sequence == 0;
      });
      if (image.length > 0) {
        return `${import.meta.env.VITE_API_URL}${image[0].path}`;
      } else {
        return this.state.defaultImage;
      }
    } else {
      return this.state.defaultImage;
    }
  }

  getThicknesses(product) {
    let finishes = product.finishes;
    let thicknesses = "";
    if (finishes) {
      for (let i in finishes) {
        thicknesses += finishes[i].thickness;
        if (i < finishes.length - 1) {
          thicknesses += ",";
        }
      }
    }
    let countThicknesses = thicknesses.split(",");
    if (countThicknesses.length <= 2) {
      return thicknesses;
    } else {
      return "Many options";
    }
  }

  loadMoreProducts() {
    this.setState({ loadMore: true }, () => {
      this.componentDidMount();
    });
  }

  render() {
    const obj = this;

    return (
      <section className="beauty-about" style={{ "padding-top": "40px" }}>
        <div className="container section-b-space">
          <br />

          {obj.state.length !== -1 ? (
            <div className="  search-product">
              <h1>{obj.state.category} Products</h1>
              <br />

              <div className="row col-md-12">
                {obj.state.loadMore === false && obj.state.products.length > 0
                  ? obj.state.products.map(function(product, index) {
                      return (
                        <div
                          className="col-xl-3 col-md-4 col-sm-6 mb-3 _testing"
                          style={{
                            height: 412,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="front">
                                <img
                                  src={obj.getImagePath(index)}
                                  className="img-fluid product_image"
                                  alt=""
                                />
                              </div>
                            </div>
                            <br />
                            <div className="product-detail">
                              <p>
                                <b
                                  className="Component-paragraphs"
                                  style={{ display: "flex", fontSize: 14 }}
                                >
                                  {product.name}
                                </b>

                                <div
                                  className="row mb-0"
                                  style={{ marginTop: "5%" }}
                                >
                                  <div className="col-7">
                                    <p className="Component-paragraphs-inner">
                                      {product.material_type}
                                    </p>
                                  </div>
                                  <div className="col-5">
                                    <p
                                      className="Component-paragraphs-inner"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                      }}
                                    >
                                      {parse(
                                        obj.getPriceRange(
                                          product.finishes,
                                          "price"
                                        )
                                      )}
                                    </p>
                                  </div>
                                </div>

                                <Link
                                  to={`${
                                    import.meta.env.VITE_PUBLIC_URL
                                  }/product-detail/${product.manufacturer
                                    .replace(/ /g, "-")
                                    .replace("&", "and")
                                    .toLowerCase()}/${product.brand
                                    .replace(/ /g, "-")
                                    .replace("&", "and")
                                    .toLowerCase()}/${product.base_color
                                    .replace(/ /g, "-")
                                    .replace("&", "and")
                                    .toLowerCase()}/${product.id}`}
                                  title="Details"
                                  style={{ float: "right" }}
                                >
                                  <button
                                    className="btn btc mt-2"
                                    style={{
                                      fontWeight: 400,
                                      paddingTop: 7,
                                      paddingBottom: 3,
                                      backgroundColor: "white",
                                      color: "rgba(37, 55, 70, 1)",
                                    }}
                                  >
                                    Details
                                  </button>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : obj.state.loading && (
                      <Fragment style={{ display: "flex" }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
                          return (
                            <div
                              style={{
                                display: "grid",
                                marginLeft: "6%",
                                marginTop: "3%",
                              }}
                            >
                              <Skeleton
                                circle={false}
                                height={250}
                                width={200}
                              />
                              <Skeleton
                                circle={false}
                                height={30}
                                width={150}
                              />
                              <Skeleton
                                circle={false}
                                height={30}
                                width={150}
                              />
                              <Skeleton
                                circle={false}
                                height={30}
                                width={70}
                                style={{ marginLeft: "54%" }}
                              />
                            </div>
                          );
                        })}
                      </Fragment>
                    )}

                {obj.state.loadMore && (
                  <Fragment style={{ display: "flex" }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
                      return (
                        <div
                          style={{
                            display: "grid",
                            marginLeft: "6%",
                            marginTop: "3%",
                          }}
                        >
                          <Skeleton circle={false} height={250} width={200} />
                          <Skeleton circle={false} height={30} width={150} />
                          <Skeleton circle={false} height={30} width={150} />
                          <Skeleton
                            circle={false}
                            height={30}
                            width={70}
                            style={{ marginLeft: "54%" }}
                          />
                        </div>
                      );
                    })}
                  </Fragment>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    padding: 20,
                  }}
                >
                  <button
                    type="button"
                    className={
                      this.state.res_length > 15
                        ? "btn _whiteColor btc _viewAll"
                        : "hidden"
                    }
                    style={{
                      backgroundColor: "white",
                      color: "rgb(37, 55, 70) !important",
                      maxHeight: 35,
                      fontWeight: 400,
                      paddingTop: 7,
                      paddingBottom: 3,
                    }}
                    onClick={() => this.loadMoreProducts()}
                  >
                    load more
                  </button>
                  <span
                    className={
                      this.state.res_length > 15 || this.state.res_length == 0
                        ? "hidden"
                        : ""
                    }
                  >
                    No More Data!
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="  search-product">
              <h1>No product found</h1>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default glassProduct;
