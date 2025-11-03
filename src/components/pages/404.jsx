import React, { Component } from "react";
// import Slider from "react-slick";
import { Link } from "react-router-dom";

// import Breadcrumb from "../common/breadcrumb";
// import headerOne from "../common/headers/header-one";

class PageNotFound extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true
  //   };
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       loading: false
  //     });
  //   }, 3000);
  // }

  render() {
    // if (this.state.loading) {
    //   return (
    //     <div>
    //       <section className=" contact-page section-b-space">
    //         <div className="container">
    //           <div className="row section-b-space">
    //             <div className="col-sm-12">
    //               <div className="display-1">Loading</div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   );
    // }
    return (
      <div>
        <section className="p-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="error-section">
                  <h1>404</h1>
                  <h2>page not found</h2>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/home`}
                    className="btn btn-solid"
                  >
                    back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PageNotFound;
