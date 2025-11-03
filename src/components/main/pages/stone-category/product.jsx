import React from "react";

import BaseProduct from "../../../features/product/common/base-product";

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
    // console.log("p: ", product);

    return product ? (
      <div className={`product product-7 4`}>
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
                src={`${import.meta.env.VITE_API_URL}/${product.images[0].path}`}
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
          </Link>

          <div className="product-action product-action-transparent">
            <Link
              className={"btn-product btn-quickview"}
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
              <span>Details</span>
            </Link>
          </div>
        </figure>

        <div className="product-body">
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
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default Product;
