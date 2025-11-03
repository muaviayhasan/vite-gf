import React, { Component } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";

import Product from "./product";

import {
  getProductsByCategory,
  getProductsByDemo,
  getNewProducts,
} from "../../../services";
import {
  addToCart,
  toggleWishlist,
  addToCompare,
  showQuickViewModal,
} from "../../../actions";
import _data from "../../../mock_data/data.json";

import axios from "axios";
import { Link } from "react-router-dom";

class NewCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedCount: 8,
      hasMore: true,
      loading: false,
      granite: [],
      marble: [],
      quartz: [],
      compactWorktops: [],
      cat: "Granite",
      data: [],
    };

    this.loadMore = this.loadMore.bind(this);
  }

  async componentDidMount() {
    await axios
      .post(`${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`, {
        category: "Granite",
        page_num: 1,
        per_page: "8",
      })
      .then((response) => {
        console.log("Granite: ", response.data[0]);
        this.setState({ granite: response.data, data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .post(`${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`, {
        category: "Marble",
        page_num: 1,
        per_page: "8",
      })
      .then((response) => {
        console.log("Marble: ", response.data);
        this.setState({ marble: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .post(`${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`, {
        category: "Quartz",
        page_num: 1,
        per_page: "8",
      })
      .then((response) => {
        console.log("Quartz: ", response.data);
        this.setState({ quartz: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .post(`${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`, {
        category: "Compact Worktops",
        page_num: 1,
        per_page: "8",
      })
      .then((response) => {
        console.log("Compact Worktops: ", response.data);
        this.setState({ compactWorktops: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadMore() {
    // fake async api. products should be fetched from backend
    if (this.state.loadedCount < 16) {
      this.setState((state) => {
        return { loading: true };
      });

      this.timer = setTimeout(() => {
        this.setState((state) => {
          return { loadedCount: this.state.loadedCount + 4, loading: false };
        });

        if (this.state.loadedCount >= 16) {
          this.setState((state) => {
            return { hasMore: false };
          });
        }
      }, 2000);
    }
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  render() {
    const {
      addToCart,
      toggleWishlist,
      addToCompare,
      showQuickViewModal,
    } = this.props;

    const { data } = this.state;

    let products = getProductsByCategory(
      getNewProducts(getProductsByDemo(this.props.products, "demo5")),
      ["Clothing", "Handbags", "Bags", "Shoes", "Boots", "Accessories"]
    );

    console.log("products: ", products);

    return (
      <div className="container pt-6 new-arrivals">
        <Tabs selectedTabClassName="show" defaultIndex={0}>
          <div className="heading heading-center mb-3">
            <h2 className="title">Materials</h2>

            <TabList
              className="nav nav-pills justify-content-center"
              role="tablist"
            >
              {_data.demo5.arrivalCategories.map((cat, index) => (
                <Tab
                  className="nav-item"
                  key={`arrival_tab_${index}`}
                  onClick={() => {
                    console.log(cat);
                    if (cat === "Marble") {
                      this.setState({ data: this.state.marble, cat: cat });
                    } else if (cat === "Granite") {
                      this.setState({ data: this.state.granite, cat: cat });
                    } else if (cat === "Quartz") {
                      this.setState({ data: this.state.quartz, cat: cat });
                    } else if (cat === "Compact Worktops") {
                      this.setState({
                        data: this.state.compactWorktops,
                        cat: cat,
                      });
                    }
                  }}
                >
                  <span className="nav-link">{cat}</span>
                </Tab>
              ))}
            </TabList>
          </div>

          <div className="tab-content">
            {_data.demo5.arrivalCategories.map((cat, index1) => (
              <TabPanel key={`arrival_tabpanel_${index1}`}>
                <div className="row justify-content-center">
                  {data &&
                    data.length > 0 &&
                    data.map((item, index) => (
                      <div
                        className="col-6 col-md-4 col-lg-3"
                        key={index + item.name}
                      >
                        <Product
                          product={item}
                          key={index + item.name}
                          // onAddToCartClick={addToCart}
                          // onToggleWishlistClick={toggleWishlist}
                          // onAddToCompareClick={addToCompare}
                          // showQuickViewModal={showQuickViewModal}
                        />
                      </div>
                    ))}
                </div>
              </TabPanel>
            ))}
          </div>

          <div className="more-container text-center col-12 col-md-12 col-lg-12 mt-1 mb-3">
            {this.state.hasMore ? (
              <Link
                className="btn btn-outline-primary-2 btn-round btn-more"
                to={`/stone/${this.state.cat.toLocaleLowerCase()}`}
              >
                <span>Load more</span>
                {this.state.loading ? (
                  <i className="icon-refresh load-more-rotating"></i>
                ) : (
                  ""
                )}
              </Link>
            ) : (
              ""
            )}
          </div>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.data.products ? state.data.products : [],
  };
};

export default connect(mapStateToProps, {
  addToCart,
  toggleWishlist,
  addToCompare,
  showQuickViewModal,
})(NewCollection);
