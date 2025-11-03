import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import SearchBar from "../../common/search-bar";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import auth from "../../../auth/auth";
import Select from "react-select";
import axios from "axios";

class ThankyouQuote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - Empty ShortList`}</title>
        </Helmet>

        <section className=" contact-page">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-12"
                style={{
                  textAlign: "center",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <h4>Thank you for requesting a quote</h4>
                <h4>One of our expert team member will contact you shortly</h4>
                <br />
                <p>
                  <b className="red_note" style={{ color: "red" }}>
                    {" "}
                    NOTE:
                  </b>{" "}
                  Please do not forget to check your spam folder, in case you
                  don't get email in your inbox. The quote email will come from
                  info@glassfusionltd.co.uk
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    );
  }
}

export default ThankyouQuote;
