import React, { Component } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import Product from "./product";
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from "../../../../actions";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../../../demoes/index5/search-bar";

class StoneCatalogue extends Component {
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
      sections: [],
    };
  }

  async fetchCategoryData(category) {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL + "/sku/category/per_page/page_num"}`, {
        category,
        page_num: 1,
        per_page: "8",
      });
      return response.data;
    } catch (error) {
      console.error(`${category} fetch error:`, error);
      return [];
    }
  }

  async componentDidMount() {
    const categories = ["Granite", "Marble", "Quartz", "Compact Worktops"];
    const sectionData = [];

    for (let category of categories) {
      const data = await this.fetchCategoryData(category);
      sectionData.push({ type: category, data, route: category.toLowerCase().replace(" ", "-") });
    }

    this.setState({ sections: sectionData });
  }

  getProducts() {
    const { sections } = this.state;

    return sections.map((_item, index) => (
      <div className="container pt-6 new-arrivals" key={index}>
        <Tabs selectedTabClassName="show" defaultIndex={0}>
          <div className="heading heading-center mb-3">
            <TabList className="nav nav-pills justify-content-center" role="tablist">
              <div className="container">
                <br />
                <h3 style={{ borderBottom: "1px solid #c96", width: "100%", display: "flex" }}>
                  <span className="nav-link" style={{ fontSize: '22px', fontWeight: 'bold', color: '#c96' }}>
                    {_item && _item.type}
                  </span>
                  <h5 style={{ marginRight: "6%", fontSize: "1.4rem", marginLeft: "2%", textAlign: 'left' }}>
                    {this.getCategoryDescription(_item.type)}
                  </h5>
                </h3>
              </div>
            </TabList>
          </div>

          <div className="tab-content">
            <TabPanel key={`arrival_tabpanel_${index}`}>
              <div className="row justify-content-center">
                {_item && _item.data.length > 0 && _item.data.map((item, index1) => (
                  <div className="col-6 col-md-4 col-lg-3" key={index1 + item.name}>
                    <Product product={item} key={index1 + item.name} onAddToCompareClick={this.props.addToCompare} showQuickViewModal={this.props.showQuickViewModal} />
                  </div>
                ))}
              </div>
            </TabPanel>
          </div>

          {_item.type !== "Glass" && (
            <div className="more-container text-center col-12 col-md-12 col-lg-12 mt-1 mb-3">
              {this.state.hasMore && (
                <Link
                  className="btn btn-outline-primary-2 btn-round btn-more"
                  to={`/stone/${_item.route}`}
                >
                  <span>Load more</span>
                  {this.state.loading && <i className="icon-refresh load-more-rotating"></i>}
                </Link>
              )}
            </div>
          )}
        </Tabs>
      </div>
    ));
  }

  getCategoryDescription(type) {
    const descriptions = {
      "Granite": "Hard wearing granite kitchen worktop is a popular choice for its unique natural look...",
      "Marble": "Huge selection of marble, you can browse to choose the right colour for marble worktops...",
      "Quartz": "A popular choice for a kitchen worktop, 1000’s of colours, pattern and marble effects...",
      "Compact Worktops": "Most hard-wearing material in the market, compact, sleek, heat proof, scratch resistant...",
    };
    return descriptions[type] || "";
  }

  render() {
    return (
      <Fragment>
        <div>
          <SearchBar />
        </div>
        {this.getProducts()}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.data.products || [],
  };
};

export default connect(mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal })(StoneCatalogue);
