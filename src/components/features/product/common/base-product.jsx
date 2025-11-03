import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class BaseProduct extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.showQuickView = this.showQuickView.bind(this);
    this.addToCompareList = this.addToCompareList.bind(this);
    this.toggleWishList = this.toggleWishList.bind(this);
  }

  showProductImgSection() {
    const { product } = this.props;

    return (
      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/product/default/${product.id}`}>
        <img
          src={`${import.meta.env.VITE_API_URL}/${product.pictures[0].path}`}
          alt="Product"
          className="product-image"
        />
        {product.pictures[1] ? (
          <img
            src={`${import.meta.env.VITE_API_URL}/${product.pictures[1].path}`}
            alt="Product"
            className="product-image-hover"
          />
        ) : (
          ""
        )}
      </Link>
    );
  }

  showFadeImage() {
    const { product } = this.props;

    return (
      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/product/default/${product.id}`}>
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/lazy.png`}
          data-oi={import.meta.env.VITE_PUBLIC_URL + "/" + product.pictures[0]}
          alt="Product"
          className="product-image molla-lz"
        />
        {product.pictures[1] ? (
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/lazy.png`}
            data-oi={import.meta.env.VITE_PUBLIC_URL + "/" + product.pictures[1]}
            alt="Product"
            className="product-image-hover molla-lz"
          />
        ) : (
          ""
        )}
      </Link>
    );
  }

  showProductCatSection() {
    const { product } = this.props;

    return (
      <div className="product-cat">
        {product.category.map((cat, index) => (
          <span key={index} className="mr-0">
            <Link to="#">{cat}</Link>
            {index < product.category.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    );
  }

  showProductName() {
    const { product } = this.props;

    return (
      <h3 className="product-title">
        <Link to={`${import.meta.env.VITE_PUBLIC_URL}/product/default/27`}>
          {product.name}
        </Link>
      </h3>
    );
  }

  showProductPrice(oldLabel = "Was", newLabel = "") {
    const { product } = this.props;

    return 0 === product.stock ? (
      <div className="product-price">
        <span className="out-price">
          $
          {product.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    ) : 0 < product.discount ? (
      <div className="product-price">
        <span className="new-price">
          {newLabel} $
          {product.salePrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
        <span className="old-price">
          {oldLabel} $
          {product.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    ) : (
      <div className="product-price">
        $
        {product.price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
    );
  }

  showProductRating(classNameAdded = "ratings") {
    const { product } = this.props;

    return (
      <div className="ratings-container">
        <div className={classNameAdded}>
          <div
            className="ratings-val"
            style={{ width: product.ratings * 20 + "%" }}
          ></div>
        </div>
        <span className="ratings-text">( {product.reviews} Reviews )</span>
      </div>
    );
  }

  showProductVariants(colorType = "rgb") {
    const { product } = this.props;
    let trueType = colorType;
    if (colorType === "default")
      if (product.variants[0].image || product.variants[0].modal)
        trueType = "image";
      else trueType = "rgb";

    return product.variants ? (
      ("model" === trueType && product.variants[0].model) ||
      ("image" === trueType && product.variants[0].image) ? (
        <div className="product-nav product-nav-thumbs">
          {product.variants.map((vari, i) => (
            <Link to="#" key={i} className={0 === i ? "active" : ""}>
              <img
                src={
                  import.meta.env.VITE_PUBLIC_URL +
                  "/" +
                  ("model" === trueType ? vari.model : vari.image)
                }
                alt="product desc"
              />
            </Link>
          ))}
        </div>
      ) : "rgb" === trueType && product.variants[0].rgb ? (
        <div className="product-nav product-nav-dots">
          {product.variants.map((vari, i) => (
            <Link
              to="#"
              key={i}
              className={0 === i ? "active" : ""}
              style={{ background: vari.rgb }}
            ></Link>
          ))}
        </div>
      ) : (
        ""
      )
    ) : (
      ""
    );
  }

  addToCart(e) {
    const { product, onAddToCartClick } = this.props;
    if (0 !== product.stock) onAddToCartClick(product, 1);
    e.preventDefault();
  }

  addToCompareList(e) {
    const { product, onAddToCompareClick } = this.props;
    onAddToCompareClick(product);
    e.preventDefault();
  }

  removeDuplicates = (originalArray, prop) => {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  };

  toggleWishList(product) {
    // console.log("p: ", product);
    var existing = JSON.parse(localStorage.getItem("wishlist"));
    if (existing && existing.length > 0) {
      existing.push(product);
      existing = this.removeDuplicates(existing, "id");
    } else {
      existing = [product];
    }
    localStorage.setItem("wishlist", JSON.stringify(existing));
    toast.success(
      <p style={{ marginLeft: "-10%" }}>
        Product added to{" "}
        <Link to="/wishlist" style={{ color: "black", fontWeight: "bold" }}>
          wishlist
        </Link>{" "}
        <br />
        click{" "}
        <Link to="/wishlist" style={{ color: "black", fontWeight: "bold" }}>
          here
        </Link>{" "}
        to enquire about it
      </p>,
      {
        autoClose: 6000,
      }
    );
  }

  showQuickView(e) {
    const { product, showQuickViewModal } = this.props;
    console.log("active element ", document.activeElement);
    showQuickViewModal(product.id);
    e.preventDefault();
  }

  showAddToCartBtn(to) {
    return (
      <Link className={"btn-product btn-quickview"} to={to}>
        <span>{"details"}</span>
      </Link>
    );
  }

  showAddToCompareBtn(
    classNameAdded = "btn-product btn-compare",
    btnText = "compare"
  ) {
    return (
      <button
        className={classNameAdded}
        title="Compare"
        onClick={this.addToCompareList}
      >
        <span>{btnText}</span>
      </button>
    );
  }

  showToggleWishlistBtn(
    classNameAdded = "btn-product-icon btn-wishlist",
    product
  ) {
    return (
      <button
        className={`${classNameAdded} ${
          this.props.wishlist ? "added-to-wishlist" : "remove-from-wishlist"
        }`}
        onClick={() => {
          this.toggleWishList(product);
        }}
        title={this.props.wishlist ? "Go to wishlist" : "Add to wishlist"}
      >
        <span>
          {this.props.wishlist ? "go to wishlist" : "add to wishlist"}
        </span>
      </button>
    );
  }

  showQuickViewBtn(classNameAdded = "btn-product-icon btn-quickview") {
    return (
      <button
        className={classNameAdded}
        title="Quick view"
        onClick={this.showQuickView}
      >
        <span>Quick view</span>
      </button>
    );
  }

  showToggleCompareBtn(classname = "btn-product-icon btn-compare") {
    return (
      <button
        className="btn-product-icon btn-compare"
        title="Compare"
        onClick={this.addToCompareList}
      >
        <span>Compare</span>
      </button>
    );
  }

  showQuickViewBtnWithIcon(
    classNameAdded = "btn-product btn-quickview",
    btnText = "quick view"
  ) {
    return (
      <button
        className={classNameAdded}
        title="Quick view"
        onClick={this.showQuickView}
      >
        <span>{btnText}</span>
      </button>
    );
  }
}

export default BaseProduct;
