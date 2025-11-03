import React, { Component, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ProductSlider } from "../../../../services/script";
import parse from 'html-react-parser';
import axios from "axios";

import Skeleton from "react-loading-skeleton";

class Products extends Component {
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
    return (
      <section className="beauty-about" style={{ "padding-top": "40px" }}>
        <div className="container">
          <div
            style={{
              "border-bottom": "1px solid black",
              width: "100%",
              display: "flex",
            }}
          >
            <div>
              <h3>{obj.props.material}</h3>
            </div>
            <div
              style={{
                marginLeft:
                  obj.props.material === "Compact Worktops" ? "5%" : "13%",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h5 style={{ marginRight: "6% !important" }}>
                {obj.props.description}
              </h5>
              <button
                class="btn btn-sm btc"
                style={{
                  backgroundColor: "rgb(183,130,80)",
                  color: "white",
                  maxHeight: 35,
                  fontWeight: 400,
                  paddingTop: 7,
                  paddingBottom: 3,
                  backgroundColor: "white",
                  color: "rgb(37, 55, 70)",
                  borderColor: "rgb(183,130,80) !important",
                }}
                onClick={() => {
                  var name = obj.props.material;
                  localStorage.setItem("name", name);

                  this.props.history.push("/product-catalogue-load-more");
                }}
              >
                View All
              </button>
            </div>
          </div>

          <br />

          <div className="row  search-product">
            <div className="col-md-12">
              <Slider {...ProductSlider} className="row slide-5 no-arrow ">
                {obj.state.products.length > 0 ? (
                  obj.state.products.map(function(product, index) {
                    if (product.material_type === obj.props.material) {
                      return (
                        <div style={{ height: 440 }}>
                          <div className="col-md-12 custome-product-slider _testing">
                            <div className="product-box">
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
                                    style={{ marginLeft: "57%" }}
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
                        </div>
                      );
                    }
                  })
                ) : (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {[1, 2, 3, 4, 5, 6].map((data) => {
                      return (
                        <div
                          style={{
                            display: "grid",
                            marginLeft: "15%",
                            marginTop: "3%",
                          }}
                        >
                          <Skeleton circle={false} height={150} width={150} />
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
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
