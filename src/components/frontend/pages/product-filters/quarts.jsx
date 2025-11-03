import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ProductsFilter from "../home/ProductFilter";
class Quartz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  async componentDidMount() {
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
                    <h5>
                      A popular choice for a kitchen worktop, 1000 ‘s of
                      colours, pattern and marble effects. Quartz worktops,
                      factory direct made to measure. “View all” and use the
                      search functionality to find your desired colour shade…
                    </h5>
                  </div>
                </div>
                <Fragment>
                  <ProductsFilter
                    material="Quartz"
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

export default Quartz;
