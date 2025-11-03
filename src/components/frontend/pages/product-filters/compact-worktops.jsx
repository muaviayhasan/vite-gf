import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ProductsFilter from "../home/ProductFilter";
class CompactWorktops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }


  render() {
    const obj = this;

    return (
      <div>
        <Helmet>
          <title>{`GNF - ${this.props.title}`}</title>
        </Helmet>
        {/*Forget Password section*/}
        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space">
              <div className="col-sm-12">
                <div
                  style={{
                    "border-bottom": "1px solid black",
                    width: "100%",
                    display: "flex",
                    width: "94%",
                    display: "flex",
                    marginLeft: "3%",
                  }}
                >
                  <div>
                    <h3>Compact Worktops</h3>
                  </div>
                  <div
                    style={{
                      marginLeft: "7%",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <h5>
                      Most hard-wearing material in the market, compact, sleek,
                      heat proof, scratch resistant, various thickness and
                      textures. We have it all and we can craft it as you wish,
                      browse our collection…
                    </h5>
                  </div>
                </div>
                <Fragment>
                  <ProductsFilter
                    material="Compact Worktops"
                    defaultImage="\assets\images\211 x 277 tile.png"
                  />
                </Fragment>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CompactWorktops;
