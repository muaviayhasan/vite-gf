import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Breadcrumb from "../../common/breadcrumb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import TopBarProgress from "react-topbar-progress-indicator";


class RequestConsultation extends Component {
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
      `${import.meta.env.VITE_API_URL}/request-consultation`,
      payload
    );
    this.props.history.push("/request-free-consultation-thank-you-page");
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
      this.props.history.push("/request-free-consultation");
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
          <title>GNF - Request Free Consultation</title>
        </Helmet>

        <h1 className="d-none">GNF - Request Free Consultation</h1>

        <Breadcrumb title="Request Free Consultation" adClass="border-0 mb-0" />

        <div className="container">
          <h1 className="page-title" style={{ fontSize: "25px" }}>
            Request Free Consultation
          </h1>
        </div>
        <br />

        <div className="page-content pb-0">
          <div className="container">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-lg-6">
                <h2 className="title mb-1">Got Any Questions?</h2>
                <p className="mb-2">
                  Use the form below to request free consultation
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
        </div>
      </div>
    );
  }
}

export default RequestConsultation;
