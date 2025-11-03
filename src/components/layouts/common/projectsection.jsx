import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { responsive } from "../../../services/script";

import { projectSlider } from "../../../services/script";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class ProjectSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = `$(document).ready(function(){
      setTimeout(function(){
        var original = $("#_mainSliderDiv").html();
        $('.uk-active').css('width', '364px');
        $('.uk-slide-before').css('width', '364px');
        $('.uk-slide-after').css('width', '364px');
        setTimeout(function(){$("#_mainSliderDiv").html("");}, 1000);
        setTimeout(function(){$("#_mainSliderDiv").html(original);}, 1500);
        $('.uk-active').css('width', '364px');
        $('.uk-slide-before').css('width', '364px');
        $('.uk-slide-after').css('width', '364px');
      }, 2000);
      setTimeout(function(){
        var original = $("#_mainSliderDiv").html();
        $('.uk-active').css('width', '364px');
        $('.uk-slide-before').css('width', '364px');
        $('.uk-slide-after').css('width', '364px');
        // $('.slider-content').children().first().css('margin-top', '0%');
        $("#_mainSliderDiv").html("");
        $("#_mainSliderDiv").html(original)
        $('.uk-active').css('width', '364px');
        $('.uk-slide-before').css('width', '364px');
        $('.uk-slide-after').css('width', '364px');
      }, 4500);

      setInterval(function(){
        $('.uk-active').css('width', '364px');
        $('.uk-slide-before').css('width', '364px');
        $('.uk-slide-after').css('width', '364px');
      }, 1000)
  });`;
    this.instance.appendChild(s);
  }
  render() {
    return (
      <div
        className="container container-past-project-full-width"
        ref={(el) => (this.instance = el)}
      >
        <div className="row" style={{ marginLeft: "-2.5%" }}>
          <div className="col-md-12 p-2" id="_mainSliderDiv">
            {/* <Carousel
              responsive={responsive}
              infinite={true}
              centerMode={true}
              autoPlaySpeed={4000}
              autoPlay={true}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={[
                "tablet",
                "mobile",
                "desktop",
                "superLargeDesktop"
              ]}
              itemClass="carousel-item-padding-40-px"
            >
              <div className="custome-slider">
                <div className="col-md-12 p-1 ">
                  <div className="classic-effect">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/glass-and-fusion-london-stones-marble-blog1.jpg`}
                      className="img-fluid project-image-custome"
                      alt=""
                    />
                    <span className="project-coursel-span"></span>
                  </div>
                  <div className="blog-details"></div>
                </div>
              </div>
              <div className="custome-slider">
                <div className="col-md-12 p-1 ">
                  <div className="classic-effect">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/glass-and-fusion-london-stones-marble-blog2.jpg`}
                      className="img-fluid project-image-custome"
                      alt=""
                    />
                    <span className="project-coursel-span"></span>
                  </div>
                  <div className="blog-details"></div>
                </div>
              </div>
              <div className="custome-slider">
                <div className="col-md-12 p-1 ">
                  <div className="classic-effect">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/glass-and-fusion-london-stones-marble-blog3.jpg`}
                      className="img-fluid project-image-custome"
                      alt=""
                    />
                    <span className="project-coursel-span"></span>
                  </div>
                  <div className="blog-details"></div>
                </div>
              </div>
              <div className="custome-slider">
                <div className="col-md-12 p-1 ">
                  <div className="classic-effect">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/glass-and-fusion-london-stones-marble-blog4.jpg`}
                      className="img-fluid project-image-custome"
                      alt=""
                    />
                    <span className="project-coursel-span"></span>
                  </div>
                  <div className="blog-details"></div>
                </div>
              </div>
              <div className="custome-slider">
                <div className="col-md-12 p-1 ">
                  <div className="classic-effect">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/glass-and-fusion-london-stones-marble-blog1.jpg`}
                      className="img-fluid project-image-custome"
                      alt=""
                    />
                    <span className="project-coursel-span"></span>
                  </div>
                  <div className="blog-details"></div>
                </div>
              </div>
            </Carousel>
            <br /> */}
            <div
              data-uk-slider="{center: true}"
              uk-slider="autoplay: true"
              id="sliderDiv"
            >
              <div className="uk-slider-container">
                <ul className="uk-slider uk-grid-small">
                  <li>
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/w1.jpg`}
                      alt=""
                      draggable="false"
                    />
                  </li>
                  <li id="uk-active">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/_w2.jpg`}
                      alt=""
                      draggable="false"
                    />
                  </li>
                  <li>
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/w3.jpg`}
                      alt=""
                      draggable="false"
                    />
                  </li>
                  <li>
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/w4.jpg`}
                      alt=""
                      draggable="false"
                    />
                  </li>
                </ul>
              </div>
              <div className="uk-container uk-container-center">
                <div className="slider-content">
                  <div
                    style={{
                      marginTop: "6%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4%",
                    }}
                  >
                    <a
                      className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous"
                      data-uk-slider-item="previous"
                      draggable="false"
                    >
                      <img src="./assets/images/back.png" />
                    </a>

                    <div className="uk-text-center">
                      <h3>GET INSPIRED, GET STARTED</h3>
                    </div>

                    <a
                      className="uk-slidenav uk-slidenav-contrast uk-slidenav-next"
                      data-uk-slider-item="next"
                      draggable="false"
                    >
                      <img src="./assets/images/next.png" />
                    </a>
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

export default ProjectSection;
