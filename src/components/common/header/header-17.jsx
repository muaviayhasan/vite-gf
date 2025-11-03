import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Common Header Components
import MainMenu from "./common/main-menus/menu-1";
import CartMenu from "./common/cart-menus/menu-2";

import { isIEBrowser, stickyHeaderHandler } from "../../../utils/utils";

class HeaderSeventeen extends Component {
  componentDidMount() {
    window.addEventListener("scroll", stickyHeaderHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", stickyHeaderHandler);
  }

  render() {
    return (
      <header className="header header-6">
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
                                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                        <input type="search"  style = { isIEBrowser() ? {paddingLeft: '30px'} : {}} className="form-control" name="q" id="q" placeholder="Search product ..." required/>
                                    </div>
                                </form> */}
              </div>
            </div>
            <div className="header-center">
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/`} className="logo">
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos/demo-6/logo.png`}
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
              <MainMenu />
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>
            </div>

            <div className="header-right">
              <i className="la la-lightbulb-o"></i>
              <p>Clearance Up to 30% Off</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.list,
  };
}
export default connect(mapStateToProps)(HeaderSeventeen);
