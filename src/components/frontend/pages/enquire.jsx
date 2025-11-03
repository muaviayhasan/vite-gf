import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import TopBarProgress from "react-topbar-progress-indicator";

class Enquire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      validForm: false,
      checked: false,
      productUrl: localStorage.getItem("enquireProduct")
        ? localStorage.getItem("enquireProduct")
        : "",
      name: "",
      email: "",
      phone: "",
      message: ""
    };
    this.termsandconditions = this.termsandconditions.bind(this);
  }

  termsandconditions = e => {
    if (e.target.checked === true) {
      this.setState({
        ...this.state,
        checked: true
      });
    } else {
      this.setState({
        ...this.state,
        checked: false
      });
    }
  };

  handleChange(e) {
    this.setState({ check: e.target.value });
  }

  _handleChange = evt => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  };

  formSubmitHandler = async payload => {
    console.log(payload);
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/enquire-product`,
      payload
    );
    console.log(res);
    toast.success(`${res.data}`);
    // localStorage.removeItem("productUrl");
    this.setState({
      loading: false,
      validForm: false,
      productUrl: "",
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  submit = e => {
    this.setState({ loading: true, validForm: true });
    const { checked, productUrl, name, email, phone, message } = this.state;
    if (
      checked &&
      productUrl !== "" &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== ""
    ) {
      const payload = {
        productUrl,
        name,
        email,
        phone,
        message
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
      productUrl,
      name,
      email,
      phone,
      message
    } = this.state;
    TopBarProgress.config({
      barColors: {
        "0": "#253746",
        "1.0": "#253746"
      },
      shadowBlur: 5
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
                <h2 style={{ "font-size": "23px" }}>Enquire Product</h2>
                <br />
                <form className="theme-form ">
                  <div className="form-row">
                    <div className="col-md-12">
                      <label className="custome_lable" htmlFor="name">
                        Product Url
                      </label>
                      <br />
                      {productUrl === "" && loading && (
                        <span class="error text-danger">   
                          Product Url is required*
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={productUrl}
                        disabled
                      />
                    </div>

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
                        required
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
                        id="email"
                        placeholder="Email"
                        required
                        name="email"
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
                          Phone is required*
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your number"
                        required
                        name="phone"
                        value={phone}
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
                          onChange={e => this.termsandconditions(e)}
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

export default Enquire;
