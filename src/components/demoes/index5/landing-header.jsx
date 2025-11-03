import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { IntlActions } from "react-redux-multilingual";
import Slider from "react-slick";
import "./search-bar.css";

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
          <div className="mobile-fix-option"></div>
          {/*Top Header Component*/}

          <div
            className="container"
            style={{
              "max-width": "100%",
              width: "100%",
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
                        width: "50%",
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
                          id="landing-heading"
                          style={{
                            color: "#ffffff",
                            "font-size": "55px",
                            fontFamily: "Josefin Sans,sans-serif",
                          }}
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
                        width: "50%",
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
                          onClick={() => {
                            localStorage.setItem("scrollHomePage", true);
                          }}
                          to={`${import.meta.env.VITE_PUBLIC_URL}/home`}
                          id="landing-heading"
                          style={{
                            color: "#ffffff",
                            "font-size": "55px",
                            fontFamily: "Josefin Sans,sans-serif",
                          }}
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

export default LandingHeader;
