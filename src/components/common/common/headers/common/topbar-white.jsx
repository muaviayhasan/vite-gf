import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

class TopBarWhite extends Component {
  render() {
    const { translate } = this.props;
    return (
      <div>
        <div className="top-header white-bg border-bottom-grey">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-contact">
                  <ul>
                    <li>
                      {translate("topbar_title", {
                        theme_name: " Glass & Fusion",
                      })}
                    </li>
                    <li>
                      <i
                        className="fa fa-phone"
                        aria-hidden="true"
                        style={{ color: "brown" }}
                      ></i>
                      {translate("call_us")}: 02039359199
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-right">
                <ul className="header-dropdown">
                  {/* <li className="mobile-wishlist compare-mobile">
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/compare`}>
                      <i className="fa fa-random" aria-hidden="true"></i>
                      {translate("compare")}
                    </Link>
                  </li> */}
                  <li className="mobile-wishlist">
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/shortlisted`}>
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      {translate("shortlisted")}
                    </Link>
                  </li>
                  {/* <li className="onhover-dropdown mobile-account">
                    <i className="fa fa-user" aria-hidden="true"></i>{" "}
                    {translate("my_account")}
                    <ul className="onhover-show-div">
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/pages/login`}
                          data-lng="en"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/pages/register`}
                          data-lng="en"
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslate(TopBarWhite);
