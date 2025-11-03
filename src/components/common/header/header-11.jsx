import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import Custom Components
import MainMenu from "./common/main-menus/menu-1";
import CartMenu from "./common/cart-menus/menu-2";
import LoginModal from "../../features/login-modal";

import { showModal } from "../../../actions";
import { isIEBrowser, stickyHeaderHandler } from "../../../utils/utils";

class HeaderEleven extends Component {
  constructor(props) {
    super(props);
    this.openLoginModal = this.openLoginModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", stickyHeaderHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", stickyHeaderHandler);
  }

  openLoginModal(e) {
    this.props.showModal("login");
    e.preventDefault();
  }

  render() {
    return (
      <header className="header header-6">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <ul className="top-menu top-link-menu d-none d-md-block">
                <li>
                  <Link to="#">Links</Link>
                  <ul>
                    <li>
                      <Link to="tel:#">
                        <i className="icon-phone"></i>Call: +0123 456 789
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="header-right">
              <div className="social-icons social-icons-color">
                <Link
                  to="#"
                  className="social-icon social-facebook"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="icon-facebook-f"></i>
                </Link>
                <Link
                  to="#"
                  className="social-icon social-twitter"
                  title="Twitter"
                  target="_blank"
                >
                  <i className="icon-twitter"></i>
                </Link>
                <Link
                  to="#"
                  className="social-icon social-instagram"
                  title="Pinterest"
                  target="_blank"
                >
                  <i className="icon-instagram"></i>
                </Link>
                <Link
                  to="#"
                  className="social-icon social-pinterest"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="icon-pinterest-p"></i>
                </Link>
              </div>
              <ul className="top-menu top-link-menu">
                <li>
                  <Link to="#">Links</Link>
                  <ul>
                    <li>
                      <Link
                        to="#signin-modal"
                        data-toggle="modal"
                        onClick={this.openLoginModal}
                      >
                        <i className="icon-user"></i>Login
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="header-dropdown">
                <Link to="#">USD</Link>
                <div className="header-menu">
                  <ul>
                    <li>
                      <Link to="#">Eur</Link>
                    </li>
                    <li>
                      <Link to="#">Usd</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="header-dropdown">
                <Link to="#">Eng</Link>
                <div className="header-menu">
                  <ul>
                    <li>
                      <Link to="#">English</Link>
                    </li>
                    <li>
                      <Link to="#">French</Link>
                    </li>
                    <li>
                      <Link to="#">Spanish</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <Link to="#" className="search-toggle" role="button">
                  <i className="icon-search"></i>
                </Link>
                {/* <form action="#" method="get">
                                    <div className="header-search-wrapper search-wrapper-wide">
                                        <label htmlFor="q" className="sr-only">Search</label>
                                        <button className="btn btn-primary" type="submit" style={ { paddingLeft: isIEBrowser() ? '0' : '' } }><i className="icon-search"></i></button>
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." style={ { paddingLeft: isIEBrowser() ? '30px' : '' }} required />
                                    </div>
                                </form> */}
              </div>
            </div>
            <div className="header-center">
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/`} className="logo">
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos/demo-9/logo.png`}
                  alt="Molla Logo"
                  width="82"
                  height="20"
                />
              </Link>
            </div>

            <div className="header-right">
              <Link
                to={`${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`}
                className="wishlist-link"
              >
                <i className="icon-heart-o"></i>
                <span className="wishlist-count">
                  {this.props.wishlist.length}
                </span>
                <span className="wishlist-txt">My Wishlist</span>
              </Link>

              <CartMenu />
            </div>
          </div>
        </div>

        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>

              <MainMenu />
            </div>

            <div className="header-right">
              <i className="la la-lightbulb-o"></i>
              <p>
                <span>Clearance Up to 30% Off</span>
              </p>
            </div>
          </div>
        </div>
        <LoginModal />
      </header>
    );
  }
}

export const mapStateToProps = (state) => ({
  wishlist: state.wishlist.list,
});

export default connect(mapStateToProps, { showModal })(HeaderEleven);
