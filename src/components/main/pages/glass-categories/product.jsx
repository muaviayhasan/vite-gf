import React from "react";

import BaseProduct from "../../../features/product/common/base-product";

import { Link } from "react-router-dom";

class GLassProduct extends BaseProduct {
  render() {
    const { product } = this.props;
    console.log("p: ", product);

    return product ? (
      <div className={`product product-7 2`}>
        <figure className="product-media" style={{ height: 350 }}>
          {/* image section */}
          <Link to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/${product.name}`}>
            {product.images && product.images[0] ? (
              <img
                src={`${product.images[0]}`}
                className="product-image"
                style={{ height: "100%" }}
                alt="Glass splashbacks, Kitchen worktop, Toughened glass splashback, Bespoke glass wall covering, bespoke kitchen design, crackled glass, toughened mirror, satin glass"
              />
            ) : (
              <img
                src="assets/images/gnf/defaultTile.png"
                className="product-image"
                style={{ height: "100%" }}
                alt="Glass splashbacks, Kitchen worktop, Toughened glass splashback, Bespoke glass wall covering, bespoke kitchen design, crackled glass, toughened mirror, satin glass"
              />
            )}
          </Link>

          <div className="product-action product-action-transparent">
            <Link
              className={"btn-product btn-quickview"}
              to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/${product.name}`}
            >
              <span>Details</span>
            </Link>
          </div>
        </figure>

        <div className="product-body">
          <h3 className="product-title">
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/${product.name}`}
            >
              {product &&
                product.name
                  .replace("-", " ")
                  .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
                    match.toUpperCase()
                  )}
            </Link>
          </h3>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default GLassProduct;
