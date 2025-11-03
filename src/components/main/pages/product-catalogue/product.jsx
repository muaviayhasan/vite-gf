import React, { Fragment } from "react";
import { connect } from "react-redux";

import BaseProduct from "../../../features/product/common/base-product";

import { findIndex } from "../../../../utils/utils";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { Tooltip as ReactTooltip } from "react-tooltip";
class Product extends BaseProduct {
  getPriceRange = (list, key) => {
    let values = 0;
    let html = "<font style='color: #cc9966;'>£</font>";
    if (list) {
      for (var i in list) {
        if (list[i][key] > values) {
          values = list[i][key];
        }
      }
      for (var i = 1; i < 6; i++) {
        if (values > 50 * i) {
          html += "<font style='color: #cc9966;'>£</font>";
        } else {
          html += "<font style='color: silver'>£</font>";
        }
      }
    }
    return html;
  };

  render() {
    const { product } = this.props;

    return product ? (
      <div className={`product product-7 3`}>
        <figure className="product-media" style={{ height: 350 }}>
          {/* image section */}
          <Link
            to={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/${product.manufacturer
              .replace(/ /g, "-")
              .replace("&", "and")
              .toLowerCase()}/${product.brand
              .replace(/ /g, "-")
              .replace("&", "and")
              .toLowerCase()}/${product.base_color
              .replace(/ /g, "-")
              .replace("&", "and")
              .toLowerCase()}/${product.id}`}
          >
            {product.images && product.images[0] ? (
              <img
                src={
                  product.hasOwnProperty("type")
                    ? product.images[0].path
                    : `${import.meta.env.VITE_API_URL}/${
                        product && product.name === "White Macaubas"
                          ? product.images[1].path
                          : product.images[0].path
                      }`
                }
                alt="Product"
                className="product-image"
                style={{ height: "100%" }}
              />
            ) : (
              <img
                src="assets/images/gnf/defaultTile.png"
                alt="Product"
                className="product-image"
                style={{ height: "100%" }}
              />
            )}

            {/* {product.images[1] ? (
              <img
                src={`${import.meta.env.VITE_API_URL}/${product.images[1].path}`}
                alt="Product"
                className="product-image-hover"
              />
            ) : (
              ""
            )} */}
          </Link>
          {/* image section end */}

          <div className="product-action-vertical">
            {this.showToggleWishlistBtn(
              "btn-product-icon btn-wishlist btn-expandable",
              product
            )}
          </div>

          <div className="product-action product-action-transparent">
            {this.showAddToCartBtn(
              `${import.meta.env.VITE_PUBLIC_URL}/product-detail/${product.manufacturer
                .replace(/ /g, "-")
                .replace("&", "and")
                .toLowerCase()}/${product.brand
                .replace(/ /g, "-")
                .replace("&", "and")
                .toLowerCase()}/${product.base_color
                .replace(/ /g, "-")
                .replace("&", "and")
                .toLowerCase()}/${product.id}`
            )}
          </div>
        </figure>

        <div className="product-body">
          <div className="product-cat">
            <span className="mr-0">
              <Link to="#">{product && product.material_type}</Link>
            </span>
          </div>
          <h3 className="product-title">
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
            >
              {product && product.name}
            </Link>
          </h3>
          {product.hasOwnProperty("type") === false && (
            <Fragment>
              <div className="product-price">
                <span className="out-price">
                  <p
                    className="Component-paragraphs-inner"
                    style={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    {parse(
                      this.getPriceRange(product && product.finishes, "price")
                    )}
                  </p>
                </span>
              </div>

              <ReactTooltip />
              <div className="product-nav product-nav-dots">
                <a
                  className="active"
                  style={{
                    background: product && product.base_color,
                    marginLeft: "2%",
                  }}
                  data-tip={"Main Colour: " + product.base_color}
                ></a>
                <a
                  className="active"
                  style={{
                    background: product && product.color_code,
                    marginLeft: "2%",
                  }}
                  data-tip={"Colour: " + product.color_code}
                ></a>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export const mapStateToProps = (state, ownprops) => {
  let wishlist = false;
  if (
    findIndex(
      state.wishlist.list,
      (item) => item.id === ownprops.product.id
    ) !== -1
  )
    wishlist = true;
  return {
    wishlist: wishlist,
  };
};

export default connect(mapStateToProps)(Product);
