import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPageStripe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          className="col-md-12 row header-stripe"
          style={{
            width: "100%",
            "min-width": "100%",
            "max-width": "100%",
            "padding-right": "0px",
            "padding-left": "0px",
            margin: "0px",
          }}
        >
          {/* <div className=" col-md-2 col-sm-2 col-2 stripe-align">
          
          </div> */}
          <div
            className="col-md-12 col-sm-12 col-12"
            style={{ textAlign: "right" }}
          >
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/about-us`} className="spn-cls">
              About
            </Link>
            &nbsp; <span className="spn-cls">|</span> &nbsp;
            <a href="tel:07823345500" className="components-align">
              02039359199
            </a>
            &nbsp; <span className="spn-cls">|</span> &nbsp;
            <a
              href="mailto:info@glassfusionltd.co.uk"
              className="components-align"
            >
              info@glassfusionltd.co.uk
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPageStripe;
