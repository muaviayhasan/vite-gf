import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import SearchBar from "../../common/search-bar";
import GraniteProduct from "../../layouts/beauty/granite";
import MarbleProduct from "../..//layouts/beauty/marble";
import QuartzProduct from "../../layouts/beauty/quartz";
import CompactWorktops from "./Stone-worktops-components/compact-worktops";
import axios from "axios";
import ProductsFilter from "./home/ProductFilter";
import GlassProduct from "./home/GlassProducts";
import parse from 'html-react-parser';
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

class ProductCatalogueLoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 16,
      blockSize: 50,
      name: localStorage.getItem("name")
        ? localStorage.getItem("name")
        : "Marble",
      data: [],
      skeleton: 8,
      per_page: 16,
      page_num: 1,
      res_length: 0,
      loadMore: false,
      loading: true,
    };
    this.loadMoreProducts = this.loadMoreProducts.bind(this);
  }

  async componentDidMount() {
    let skuCriteria = {
      category: this.state.name,
      per_page: this.state.per_page,
      page_num: this.state.page_num,
    };
    const res = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/category/per_page/page_num`,
      method: "post",
      data: skuCriteria,
    });
    this.setState(
      {
        data: [...this.state.data, ...res.data],
        page_num: this.state.page_num + 1,
        res_length: res.data.length,
        loadMore: false,
        loading: true,
      },
      () => {
        window.scrollBy(0, -1000);
      }
    );
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
          html += "<font style='color: silver'>£</font>";
        }
      }
    }
    return html;
  }

  getImagePath(index) {
    let defaultImage = "assets/images/211 x 277 tile.png";
    let images = this.state.data[index].images;
    if (images) {
      let image = images.filter(function(img) {
        return img.sequence == 0;
      });
      if (image.length > 0) {
        return `${import.meta.env.VITE_API_URL}${image[0].path}`;
      } else {
        return defaultImage;
      }
    } else {
      return defaultImage;
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

  loadMoreProducts() {
    this.setState({ loadMore: true }, () => {
      this.componentDidMount();
    });
  }

  render() {
    const obj = this;
    const name = localStorage.getItem("name");
    var n = 0;
    return (
      <div className="mb-4">
        <div className="section-b-space" style={{ "padding-bottom": "70px" }}>
          <SearchBar />
        </div>
        <div className="container">
          <br />
          <h3
            style={{
              "border-bottom": "1px solid black",
              width: "100%",
              display: "flex",
            }}
          >
            {name}

            <h5
              style={{
                marginRight: "6% !important",
                width: "80%",
                marginLeft: "9%",
              }}
            >
              {name == "Granite" &&
                `Hard wearing granite kitchen worktop is a popular choice for its unique natural look, identify the style best suits your project, “View All” and shortlist the thickness and textures for pricing…
  `}

              {name == "Marble" &&
                `Huge selection of marble, you an “View All” and browse to choose the right colour for marble worktops, marble vanity, bespoke marble tiles and more…
  `}

              {name == "Quartz" &&
                `A popular choice for a kitchen worktop, 1000 ‘s of colours, pattern and marble effects. Quartz worktops, factory direct made to measure. “View all” and use the search functionality to find your desired colour shade…
`}

              {name == "Compact Worktops" &&
                `Most hard-wearing material in the market, compact, sleek, heat proof, scratch resistant, various thickness and textures. We have it all and we can craft it as you wish, browse our collection…
  `}
            </h5>
          </h3>
        </div>
        <Fragment>
          <section className="beauty-about" style={{ "padding-top": "40px" }}>
            <div className="container">
              <br />

              <div className="  search-product">
                <div className="row col-md-12">
                  {this.state.data.length > 0 && this.state.loadMore === false
                    ? this.state.data.map((product, index) => {
                        if (product.material_type === this.state.name) {
                          n = n + 1;
                          return (
                            <Fragment>
                              <div
                                className="col-xl-3 col-md-4 col-sm-6 mb-3 _testing"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  height: 410,
                                }}
                                key={index}
                              >
                                <div className={`product-box`}>
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
                                    <p style={{ maxWidth: 200 }}>
                                      <b
                                        className="Component-paragraphs"
                                        style={{
                                          display: "flex",
                                          fontSize: 14,
                                          height: 30,
                                        }}
                                      >
                                        {product.name}
                                      </b>

                                      <div
                                        className="row mb-0"
                                        style={{ marginTop: "5%" }}
                                      >
                                        <div className="col-7">
                                          <p className="Component-paragraphs-inner">
                                            {product.material_type}
                                          </p>
                                        </div>
                                        <div className="col-5">
                                          <p
                                            className="Component-paragraphs-inner"
                                            style={{
                                              fontWeight: "bold",
                                              fontSize: 16,
                                            }}
                                          >
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
                                        style={{ marginLeft: "58%" }}
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
                            </Fragment>
                          );
                        }
                      })
                    : this.state.loading && (
                        <Fragment style={{ display: "flex" }}>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
                            return (
                              <div
                                style={{
                                  display: "grid",
                                  marginLeft: "5%",
                                  marginTop: "3%",
                                }}
                              >
                                <Skeleton
                                  circle={false}
                                  height={200}
                                  width={200}
                                />
                                <Skeleton
                                  circle={false}
                                  height={30}
                                  width={200}
                                />
                                <Skeleton
                                  circle={false}
                                  height={30}
                                  width={200}
                                />
                                <Skeleton
                                  circle={false}
                                  height={30}
                                  width={70}
                                  style={{ marginLeft: "54%" }}
                                />
                              </div>
                            );
                          })}
                        </Fragment>
                      )}

                  {this.state.loadMore && (
                    <Fragment style={{ display: "flex" }}>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
                        return (
                          <div
                            style={{
                              display: "grid",
                              marginLeft: "5%",
                              marginTop: "3%",
                            }}
                          >
                            <Skeleton circle={false} height={200} width={200} />
                            <Skeleton circle={false} height={30} width={200} />
                            <Skeleton circle={false} height={30} width={200} />
                            <Skeleton
                              circle={false}
                              height={30}
                              width={70}
                              style={{ marginLeft: "54%" }}
                            />
                          </div>
                        );
                      })}
                    </Fragment>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      padding: 20,
                    }}
                  >
                    <button
                      type="button"
                      className={
                        this.state.res_length > 15
                          ? "btn _whiteColor btc _viewAll"
                          : "hidden"
                      }
                      style={{
                        backgroundColor: "white",
                        color: "rgb(37, 55, 70) !important",
                        maxHeight: 35,
                        fontWeight: 400,
                        paddingTop: 7,
                        paddingBottom: 3,
                      }}
                      onClick={() => this.loadMoreProducts()}
                    >
                      load more
                    </button>
                    <span
                      className={
                        this.state.res_length > 15 || this.state.res_length == 0
                          ? "hidden"
                          : ""
                      }
                    >
                      No More Data!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      </div>
    );
  }
}

export default ProductCatalogueLoadMore;
