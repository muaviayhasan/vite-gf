import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

// Importing Custom Components
import SearchBar from "../../common/search-bar";
// import GlassPrints from "./glass-splash-components/glass-prints";
// import CanvasPrints from "./glass-splash-components/canvas-prints";
// import AcrylicPrints from "./glass-splash-components/acrylic-prints";
// import GlassSplash from "./glass-splash-components/glass-splashback";
// import GlassChoppingBoard from "./glass-splash-components/chopping-board";
// import GlassWallClock from "./glass-splash-components/glass-wall-clock";
import GlassFilter from "./home/GlassFilter";
import axios from "axios";

class GlassSplashBacks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  async componentDidMount() {
    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku`,
      method: "get",
      data: null
    });
    this.setState({
      items: resp.data
    });
    document
      .getElementById("color")
      .setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/color3.css`);
  }


  render() {
    const obj = this;

    return (
      <div>
        <div className="section-b-space down">
          <SearchBar />
        </div>
        <Fragment>
        <GlassFilter
            material="Glass Prints"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
          />
        </Fragment>
        <Fragment>
        <GlassFilter
            material="Canvas Prints"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
          />
        </Fragment>
        <Fragment>
        <GlassFilter
            material="Acrylic Prints"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
          />
        </Fragment>
        <Fragment>
        <GlassFilter
            material="Glass Splashbacks"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
          />
        </Fragment>
        <Fragment>
        <GlassFilter
            material="Glass Chopping Board"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
          />
        </Fragment>
        <Fragment>
        <GlassFilter
            material="Glass Wall Clock"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
          />
        </Fragment>
      </div>
    );
  }
}

export default GlassSplashBacks;
