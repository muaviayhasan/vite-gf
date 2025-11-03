import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ProductsFilter from "../home/ProductFilter";
class Marble extends Component {
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
                    <h5>
                      Huge selection of marble, you an “View All” and browse to
                      choose the right colour for marble worktops, marble
                      vanity, bespoke marble tiles and more…
                    </h5>
                  </div>
                </div>
                <Fragment>
                  <ProductsFilter
                    material="Marble"
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

export default Marble;
