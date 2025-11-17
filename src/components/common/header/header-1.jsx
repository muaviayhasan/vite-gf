import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Common Header Components
import Logo from "../logo";
import MainMenu from "./common/main-menus/menu-1";
import SearchToggle from "./common/search-toggle";
import CompareMenu from "./common/compare-menus/menu-1";
import CartMenu from "./common/cart-menus/menu-1";
import LoginModal from "../../features/login-modal";

import { showModal } from "../../../actions";
import { stickyHeaderHandler } from "../../../utils/utils";
import { isMobile } from "react-device-detect";

class HeaderOne extends Component {
  constructor(props) {
    super(props);
    this.openLoginModal = this.openLoginModal.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", stickyHeaderHandler);
  //   if (window.location.href.indexOf(import.meta.env.VITE_BASE_URL) > -1) {
  //     const s = document.createElement("script");
  //     s.type = "text/javascript";
  //     s.async = true;
  //     s.innerHTML = `
  //     !function(f,b,e,v,n,t,s)
  //       {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //       n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //       if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //       n.queue=[];t=b.createElement(e);t.async=!0;
  //       t.src=v;s=b.getElementsByTagName(e)[0];
  //       s.parentNode.insertBefore(t,s)}(window,document,'script',
  //       'https://connect.facebook.net/en_US/fbevents.js');
  //       fbq('init', '902066167116621');
  //       fbq('track', 'PageView');
  //   `;
  //     this.instance.appendChild(s);
  //   }
  // }

  componentWillUnmount() {
    window.removeEventListener("scroll", stickyHeaderHandler);
  }

  openLoginModal(e) {
    this.props.showModal("login");
    e.preventDefault();
  }

  render() {
    const { wishlist, container = "container" } = this.props;
    return (
      <header
        className="header"
        style={{ marginTop: 0, background: "rgba(48, 37, 26, 0.76)" }}
        ref={(el) => (this.instance = el)}
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
        <div
          className="header-middle sticky-header"
          // style={{
          //   "background-color": "#333",
          // }}
        >
          <div className={container}>
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>
              <Logo logo="logo.svg" />
              <MainMenu />
            </div>
            <div className="header-right">
              <SearchToggle />
              <CompareMenu />
              <CartMenu />
            </div>
          </div>
        </div>

        <LoginModal />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
}
export default connect(mapStateToProps, { showModal })(HeaderOne);
