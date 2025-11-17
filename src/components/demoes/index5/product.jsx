import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import BaseProduct from "../../features/product/common/base-product";
import { findIndex } from "../../../utils/utils";

class Product extends BaseProduct {
  getPriceRange = (list, key) => {
    let values = 0;
    let html = "<font style='color: #cc9966;'>£</font>";
    if (list) {
      for (let i in list) {
        if (list[i][key] > values) {
          values = list[i][key];
        }
      }
      for (let i = 1; i < 6; i++) {
        if (values > 50 * i) {
          html += "<font style='color: #cc9966;'>£</font>";
        } else {
          html += "<font style='color: silver'>£</font>";
        }
      }
    }
    return html;
  };

  _showAddToCartBtn(classNameAdded, btnText, link) {
    return (
      <Link className={classNameAdded} to={link}>
        <span>{btnText}</span>
      </Link>
    );
  }

  render() {
    const { product } = this.props;

    return product ? (
      <div className="product product-2">
        <figure className="product-media">
          <Link
            to={`/product-detail/${product.manufacturer
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
                src={`${import.meta.env.VITE_API_URL}/${product.name === "White Macaubas"
                    ? product.images[1].path
                    : product.images[0].path
                  }`}
                alt="Product"
                className="product-image"
                style={{ height: "100%" }}
              />
            ) : (
              <img
                src="/assets/images/gnf/defaultTile.png"
                alt="Product"
                className="product-image"
                style={{ height: "100%" }}
              />
            )}
          </Link>
          <div className="product-action-vertical">
            {this.showToggleWishlistBtn(
              "btn-product-icon btn-wishlist btn-expandable",
              product
            )}
          </div>
          <div className="product-action product-action-transparent">
            {this._showAddToCartBtn(
              "btn-product btn-quickview",
              "details",
              `/product-detail/${product.manufacturer
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
              <Link to="#">{product.material_type}</Link>
            </span>
          </div>
          <h3 className="product-title">
            <Link
              to={`/product-detail/${product.manufacturer
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
              {product.name}
            </Link>
          </h3>
          <div className="product-price">
            <span className="out-price">
              <p
                className="Component-paragraphs-inner"
                style={{ fontWeight: "bold", fontSize: 16 }}
              >
                {parse(this.getPriceRange(product.finishes, "price"))}
              </p>
            </span>
          </div>
          <ReactTooltip />
          <div className="product-nav product-nav-dots">
            <a
              className="active"
              style={{
                background: product.base_color,
                marginLeft: "2%",
              }}
              data-tip={`Main Colour: ${product.base_color}`}
            ></a>
            <a
              className="active"
              style={{
                background: product.color_code,
                marginLeft: "2%",
              }}
              data-tip={`Colour: ${product.color_code}`}
            ></a>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export const mapStateToProps = (state, ownProps) => {
  let wishlist = false;
  if (
    findIndex(
      state.wishlist.list,
      (item) => item.id === ownProps.product.id
    ) !== -1
  ) {
    wishlist = true;
  }
  return { wishlist };
};

export default connect(mapStateToProps)(Product);