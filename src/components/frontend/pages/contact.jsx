import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import TopBarProgress from "react-topbar-progress-indicator";

class Contact extends Component {
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
      <div>
        {loading && validForm && <TopBarProgress />}
        <Helmet>
          <title>{`GNF - ${this.props.title}`}</title>
        </Helmet>
        {/*Forget Password section*/}
        <section className=" contact-page section-b-space ">
          <div className="container">
            <div className="row section-b-space pad">
              <div className="col-lg-6 form contact-map">
                <div className="col-lg-12">
                  <form className="theme-form">
                    <div className="form-row">
                      <div className="col-md-12">
                        <label className="custome_lable" htmlFor="name">
                          Name
                        </label>
                        <br />
                        {name === "" && loading && (
                          <span class="error text-danger">
                            Name is required*
                          </span>
                        )}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your name"
                          required
                          name="name"
                          value={name}
                          onChange={this._handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="custome_lable" htmlFor="review">
                          Phone number
                        </label>
                        <br />
                        {phone === "" && loading && (
                          <span class="error text-danger">
                            Phone is required*
                          </span>
                        )}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your number"
                          required
                          name="phone"
                          value={phone}
                          onChange={this._handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="custome_lable" htmlFor="email">
                          Email
                        </label>
                        <br />
                        {email === "" && loading && (
                          <span class="error text-danger">
                            Email is required*
                          </span>
                        )}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          required
                          name="email"
                          value={email}
                          onChange={this._handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="custome_lable" htmlFor="review">
                          Write Your Message
                        </label>
                        <br />
                        {message === "" && loading && (
                          <span class="error text-danger">
                            Message is required*
                          </span>
                        )}
                        <textarea
                          className="form-control"
                          placeholder="Write Your Message"
                          rows="6"
                          name="message"
                          value={message}
                          onChange={this._handleChange}
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <div class="form-group form-check">
                          <input
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
                          >
                            I accept the &nbsp;
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                            >
                              Terms & Conditions
                            </Link>
                            &nbsp; and &nbsp;
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}
                            >
                              &nbsp; Privacy policy
                            </Link>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="btn btn-solid"
                          type="button"
                          disabled={!this.state.checked}
                          onClick={this.submit}
                        >
                          Send Your Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 map contact-map">
                <iframe
                  src="https://maps.google.com/maps?q=10+Chesterfield+Way%2C+Hayes+UB3+3NW%2C+UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="row section-pad">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border">
                <div className="contact-icon">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/icon/phone.png`}
                    alt="Generic placeholder image"
                  />
                  <p className="contact_paragraphs_up contact_paragraphs_first">
                    Contact Us
                  </p>
                </div>
                <div className="media-body">
                  <p className="contact_paragraphs_up">
                    <a
                      href="tel:02039359199"
                      style={{ color: "#000000", "font-size": "20px" }}
                    >
                      02039359199
                    </a>

                    <br />
                    <a
                      href="tel:07823345500"
                      style={{ color: "#000000", "font-size": "20px" }}
                    >
                      07823345500
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border">
                <div className="contact-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <p className="contact_paragraphs_up contact_paragraphs_first">
                    Address
                  </p>
                </div>
                <div className="media-body">
                  <p className="contact_paragraphs_up">
                    <a
                      href="https://www.google.com/maps/place/Glass+%26+Fusion+Ltd/@51.506069,-0.409503,16z/data=!4m5!3m4!1s0x0:0x27907a8aac63a82b!8m2!3d51.5060693!4d-0.4095027?hl=en"
                      target="blank"
                      style={{ color: "#000000", "font-size": "20px" }}
                    >
                      Unit 10 Chesterfield Way,
                      <br /> Hayes, UB3 3NW
                      <br /> United Kingdom
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border">
                <div className="contact-icon">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/icon/email.png`}
                    alt="Generic placeholder image"
                  />
                  <p className="contact_paragraphs_up contact_paragraphs_first">
                    Email Us
                  </p>
                </div>
                <div className="media-body">
                  <p className="contact_paragraphs_up">
                    {" "}
                    <a
                      href="mailto:info@glassfusionltd.co.uk"
                      style={{ color: "#000000", "font-size": "20px" }}
                    >
                      info@glassfusionltd.co.uk
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border">
                <div className="media-body">
                  <p className="contact_paragraphs_up ">Follow us at</p>
                  <div className="contact_paragraphs_first">
                    <a class="btn btn-social-icon btn-twitter" href="#">
                      <span class="fa fa-twitter"></span>
                    </a>
                    <a
                      class="btn btn-social-icon btn-instagram"
                      href="https://www.instagram.com/glassandfusion/"
                      target="blank"
                    >
                      <span class="fa fa-instagram"></span>
                    </a>
                    <a
                      class="btn btn-social-icon btn-facebook"
                      href="https://facebook.com/glassandfusion"
                      target="blank"
                    >
                      <span class="fa fa-facebook"></span>
                    </a>
                    <a
                      class="btn btn-social-icon btn-instagram"
                      href="https://www.houzz.co.uk/photos/users/glassandfusionltd/"
                      target="blank"
                    >
                      <span class="fa fa-houzz"></span>
                    </a>
                    <a class="btn btn-social-icon btn-pinterest" href="#">
                      <span class="fa fa-pinterest"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row section-pad">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border">
                <p className="contact_paragraphs">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/request-a-callback`}
                    style={{ color: "#000000", "font-size": "20px" }}
                  >
                    &nbsp; Request a call back
                  </Link>
                </p>
              </div>
              <div className="col-lg-3  col-md-4 col-sm-6 col-xs-12 contact_border">
                <p className="contact_paragraphs">Send us a message</p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border">
                <p className="contact_paragraphs">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/request-free-consultation`}
                    style={{ color: "#000000", "font-size": "20px" }}
                  >
                    &nbsp; Request free Consultation
                  </Link>
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 contact_border ">
                <p className="contact_paragraphs">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/get-a-quote`}
                    style={{ color: "#000000", "font-size": "20px" }}
                  >
                    &nbsp; Get FREE Online Quote
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
