import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { IntlActions } from "react-redux-multilingual";
import Pace from "react-pace-progress";
import { Helmet } from "react-helmet";

// Import custom components
import store from "../../../store";

import { loadUser } from "../../../actions/authAction";
import TopBar from "../../common/headers/common/topbar";
import TopBarWhite from "../../common/headers/common/topbar-white";
import { connect } from "react-redux";
import LogoImage from "../../common/headers/common/logo";
import NavBar from "../../common/headers/common/navbar";
import SideBar from "../../common/headers/common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import "../css/custome.css";
import Slider from "react-slick";

class LandingHeader extends Component {
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
    return (
      <div>
        <header id="sticky" className="sticky">
          {this.state.isLoading ? <Pace color="#27ae60" /> : null}
          <div className="mobile-fix-option"></div>
          {/*Top Header Component*/}

          <div
            className="container"
            style={{
              "max-width": "100%",
              "padding-right": "0px",
              "padding-left": "0px",
            }}
          >
            <div className="row">
              <div className="col-sm-12">
                <section className="p-0">
                  <div className="main-menu video-slider-custome-landing-page col-sm-12 row">
                    <div
                      className="col-md-6 col-sm-12 landing-page-slider-box"
                      style={{
                        "border-right": "1px solid black",
                        "background-color": "#253746",
                        opacity: "50%",
                        display: "table",
                      }}
                    >
                      <h1
                        style={{
                          color: "#ffffff",
                          display: "table-cell",
                          "vertical-align": "middle",
                        }}
                      >
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/glass-categories`}
                          style={{ color: "#ffffff", "font-size": "40px" }}
                        >
                          Glass
                        </Link>
                      </h1>

                      {/* <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/landing-page/Blue-glass-Splashback.jpg`}
                          alt=""
                          className="img-fluid blur-up lazyload landing-page-top-image"
                        /> */}
                    </div>
                    <div
                      className="col-md-6 col-sm-12 landing-page-slider-box"
                      style={{
                        "background-color": "#B78250",
                        opacity: "50%",
                        display: "table",
                      }}
                    >
                      <h1
                        style={{
                          color: "#ffffff",
                          display: "table-cell",
                          "vertical-align": "middle",
                        }}
                      >
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/stone-worktops`}
                          style={{ color: "#ffffff", "font-size": "40px" }}
                        >
                          Stone
                        </Link>
                      </h1>

                      {/* <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/landing-page/CAMBRIA-WITH-GREY-MIRROR-SPLASHBACK.jpg`}
                          alt=""
                          className="img-fluid blur-up lazyload landing-page-top-image"
                        /> */}
                    </div>
                  </div>
                  <div>
                    <Slider className="slide-1 home-slider">
                      <div
                        className="home"
                        style={{ "max-height": "100%", height: 640 }}
                      >
                        <video
                          nocontrols
                          autoplay="autoplay"
                          loop="loop"
                          className="slider-video"
                        >
                          <source
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/intro-video/Glass-and-fusion-london-stones-marble-kitchen.mp4`}
                            type="video/mp4"
                          ></source>
                        </video>
                      </div>
                    </Slider>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(null, {})(LandingHeader);
