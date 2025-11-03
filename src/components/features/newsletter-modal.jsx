import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import { hideNewsletterModal } from "../../actions";
import { findIndex, isIEBrowser } from "../../utils/utils";

const customStyles = {
  content: {
    top: "50%",
    transform: "translateY(-50%)",
  },
  overlay: {
    backgroundColor: "rgba(51,51,51,0.6)",
    zIndex: "10000",
  },
};

Modal.setAppElement("#root");

class NewsletterModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    if (!this.props.flag)
      this.timer = setTimeout(() => {
        this.setState({ isOpen: false });
      }, 10000);
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  closeModal(e) {
    document
      .getElementById("newsletter-popup-form")
      .classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".custom-control-input").checked)
      this.props.hideNewsletterModal(this.props.demo);

    this.setState({ isOpen: false });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        shouldFocusAfterRender={false}
        contentLabel="Newsletter Modal"
        className="container newsletter-popup-container"
        id="newsletter-popup-form"
      >
        <div className="row justify-content-center">
          <div className="col-md-10 col-sm-12">
            <div className="row no-gutters bg-white newsletter-popup-content">
              <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                <div className="banner-content text-center">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/popup/newsletter/logo.png`}
                    alt="logo"
                    className="logo"
                    width="60"
                    height="15"
                  />
                  <h2 className="banner-title">
                    get{" "}
                    <span>
                      25<span style={{ fontWeight: "400" }}>%</span>
                    </span>{" "}
                    off
                  </h2>
                  <p>
                    Subscribe to the Molla eCommerce newsletter to receive
                    timely updates from your favorite products.
                  </p>

                  <form action="#">
                    <div className="input-group input-group-round">
                      <input
                        type="email"
                        className="form-control form-control-white"
                        placeholder="Your Email Address"
                        aria-label="Email Adress"
                        required
                      />
                      <div className="input-group-append">
                        <button className="btn" type="submit">
                          <span>go</span>
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="register-policy-2"
                    />
                    <label
                      className="custom-control-label"
                      style={isIEBrowser() ? { padding: "2" } : {}}
                      htmlFor="register-policy-2"
                    >
                      Do not show this popup again
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-2-5col col-lg-5 ">
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/popup/newsletter/img-1.jpg`}
                  alt="newsletter"
                  className="newsletter-img"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          title="Close (Esc)"
          type="button"
          className="mfp-close"
          onClick={this.closeModal}
        >
          <span>×</span>
        </button>
      </Modal>
    );
  }
}

export const mapStateToProps = (state, props) => {
  let result = false;
  if (-1 !== findIndex(state.demo.newsletter, (item) => item === props.demo))
    result = true;
  return {
    flag: result,
  };
};
export default connect(mapStateToProps, { hideNewsletterModal })(
  NewsletterModal
);
