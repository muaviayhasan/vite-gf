import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import Custom Components
import Logo from "../logo";
import MainMenu from "./common/main-menus/menu-1";
import CartMenu from "./common/cart-menus/menu-4";
import LoginModal from "../../features/login-modal";

import { showModal } from "../../../actions";
import { stickyHeaderHandler } from "../../../utils/utils";

class HeaderTwentyFour extends Component {
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
      <header className="header header-intro-clearance header-3">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <Link to="tel:#">
                <i className="icon-phone"></i>Call: +0123 456 789
              </Link>
            </div>

            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <Link to="#">Links</Link>
                  <ul>
                    <li>
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
                    </li>

                    <li>
                      <div className="header-dropdown">
                        <Link to="#">English</Link>
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
                    </li>

                    <li>
                      <Link
                        to="#signin-modal"
                        data-toggle="modal"
                        onClick={this.openLoginModal}
                      >
                        Sign in / Sign up
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>

              <Logo logo="demos/demo-3/logo.png" />
            </div>

            <div className="header-center">
              <div
                className="header-search header-search-extended header-search-visible d-none d-lg-block"
                style={{ marginRight: 0 }}
              >
                <Link to="#" className="search-toggle" role="button">
                  <i className="icon-search"></i>
                </Link>
                {/* <form action="#" method="get">
                                    <div className="header-search-wrapper search-wrapper-wide">
                                        <label htmlFor="q" className="sr-only">Search</label>
                                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required/>
                                    </div>
                                </form> */}
              </div>
            </div>

            <div className="header-right">
              <div className="header-dropdown-link">
                <div className="account">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/dashboard`}
                    title="My account"
                  >
                    <div className="icon">
                      <i className="icon-user"></i>
                    </div>
                    <p>Account</p>
                  </Link>
                </div>

                <div className="wishlist">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`}
                    title="Wishlist"
                  >
                    <div className="icon">
                      <i className="icon-heart-o"></i>
                      <span className="wishlist-count badge">
                        {this.props.wishlist.length}
                      </span>
                    </div>
                    <p>Wishlist</p>
                  </Link>
                </div>

                <CartMenu />
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-center">
              <MainMenu />
            </div>

            <div className="header-right">
              <i className="la la-lightbulb-o"></i>
              <p>
                Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
              </p>
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
    wishlist: state.wishlist.list,
  };
}
export default connect(mapStateToProps, { showModal })(HeaderTwentyFour);
