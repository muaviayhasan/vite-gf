import React, { Component, Fragment } from 'react';
import DetailsTopTabs from "../../products/common/tabs";
import ReactDOM from "react-dom";

import { Helmet } from "react-helmet";
class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
        <Fragment>
       
        </Fragment>

        <div>
            <Helmet>
              <title>{`GNF - ${this.props.title}`}</title>
            </Helmet>
            {/*Forget Password section*/}
            <section className=" contact-page section-b-space">
              <div className="container">
                <div className="row section-b-space">
                  <div className="col-sm-12">
                     <DetailsTopTabs/>
                  </div>
                </div>
              </div>
            </section>
         </div>
         </div>
         );
    }
}
 
export default ProductDetails;