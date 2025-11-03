import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ProductSlider } from "../../../../services/script";
import parse from 'html-react-parser';

class GlassFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockSize: 50,
    };
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
    let images = this.props.products[index].images;
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
          <h3 style={{ "border-bottom": "1px solid black", width: "100%" }}>
            {obj.props.material}
          </h3>
          <br />

          <div className="row  search-product">
            <div className="col-md-12">
              <Slider {...ProductSlider} className="row slide-5 no-arrow ">
                {obj.props.products.map(function(product, index) {
                  if (product.material_sub_type === obj.props.material) {
                    return (
                      <div>
                        <div className="col-md-12 custome-product-slider">
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
                              <p>
                                <b className="Component-paragraphs">
                                  {product.name}
                                </b>

                                <div className="row mb-0">
                                  <div className="col-6">
                                    <b className="Component-paragraphs">
                                      Material:
                                    </b>
                                  </div>
                                  <div className="col-6">
                                    <p className="Component-paragraphs-inner">
                                      {product.material_type}
                                    </p>
                                  </div>
                                </div>
                                {/* <div className="row">
                              <div className="col-6">
                                <b className="Component-paragraphs">
                                  {" "}
                                  Thikness:
                                </b>
                              </div>
                              <div className="col-6">
                                <p className="Component-paragraphs-inner">
                                  {obj.getThicknesses(product)}
                                </p>
                              </div>
                            </div> */}
                                <div className="row">
                                  <div className="col-6">
                                    <b className="Component-paragraphs">
                                      {" "}
                                      Price Group:
                                    </b>
                                  </div>
                                  <div className="col-6">
                                    <p className="Component-paragraphs-inner">
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
                                >
                                  <button className="btn btc mt-2">
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
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GlassFilter;
