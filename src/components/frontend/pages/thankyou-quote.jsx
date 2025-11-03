import React, { Component } from "react";
import { Helmet } from "react-helmet";

class ThankyouQuote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ paddingBottom: "10%" }}>
        <Helmet>
          <title>{`GNF - ${this.props.title}`}</title>
        </Helmet>
        {/*Forget Password section*/}
        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space">
              <div className="col-sm-12">
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
      </div>
    );
  }
}

export default ThankyouQuote;
