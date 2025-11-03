import React, { Component } from "react";
import { connect } from "react-redux";

import { showModal } from "../../../actions";

class VideoBannerTwo extends Component {
  constructor(props) {
    super(props);
    this.openVideoModal = this.openVideoModal.bind(this);
  }

  openVideoModal(e) {
    this.props.showModal("video");
    e.preventDefault();
  }

  render() {
    const { title, subTitle, content, image } = this.props;

    return (
      <div className="video-banner video-banner-poster text-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <h3 className="video-banner-title h3">
                <span className="text-primary">{subTitle}</span>
                {title}
              </h3>
              <p>{content}</p>
            </div>

            <div className="col-md-6">
              <div className="video-poster">
                <img src={import.meta.env.VITE_PUBLIC_URL + "/" + image} alt="poster" />

                <div className="video-poster-content">
                  <a
                    href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                    className="btn-video btn-iframe"
                    onClick={this.openVideoModal}
                  >
                    <i className="icon-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { showModal })(VideoBannerTwo);
