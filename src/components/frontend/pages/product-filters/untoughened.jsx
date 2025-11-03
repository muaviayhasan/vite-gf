import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ProductsFilter from "../home/ProductFilter";
class UnToughened extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
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
                <h1>UnToughened Products</h1>
           <Fragment>
          <ProductsFilter
            material="Untoughened"
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

export default UnToughened;
