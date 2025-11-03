import React from "react";
import { Helmet } from "react-helmet";
import BaseProduct from "../../../features/product/common/base-product";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

// import Custom Components
import Breadcrumb from "../../../common/breadcrumb";

class GlassCategoryProductClass extends BaseProduct {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      canLoad: true,
      type: props.type
        .replace("-", " ")
        .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase()),
      perPage: 16,
      pageNum: 1,
      data: [],
    };
  }
  ucfirst = (str) => {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
  };

  componentDidMount() {
    const { type, perPage, pageNum } = this.state;
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`,
      data: {
        category:
          type !== "compact worktops" ? this.ucfirst(type) : "Compact Worktops",
        per_page: perPage,
        page_num: pageNum,
      },
    })
      .then((response) => {
        this.setState({ data: response.data }, () => {
          if (response.data.length === 0) this.setState({ data: 3 });
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  loadMore = () => {
    const { type, perPage, pageNum } = this.state;
    this.setState({ loading: true, pageNum: this.state.pageNum + 1 }, () => {
      axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`,
        data: {
          category: this.ucfirst(type),
          per_page: perPage,
          page_num: pageNum,
        },
      })
        .then((response) => {
          if (response.data.length === 0) {
            this.setState({ canLoad: false });
          }
          this.setState(
            {
              data: this.state.data.concat(response.data),
              loading: false,
            },
            () => {
              window.scrollBy(0, -1000);
            }
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  };

  _product = (product, index) => {
    return product ? (
      <div className={`product product-7 1`} key={index}>
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
                src={`${import.meta.env.VITE_API_URL + product.images[0].path}`}
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

          <div className="product-action-vertical">
            {this.showToggleWishlistBtn(
              "btn-product-icon btn-wishlist btn-expandable",
              product
            )}
          </div>

          {/* <div className="product-action product-action-transparent">
            {this._showAddToCartBtn(
              "btn-product btn-quickview",
              "details",
              `${import.meta.env.VITE_PUBLIC_URL}/product-detail/${product.manufacturer}/${product.brand}/${product.base_color}/${product.name}`
            )}
          </div> */}
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
        </div>
      </div>
    ) : (
      ""
    );
  };

  render() {
    const { product } = this.props;

    const { type, data, canLoad } = this.state;
    return (
      <div className="main">
        <Helmet>
          <title>Glass and Fusion - Glass Categories</title>
        </Helmet>

        <h1 className="d-none">Glass category products page</h1>

        <Breadcrumb
          title={this.ucfirst(type)}
          parent1={["Glass"]}
          adClass="border-0 mb-0"
        />

        <div className="container">
          <div className="row justify-content-center">
            {data === 3 && (
              <div
                className="error-content text-center"
                style={{
                  width: "100%",
                  backgroundImage:
                    "url(assets/images/backgrounds/error-bg.jpg)",
                }}
              >
                <div className="">
                  <h1 className="error-title">
                    No product found in this category
                  </h1>

                  <p>
                    We are sorry, the product you've requested is not available
                    at the moment.
                  </p>
                  <Link
                    to="/home"
                    className="btn btn-outline-primary-2 btn-minwidth-lg"
                  >
                    <span>BACK TO HOMEPAGE</span>
                    <i className="icon-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )}

            {data !== null &&
              data.length > 0 &&
              data.map((item, index) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={index + item.name}
                >
                  {this._product(item, index)}
                </div>
              ))}

            {canLoad && data !== null && data.length >= 16 && (
              <div className="more-container text-center col-12 col-md-12 col-lg-12 mt-2">
                <button
                  className="btn btn-outline-primary-2 btn-round btn-more"
                  onClick={this.loadMore}
                >
                  <span>Load more</span>
                  {this.state.loading ? (
                    <i className="icon-refresh load-more-rotating"></i>
                  ) : (
                    <i className="icon-long-arrow-right"></i>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Wrapper component to provide useParams to class component
function GlassCategoryProduct() {
  const { type } = useParams();
  return <GlassCategoryProductClass type={type} />;
}

export default GlassCategoryProduct;
