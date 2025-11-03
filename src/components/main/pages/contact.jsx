import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Breadcrumb from "../../common/breadcrumb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import TopBarProgress from "react-topbar-progress-indicator";

class ContactOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      validForm: false,
      checked: false,
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    this.termsandconditions = this.termsandconditions.bind(this);
  }

  termsandconditions = (e) => {
    if (e.target.checked === true) {
      this.setState({
        ...this.state,
        checked: true,
      });
    } else {
      this.setState({
        ...this.state,
        checked: false,
      });
    }
  };

  _handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  };

  formSubmitHandler = async (payload) => {
    console.log(payload);
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/contact-request`,
      payload
    );
    this.props.history.push("/contact-thank-you-page");
    console.log(res);
    toast.success(`${res.data}`);
    this.setState({
      loading: false,
      validForm: false,
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  submit = (e) => {
    this.setState({ loading: true, validForm: true });
    const { checked, name, email, phone, message } = this.state;
    if (
      checked &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== ""
    ) {
      const payload = {
        name,
        email,
        phone,
        message,
      };
      console.log("valid form");

      this.formSubmitHandler(payload);
    } else {
      console.log("invalid form");
      console.log(this.state);
      this.setState({ validForm: false });
      toast.error(`Please fill all the fields`);
      return;
    }
  };

  render() {
    const { loading, validForm, name, email, phone, message } = this.state;
    TopBarProgress.config({
      barColors: {
        "0": "#253746",
        "1.0": "#253746",
      },
      shadowBlur: 5,
    });
    return (
      <div className="main">
        <Helmet>
          <title>Contact Us</title>

          <meta
            name="description"
            content="Contact us to get the kitchen of your dreams crafted!"
          />
          <meta
            name="keywords"
            content="Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops, Quartz worktop, Granite worktops, Marble worktops, Interior design, Luxury homes,  London, kitchen design UK, UK best kitchen, London"
          />
        </Helmet>

        <h1 className="d-none">GNF - Contact Us</h1>

        <Breadcrumb title="Contact Us" adclassName="border-0 mb-0" />

        <div className="container">
          <h1 className="page-title" style={{ fontSize: "25px" }}>
            Contact Us
          </h1>
          <h6 className="font-weight-bold">
            <a href="tel:02039359199">02039359199</a>
          </h6>
          <h6 className="font-weight-bold">
            <a href="tel:07823345500">07823345500</a>
          </h6>
          {/* <div className="row">
            <div className="col-lg-2">
              <h6>Phone No 1: </h6>
            </div>
            <div className="col-lg-2 d-flex">
              <div className="col-lg-12">
                <a href="tel:02039359199">02039359199</a>
                <h3 className="font-weight-bold">02039359199</h3>
              </div>
              <div className="col-lg-12">
                <a href="tel:07823345500">07823345500</a>
                <h3 className="font-weight-bold">07823345500</h3>
              </div>
            </div>
          </div> */}
        </div>
        <br />
        <div className="page-content pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-2 mb-lg-0">
                <h2 className="title mb-1">Locate us</h2>

                <div className="row" style={{ height: "90%" }}>
                  <div className="col-sm-10">
                    <iframe
                      style={{ width: "100%", height: "100%" }}
                      src="https://maps.google.com/maps?q=10+Chesterfield+Way%2C+Hayes+UB3+3NW%2C+UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-2 mb-lg-0 order-first order-md-last">
                <h2 className="title mb-1">Got Any Questions?</h2>
                <p className="mb-2">
                  Use the form below to get in touch with the sales team
                </p>

                <form action="#" className="contact-form mb-3">
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="cname" className="sr-only">
                        Name
                      </label>
                      <br />
                      {name === "" && loading && (
                        <span className="error text-danger">
                          Name is required*
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        id="cname"
                        placeholder="Name *"
                        required
                        name="name"
                        value={name}
                        onChange={this._handleChange}
                      />
                    </div>

                    <div className="col-sm-12">
                      <label htmlFor="cemail" className="sr-only">
                        Email
                      </label>
                      <br />
                      {email === "" && loading && (
                        <span className="error text-danger">
                          Email is required*
                        </span>
                      )}
                      <input
                        type="email"
                        className="form-control"
                        id="cemail"
                        placeholder="Email *"
                        required
                        name="email"
                        value={email}
                        onChange={this._handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="cphone" className="sr-only">
                        Phone
                      </label>
                      <br />
                      {phone === "" && loading && (
                        <span className="error text-danger">
                          Phone is required*
                        </span>
                      )}
                      <input
                        type="tel"
                        className="form-control"
                        id="cphone"
                        placeholder="Phone *"
                        required
                        name="phone"
                        value={phone}
                        onChange={this._handleChange}
                      />
                    </div>
                  </div>

                  <label htmlFor="cmessage" className="sr-only">
                    Message
                  </label>
                  <br />
                  {message === "" && loading && (
                    <span className="error text-danger">
                      Message is required*
                    </span>
                  )}
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="4"
                    id="cmessage"
                    required
                    name="message"
                    value={message}
                    onChange={this._handleChange}
                    placeholder="Message *"
                  ></textarea>

                  <div className="col-md-12">
                    <div
                      className="form-group form-check"
                      style={{ paddingLeft: "0.25rem" }}
                    >
                      <input
                        style={{ marginTop: "0.6rem" }}
                        name="check"
                        type="checkbox"
                        className="form-check-input"
                        id="check"
                        required=""
                        onChange={(e) => this.termsandconditions(e)}
                      />
                      <label
                        className="custome_lable form-check-label"
                        htmlFor="check"
                        style={{ fontSize: 12, marginLeft: "2%" }}
                      >
                        I accept the &nbsp;
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                        >
                          Terms & Conditions
                        </Link>
                        &nbsp; and &nbsp;
                        <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>
                          &nbsp; Privacy policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!this.state.checked}
                    onClick={this.submit}
                    className="btn btn-outline-primary-2 btn-minwidth-sm"
                  >
                    <span>SUBMIT</span>
                    <i className="icon-long-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div
            className="row section-pad"
            style={{ paddingLeft: "7.5%", paddingRight: "7.1%" }}
          >
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border _custom_padding">
              <p className="contact_paragraphs">
                <Link
                  to="/request-a-callback"
                  style={{ color: "rgb(0, 0, 0)", fontSize: "16px" }}
                >
                  Request a call back
                </Link>
              </p>
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-12 contact_border _custom_padding">
              <p
                className="contact_paragraphs"
                style={{ color: "rgb(0, 0, 0)", fontSize: "16px" }}
              >
                <Link
                  to="/contact"
                  style={{ color: "rgb(0, 0, 0)", fontSize: "16px" }}
                >
                  Send us a message
                </Link>
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border _custom_padding">
              <p className="contact_paragraphs">
                <Link
                  to="/request-free-consultation"
                  style={{ color: "rgb(0, 0, 0)", fontSize: "16px" }}
                >
                  Request free Consultation
                </Link>
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border _custom_padding">
              <p className="contact_paragraphs">
                <Link
                  to="/get-a-quote"
                  style={{ color: "rgb(0, 0, 0)", fontSize: "16px" }}
                >
                  Get FREE Online Quote
                </Link>
              </p>
            </div>
          </div>

          {/* <div id="map"><iframe
                    style={{width: '100%', height: '100%'}}
                  src="https://maps.google.com/maps?q=10+Chesterfield+Way%2C+Hayes+UB3+3NW%2C+UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe></div> */}
        </div>
      </div>
    );
  }
}

export default ContactOne;
