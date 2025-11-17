import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../common/breadcrumb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import TopBarProgress from "react-topbar-progress-indicator";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      validForm: false,
      checked: false,
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
      isRedirect: false,
    };
  }

  handleCheckboxChange = (e) => {
    this.setState({ checked: e.target.checked });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async () => {
    const { name, email, phone, date, message, checked } = this.state;

    // Check if all required fields are filled and terms are accepted
    if (!checked || !name || !email || !phone || !date || !message) {
      this.setState({ validForm: false });
      toast.error("Please fill all the fields and accept the terms.");
      return;
    }

    const payload = { name, email, phone, date, message };
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/book-showroom-visit`, payload);
      toast.success(response.data);
      this.setState({ isRedirect: true });
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
    }
  };

  render() {
    const { name, email, phone, date, message, checked, isRedirect, loading } = this.state;

    if (isRedirect) {
      return <Navigate to="/book-showroom-visit-thank-you-page" replace={false} />;
    }

    return (
      <div className="main">
        <Helmet>
          <title>GNF - Book Showroom Appointment</title>
        </Helmet>

        <Breadcrumb title="Book Showroom Appointment" adClass="border-0 mb-0" />

        <div className="container">
          <h1 className="page-title" style={{ fontSize: "25px" }}>Book Showroom Appointment</h1>
        </div>

        <div className="page-content pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <p className="mb-2">Use the form below to book a showroom appointment</p>

                <form className="contact-form mb-3">
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name *"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-sm-12">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email *"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="phone" className="sr-only">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Phone *"
                        name="phone"
                        value={phone}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="date" className="sr-only">Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="date"
                        placeholder="Date & Time *"
                        name="date"
                        value={date}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="4"
                    id="message"
                    name="message"
                    value={message}
                    onChange={this.handleInputChange}
                    placeholder="Message *"
                    required
                  ></textarea>

                  <div className="col-md-12 form-check" style={{ paddingLeft: "0.25rem" }}>
                    <input
                      style={{ marginTop: "0.6rem" }}
                      name="check"
                      type="checkbox"
                      className="form-check-input"
                      id="check"
                      required
                      onChange={this.handleCheckboxChange}
                    />
                    <label className="custome_lable form-check-label" htmlFor="check" style={{ fontSize: 12, marginLeft: "2%" }}>
                      I accept the &nbsp;
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}>Terms & Conditions</Link> &nbsp; and &nbsp;
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>Privacy policy</Link>
                    </label>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-primary-2 btn-minwidth-sm"
                    onClick={this.handleSubmit}
                    disabled={!checked}
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

export default Page;