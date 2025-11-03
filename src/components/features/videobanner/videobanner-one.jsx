import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { safeContent } from "../../../utils/utils";

import { showModal } from "../../../actions";
import ReactPlayer from "react-player";
import "../../main/product/product_style.css";

class VideoBannerOne extends Component {
  constructor(props) {
    super(props);
    this.openVideoModal = this.openVideoModal.bind(this);
  }

  openVideoModal(e) {
    this.props.showModal("video");
    e.preventDefault();
  }

  render() {
    return (
      <div style={{ background: "#ccc" }}>
        <div
          className="container"
          id="videoContainer_parent"
          style={{
            width: "100%",
            maxWidth: "100%",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <ReactPlayer
            url={`${import.meta.env.VITE_PUBLIC_URL}/assets/intro-video/Glass-and-fusion-london-stones-marble-kitchen.mp4`}
            playing={true}
            loop={true}
            width={"100%"}
            height={"520px"}
            className="videoContainer"
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { showModal })(VideoBannerOne);
