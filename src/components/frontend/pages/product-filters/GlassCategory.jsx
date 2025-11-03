import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ProductSlider } from "../../../../services/script";
import parse from 'html-react-parser';

class GlassCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const obj = this;
    return (
      // <Link
      //   to={`${import.meta.env.VITE_PUBLIC_URL}/glass-categories/${this.props.category}`}
      // >
      //   <div className="product-box glass-category-box">
      //     <div
      //       className="img-wrapper"
      //       style={{ display: "flex", justifyContent: "center" }}
      //     >
      //       <div class="front">
      //         <img
      //           src={this.props.image}
      //           class="img-fluid product_image"
      //           alt=""
      //         />
      //       </div>
      //     </div>
      //     <br />
      //     <div className="product-detail">
      //       <p>
      //         <b className="Component-paragraphs">{this.props.category}</b>

      //         <button className="category-detail-button">Details</button>
      //       </p>
      //     </div>
      //   </div>
      // </Link>
      <div style={{ marginTop: 8 }}>
        <div>
          <div className="product-box">
            <div className="img-wrapper">
              <div className="front">
                <img
                  src={this.props.image}
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
                  {this.props.category}
                </b>

                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-categories/${this.props.category}`}
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
  }
}

export default GlassCategory;
