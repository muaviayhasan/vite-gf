import React, { Component } from "react";
import { Helmet } from "react-helmet";
import LandingHeader from "./landing-header";
import { Link } from "react-router-dom";
import LandingPageStripe from "./landing-page-stripe";
import FooterTwo from "../../common/footer/footer-two";
import "./search-bar.css";
import { isMobile } from "react-device-detect";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Marble, Granite, Quartz, Compact Worktops and Glass Splashback
            Specialists
          </title>
          <meta
            name="description"
            content="At Glass & Fusion, we deliver high quality kitchen worktops,  glass splashbacks and unmatched workmanship to your property."
          />
          <meta
            name="keywords"
            content="Kitchen design London, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Compact, Kitchen design uk, Kitchen makeover, Countertops, Quartz worktop, Granite worktops, Marble worktops, Interior design, Luxury homes"
          />
        </Helmet>
        <LandingHeader />
        {/*Forget Password section*/}

        <LandingPageStripe />

        <section
          className=" contact-page"
          style={{ "padding-top": "0px", "padding-bottom": "0px" }}
        >
          <div
            className="container"
            style={{
              "max-width": "100%",
              width: "100%",
              "padding-right": "0px",
              "padding-left": "0px",
            }}
          >
            {!isMobile ? (
              <div
                className="col-md-12 form-group row "
                style={{
                  display: "flex",
                  "padding-right": "1px",
                  "padding-left": "1px",
                  "margin-right": "0px",
                  "margin-left": "0px",
                  "margin-bottom": "1px",
                  textAlign: "center",
                }}
              >
                <div className="col-lg-3 col-sm-6 padding-page-boxes">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/book-an-appointment`}
                    className="landing-page-box-text"
                  >
                    Book an Appointment
                  </Link>
                </div>
                <div className="col-lg-3 col-sm-6 padding-page-boxes">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}
                    className="landing-page-box-text"
                  >
                    Contact
                  </Link>
                </div>
                <div className="col-lg-3 col-sm-6 padding-page-boxes">
                  <a
                    href="mailto:info@glassfusionltd.co.uk"
                    className="landing-page-box-text"
                  >
                    info@glassfusionltd.co.uk
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6 padding-page-boxes">
                  <a href="tel:02039359199" className="landing-page-box-a">
                    02039359199
                  </a>{" "}
                  |
                  <a href="tel:07823345500" className="landing-page-box-a">
                    07823345500
                  </a>
                </div>
              </div>
            ) : (
              <div
                className="col-md-12 form-group row "
                style={{
                  display: "flex",
                  "padding-right": "1px",
                  "padding-left": "1px",
                  "margin-right": "0px",
                  "margin-left": "0px",
                  "margin-bottom": "1px",
                  textAlign: "center",
                }}
              >
                <table className="__table" style={{ width: "90%" }}>
                  <tr className="__tr">
                    <th className="__th" style={{ padding: "2%" }}>
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}
                        className="spn-cls"
                        style={{
                          color: "black",
                          fontSize: 14,
                          fontWeight: "normal",
                        }}
                      >
                        Contact
                      </Link>
                    </th>
                    <th className="__th">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/book-an-appointment`}
                        className="spn-cls"
                        style={{
                          color: "black",
                          fontSize: 14,
                          fontWeight: "normal",
                        }}
                      >
                        Book an Appointment{" "}
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <td className="__td border-0" style={{ padding: "4%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "7%",
                          borderRightWidth: "1px solid black",
                        }}
                      >
                        <a
                          className="spn-cls"
                          style={{
                            color: "black",
                            fontSize: 14,
                            fontWeight: "normal",
                          }}
                          href="tel:02039359199"
                          className="landing-page-box-a"
                        >
                          02039359199
                        </a>
                        <a
                          className="spn-cls"
                          style={{
                            color: "black",
                            fontSize: 14,
                            fontWeight: "normal",
                          }}
                          href="tel:07823345500"
                          className="landing-page-box-a"
                        >
                          07823345500
                        </a>
                      </div>
                    </td>
                    <td
                      className="__th"
                      style={{ paddingLeft: "3%", paddingRight: "3%" }}
                    >
                      <a
                        href="mailto:info@glassfusionltd.co.uk"
                        className="spn-cls"
                        style={{
                          color: "black",
                          fontSize: 14,
                          fontWeight: "normal",
                        }}
                      >
                        info@glassfusionltd.co.uk
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </div>
        </section>
        <FooterTwo type={2} />
      </div>
    );
  }
}

export default LandingPage;
