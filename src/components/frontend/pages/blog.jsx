import React, { Component } from "react";
import { Helmet } from "react-helmet";
import BlogPage from "../../../components/blogs/blog-page";

class Blog extends Component {
  constructor(props) {
    super(props);
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
                <BlogPage />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
