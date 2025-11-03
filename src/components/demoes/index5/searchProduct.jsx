import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from "react-select";
import parse from 'html-react-parser';
import Skeleton from "react-loading-skeleton";
import Product from "./product";
import './style.scss';
import store from "../../../store/index";
import { changeDemo, outerLoading } from "../../../actions";
import { initSettings } from "../../../utils/utils";
import "./search-bar.css";
class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.match.params.productName,
      items: [],
      itemSize: 1,
      skeleton: 8,
      limit: 16,
      page_num: 1,
      isLoaded: true,
    };
  }

  async loadMoreData() {
    let searchCriteria = {
      productName: this.state.productName,
      limit: this.state.limit,
      page_num: this.state.page_num + 1,
    };

    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/searchproducts`,
      method: "post",
      data: searchCriteria,
    });

    this.setState({
      items: [...this.state.items, ...resp.data],
      itemSize: resp.data.length,
      isLoaded: false,
      searchCriteria: searchCriteria,
      page_num: this.state.page_num + 1,
    });
  }

  async componentDidMount() {
    initSettings();
    store.dispatch(changeDemo("5"));
    let searchCriteria = {
      productName: this.state.productName,
      limit: this.state.limit,
      page_num: this.state.page_num,
    };

    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/searchproducts`,
      method: "post",
      data: searchCriteria,
    });

    this.setState({
      ...this.state,
      items: resp.data,
      itemSize: resp.data.length,
      isLoaded: false,
    });
    if (resp.data.length === 0) {
      this.props.history.push("/no-record-found");
    }
  }

  UNSAFE_componentWillMount() {
    store.dispatch(outerLoading());
  }

  componentWillUnmount() {
  }

  loadMoreProducts() {
    this.setState({ loadMore: true }, () => {
      this.loadMoreData();
    });
  }
  Redirect_function() {
    this.props.history.push("/empty-wishlist");
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
          html += "<font>£</font>";
        }
      }
    }
    return html;
  }

  getImagePath(index) {
    let images = this.state.items[index].images;
    if (images) {
      let image = images.filter(function(img) {
        return img.sequence == 0;
      });
      if (image.length > 0) {
        return `${import.meta.env.VITE_API_URL}${image[0].path}`;
      } else {
        return "/assets/images/211 x 277 tile.png";
      }
    } else {
      return "/assets/images/211 x 277 tile.png";
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.state.productName !== this.props.match.params.productName) {
      window.location.reload(false);
      this.setState({
        productName: this.props.match.params.productName,
        items: [],
        itemSize: 1,
        skeleton: 8,
        limit: 16,
        page_num: 1,
        isLoaded: true,
      });
      let searchCriteria = {
        productName: this.props.match.params.productName,
        limit: this.state.limit,
        page_num: this.state.page_num,
      };

      const resp = await axios({
        url: `${import.meta.env.VITE_API_URL}/sku/searchproducts`,
        method: "post",
        data: searchCriteria,
      });

      this.setState({
        ...this.state,
        items: resp.data,
        itemSize: resp.data.length,
        isLoaded: false,
      });
    }
  }

  render() {
    const obj = this;
    var n = 0;
    const { productName } = obj.state;

    return (
      <div className="mb-4">
        <div
          className="section-b-space _sectionBSpace"
          style={{ "padding-bottom": "70px" }}
        >
          <div className="container">
            <h4>
              {obj.state.itemSize !== 0 ? (
                `Search Results of "${obj.state.productName}":`
              ) : (
                <div className="col-sm-12" style={{ "textAlign": "center" }}>
                  <h4>Nothing found, please try again different search</h4>
                </div>
              )}
            </h4>

            {obj.state.isLoaded ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {[1, 2, 3, 4].map((data) => {
                  return (
                    <div
                      style={{
                        display: "grid",
                        marginLeft: "15%",
                        marginTop: "3%",
                      }}
                    >
                      <Skeleton circle={false} height={150} width={150} />
                      <Skeleton circle={false} height={30} width={150} />
                      <Skeleton circle={false} height={30} width={150} />
                      <Skeleton
                        circle={false}
                        height={30}
                        width={70}
                        // style={{ marginLeft: "54%" }}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            {obj.state.isLoaded ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {[1, 2, 3, 4].map((data) => {
                  return (
                    <div
                      style={{
                        display: "grid",
                        marginLeft: "15%",
                        marginTop: "3%",
                      }}
                    >
                      <Skeleton circle={false} height={150} width={150} />
                      <Skeleton circle={false} height={30} width={150} />
                      <Skeleton circle={false} height={30} width={150} />
                      <Skeleton
                        circle={false}
                        height={30}
                        width={70}
                        // style={{ marginLeft: "54%" }}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            <div className="  search-product">
              <div className="row justify-content-center">
                {!obj.state.isLoaded
                  ? obj.state.items.map(function(item, index) {
                      n = n + 1;
                      return (
                        <div
                          className="col-6 col-md-4 col-lg-3"
                          key={index + item.name}
                        >
                          <Product product={item} key={index + item.name} />
                        </div>
                      );
                    })
                  : ""}

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
                      this.state.itemSize > 15
                        ? "btn btn-outline-primary-2 btn-round btn-more"
                        : "hidden"
                    }
                    onClick={() => this.loadMoreProducts()}
                  >
                    load more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchProduct;
