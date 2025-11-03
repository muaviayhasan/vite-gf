import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import SearchBar from "../../common/search-bar";
import GraniteProduct from "../../layouts/beauty/granite";
import MarbleProduct from "../..//layouts/beauty/marble";
import QuartzProduct from "../../layouts/beauty/quartz";
import CompactWorktops from "./Stone-worktops-components/compact-worktops";
import axios from "axios";
import Products from "./home/Products";
class StoneWorkTops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  async componentDidMount() {
    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku`,
      method: "get",
      data: null,
    });
    this.setState({
      items: resp.data,
    });
  }
  render() {
    const obj = this;
    return (
      <div className="mb-4">
        <div className="section-b-space" style={{ "padding-bottom": "70px" }}>
          <SearchBar />
        </div>
        <Fragment>
          <Products
            material="Granite"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
            description="Hard wearing granite kitchen worktop is a popular choice for its unique natural look, identify the style best suits your project, “View All” and shortlist the thickness and textures for pricing…"
          />
        </Fragment>
        <Fragment>
          <Products
            material="Marble"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
            description="Huge selection of marble, you an “View All” and browse to choose the right colour for marble worktops, marble vanity, bespoke marble tiles and more…"
          />
        </Fragment>
        <Fragment>
          <Products
            material="Quartz"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
            description="A popular choice for a kitchen worktop, 1000 ‘s of colours, pattern and marble effects. Quartz worktops, factory direct made to measure. “View all” and use the search functionality to find your desired colour shade…
            "
          />
        </Fragment>
        <Fragment>
          <Products
            material="Compact Worktops"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
            description="Most hard-wearing material in the market, compact, sleek, heat proof, scratch resistant, various thickness and textures. We have it all and we can craft it as you wish, browse our collection…
            "
          />
        </Fragment>
      </div>
    );
  }
}

export default StoneWorkTops;
