import React, { Component } from "react";
import Pace from "react-pace-progress";
import { connect } from "react-redux";
import { IntlActions } from "react-redux-multilingual";
import { loadUser } from "../../../actions/authAction";
// Import custom components
import store from "../../../store";
import LogoImage from "../../common/headers/common/logo";
import NavBar from "../../common/headers/common/navbar";
import SideBar from "../../common/headers/common/sidebar";
import TopBar from "../../common/headers/common/topbar";
import "../css/custome.css";
import CartContainer from "./../../../containers/CartContainer";
import { Link } from "react-router-dom";

class FrontEndHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  /*=====================
           Pre loader
           ==========================*/
  componentDidMount() {
    setTimeout(function() {
       ;
    }, 2000);
    document
      .getElementById("color")
      .setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/color3.css`);

    store.dispatch(loadUser());
  }

  changeLanguage(lang) {
    store.dispatch(IntlActions.setLocale(lang));
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  openNav() {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  }
  openSearch() {
    document.getElementById("search-overlay").style.display = "block";
  }

  closeSearch() {
    document.getElementById("search-overlay").style.display = "none";
  }

  load = () => {
    this.setState({ isLoading: true });
    fetch().then(() => {
      // deal with data fetched
      this.setState({ isLoading: false });
    });
  };

  render() {
    let countSku = JSON.parse(localStorage.getItem("sku"));

    return (
      <div>
        <header id="sticky" className="sticky">
          {this.state.isLoading ? <Pace color="#27ae60" /> : null}
          <div className="mobile-fix-option"></div>
          {/*Top Header Component*/}

          <div
            className="container"
            style={{
              maxWidth: "100%",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
            <TopBar />
            <div className="row">
              <div className="col-sm-12">
                <section className="p-0">
                  <div className="main-menu video-slider-custome">
                    <div className="menu-left">
                      <div className="navbar">
                        {/* <a href="javascript:void(0)" onClick={this.openNav}>
                          <div className="bar-style">
                            {" "}
                            <i
                              className="fa fa-bars sidebar-bar"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </a> */}
                        {/*SideBar Navigation Component*/}
                        <SideBar />
                      </div>
                      <div className="brand-logo">
                        <LogoImage logo={this.props.logoName} />
                      </div>
                    </div>
                    <div className="menu-right pull-right">
                      {/*Top Navigation Bar Component*/}
                      <NavBar />

                      {/* <div>
                        <div className="icon-nav">
                          <ul>
                            <li class="onhover-div mobile-cart"> */}
                      {/* <div class="cart-qty-cls">
                                {localStorage.getItem("sku") ? (
                                  <label className="custome_lable">{this.props.total}</label>
                                ) : (
                                    0
                                  )}
                                </div> */}

                      {/* <Link to='#'>
                                <img src="/assets/images/icon/cart.png" class="img-fluid" alt="" />
                                <i class="fa fa-shopping-cart"></i>
                              </Link></li> */}
                      {/*Header Cart Component */}
                      {/* <CartContainer /> */}
                      {/* </ul> */}
                      {/* </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                  <div></div>
                </section>
              </div>
            </div>
          </div>
        </header>

        <div id="search-overlay" className="search-overlay">
          <div>
            <span
              className="closebtn"
              onClick={this.closeSearch}
              title="Close Overlay"
            >
              ×
            </span>
            <div className="overlay-content">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Search a Product"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {})(FrontEndHeader);
