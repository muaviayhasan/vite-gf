import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SlideUpDown } from "../../../services/script";
import FooterLogo from "../../common/headers/common/footer-logo";

class LandingFooter extends Component {
  componentDidMount() {
    var contentwidth = window.innerWidth;
    if (contentwidth < 750) {
      SlideUpDown("footer-title");
    } else {
      var elems = document.querySelectorAll(".footer-title");
      [].forEach.call(elems, function(elemt) {
        let el = elemt.nextElementSibling;
        el.style = "display: block";
      });
    }
  }

  render() {
    return (
      <footer className="footer-light">
        <section className="section-b-space_l light-layout">
          <div
            className="container"
            style={{
              "max-width": "1435px",
              padding: "0 30px",
              "margin-left": "auto",
              "margin-right": "auto",
            }}
          >
            <div className="row footer-theme partition-f">
              <div className="col-lg-1"></div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <FooterLogo logo={this.props.logoName} />
                  </div>
                  <p style={{ color: "white" }} className="_whiteColor">
                    Over the years Glass & Fusion have built extensive links in
                    the industry from sourcing granite, quartz, marble, &
                    ultra-compact to fabrication & fitting kitchen worktops.{" "}
                  </p>
                  <div class="demopadding footer-social">
                    <div className="icon social tw">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <div className="icon social in">
                      <a
                        href="https://www.instagram.com/glassandfusion/"
                        target="blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                    <div className="icon social fb">
                      <a
                        href="https://facebook.com/glassandfusion"
                        target="blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </div>
                    <div className="icon social hz">
                      <a
                        href="https://www.houzz.co.uk/photos/users/glassandfusionltd/"
                        target="blank"
                      >
                        <i className="fa fa-houzz"></i>
                      </a>
                    </div>
                    <div className="icon social pi">
                      <i className="fa fa-pinterest"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2" style={{ maxWidth: "14%" }}>
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 className="_whiteColor">Useful Links</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/about-us`}
                          className="_whiteColor"
                          style={{ color: "white !important" }}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/testimonials`}
                          className="_whiteColor"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/faq`}
                          className="_whiteColor"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog`}
                          className="_whiteColor"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                          className="_whiteColor"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4 className="_whiteColor">Showroom</h4>
                  </div>
                  <div className="footer-contant">
                    <p>
                      <a
                        href="https://www.google.com/maps/place/Glass+%26+Fusion+Ltd/@51.506069,-0.409503,16z/data=!4m5!3m4!1s0x0:0x27907a8aac63a82b!8m2!3d51.5060693!4d-0.4095027?hl=en"
                        target="blank"
                        style={{ color: "rgb(183, 130, 80)" }}
                        className="_whiteColor"
                      >
                        Unit 10 Chesterfield Way,
                        <br /> Hayes, UB3 3NW
                        <br /> United Kingdom
                      </a>
                      <br />
                      <a
                        href="tel:02039359199"
                        style={{ color: "rgb(183, 130, 80)" }}
                        className="_whiteColor"
                      >
                        02039359199
                      </a>

                      <br />
                      <a
                        href="tel:07823345500"
                        style={{ color: "rgb(183, 130, 80)" }}
                        className="_whiteColor"
                      >
                        07823345500
                      </a>
                      <br />
                      <a
                        href="mailto:info@glassfusionltd.co.uk"
                        style={{ color: "rgb(183, 130, 80)" }}
                        className="_whiteColor"
                      >
                        info@glassfusionltd.co.uk
                      </a>
                      <br />
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}
                        className="_whiteColor"
                      >
                        Contact us
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="sub-title">
                  <div className="footer-title">
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/about-us`}>
                      <h4 className="_whiteColor">About Us</h4>
                    </Link>
                  </div>
                  <div className="footer-contant costume">
                    <p className="_whiteColor">
                      We pride ourselves on delivering the best quality and
                      workmanship to the heart of your home. Our products are
                      not limited to stone kitchen worktops or toughened glass
                      splashback but extensive knowledge in our products can
                      direct your project to the right track in terms of styling
                      and pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-footer ">
          <div
            className="container"
            style={{
              "max-width": "1183px",
              padding: "0px 30px",
              "margin-left": "auto",
              "margin-right": "auto",
            }}
          >
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="footer-end">
                  <p className="_whiteColor">
                    <i className="fa fa-copyright" aria-hidden="true"></i>{" "}
                    Copyright Glass & Fusion 2025 Powered by:{" "}
                    <a
                      href="https://www.isetech.co/"
                      target="_blank"
                      className="footer_href _whiteColor"
                      rel="noopener noreferrer"
                    >
                      ISETech
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="payment-card-bottom">
                  <ul>
                    <li>
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}
                        className="custome-footer-color _whiteColor"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                        className="custome-footer-color _whiteColor"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}
                        className="custome-footer-color _whiteColor"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default LandingFooter;
