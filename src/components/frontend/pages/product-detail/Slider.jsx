import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { props } = this;
    return (
      <Carousel
        dynamicHeight={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        width="100%"
      >
        {props.images.map(function(item, index) {
          return (
            <div key={index}>
              <img src={item.path} className="slide_img"/>
              <p className="legend text-white bg-dark slide_txt">{item.caption}</p>
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default Slider;
