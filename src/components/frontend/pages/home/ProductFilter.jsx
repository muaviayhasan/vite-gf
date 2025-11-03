import React, { Component, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ProductSlider } from "../../../../services/script";
import parse from 'html-react-parser';

import axios from "axios";
import Skeleton from "react-loading-skeleton";

class ProductsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockSize: 50,
      skeleton: 8,
      per_page: 16,
      page_num: 1,
      products: [],
    };
  }

  async componentDidMount() {
    let skuCriteria = {
      category: this.props.material,
      per_page: this.props.per_page ? this.props.per_page : this.state.per_page,
      page_num: this.state.page_num,
    };
    const res = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/category/per_page/page_num`,
      method: "post",
      data: skuCriteria,
    });
    this.setState({
      products: res.data,
      page_num: this.props.page_num
        ? this.props.page_num + 1
        : this.state.page_num + 1,
    });
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
          html += "<font style='color: silver'>£</font>";
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
        return this.props.defaultImage;
      }
    } else {
      return this.props.defaultImage;
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

  render() {
    const obj = this;
    var n = 0;
    return (
      <section className="beauty-about" style={{ "padding-top": "40px" }}>
        <div className="container">
          <br />

          <div className="  search-product">
            <div className="row col-md-12">
              {obj.state.products.length > 0 ? (
                obj.state.products.map(function(product, index) {
                  if (product.material_type === obj.props.material) {
                    n = n + 1;

                    return (
                      <Fragment>
                        {n <= 8 && (
                          <div
                            className="col-xl-3 col-md-4 col-sm-6 mb-3 _testing"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              width:
                                (n <= 8 && 228) ||
                                (obj.props.type == "stone" && 228),
                              height:
                                (n <= 8 && 406) ||
                                (obj.props.type == "stone" && 406),
                            }}
                            key={index}
                          >
                            {n <= 8 && (
                              <div className={`product-box`}>
                                <div className="img-wrapper">
                                  <div class="front">
                                    <img
                                      src={obj.getImagePath(index)}
                                      class="img-fluid product_image"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <br />

                                <div className="product-detail">
                                  <p style={{ maxWidth: 200 }}>
                                    <b
                                      className="Component-paragraphs"
                                      style={{
                                        display: "flex",
                                        fontSize: 14,
                                        height: 30,
                                      }}
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
                                      style={{ marginLeft: "58%" }}
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
                            )}
                          </div>
                        )}
                      </Fragment>
                    );
                  }
                })
              ) : (
                <Fragment style={{ display: "flex" }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
                    return (
                      <div
                        style={{
                          display: "grid",
                          marginLeft: "4%",
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
              {n > 8 && (
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
                    className="btn _whiteColor btc _viewAll"
                    style={{
                      backgroundColor: "white",
                      color: "rgb(37, 55, 70) !important",
                      maxHeight: 35,
                      fontWeight: 400,
                      paddingTop: 7,
                      paddingBottom: 3,
                    }}
                    onClick={() => {
                      console.log("clicked");
                      var name = obj.props.material;
                      localStorage.setItem("name", name);
                      this.props.history.push("/product-catalogue-load-more");
                    }}
                  >
                    load more
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductsFilter;
