import React, { Component } from "react";
import { Link } from "react-router-dom";
import isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

import store from "../store";

import MobileMenu from "./common/header/common/mobile-menus/menu-3";
import OuterOverlay from "./common/overlay/outer-overlay";

// import Utils
import { isotopeLoad, scrollToElement, mobileMenu } from "../utils/utils";
import { outerLoading } from "../actions";
// import from json
import _data from "../mock_data/data";
import './style.scss';

class Landing extends Component {
  componentDidMount() {
    mobileMenu();
    isotopeLoad(isotope, imagesLoaded, ".demos", ".demo-elem", ".demo-filter");
    document.getElementById("scroll-top").style.display = "none";
  }

  componentWillMount() {
    store.dispatch(outerLoading());
  }

  componentDidUpdate() {
    document.querySelector(".demo-filter a").click();
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <React.Fragment>
        <OuterOverlay />
        <div className="page-wrapper">
          <header id="header">
            <div className="container-lg">
              <div className="header-left">
                <div className="logo">
                  <Link to="#">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/logo.png`}
                      alt="Glass and Fusion"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-main">
                <ul className="menu">
                  <li>
                    <Link
                      to="#"
                      className="goto-demos"
                      data-target=".section-demos"
                      onClick={scrollToElement}
                    >
                      Demos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="goto-features"
                      data-target=".section-features"
                      onClick={scrollToElement}
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="goto-elements"
                      data-target=".section-elements"
                      onClick={scrollToElement}
                    >
                      Elements
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="goto-support"
                      data-target=".section-support"
                      onClick={scrollToElement}
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/documentation`}
                      target="_blank"
                    >
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-right">
                <Link to="#" className="mobile-menu-toggler mr-0 mr-sm-5">
                  <i className="icon-bars"></i>
                </Link>
                <Link to="#buymolla" className="btn btn-primary btn-outline">
                  <i className="icon-shopping-cart"></i>Buy Molla
                </Link>
              </div>
            </div>
          </header>

