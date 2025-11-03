import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import TopBarProgress from "react-topbar-progress-indicator";

class BookShowroom extends Component {
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

  handleChange(e) {
    this.setState({ check: e.target.value });
  }

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
      `${import.meta.env.VITE_API_URL}/book-showroom-visit`,
      payload
    );
    this.props.history.push("/book-showroom-visit-thank-you-page");
    console.log(res);
    toast.success(`${res.data}`);
    this.setState({
      loading: false,
      validForm: false,
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  };

  submit = (e) => {
    this.setState({ loading: true, validForm: true });
    const { checked, name, email, phone, date, message } = this.state;
    if (
      checked &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      date !== "" &&
      message !== ""
    ) {
      const payload = {
        date,
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
    const {
      loading,
      validForm,
      name,
      email,
      phone,
      date,
      message,
    } = this.state;
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
        <section className=" contact-page">
          <div className="container">
            <div className="row section-b-space">
              <div className="book-appointment-form col-sm-12 col-md-5 col-offset-md-2">
                <h2>Book Showroom Visit</h2>
                <br />
                <form className="theme-form ">
                  <div className="form-row">
                    <div className="col-md-12">
                      <label className="custome_lable" htmlFor="name">
                        Name
                      </label>
                      <br />
                      {name === "" && loading && (
                        <span class="error text-danger">Name is required*</span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your name"
                        required=""
                        name="name"
                        value={name}
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
                        name="email"
                        placeholder="Email"
                        required=""
                        value={email}
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
                          Phone number is required*
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Enter your number"
                        required=""
                        value={phone}
                        onChange={this._handleChange}
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="custome_lable" htmlFor="review">
                        Date and Time
                      </label>
                      <br />
                      {date === "" && loading && (
                        <span class="error text-danger">Date is required*</span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        name="date"
                        placeholder="Data and Time"
                        required=""
                        value={date}
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
                        id="exampleFormControlTextarea1"
                        rows="6"
                        value={message}
                        name="message"
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
                          <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>
                            &nbsp; Privacy policy
                          </Link>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        id="subbmit_button"
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
          </div>
        </section>
      </div>
    );
  }
}

export default BookShowroom;
