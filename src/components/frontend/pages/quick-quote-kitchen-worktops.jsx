import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Breadcrumb from "../../common/breadcrumb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import TopBarProgress from "react-topbar-progress-indicator";
import "../pages/Stone-worktops-components/bespoke_stone.css";
import { brown, grey } from "@material-ui/core/colors";
// import postGroup from "../../demoes/index5/post-group.jsx";
// import footer1 from "../../demoes/index5/cta.jsx";
export default class Kitchen_Worktops extends Component {
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
      a_b: 0,
      b_c: 0,
      c_d: 0,
      d_e: 0,
      f_g: 0,
      g_h: 0,
      i_j: 0,
      j_k: 0,
      material_type: [
        { id: 1, name: "Granite", state: "No" },
        { id: 2, name: "Quartz", state: "No" },
        { id: 3, name: "Marble", state: "No" },
      ],

      // add button and id
      btn_state: [
        { id: 1, text: "select", name: "Upstands", state: "No" },
        { id: 2, text: "select", name: "Sink cutouts", state: "No" },
        { id: 3, text: "select", name: "Hob cut-out", state: "No" },
        { id: 4, text: "select", name: "Drainage Grooves", state: "No" },
      ],
      text: "Slect",
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

    // previous logic for button

    // if (
    //   this.state.name !== "" &&
    //   this.state.email !== "" &&
    //   this.state.phone !== ""
    // ) {
    //   let checked = true;
    //   let message = "valid";
    //   this.setState({ checked, message });
    // } else {
    //   let checked = false;
    //   // btn_check = false;

    //   this.setState({ checked });
    // }

