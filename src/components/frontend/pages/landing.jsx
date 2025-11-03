import React, { Component } from "react";
import { Helmet } from "react-helmet";
import LandingHeader from "../includes/landing-header";
import LandingFooter from "../includes/landing-footer";
import { Link } from "react-router-dom";
import LandingPageStripe from "../includes/landing-page-stripe";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - Home`}</title>
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
              "padding-right": "0px",
              "padding-left": "0px",
            }}
          >
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
                  to={`${import.meta.env.VITE_PUBLIC_URL}/Book-a-appointment`}
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
          </div>
        </section>
        <LandingFooter />
      </div>
    );
  }
}

export default LandingPage;