          <div id="main">
            <section
              className="banner section-dark mb-0"
              style={{ backgroundColor: "#222" }}
            >
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/header_splash.jpg`}
                alt="splash"
                width="1920"
                height="1120"
              />
              <div className="banner-text text-center">
                <h1>Multi-Purpose eCommerce React Template</h1>
                <h5 className="mb-3">
                  Glass and Fusionis simply the best choice for your new
                  website. Your search for the best solution is over, get your
                  own copy and join thousands of happy customers.
                </h5>
                <p className="mb-0">
                  <Link
                    to="#"
                    className="btn btn-primary btn-outline goto-demos"
                    data-target="#scroll-to-content"
                    onClick={scrollToElement}
                  >
                    Explore Demos
                  </Link>
                </p>
              </div>
            </section>
            <section className="section section-demos text-center container-lg">
              <h2>20 Pre-Build Demos</h2>
              <p>
                Comes with 20 homepages available with multi style that better
                for your choice.
                <br />
                Glass and Fusionstore is one of the best Multi-Purpose eCommerce
                HTML Template for your store.
              </p>
              <div className="demo-filter menu">
                <Link
                  to="#homepages"
                  className="active"
                  data-filter=".homepages"
                >
                  Home Pages
                </Link>
                <Link to="#shoppages" data-filter=".shoppages">
                  Shop Pages
                </Link>
                <Link to="#productpages" data-filter=".productpages">
                  Product Pages
                </Link>
                <Link to="#otherpages" data-filter=".otherpages">
                  Other Pages
                </Link>
              </div>
              <div className="row demos" id="scroll-to-content">
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-1`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_furniture1.jpg`}
                        width="500"
                        height="385"
                        alt="Furniture 1"
                      />
                    </figure>
                    <h5>Furniture 1</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-2`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_furniture2.jpg`}
                        width="500"
                        height="385"
                        alt="Furniture 2"
                      />
                    </figure>
                    <h5>Furniture 2</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-3`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_electronic1.jpg`}
                        width="500"
                        height="385"
                        alt="Electronic 1"
                      />
                    </figure>
                    <h5>Electronic 1</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-4`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_electronic2.jpg`}
                        width="500"
                        height="385"
                        alt="Electronic 2"
                      />
                    </figure>
                    <h5>Electronic 2</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-5`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fashion1.jpg`}
                        width="500"
                        height="385"
                        alt="Fashion 1"
                      />
                    </figure>
                    <h5>Fashion 1</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-6`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fashion2.jpg`}
                        width="500"
                        height="385"
                        alt="Fashion 2"
                      />
                    </figure>
                    <h5>Fashion 2</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-7`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fashion3.jpg`}
                        width="500"
                        height="385"
                        alt="Fashion 3"
                      />
                    </figure>
                    <h5>Fashion 3</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-8`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fahion4.jpg`}
                        width="500"
                        height="385"
                        alt="Fashion 4"
                      />
                    </figure>
                    <h5>Fashion 4</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/demo-9`} target="_blank">
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fashion5.jpg`}
                        width="500"
                        height="385"
                        alt="Fashion 5"
                      />
                    </figure>
                    <h5>Fashion 5</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-10`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_shoesstore.jpg`}
                        width="500"
                        height="385"
                        alt="Shoes Store "
                      />
                    </figure>
                    <h5>Shoes Store</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-11`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_furniture_simple.jpg`}
                        width="500"
                        height="385"
                        alt="Furniture 3"
                      />
                    </figure>
                    <h5>
                      Furniture 3 <span>(Simple)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-12`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fashion_simple.jpg`}
                        width="500"
                        height="385"
                        alt="Fashion 6 (Simple)"
                      />
                    </figure>
                    <h5>
                      Fashion 6 <span>(Simple)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-13`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_market1.jpg`}
                        width="500"
                        height="385"
                        alt="Market"
                      />
                    </figure>
                    <h5>Market</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-14`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_market.jpg`}
                        width="500"
                        height="385"
                        alt="Market (Full Width)"
                      />
                    </figure>
                    <h5>
                      Market <span>(Full Width)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-15`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_lookbook.jpg`}
                        width="500"
                        height="385"
                        alt="Lookbook 1"
                      />
                    </figure>
                    <h5>Lookbook 1</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-16`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_lookbook2.jpg`}
                        width="500"
                        height="385"
                        alt="Lookbook 2"
                      />
                    </figure>
                    <h5>Lookbook 2</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-17`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fashion7.jpg`}
                        width="500"
                        height="385"
                        alt="Fashion 7"
                      />
                    </figure>
                    <h5>Fashion 7</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-18`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fashion8.jpg`}
                        width="500"
                        height="385"
                        alt="ashion 8 (With Sidebar)"
                      />
                    </figure>
                    <h5>
                      Fashion 8 <span>(With Sidebar)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-19`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_gamestore.jpg`}
                        width="500"
                        height="385"
                        alt="Game Store"
                      />
                    </figure>
                    <h5>Game Store</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-20`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_bookstore.jpg`}
                        width="500"
                        height="385"
                        alt="Book Store"
                      />
                    </figure>
                    <h5>Book Store</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-21`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_sport.jpg`}
                        width="500"
                        height="385"
                        alt="Furniture 2"
                      />
                    </figure>
                    <h5>Sport Store</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-22`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_tools.jpg`}
                        width="500"
                        height="385"
                        alt="Furniture 2"
                      />
                    </figure>
                    <h5>Tools Store</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-23`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_fashion9.jpg`}
                        width="500"
                        height="385"
                        alt="Furniture 2"
                      />
                    </figure>
                    <h5>
                      Fashion 9 <span>(Left Navigation)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 homepages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/demo-24`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/molla_extreme_sport.jpg`}
                        width="500"
                        height="385"
                        alt="Furniture 2"
                      />
                    </figure>
                    <h5>Extreme Sport Store</h5>
                  </Link>
                </div>

                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/21_shop_list.jpg`}
                        width="500"
                        height="385"
                        alt="Shop List"
                      />
                    </figure>
                    <h5>Shop List</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/2cols`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/22_shop_grid_2col.jpg`}
                        width="500"
                        height="385"
                        alt="Shop Grid"
                      />
                    </figure>
                    <h5>
                      Shop Grid <span>(2 Col)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/3cols`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/23_shop_grid_3col.jpg`}
                        width="500"
                        height="385"
                        alt="Shop Grid"
                      />
                    </figure>
                    <h5>
                      Shop Grid <span>(3 Col)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/4cols`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/24_shop_grid_4col.jpg`}
                        width="500"
                        height="385"
                        alt="Book Store"
                      />
                    </figure>
                    <h5>
                      Shop Grid <span>(4 Col)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/nosidebar/boxed`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/25_shop_boxed_no_sidebar.jpg`}
                        width="500"
                        height="385"
                        alt="Shop Boxed"
                      />
                    </figure>
                    <h5>
                      Shop Boxed <span>(No Sidebar)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/nosidebar/fullwidth`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/26_shop_fullwidth_no_sidebar.jpg`}
                        width="500"
                        height="385"
                        alt="Shop Fullwidth"
                      />
                    </figure>
                    <h5>
                      Shop Fullwidth <span>(No Sidebar)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/category/boxed`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/27_shop_product_category_boxed.jpg`}
                        width="500"
                        height="385"
                        alt="Product Category"
                      />
                    </figure>
                    <h5>
                      Product Category <span>(Boxed)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/category/fullwidth`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/28_shop_product_category_fullwidth.jpg`}
                        width="500"
                        height="385"
                        alt="Product Category"
                      />
                    </figure>
                    <h5>
                      Product Category <span>(Full Width)</span>
                    </h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/cart`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/29_shop_shopping_cart.jpg`}
                        width="500"
                        height="385"
                        alt="Shopping Cart"
                      />
                    </figure>
                    <h5>Shopping Cart</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/checkout`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/30_shop_checkout.jpg`}
                        width="500"
                        height="385"
                        alt="Checkout"
                      />
                    </figure>
                    <h5>Checkout</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/31_shop_wishlist.jpg`}
                        width="500"
                        height="385"
                        alt="WishList"
                      />
                    </figure>
                    <h5>Wishlist</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 shoppages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/shop/dashboard`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/shop_my_account.jpg`}
                        width="500"
                        height="385"
                        alt="My Account"
                      />
                    </figure>
                    <h5>My Account</h5>
                  </Link>
                </div>

                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 productpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/product/default/27`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/32_product_default.jpg`}
                        width="500"
                        height="385"
                        alt="Product default"
                      />
                    </figure>
                    <h5>Product default</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 productpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/product/centered/28`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/33_product_centered.jpg`}
                        width="500"
                        height="385"
                        alt="Product centered"
                      />
                    </figure>
                    <h5>Product centered</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 productpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/product/extended/29`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/34_product_extended_description_boxed.jpg`}
                        width="500"
                        height="385"
                        alt="Product extended description"
                      />
                    </figure>
                    <h5>Product extended description</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 productpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/product/gallery/30`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/35_product_gallery.jpg`}
                        width="500"
                        height="385"
                        alt="Product gallery"
                      />
                    </figure>
                    <h5>Product gallery</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 productpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/product/sticky/34`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/36_product_sticky_info.jpg`}
                        width="500"
                        height="385"
                        alt="Product sticky info"
                      />
                    </figure>
                    <h5>Product sticky info</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 productpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/product/sidebar/32`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/37_product_with_sidebar.jpg`}
                        width="500"
                        height="385"
                        alt="Product with sidebar"
                      />
                    </figure>
                    <h5>Product with sidebar</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 productpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/product/fullwidth/33`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/38_product_fullwidth.jpg`}
                        width="500"
                        height="385"
                        alt="Product fullwidth"
                      />
                    </figure>
                    <h5>Product fullwidth</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 productpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/product/masonry/35`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/39_product_masonry_sticky_info.jpg`}
                        width="500"
                        height="385"
                        alt="Product masonry (sticky info)"
                      />
                    </figure>
                    <h5>
                      Product masonry <span>(sticky info)</span>
                    </h5>
                  </Link>
                </div>

                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 otherpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/pages/about`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/40_pages_aboutus.jpg`}
                        width="500"
                        height="385"
                        alt="About Us"
                      />
                    </figure>
                    <h5>About Us</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 otherpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/pages/about-2`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/41_pages_aboutus_2.jpg`}
                        width="500"
                        height="385"
                        alt="About Us 2"
                      />
                    </figure>
                    <h5>About Us 2</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 otherpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/pages/contact`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/42_pages_contactus.jpg`}
                        width="500"
                        height="385"
                        alt="Contact Us"
                      />
                    </figure>
                    <h5>Contact Us</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 otherpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/pages/contact-2`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/43_pages_contactus_2.jpg`}
                        width="500"
                        height="385"
                        alt="Contact us 2"
                      />
                    </figure>
                    <h5>Contact us 2</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 otherpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/pages/login`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/44_pages_login.jpg`}
                        width="500"
                        height="385"
                        alt="Login page"
                      />
                    </figure>
                    <h5>Login page</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 otherpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/pages/faq`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/45_pages_FAQ.jpg`}
                        width="500"
                        height="385"
                        alt="F.A.Q page"
                      />
                    </figure>
                    <h5>F.A.Q page</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 otherpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/pages/404`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/46_pages_error_404.jpg`}
                        width="500"
                        height="385"
                        alt="Error 404 page"
                      />
                    </figure>
                    <h5>Error 404 page</h5>
                  </Link>
                </div>
                <div className="demo-elem col-xl-5col col-sm-6 col-md-4 col-lg-3 otherpages">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/pages/coming-soon`}
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/47_pages_coming_soon.jpg`}
                        width="500"
                        height="385"
                        alt="Coming Soon page"
                      />
                    </figure>
                    <h5>Coming Soon page</h5>
                  </Link>
                </div>
              </div>
              <h5 className="text-load-more">More New Demos Coming Soon ...</h5>
            </section>

            <section className="section section-features">
              <h2 className="text-center">Our Core Features</h2>
              <p className="text-center">
                Powerful features and inclusions, which makes Glass and
                Fusionstandout,
                <br />
                easily customizable and scalable.
              </p>
              <div className="divider-line">
                <div className="container-lg">
                  <div className="overflow-hidden">
                    <div className="row">
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-laptop"></i>
                          <h4>Fully Responsive Design Layouts</h4>
                          <p>
                            The Template looks good and sharp with all kind of
                            devices and screen sizes. which increase the layout
                            flexibility.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-code"></i>
                          <h4>Clean And Professional Codes</h4>
                          <p>
                            The Template is ready with clean and well structured
                            coding style by the Professional developers team.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-fill-drip"></i>
                          <h4>Creative And Modern Design Layout</h4>
                          <p>
                            Every single section is created with the passion and
                            years of experience in the website development.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-align-left"></i>
                          <h4>Perfect Documentations</h4>
                          <p>
                            There are lots of creative section for you. So we
                            have create a documentation that will helpful to
                            understand the flow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-lg">
                  <div className="overflow-hidden">
                    <div className="row">
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-th"></i>
                          <h4>Build With Bootstrap</h4>
                          <p>
                            This Template is created with latest bootstrap
                            version which used its new classes and tags.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-envelope-open-text"></i>
                          <h4>Working Contact Form</h4>
                          <p>
                            There are different different styled form layouts
                            that used to get in touch with you.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-cogs"></i>
                          <h4>Easily Customizable</h4>
                          <p>
                            The design is fully customizable. Unlimited color
                            styles, all 500+ Google fonts, and etc!
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i
                            className="icon-html5"
                            style={{ fontSize: "2.4rem" }}
                          ></i>
                          <h4>Valid HTML 5 And CSS 3</h4>
                          <p>
                            We have used latest HTML and Css Coding style that
                            makes the pages in well working state.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-lg">
                  <div className="overflow-hidden">
                    <div className="row">
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-react"></i>
                          <h4>Build With React Libraries</h4>
                          <p>
                            We have used ReactJS to optimize performance, so
                            Glass and Fusionhas very good performance.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-clone-1"></i>
                          <h4>Quickview Integrated</h4>
                          <p>
                            You can see skeleton concept based quickview feature
                            while browsing shop demos. It's very clean and nice
                            compared to other template.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i className="icon-delicious"></i>
                          <h4>Unlimited Colors & Skins</h4>
                          <p>
                            You can configure any color you want, for entire
                            site or certain sections through poewrful admin
                            options.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="icon-box">
                          <i
                            className="icon-searchengin"
                            style={{ fontSize: "2.4rem" }}
                          ></i>
                          <h4>SEO Friendly</h4>
                          <p>
                            SEO Friendly is one of our top priorities while
                            working on Glass and Fusionimprovements, you can
                            expect high seo performance while using Molla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section-elements container">
              <h2 className="text-center">Elements For Everything</h2>
              <p className="text-center">
                Use your creativity and the power of Glass and Fusionelements to
                create your pages,
                <br />
                check out some of them.
              </p>
              <br />
              <div className="row">
                {_data.elementsUrl.map((item) => (
                  <div className="col-sm-6 col-md-3 col-lg-1-5" key={item.name}>
                    <Link
                      to={import.meta.env.VITE_PUBLIC_URL + item.url}
                      target="_blank"
                    >
                      <div className="img-box">
                        <i className={item.class}></i>
                        <h5>{item.name}</h5>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <section className="section section-support section-dark">
              <div
                className="container molla-lz text-center"
                style={{
                  backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos-img/support_bg.jpg)`,
                }}
              >
                <h2>
                  Outstanding Support Center<span className="fw-400">+</span>
                  Extensive Documentation
                </h2>
                <p>
                  Support is one of our priorities, our dedicatated support
                  <br />
                  will be waiting for you if you have any questions.
                </p>
              </div>
            </section>
            <section className="section section-light section-ready container text-center">
              <h2 className="mb-1">
                Glass and FusionIs Ready To Use. Get It Now!
              </h2>
              <p>DON'T FORGET TO APPRECIATE OUR WORK. RATE US NOW!</p>
              <div
                className="star-rating pb-1"
                style={{ marginBottom: "1.5rem" }}
              >
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
              </div>
              <p>
                <Link className="btn btn-primary btn-outline" to="#">
                  <i className="icon-shopping-cart"></i>Buy Molla
                </Link> 
              </p>
            </section>
          </div>

          <footer id="footer" className="container-lg">
            <div className="row">
              <div className="col-md-6 text-center text-md-left mb-1 mb-md-0">
                <p className="copyright mb-0">
                  Copyright © {new Date().getFullYear()} Glass and FusionStore.
                  All Rights Reserved.<Link to="#">Terms Of Use</Link> |{" "}
                  <Link to="#">Privacy Policy</Link>
                </p>
              </div>
              <div className="col-md-6 text-center text-md-right social-icons">
                <label className="mr-3">Social Media 1</label>
                <Link to="#" title="Facebook">
                  <i className="icon-facebook-f"></i>
                </Link>
                <Link to="#" title="Twitter">
                  <i className="icon-twitter"></i>
                </Link>
                <Link to="#" title="Instagram">
                  <i className="icon-instagram"></i>
                </Link>
                <Link to="#" title="Youtube">
                  <i className="icon-youtube"></i>
                </Link>
                <Link to="#" title="Pinterest">
                  <i className="icon-pinterest"></i>
                </Link>
              </div>
            </div>
          </footer>

          <MobileMenu />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
