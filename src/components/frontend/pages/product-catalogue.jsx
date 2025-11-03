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

class ProductCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  async componentDidMount() {
    // const resp = await axios({
    //   url: `${import.meta.env.VITE_API_URL}/sku`,
    //   method: "get",
    //   data: null,
    // });
    // this.setState({
    //   items: resp.data,
    // });
  }
  render() {
    const obj = this;
    return (
      <div className="mb-4">
        <div className="section-b-space" style={{ "padding-bottom": "70px" }}>
          <SearchBar />
        </div>
        <div className="container">
          <h1>STONE CATEGORIES</h1>
          <br />
          <br />
          <br />
          <div
            style={{
              "border-bottom": "1px solid black",
              width: "100%",
              display: "flex",
            }}
          >
            <div>
              <h3>Granite</h3>
            </div>
            <div
              style={{
                marginLeft: "13%",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h5 style={{ marginRight: "6% !important" }}>
                Hard wearing granite kitchen worktop is a popular choice for its
                unique natural look, identify the style best suits your project,
                “View All” and shortlist the thickness and textures for pricing…
              </h5>
              <button
                class="btn btn-sm btc"
                style={{
                  backgroundColor: "rgb(183,130,80)",
                  color: "white",
                  maxHeight: 35,
                  fontWeight: 400,
                  paddingTop: 7,
                  paddingBottom: 3,
                  backgroundColor: "white",
                  color: "rgb(37, 55, 70)",
                  borderColor: "rgb(183,130,80) !important",
                }}
                onClick={() => {
                  var name = "Granite";
                  localStorage.setItem("name", name);

                  this.props.history.push("/product-catalogue-load-more");
                }}
              >
                View All
              </button>
            </div>
          </div>
        </div>
        <Fragment>
          <ProductsFilter
            per_page = "8"
            material="Granite"
            defaultImage="\assets\images\211 x 277 tile.png"
          />
        </Fragment>
        <br />
        <br />
        <br />
        <div className="container">
          <div
            style={{
              "border-bottom": "1px solid black",
              width: "100%",
              display: "flex",
            }}
          >
            <div>
              <h3>Marble</h3>
            </div>
            <div
              style={{
                marginLeft: "13%",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h5 style={{ marginRight: "6% !important" }}>
                Huge selection of marble, you an “View All” and browse to choose
                the right colour for marble worktops, marble vanity, bespoke
                marble tiles and more…
              </h5>
              <button
                class="btn btn-sm btc"
                style={{
                  backgroundColor: "rgb(183,130,80)",
                  color: "white",
                  maxHeight: 35,
                  fontWeight: 400,
                  paddingTop: 7,
                  paddingBottom: 3,
                  backgroundColor: "white",
                  color: "rgb(37, 55, 70)",
                  borderColor: "rgb(183,130,80) !important",
                }}
                onClick={() => {
                  var name = "Marble";
                  localStorage.setItem("name", name);

                  this.props.history.push("/product-catalogue-load-more");
                }}
              >
                View All
              </button>
            </div>
          </div>
        </div>
        <Fragment>
          <ProductsFilter
            per_page = "8"
            material="Marble"
            defaultImage="\assets\images\211 x 277 tile.png"
           
          />
        </Fragment>
        <br />
        <br />
        <br />
        <div className="container">
          <div
            style={{
              "border-bottom": "1px solid black",
              width: "100%",
              display: "flex",
            }}
          >
            <div>
              <h3>Quartz</h3>
            </div>
            <div
              style={{
                marginLeft: "13%",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h5 style={{ marginRight: "6% !important" }}>
                A popular choice for a kitchen worktop, 1000 ‘s of colours,
                pattern and marble effects. Quartz worktops, factory direct made
                to measure. “View all” and use the search functionality to find
                your desired colour shade…
              </h5>
              <button
                class="btn btn-sm btc"
                style={{
                  backgroundColor: "rgb(183,130,80)",
                  color: "white",
                  maxHeight: 35,
                  fontWeight: 400,
                  paddingTop: 7,
                  paddingBottom: 3,
                  backgroundColor: "white",
                  color: "rgb(37, 55, 70)",
                  borderColor: "rgb(183,130,80) !important",
                }}
                onClick={() => {
                  var name = "Quartz";
                  localStorage.setItem("name", name);

                  this.props.history.push("/product-catalogue-load-more");
                }}
              >
                View All
              </button>
            </div>
          </div>
        </div>
        <Fragment>
          <ProductsFilter
          per_page = "8"
            material="Quartz"
            defaultImage="\assets\images\211 x 277 tile.png"
            
          />
        </Fragment>
        <br />
        <br />
        <br />
        <div className="container">
          <div
            style={{
              "border-bottom": "1px solid black",
              width: "100%",
              display: "flex",
            }}
          >
            <div>
              <h3>Compact Worktops</h3>
            </div>
            <div
              style={{
                marginLeft: "5%",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h5 style={{ marginRight: "6% !important" }}>
                Most hard-wearing material in the market, compact, sleek, heat
                proof, scratch resistant, various thickness and textures. We
                have it all and we can craft it as you wish, browse our
                collection…
              </h5>
              <button
                class="btn btn-sm btc"
                style={{
                  backgroundColor: "rgb(183,130,80)",
                  color: "white",
                  maxHeight: 35,
                  fontWeight: 400,
                  paddingTop: 7,
                  paddingBottom: 3,
                  backgroundColor: "white",
                  color: "rgb(37, 55, 70)",
                  borderColor: "rgb(183,130,80) !important",
                }}
                onClick={() => {
                  var name = "Compact Worktops";
                  localStorage.setItem("name", name);

                  this.props.history.push("/product-catalogue-load-more");
                }}
              >
                View All
              </button>
            </div>
          </div>
        </div>
        <Fragment>
          <ProductsFilter
          per_page = "8"
            material="Compact Worktops"
            defaultImage="\assets\images\211 x 277 tile.png"
            
          />
        </Fragment>
        <br />
        <br />
        <br />
        <div className="container">
          <h1>
            <br />
            GLASS CATEGORIES
          </h1>
        </div>
        <GlassProduct
          material="Glass"
          defaultImage="\assets\images\211 x 277 tile.png"
          description="Nowadays, glass panels are the most popular form of kitchen wall decor. Their advantage is the ability to use almost every possible motif or pattern. Together with glass panels, your ideas are endless…"
        />
      </div>
    );
  }
}

export default ProductCatalogue;
