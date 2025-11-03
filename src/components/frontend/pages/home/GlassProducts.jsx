import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ProductSlider } from "../../../../services/script";
import parse from 'html-react-parser';

class GlassProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockSize: 50,
      categories: [
        {
          name: "Plain",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/plain-final.jpg`,
        },
        {
          name: "Metallic Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/Metallic-effect-final.jpg`,
        },
        {
          name: "Shimmer Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/shimmer-effect-final.jpg`,
        },
        {
          name: "Special Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/special-effect-final.jpg`,
        },
        {
          name: "Digital Print",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/digital-print-final.jpg`,
        },
        {
          name: "Double Layer",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/double-layers-final.jpg`,
        },
        {
          name: "Crackled Glass",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/cracked-glass-final.jpg`,
        },
        {
          name: "Toughened Mirrors",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/toughened-final.jpg`,
        },
        {
          name: "Untoughened Mirrors",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/untoughened-final.jpg`,
        },
        {
          name: "Satin Glass",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/stain-glass-final.jpg`,
        },
        {
          name: "Plain + Sparkle",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/plain-sparkle-final.jpg`,
        },
      ],
    };
  }

  render() {
    const obj = this;
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
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
                marginLeft: "13%",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h5>{obj.props.description}</h5>
            </div>
          </div>

          <br />

          <div className="row  search-product">
            <div className="col col-md-12">
              <div
                className="row slide-5 no-arrow "
                style={{ marginRight: "-5%" }}
              >
                {this.state.categories.map((product, index) => {
                  return (
                    <div style={{ marginTop: 20 }}>
                      <div
                        className="col-md-12 _testing"
                        style={{ width: 228, height: 377 }}
                      >
                        <div className="product-box">
                          <div className="img-wrapper">
                            <div class="front">
                              <img
                                src={product.image}
                                class="img-fluid product_image"
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

                              <Link
                                to={`${import.meta.env.VITE_PUBLIC_URL}/glass-categories/${product.name}`}
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GlassProduct;
