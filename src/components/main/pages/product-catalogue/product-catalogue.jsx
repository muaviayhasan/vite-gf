import React, { Component, Fragment } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";

import Product from "./product";
import GLassProduct from "../glass-categories/product";
import { Helmet } from "react-helmet";

import {
  getProductsByCategory,
  getProductsByDemo,
  getNewProducts,
} from "../../../../services";
import {
  addToCart,
  toggleWishlist,
  addToCompare,
  showQuickViewModal,
} from "../../../../actions";
import _data from "../../../../mock_data/data.json";

import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../../../demoes/index5/search-bar";
import "../../../demoes/index5/search-bar.css";

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
      sections: [],
    };
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

    const glass = [
      {
        id: 1,
        type: "Glass",
        name: "Plain",
        images: ["assets/images/gnf/glass-page/plain-final.jpg"],
      },
      {
        id: 2,
        type: "Glass",
        name: "Metallic Effect",
        images: ["assets/images/gnf/glass-page/Metallic-effect-final.jpg"],
      },
      {
        id: 3,
        type: "Glass",
        name: "Shimmer Effect",
        images: ["assets/images/gnf/glass-page/shimmer-effect-final.jpg"],
      },
      {
        id: 4,
        type: "Glass",
        name: "Special Effect",
        images: ["assets/images/gnf/glass-page/special-effect-final.jpg"],
      },
      {
        id: 5,
        type: "Glass",
        name: "Digital Print",
        images: ["assets/images/gnf/glass-page/digital-print-final.jpg"],
      },
      {
        id: 6,
        type: "Glass",
        name: "Double Layer",
        images: ["assets/images/gnf/glass-page/double-layers-final.jpg"],
      },
      {
        id: 7,
        type: "Glass",
        name: "Crackled Glass",
        images: ["assets/images/gnf/glass-page/cracked-glass-final.jpg"],
      },
      {
        id: 8,
        type: "Glass",
        name: "Toughened Mirrors",
        images: ["assets/images/gnf/glass-page/toughened-final.jpg"],
      },
      {
        id: 9,
        type: "Glass",
        name: "Untoughened Mirrors",
        images: ["assets/images/gnf/glass-page/untoughened-final.jpg"],
      },
      {
        id: 10,
        type: "Glass",
        name: "Satin Glass",
        images: ["assets/images/gnf/glass-page/stain-glass-final.jpg"],
      },
      {
        id: 11,
        type: "Glass",
        name: "Plain + Sparkle",
        images: ["assets/images/gnf/glass-page/plain-sparkle-final.jpg"],
      },
    ];

    var temp = [
      { type: "Granite", data: this.state.granite, route: "granite" },
      { type: "Marble", data: this.state.marble, route: "marble" },
      { type: "Quartz", data: this.state.quartz, route: "quartz" },
      {
        type: "Compact Worktops",
        data: this.state.compactWorktops,
        route: "Compact Worktops",
      },
      {
        type: "Glass",
        data: glass,
        route: "glass-categories",
      },
    ];
    this.setState({ sections: temp });
  }

  getProducts() {
    const { data, sections } = this.state;
    return (
      sections &&
      sections.length > 0 &&
      sections.map((_item, index) => (
        <div className="container pt-6 new-arrivals" key={index}>
          <Tabs selectedTabClassName="show" defaultIndex={0}>
            <div className="heading heading-center mb-3">
              <TabList
                className="nav nav-pills justify-content-center"
                role="tablist"
              >
                <div className="container">
                  <br />
                  <h3
                    style={{
                      "border-bottom": "1px solid #c96",
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <span
                      className="nav-link"
                      style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        color: " #c96",
                      }}
                    >
                      {_item && _item.type}
                    </span>

                    <h5
                      style={{
                        marginRight: "6% !important",
                        fontSize: "1.4rem",
                        marginLeft: "2%",
                        textAlign: "left",
                      }}
                    >
                      {_item.type == "Granite" &&
                        `Hard wearing granite kitchen worktop is a popular choice for its unique natural look, identify the style best suits your project, “View All” and shortlist the thickness and textures for pricing…
  `}

                      {_item.type == "Marble" &&
                        `Huge selection of marble, you an “View All” and browse to choose the right colour for marble worktops, marble vanity, bespoke marble tiles and more…
  `}

                      {_item.type == "Quartz" &&
                        `A popular choice for a kitchen worktop, 1000 ‘s of colours, pattern and marble effects. Quartz worktops, factory direct made to measure. “View all” and use the search functionality to find your desired colour shade…
`}

                      {_item.type == "Compact Worktops" &&
                        `Most hard-wearing material in the market, compact, sleek, heat proof, scratch resistant, various thickness and textures. We have it all and we can craft it as you wish, browse our collection…
  `}

                      {_item.type == "Glass" &&
                        `Nowadays, glass panels are the most popular form of kitchen wall decor. Their advantage is the ability to use almost every possible motif or pattern. Together with glass panels, your ideas are endless…                …
  `}
                    </h5>
                  </h3>
                </div>
              </TabList>
            </div>

            <div className="tab-content">
              <TabPanel key={`arrival_tabpanel_${index}`}>
                <div className="row justify-content-center">
                  {_item.type !== "Glass" &&
                    _item &&
                    _item.data.length > 0 &&
                    _item.data.map((item, index1) => (
                      <div
                        className="col-6 col-md-4 col-lg-3"
                        key={index1 + item.name}
                      >
                        <Product
                          product={item}
                          key={index1 + item.name}
                          onAddToCompareClick={addToCompare}
                          showQuickViewModal={showQuickViewModal}
                        />
                      </div>
                    ))}

                  {_item.type === "Glass" &&
                    _item &&
                    _item.data.length > 0 &&
                    _item.data.map((item, index1) => (
                      <div
                        className="col-6 col-md-4 col-lg-3"
                        key={index + item.name}
                      >
                        <GLassProduct product={item} key={index + item.name} />
                      </div>
                    ))}
                </div>
              </TabPanel>
            </div>

            {_item.type !== "Glass" && (
              <div className="more-container text-center col-12 col-md-12 col-lg-12 mt-1 mb-3">
                {this.state.hasMore ? (
                  <Link
                    className="btn btn-outline-primary-2 btn-round btn-more"
                    to={`/stone/${_item.route.toLocaleLowerCase()}`}
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
            )}
          </Tabs>
        </div>
      ))
    );
  }

  render() {
    const { addToCompare, showQuickViewModal } = this.props;

    let products = getProductsByCategory(
      getNewProducts(getProductsByDemo(this.props.products, "demo5")),
      ["Clothing", "Handbags", "Bags", "Shoes", "Boots", "Accessories"]
    );

    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Stone and Glass Product Catalogue</title>
            <meta
              name="description"
              content="Glass & Fusion offers granite, quartz, marble, compact kitchen worktops as well as glass splashbacks and bespoke glass wallcovering."
            />
            <meta
              name="keywords"
              content="Glass splashbacks, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops, Quartz worktop, Granite worktops, Marble worktops, marble tiles, bespoke kitchen design, interior design, kitchen worktops London"
            />
          </Helmet>
          <br />
          <SearchBar />
        </div>
        {this.getProducts()}
      </Fragment>
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
