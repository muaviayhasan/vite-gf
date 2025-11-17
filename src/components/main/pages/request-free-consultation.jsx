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
      checked: false,
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  // Handle checkbox change for terms & conditions
  termsandconditions = (e) => {
    this.setState({ checked: e.target.checked });
  };

  // Handle input changes dynamically
  _handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  // Submit form data to the backend API
  formSubmitHandler = async (payload) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/request-consultation`, payload);
      toast.success(res.data);
      this.props.history.push("/request-free-consultation-thank-you-page");
      this.setState({
        loading: false,
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      this.setState({ loading: false });
      toast.error("There was an error submitting the form. Please try again.");
    }
  };

  // Submit form
  submit = () => {
    const { checked, name, email, phone, message } = this.state;
    if (checked && name && email && phone && message) {
      this.setState({ loading: true });
      const payload = { name, email, phone, message };
      this.formSubmitHandler(payload);
    } else {
      toast.error("Please fill all the fields and accept the terms.");
    }
  };

  render() {
    const { loading, checked, name, email, phone, message } = this.state;
    TopBarProgress.config({
      barColors: { "0": "#253746", "1.0": "#253746" },
      shadowBlur: 5,
    });

    return (
      <div className="main">
        <Helmet>
          <title>Request Free Consultation</title>
          <meta
            name="description"
            content="Request a free consultation to discuss your next project!"
          />
          <meta
            name="keywords"
            content="consultation, free consultation, home design, interior design"
          />
        </Helmet>

        <h1 className="d-none">Request Free Consultation</h1>
        <Breadcrumb title="Request Free Consultation" adClass="border-0 mb-0" />

        <div className="container">
          <h1 className="page-title" style={{ fontSize: "25px" }}>
            Request Free Consultation
          </h1>
        </div>
        <br />

        <div className="page-content pb-0">
          <div className="container">
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
              <div className="col-lg-6">
                <h2 className="title mb-1">Got Any Questions?</h2>
                <p className="mb-2">Use the form below to request a free consultation</p>

                <form className="contact-form mb-3">
                  {/* Name Input */}
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="cname" className="sr-only">Name</label>
                      {name === "" && loading && <span className="error text-danger">Name is required*</span>}
                      <input
                        type="text"
                        className="form-control"
                        id="cname"
                        placeholder="Name *"
                        name="name"
                        value={name}
                        onChange={this._handleChange}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="cemail" className="sr-only">Email</label>
                      {email === "" && loading && <span className="error text-danger">Email is required*</span>}
                      <input
                        type="email"
                        className="form-control"
                        id="cemail"
                        placeholder="Email *"
                        name="email"
                        value={email}
                        onChange={this._handleChange}
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="cphone" className="sr-only">Phone</label>
                      {phone === "" && loading && <span className="error text-danger">Phone is required*</span>}
                      <input
                        type="tel"
                        className="form-control"
                        id="cphone"
                        placeholder="Phone *"
                        name="phone"
                        value={phone}
                        onChange={this._handleChange}
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="cmessage" className="sr-only">Message</label>
                      {message === "" && loading && <span className="error text-danger">Message is required*</span>}
                      <textarea
                        className="form-control"
                        cols="30"
                        rows="4"
                        id="cmessage"
                        name="message"
                        value={message}
                        onChange={this._handleChange}
                        placeholder="Message *"
                      ></textarea>
                    </div>
                  </div>

                  {/* Terms and Conditions Checkbox */}
                  <div className="col-md-12">
                    <div className="form-group form-check" style={{ paddingLeft: "0.25rem" }}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check"
                        required
                        checked={checked}
                        onChange={this.termsandconditions}
                      />
                      <label
                        className="custome_lable form-check-label"
                        htmlFor="check"
                        style={{ fontSize: 12, marginLeft: "2%" }}
                      >
                        I accept the &nbsp;
                        <Link to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}>Terms & Conditions</Link>
                        &nbsp; and &nbsp;
                        <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>Privacy Policy</Link>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    disabled={!checked}
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
