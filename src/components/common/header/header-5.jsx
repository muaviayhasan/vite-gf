import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import Custom Components
import MainMenu from "./common/main-menus/menu-1";
import CartMenu from "../header/common/cart-menus/menu-1";

import { stickyHeaderHandler } from "../../../utils/utils";
import { isMobile } from "react-device-detect";
import SearchToggle from "./common/search-toggle";

class HeaderFive extends Component {
  componentDidMount() {
    window.addEventListener("scroll", stickyHeaderHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", stickyHeaderHandler);
  }

  render() {
    const { wishlist, container = "container" } = this.props;

    const { logo = "assets/images/site/logo.svg" } = this.props;

    return (
      <header
        className="header header-5"
        style={{ marginTop: 0, background: "rgb(48 37 26 / 76%)" }}
      >
        <div className="header-top">
          <div className={container}>
            <div className="header-left">
              <ul className="top-menu">
                <li>
                  <Link className="_white" to="#">
                    CONTACT
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/book-home-visit`}
                        style={{ color: "white" }}
                        className="_black"
                      >
                        Book Home Visit
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/book-showroom-visit`}
                        style={{ color: "white" }}
                        className="_black"
                      >
                        Book Showroom Appointment
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {!isMobile ? (
              <div className="header-right">
                <ul className="top-menu">
                  <li>
                    <Link to="#">Links</Link>
                    <ul>
                      <li>
                        <a href="tel:02039359199" style={{ color: "white" }}>
                          <span
                            className="top-header-call-mobile"
                            style={{ color: "white" }}
                          >
                            Call:
                          </span>{" "}
                          &nbsp; 02039359199
                        </a>
                      </li>
                      {/* <li>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/about-us`}>
                        About Us
                      </Link>
                    </li> */}
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}
                          style={{ color: "white" }}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                className="header-right"
                style={{
                  width: "14%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a
                  href="tel:02039359199"
                  rel="noopener noreferrer"
                  title="Phone"
                  style={{ fontSize: 18 }}
                >
                  <i class="icon-phone _white"></i>
                </a>
                <a
                  href="/contact"
                  rel="noopener noreferrer"
                  title="Email"
                  style={{ fontSize: 18 }}
                >
                  <i class="icon-envelope _white"></i>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="header-middle sticky-header">
          <div className="container-fluid">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>

              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/home`} className="logo">
                <img
                  src={import.meta.env.VITE_PUBLIC_URL + "/" + logo}
                  alt="Molla Logo"
                  width="90"
                  height="25"
                  style={{ padding: "7px", height: "85px" }}
                />
              </Link>

              <MainMenu />
            </div>

            <div className="header-right">
              <SearchToggle />

              {/* <Link
                to={`${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`}
                className="wishlist-link"
              >
                <i className="icon-heart-o"></i>
                <span className="wishlist-count">
                  {this.props.wishlist.length}
                </span>
              </Link> */}

              <CartMenu />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export const mapStateToProps = (state) => ({
  wishlist: state.wishlist.list,
});

export default connect(mapStateToProps)(HeaderFive);
