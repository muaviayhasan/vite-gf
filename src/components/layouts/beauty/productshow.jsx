import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

class ProductShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockSize: 50
    };
  }
  getValues(list, key) {

    let values = "";
    if(list)
    {
      for (var i in list) {
        values += list[i][key] + (i < list.length - 1 ? "," : "");
      } 
    }


    return values;
  }
  getPriceRange(list, key) {
    let values = 0;
    let html = "<font class='text-danger'>£</font>";
    if(list)
    {
    for (var i in list) {
      if(list[i][key] > values)
      {
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

  componentDidMount() {}
  render() {
    return (
      <section className="beauty-about">
        <div className="container">
          <h3 style={{ borderBottom: "1px solid black", width: "100%" }}>
            {this.props.title}
          </h3>
          <br />
          <div className="">
            <div className="row search-product">
              {this.props.data.map(item => {
                return (
                  <div className="col-xl-2 col-md-4 col-sm-6">
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="front">
                          <a href="\assets\images\211 x 277 tile.png">
                            <img
                              src="\assets\images\211 x 277 tile.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="cart-info cart-wrap">
                          <button title="Add to cart">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>
                          </button>
                          <a href="javascript:void(0)" title="Add to Wishlist">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                      <br />
                      <div className="product-detail">
                        <p>
                          <b className="Component-paragraphs">
                            Product Name:123
                          </b>

                          <div className="row mb-0">
                            <div className="col-6">
                              <b className="Component-paragraphs"> Material:</b>
                            </div>
                            <div className="col-6">
                              <p className="Component-paragraphs-inner">
                                {item.material}
                              </p>
                            </div>
                          </div>
                          {/* <div className="row">
                            <div className="col-6">
                              <b className="Component-paragraphs"> Thikness:</b>
                            </div>
                            <div className="col-6">
                              <p className="Component-paragraphs-inner">
                                {this.getValues(item.finishes, "thickness")}
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
                                  this.getPriceRange(item.finishes, "price")
                                )}
                              </p>
                            </div>
                          </div>

                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/${item.id}`}
                            className="btn btc"
                          >
                            Details
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductShow;
