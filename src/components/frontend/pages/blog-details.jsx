import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import BlogDetails from "../../../components/blogs/details";
class blogDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
               <BlogDetails />
              </div>
            </div>
          </div>
        </section>
      </div>
         );
    }
}
 
export default blogDetail;