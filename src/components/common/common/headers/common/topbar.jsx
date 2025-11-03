import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";
import UpperBrownStripe from "../../../frontend/includes/other-pages-stripe";

class TopBar extends Component {
  render() {
    const { translate } = this.props;
    let countSku = [];
    if (JSON.parse(localStorage.getItem("sku"))) {
      countSku = JSON.parse(localStorage.getItem("sku"));
    }
    return (
      <div className="top-header top-video-header-custome">
        <div className="container">
          <Fragment>
            <UpperBrownStripe total={countSku.length} />
          </Fragment>
          {/* <div className="row">
            <div className="col-lg-6">
              <div className="header-contact">
                <ul>
                  <li>
                    {translate("topbar_title", {
                      theme_name: " Glass & Fusion"
                    })}
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    {translate("call_us")}: 02039359199
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-right">
              <ul className="header-dropdown">
                <li className="mobile-wishlist">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/wishlist`}>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    {translate("wishlist")}
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default withTranslate(TopBar);