    // here logic end
  };

  formSubmitHandler = async (payload) => {
    console.log(payload);
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/request-measurements`,
      // `${import.meta.env.VITE_API_URL}/request-callback`,
      payload
    );
    this.props.history.push("/quick-quote-thank-you-page");
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
      console.log("valid form");
      let state = this.state;
      // this.formSubmitHandler(payload);
      this.formSubmitHandler(state);
    } else {
      console.log("invalid form");
      console.log(this.state);
      this.setState({ validForm: false });
      toast.error(`Please fill all the fields`);
      return;
    }
  };

  changeText = (id) => {
    //first i get value from the state
    let btn_state = this.state.btn_state;
    // first  i need to get old text
    if (btn_state[id].text === "select") {
      btn_state[id].text = "unSelect";
      btn_state[id].state = "Yes";
    } else {
      btn_state[id].text = "select";
      btn_state[id].state = "No";
    }

    this.setState({ btn_state });
  };

  changeMaterial = (id) => {
    //first i get value from the state
    let material_type = this.state.material_type;
    console.log(id);

    // loop over the array
    for (var j = 0; j < material_type.length; j++) {
      if (material_type[j].id === id) {
        material_type[j].state = "Yes";
      } else {
        material_type[j].state = "No";
      }
    }

    this.setState({ material_type });
  };

  handleCheck = (e) => {
    console.log(e.target.value);
    // if false => e.target.value

    if (e.target.value === "true") {
      console.log("hello");
      let checked = false;
      // btn_check = false;
      this.setState({ checked });
    } else {
      if (
        this.state.name !== "" &&
        this.state.email !== "" &&
        this.state.phone !== ""
      ) {
        let checked = true;
        let message = "valid";
        this.setState({ checked, message });
      }

      // if true => e.target.value
    }
  };
  render() {
    const { text } = this.state;
    const { loading, validForm, name, email, phone, message } = this.state;
    TopBarProgress.config({
      barColors: {
        "0": "#253746",
        "1.0": "#253746",
      },
      shadowBlur: 5,
    });

    return (
      <>
        {/* {this.computeResult} */}
        {/* {this.checkForm()} */}
        {/* 1st image component starts here */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mt-4 borrder-bootom HANDICRAFTS_h2">
                GET A FREE ONLINE QUOTE!
              </h1>
            </div>
          </div>
        </div>
        {/* 1st image component ends here */}
        {/* 2nd aboutus component starts here */}
        <div className="">
          <div className="container">
            <div className="row mt-8 mb-4">
              <div className="col-lg-6 col-sm-12 ">
                <span
                  className="what_make_heading"
                  style={{
                    fontSize: "4em",
                    lineHeight: "1em",
                    fontWeight: "600",
                    color: "#243746",
                  }}
                >
                  KNOW ABOUT MATERIALS
                </span>
                <br />
                <br />
                <span className="about_us_stone_inner">
                  GLASS & FUSION proudly delivers the highest quality material
                  and best workmanship to the heart of your home. We have over
                  20 years experience in Templating, Installation and
                  Fabrication to deliver best quality bespoke kitchen worktops
                  from granite,quartz,marble and glass splashbacks for both
                  residential and commercial properties.
                </span>
                <button className="btn btn-dark-ch btn-heading">
                  <Link className="text-white" to="/about-us">
                    READ MORE
                  </Link>
                </button>
              </div>
              <div className="col-lg-6 col-sm-12 order-first order-md-last mb-4 style_col_ch">
                <div className="row ch_hight">
                  <div className="col-6 pr-0 ch_hight">
                    <div className="row pl-0 mr-1 ch_hight">
                      <div className="col-12">
                        <img
                          className="ch_hight"
                          src="/assets/images/gnf_new/quote/Granite_dummy.png"
                          alt="..."
                        />
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/search/material=Stone&material_type=Granite&effect=all&colour=all&brand=all&price_band=0`}
                        >
                          <button className="stone_btn">GRANITE</button>
                        </Link>
                      </div>
                      <div className="col-12 mt-1">
                        <img
                          className="ch_hight"
                          src="/assets/images/gnf_new/quote/Quartz_dummy.png"
                          alt="..."
                        />
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/search/material=Stone&material_type=Quartz&effect=all&colour=all&brand=all&price_band=0`}
                        >
                          <button className="stone_btn">QUARTZ</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 img-stone-2">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/search/material=Stone&material_type=Marble&effect=all&colour=all&brand=all&price_band=0`}
                    >
                      <button className="stone_btn">MARBLE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="what-make-hr" />
        </div>
        {/* 2nd aboutus component ends here */}
        {/* 3rd glassrange component starts here */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <h1 className="step_h">STEP 1</h1>
            </div>
            <div className="col-12">
              <h1 className="mobile_text_center1">SELECT SHAPES & CUTS</h1>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-3 col-12">
                  <div className="step_1_box">
                    <img
                      className="ch_hight"
                      src="/assets/images/gnf_new/quote/Upstands.png"
                      alt="..."
                    />
                    <div className="row step_1_box_bttom">
                      <div className="col-8 step_1_h">UPSTANDS</div>
                      <div
                        className={
                          this.state.btn_state[0].state === "Yes"
                            ? "col-4 p-0 text-center btn_div select_btn"
                            : "col-4 p-0 text-center btn_div"
                        }
                      >
                        <button
                          onClick={() => {
                            this.changeText(0);
                          }}
                          className="slect_btn"
                        >
                          {this.state.btn_state[0].text}
                        </button>
                        {/* <button className="slect_btn">Slected</button> */}
                        {/* <button className="slect_btn">Slected</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="step_1_box">
                    <img
                      className="ch_hight"
                      src="/assets/images/gnf_new/quote/SinkCutouts.png"
                      alt="..."
                    />
                    <div className="row step_1_box_bttom">
                      <div className="col-8 step_1_h">SINK CUTOUTS</div>
                      <div
                        className={
                          this.state.btn_state[1].state === "Yes"
                            ? "col-4 p-0 text-center btn_div select_btn"
                            : "col-4 p-0 text-center btn_div"
                        }
                      >
                        <button
                          onClick={() => {
                            this.changeText(1);
                          }}
                          className="slect_btn"
                        >
                          {this.state.btn_state[1].text}
                        </button>
                        {/* <button className="slect_btn">Slected</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="step_1_box">
                    <img
                      className="ch_hight"
                      src="/assets/images/gnf_new/quote/HubCutout.png"
                      alt="..."
                    />
                    <div className="row step_1_box_bttom">
                      <div className="col-8 step_1_h">HOB CUT-OUT</div>
                      <div
                        className={
                          this.state.btn_state[2].state === "Yes"
                            ? "col-4 p-0 text-center btn_div select_btn"
                            : "col-4 p-0 text-center btn_div"
                        }
                      >
                        <button
                          onClick={() => {
                            this.changeText(2);
                          }}
                          className="slect_btn"
                        >
                          {this.state.btn_state[2].text}
                        </button>
                        {/* <button className="slect_btn">Slected</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="step_1_box">
                    <img
                      className="ch_hight"
                      src="/assets/images/gnf_new/quote/DrainageGrooves.png"
                      alt="..."
                    />
                    <div className="row step_1_box_bttom">
                      <div className="col-8 step_1_h">DRAINAGE GROOVES</div>
                      <div
                        className={
                          this.state.btn_state[3].state === "Yes"
                            ? "col-4 p-0 text-center btn_div select_btn"
                            : "col-4 p-0 text-center btn_div"
                        }
                      >
                        <button
                          onClick={() => {
                            this.changeText(3);
                          }}
                          className="slect_btn"
                        >
                          {this.state.btn_state[3].text}
                        </button>
                        {/* <button className="slect_btn">Slected</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 mb-4">
          <hr className="what-make-hr" />
        </div>
        {/* 3rd glassrange component ends here */}
        {/* 4th what makes component starts here */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="step_h">STEP 2</h1>
            </div>
            <div className="col-12">
              <h1 className="mobile_text_center1">SELECT MATERIAL TYPE</h1>
            </div>
            <div className="col-12 mobile_text_center">
              <div className="form-check form-check-inline">
                <button
                  type="button"
                  className={
                    this.state.material_type[0].state === "Yes"
                      ? "btn btn-outline-primary m-3 ml-0 btn_hover_ch"
                      : "btn btn-outline-primary m-3 ml-0"
                  }
                  onClick={() => {
                    this.changeMaterial(1);
                  }}
                >
                  <label
                    className="form-check-label lebel_step_2"
                    htmlFor="inlineRadio1"
                  >
                    GRANITE
                  </label>
                </button>
              </div>
              <div className="form-check form-check-inline">
                <button
                  type="button"
                  className={
                    this.state.material_type[1].state === "Yes"
                      ? "btn btn-outline-primary m-3 btn_hover_ch"
                      : "btn btn-outline-primary m-3"
                  }
                  onClick={() => {
                    this.changeMaterial(2);
                  }}
                >
                  <label
                    className="form-check-label lebel_step_2"
                    htmlFor="inlineRadio2"
                  >
                    QUARTZ
                  </label>
                </button>
              </div>
              <div className="form-check form-check-inline">
                <button
                  type="button"
                  className={
                    this.state.material_type[2].state === "Yes"
                      ? "btn btn-outline-primary m-3 btn_hover_ch"
                      : "btn btn-outline-primary m-3"
                  }
                  onClick={() => {
                    this.changeMaterial(3);
                  }}
                >
                  <label
                    className="form-check-label lebel_step_2"
                    htmlFor="inlineRadio3"
                  >
                    MARBLE
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 mb-4">
          <hr className="what-make-hr" />
        </div>
        {/* 4th what makes component ends here */}
        {/* 5th Top trending component ends here */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="step_h">STEP 3</h1>
            </div>
            <div className="col-12">
              <h1 className="mobile_text_center1">MEASUREMENTS</h1>
            </div>
            <div className="col-12">
              <p className="MEASUREMENTS_p">
                All measurements are in millimeters. Leave values zero if not
                applicable
                <br />
                (Conversion scale: 1 inch = 2.54 cm = 25.4 mm).
              </p>
            </div>
            <div className="col-12 mt-4">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <img
                    src="/assets/images/gnf_new/quote/SampleImage.png"
                    alt="..."
                  />
                </div>
                <div className="col-lg-5 col-12">
                  <div className="top-quote-measurement-form">
                    <h1 className="text-center">SPECIFY YOUR MEASUREMENTS</h1>
                    <form
                      action="#"
                      className="pl-5 pr-5"
                      method=""
                      id="form-quote"
                    >
                      <div className="row align-items-center">
                        <div className="col-4">
                          <label
                            htmlFor="inputPassword6"
                            className="col-form-label"
                          >
                            01. <span className="form_input_label">A to B</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type=""
                            id="inputPassword6"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            //add name setProperty
                            name="a_b"
                            onChange={this._handleChange}
                          />
                        </div>
                        <div className="col-2">
                          <span
                            id="passwordHelpInline"
                            className="form_input_label1 form-text"
                          >
                            mm
                          </span>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-4">
                          <label
                            htmlFor="inputPassword6"
                            className="col-form-label"
                          >
                            02. <span className="form_input_label">B to C</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type=""
                            id="inputPassword6"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            //add name setProperty
                            name="b_c"
                            onChange={this._handleChange}
                          />
                        </div>
                        <div className="col-2">
                          <span
                            id="passwordHelpInline"
                            className="form_input_label1 form-text"
                          >
                            mm
                          </span>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-4">
                          <label
                            htmlFor="inputPassword6"
                            className="col-form-label"
                          >
                            03. <span className="form_input_label">C to D</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type=""
                            id="inputPassword6"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            //add name setProperty
                            name="c_d"
                            onChange={this._handleChange}
                          />
                        </div>
                        <div className="col-2">
                          <span
                            id="passwordHelpInline"
                            className="form_input_label1 form-text"
                          >
                            mm
                          </span>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-4">
                          <label
                            htmlFor="inputPassword6"
                            className="col-form-label"
                          >
                            04. <span className="form_input_label">D to E</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type=""
                            id="inputPassword6"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            //add name setProperty
                            name="d_e"
                            onChange={this._handleChange}
                          />
                        </div>
                        <div className="col-2">
                          <span
                            id="passwordHelpInline"
                            className="form_input_label1 form-text"
                          >
                            mm
                          </span>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-4">
                          <label
                            htmlFor="inputPassword6"
                            className="col-form-label"
                          >
                            05. <span className="form_input_label">F to G</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type=""
                            id="inputPassword6"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            //add name setProperty
                            name="f_g"
                            onChange={this._handleChange}
                          />
                        </div>
                        <div className="col-2">
                          <span
                            id="passwordHelpInline"
                            className="form_input_label1 form-text"
                          >
                            mm
                          </span>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-4">
                          <label
                            htmlFor="inputPassword6"
                            className="col-form-label"
                          >
                            06. <span className="form_input_label">G to H</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type=""
                            id="inputPassword6"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            //add name setProperty
                            name="g_h"
                            onChange={this._handleChange}
                          />
                        </div>
                        <div className="col-2">
                          <span
                            id="passwordHelpInline"
                            className="form_input_label1 form-text"
                          >
                            mm
                          </span>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-4">
                          <label
                            htmlFor="inputPassword6"
                            className="col-form-label"
                          >
                            07. <span className="form_input_label">I to J</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type=""
                            id="inputPassword6"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            //add name setProperty
                            name="i_j"
                            onChange={this._handleChange}
                          />
                        </div>
                        <div className="col-2">
                          <span
                            id="passwordHelpInline"
                            className="form_input_label1 form-text"
                          >
                            mm
                          </span>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-4">
                          <label
                            htmlFor="inputPassword6"
                            className="col-form-label"
                          >
                            08. <span className="form_input_label">J to K</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type=""
                            id="inputPassword6"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            //add name setProperty
                            name="j_k"
                            onChange={this._handleChange}
                          />
                        </div>
                        <div className="col-2">
                          <span
                            id="passwordHelpInline"
                            className="form_input_label1 form-text"
                          >
                            mm
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 mb-4">
          <hr className="what-make-hr" />
        </div>
        {/* 5th Top trending component ends here */}
        {/* 7th Over 400 component starts here */}
        <div id="quote-more-one" className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="step_h">STEP 4</h1>
              </div>
              <div className="col-12">
                <h3 className="">GET FREE QUOTE</h3>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="form-inner">
                      <form action="#" className="contact-form">
                        <div className="row">
                          <div className="col-sm-12">
                            {name === "" && loading && (
                              <span className="error text-danger">
                                Name is required*
                              </span>
                            )}
                            <input
                              type="text"
                              className="form-control"
                              id="cname"
                              placeholder="Full Name *"
                              required
                              name="name"
                              value={name}
                              onChange={this._handleChange}
                            />
                          </div>

                          <div className="col-sm-12">
                            {email === "" && loading && (
                              <span className="error text-danger">
                                Email is required*
                              </span>
                            )}
                            <input
                              type="email"
                              className="form-control"
                              id="cemail"
                              placeholder="Email Address *"
                              required
                              name="email"
                              value={email}
                              onChange={this._handleChange}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12">
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
                              autoComplete="off"
                              onChange={this._handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-check pt-0 pb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            onChange={this.handleCheck}
                            value={this.state.checked}
                            id="flexCheckDefault"
                            style={{ marginTop: "7px" }}
                          />
                          <label
                            className="custome_lable1 ml-3 form-check-label"
                            htmlFor="check"
                          >
                            By Submitting the quote form your agree with our
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}
                            >
                              &nbsp; Privacy policy &
                            </Link>
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                            >
                              &nbsp; T&C
                            </Link>
                          </label>
                        </div>
                        <button
                          type="button"
                          disabled={!this.state.checked}
                          onClick={this.submit}
                          className="btn  minwidth-sm form-control btn-calcu"
                        >
                          <span className="send-calculate">
                            SEND AND CALCULATE
                          </span>
                        </button>

                        <div className="col-md-12 quote-form-text p-0">
                          <span className="note_h">Note:</span>
                          The Online Calculation is an estimated
                          price,calculated based on standard material costs.
                          <br />
                          we will contact you for further requirements
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 7th Over 400 component ends here */}
        <div className="container">
          <div className="cta cta-separator mb-1">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="cta-wrapper cta-text text-center"
                  style={{
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                  }}
                >
                  <h3 className="cta-title">Follow us</h3>
                  <p className="cta-desc">
                    Our social media channels are regularly updated with, so do
                    not forget to follow us.{" "}
                  </p>

                  <div className="social-icons social-icons-colored justify-content-center">
                    <a
                      href="https://facebook.com/glassandfusion"
                      className="social-icon social-facebook"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/glassandfusion/"
                      className="social-icon social-instagram"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram"></i>
                    </a>
                    <a
                      href="https://www.houzz.co.uk/photos/users/glassandfusionltd/"
                      className="social-icon social-youtube"
                      title="Houze"
                      target="_blank"
                    >
                      <i className="icon-houzz"></i>
                    </a>
                    <a
                      href="https://www.pinterest.co.uk/glassandfusion/"
                      className="social-icon social-pinterest"
                      title="Pinterest"
                      target="_blank"
                    >
                      <i className="icon-pinterest"></i>
                    </a>
                    <a
                      href="https://twitter.com/glassandfusion"
                      className="social-icon social-twitter"
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="cta-wrapper text-center"
                  style={{
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                  }}
                >
                  <h3 className="cta-title">Newsletter</h3>
                  <p className="cta-desc">
                    Subscribe to our newsletter for latest deals and special
                    offers
                  </p>

                  <form action="#">
                    <div
                      className="input-group"
                      onFocus={this.ctaFormFocusIn}
                      onBlur={this.ctaFormFocusOut}
                    >
                      <input
                        type="email"
                        className="form-control email_ch"
                        placeholder="Enter your Email Address"
                        aria-label="Email Adress"
                        required
                      />
                      <div className="input-group-append btn_ch_div">
                        <button
                          className="btn btn-primary btn_ch btn-rounded"
                          type="submit"
                        >
                          <i className="icon-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
