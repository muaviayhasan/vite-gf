import React, { Component } from "react";
import { Link } from "react-router-dom";

class CTA extends Component {
  ctaFormFocusIn() {
    document
      .querySelector(".input-group")
      .querySelector(".btn").style.borderColor = "#c66";
  }

  ctaFormFocusOut() {
    document
      .querySelector(".input-group")
      .querySelector(".btn").style.borderColor = "#e1e1e1";
  }

  render() {
    return (
      <div className="container">
        <div className="cta cta-separator mb-1">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="cta-wrapper cta-text text-center"
                style={{
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                }}
              >
                <h3 className="cta-title">Follow us</h3>
                <p className="cta-desc">
                  Our social media channels are regularly updated with, so do
                  not forget to follow us.{" "}
                </p>

                <div className="social-icons social-icons-colored justify-content-center">
                  <a
                    href="https://facebook.com/glassandfusion"
                    className="social-icon social-facebook"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/glassandfusion/"
                    className="social-icon social-instagram"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram"></i>
                  </a>
                  <a
                    href="https://www.houzz.co.uk/photos/users/glassandfusionltd/"
                    className="social-icon social-youtube"
                    title="Houze"
                    target="_blank"
                  >
                    <i className="icon-houzz"></i>
                  </a>
                  <a
                    href="https://www.pinterest.co.uk/glassandfusion/"
                    className="social-icon social-pinterest"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest"></i>
                  </a>
                  <a
                    href="https://twitter.com/glassandfusion"
                    className="social-icon social-twitter"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="cta-wrapper text-center"
                style={{
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                }}
              >
                <h3 className="cta-title">Newsletter</h3>
                <p className="cta-desc">
                  Subscribe to our newsletter for latest deals and special
                  offers
                </p>

                <form action="#">
                  <div
                    className="input-group"
                    onFocus={this.ctaFormFocusIn}
                    onBlur={this.ctaFormFocusOut}
                  >
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your Email Address"
                      aria-label="Email Adress"
                      required
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary btn-rounded"
                        type="submit"
                      >
                        <i className="icon-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CTA;
