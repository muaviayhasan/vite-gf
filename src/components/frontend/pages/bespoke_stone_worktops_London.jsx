import React, { Component } from "react";
import "../pages/Stone-worktops-components/bespoke_stone.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import TopBarProgress from "react-topbar-progress-indicator";
import { blogSlider } from "../../demoes/index5/settings";
import PostTwo from "../../features/post/post-two.jsx";
import OwlCarousel from "../../features/owl-carousel";
// import postGroup from "../../demoes/index5/post-group.jsx";
// import footer1 from "../../demoes/index5/cta.jsx";
class bespoke_stone extends Component {
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
      town: "",
      postcode: "",
      material_val: "",
      file: null,
    };
    this.termsandconditions = this.termsandconditions.bind(this);
  }
  ctaFormFocusIn() {
    document
      .querySelector(".input-group")
      .querySelector(".btn").style.borderColor = "#c66";
  }

  ctaFormFocusOut() {
    document
      .querySelector(".input-group")
      .querySelector(".btn").style.borderColor = "#e1e1e1";
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
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/request-quick-query`,
      this.state.selectedFile
    );

    if (res.data.status === true) {
      console.log("yeaaaaaaaaaaaaaah upload");
      payload.file = res.data.path;
      // now send payload
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/request-quick-query`,
        payload
      );

      this.props.history.push("/quick-enquiry-stone-worktop-thank-you-page");
      console.log(res);
      toast.success(`${response}`);
      this.setState({
        loading: false,
        validForm: false,
        name: "",
        email: "",
        phone: "",
        message: "",
        town: "",
        postcode: "",
        selectedFile: null,
      });
    } else {
      toast.error(`${res.data}`);
    }
  };

  submit = (e) => {
    this.setState({ loading: true, validForm: true });
    const {
      checked,
      name,
      email,
      phone,
      town,
      postcode,
      material_val,
      file,
    } = this.state;
    if (
      checked &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      town !== "" &&
      postcode !== "" &&
      material_val !== ""
    ) {
      const payload = {
        name,
        email,
        phone,
        town,
        postcode,
        material_val,
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
  changeMaterial = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Select Material Type") {
      let material_val = "";
      this.setState({ material_val });
    } else {
      let material_val = e.target.value;
      this.setState({ material_val });
    }
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
        // let message = "valid";
        this.setState({ checked });
      }

      // if true => e.target.value
    }
  };

  handleFile = (event) => {
    let data = new FormData();
    data.append("file", event.target.files[0]);

    this.setState({
      selectedFile: data,
    });
  };

  render() {
    const {
      loading,
      validForm,
      name,
      email,
      phone,
      message,
      town,
      postcode,
    } = this.state;
    const posts = this.props.posts.slice(0, 4);
    TopBarProgress.config({
      barColors: {
        "0": "#253746",
        "1.0": "#253746",
      },
      shadowBlur: 5,
    });
    return (
      <>
        {/* 1st image component starts here */}
        <div className="" id="bespoke-stone">
          <div className="container bespoke-inner-stone-text col-xs-12">
            <h1 className="heading-bespoke-stone col-xs-12">
              BESPOKE
              <br />
              KITCHEN
              <br />
              WORKTOPS
            </h1>
            <span className="col-sm-12 span_hero">
              They are tailored to your requirements
            </span>
            <br />
            <button className="btn-light contact-btn mt-3">
              <Link to="/contact">CONTACT</Link>
            </button>
            <br />
            <button className="btn btn-light mt-3 btn-online-quote">
              <Link className="text-muted" to="/get-a-quote">
                GET FREE <br /> ONLINE QUOTE
              </Link>
            </button>
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
                  WHAT MAKES US CREATIVE ?
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
                <div className="row ch_hight new_hight_for_mobile">
                  <div className="col-6 pr-0 ch_hight">
                    <div className="row pl-0 mr-1 ch_hight">
                      <div className="col-12">
                        <a
                          href={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/digital-print`}
                        >
                          <img
                            className="ch_hight"
                            src="/assets/images/gnf_new/home/Bannerimage1.jpg"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="col-12 mt-1">
                        <a
                          href={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/metallic-effect`}
                        >
                          <img
                            className="ch_hight"
                            src="/assets/images/gnf_new/home/Bannerimage2.jpg"
                            alt="..."
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 ch_hight">
                    <a
                      href={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/shimmer-effect`}
                    >
                      <div className="img-stone-2"></div>
                      {/* <img
                      src="/assets/images/gnf_new/home/Bannerimage3.jpg"
                      alt="..."
                    /> */}
                    </a>
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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center HANDICRAFTS_h">OUR HANDICRAFTS</h1>
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <img
                src="/assets/images/gnf_new/home/handicrafts1.png"
                alt="..."
              />
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <img
                src="/assets/images/gnf_new/home/handicrafts2.png"
                alt="..."
              />
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <img
                src="/assets/images/gnf_new/home/handicrafts3.png"
                alt="..."
              />
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <img
                src="/assets/images/gnf_new/home/handicrafts4.png"
                alt="..."
              />
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <img
                src="/assets/images/gnf_new/home/handicrafts5.png"
                alt="..."
              />
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <img
                src="/assets/images/gnf_new/home/handicrafts6.png"
                alt="..."
              />
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <img
                src="/assets/images/gnf_new/home/handicrafts7.png"
                alt="..."
              />
            </div>
            <div className="col-lg-3 col-6 mt-2">
              <img
                src="/assets/images/gnf_new/home/handicrafts8.png"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="container mt-4 mb-4">
          <hr className="what-make-hr" />
        </div>
        {/* 3rd glassrange component ends here */}
        {/* 4th what makes component starts here */}
        <div className=" mb-4">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-6 col-12 pr-8">
                <h1 className="HANDICRAFTS_h">WHAT MAKES US TRUST WORTHY?</h1>
                <br />
                <span className="about_us_stone_inner">
                  We pride ourselves on delivering the best quality and
                  workmanship to the heart of your home. Our products are not
                  limited to stone kitchen worktops or toughened glass
                  splashback but extensive knowledge in our products can direct
                  your project to the right track in terms of styling and
                  pricing
                </span>
                <button className="btn btn-dark-ch btn-heading">
                  <Link className="text-white" to="/about-us">
                    READ MORE
                  </Link>
                </button>
              </div>
              <div className="col-lg-6 col-12 dark_box">
                <div className="row ch_hight">
                  <div className="col-lg-6 col-12 mb-1">
                    <div className="p-5 item-what-img1 ch_hight">
                      <img
                        src="/assets/images/gnf/bespoke/Exquisite Craftsmanship.png"
                        alt="Icons"
                        className="item-what-inner-content"
                      />
                      <h5 className="item-what-inner-content mt-2">
                        EXQUISITE CRAFTSMANSHIP
                      </h5>
                      <span
                        style={{ fontSize: "1.4rem", color: "white" }}
                        className="item-what-inner-content"
                      >
                        Our skilled staff are trained work on your project
                        taking in consideration appplication area,material type,
                        functional design, well crafted and beautifully fitted
                        with attention to every detail
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mb-1">
                    <div className="p-5 item-what-img2 ch_hight">
                      <img
                        src="/assets/images/gnf/bespoke/Fast Turnaround.png"
                        alt="Icons"
                        className="item-what-inner-content"
                      />
                      <h5 className="item-what-inner-content mt-2">
                        FAST TURNAROUND
                      </h5>
                      <span
                        style={{ fontSize: "1.4rem", color: "white" }}
                        className="item-what-inner-content"
                      >
                        Fast turnaround time. Stone worktops usually fitted
                        within 5 working days from date of measurements. While
                        site survey only needs 2 days notice.
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mb-1">
                    <div className="p-5 item-what-img3 ch_hight">
                      <img
                        src="/assets/images/gnf/bespoke/Flexible Timing.png"
                        alt="Icons"
                        className="item-what-inner-content"
                      />
                      <h5 className="item-what-inner-content mt-2">
                        FLEXIBLE TIMING
                      </h5>
                      <span
                        style={{ fontSize: "1.4rem", color: "white" }}
                        className="item-what-inner-content"
                      >
                        We can work around your time to allocate templating and
                        fitting that best suits your schedule. You could be
                        given a few options to pick and choose a time slot that
                        works for you.
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mb-1">
                    <div className="p-5 item-what-img4 ch_hight">
                      <img
                        src="/assets/images/gnf/bespoke/Warranty.png"
                        alt="Icons"
                        className="item-what-inner-content"
                      />
                      <h5 className="item-what-inner-content  mt-2">
                        WARRANTY
                      </h5>
                      <span
                        style={{ fontSize: "1.4rem", color: "white" }}
                        className="item-what-inner-content"
                      >
                        All our materials come with a minimum 10 years warranty
                        including our stock. Leaving you enjoy our product with
                        peace of mind.
                      </span>
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

        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="select-area">
                <h1 className="HANDICRAFTS_h ">
                  OUR&nbsp;
                  <br />
                  SELECTED
                  <br /> PRODUCTS
                </h1>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="select-text-3">
                      <ul>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/cosentino-/dekton/grey/631`}
                          >
                            Dekton Keyla Worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/glass-and-fusion/glass-and-fusion/grey/1478`}
                          >
                            Thunder white granite worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/caesarstone/caesarstone/black/271`}
                          >
                            Caesarstone Vanilla Noir Vanity
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/levantina-naturamia/levantina-naturamia/grey/1479`}
                          >
                            Wild Mirage Marble Dining
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/classic-quartz-stone/classic-quartz-stone/white/1435`}
                          >
                            Classic Quartz Alaska Bianca
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/glass-and-fusion/glass-and-fusion/grey/100`}
                          >
                            Tundra Grey Marble
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/picasso-stone/picasso-stone/white/1483`}
                          >
                            Picasso Calacatta Worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/glass-and-fusion/glass-and-fusion/white/1481`}
                          >
                            Arabescato Marble
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="select-text-3">
                      <ul>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/levantina-naturamia/levantina-naturamia/grey/1482`}
                          >
                            Wild Mirage Feature wall
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/quartzforms/quartzforms/black/1476`}
                          >
                            Quartzforms Worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/levantina-naturamia/levantina-naturamia/brown/447`}
                          >
                            Levantina Naturamia Worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/brachot-hermant/unistone/white/401`}
                          >
                            Unistone Worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/cosentino-/silestone/black/775`}
                          >
                            Silestone Worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/cimstone/cimstone/white/333`}
                          >
                            Cimstone Worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/cosentino-/sensa-granite/black/905`}
                          >
                            Sensa Worktop
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/granite-granite-ltd/cambria/gold/98`}
                          >
                            Cambria Worktop
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* form hide */}
            <div className="col-lg-6 col-12">
              <div className="contact-map-selected">
                <h1 className="fill-head">FILL IN DETAILS</h1>
                <span className="form-span">
                  submit a form to get connected or receive a quote
                </span>
                <div className="contact-inner-form-map">
                  <div className="theme-form" id="one-two-form">
                    <div className="form-row">
                      <div className="col-md-12">
                        {name === "" && loading && (
                          <span className="error text-danger">
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
                        {phone === "" && loading && (
                          <span className="error text-danger">
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
                        {phone === "" && loading && (
                          <span className="error text-danger">Town*</span>
                        )}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town *"
                          required
                          name="town"
                          value={town}
                          onChange={this._handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        {phone === "" && loading && (
                          <span className="error text-danger">Postcode*</span>
                        )}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Postcode *"
                          required
                          name="postcode"
                          value={postcode}
                          onChange={this._handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        {email === "" && loading && (
                          <span className="error text-danger">
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
                      <select
                        className="form-select form-control ml-2 mr-2"
                        aria-label="Default select example"
                        onChange={this.changeMaterial.bind(this)}
                        type="select"
                        name="select"
                      >
                        <option value={""}>Select Material Type</option>
                        <option value="Granite">Granite</option>
                        <option value="Quartz">Quartz</option>
                        <option value="Marble">Marble</option>
                      </select>
                      {/* <div className="col-md-12">
                        {message === "" && loading && (
                          <span className="error text-danger">
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
                      </div> */}
                      <div className="col-md-12">
                        <div className="form-group form-check">
                          <input
                            name="file"
                            type="file"
                            className="form-check-input"
                            id="check"
                            required=""
                            onChange={this.handleFile}
                          />
                        </div>
                        <br />
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            onChange={this.handleCheck}
                            value={this.state.checked}
                            id="flexCheckDefault"
                            style={{ marginTop: "7px" }}
                          />
                          <label
                            className="custome_lable1 ml-3 form-check-label text-white"
                            htmlFor="check"
                          >
                            I agree to
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                            >
                              &nbsp; T&C &nbsp;
                            </Link>
                            and&nbsp;
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}
                            >
                              Privacy policy
                            </Link>
                          </label>
                        </div>
                        <button
                          disabled={!this.state.checked}
                          onClick={this.submit}
                          className="btn btn-dark form-control our-selected-bttn submit_ch_btn_mobile"
                        >
                          SUBMIT NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* jas;ldfkj */}
        {/* 4th what makes component ends here */}
        {/* 5th Top trending component ends here */}
        <div className="" id="top-stone-trending">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12">
                <div className="top-stone-trending-text">
                  <h1>
                    TOP TRENDING <br />
                    <span className="top-trending-hr">PRODUCTS</span>
                  </h1>
                </div>
              </div>
              <div className="col-lg-7 col-12 img_style_3">
                <div className="top-stone-trending-img">
                  <div className="trending-stone-1"></div>
                  <div className="trending-stone-2"></div>
                  <div className="trending-stone-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-4 mt-4">
          <hr className="trending-hr" />
        </div>
        {/* 5th Top trending component ends here */}
        {/* 6th Make it happen component starts here */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="HANDICRAFTS_h text-center mb-4">
                HOW WE MAKE IT HAPPEN?
              </h1>
            </div>
            <div className="col-lg-4 col-12 mb-2">
              <img src="/assets/images/gnf_new/home/1.jpg" alt="..." />
              <a href="/templating" className="templating-trending">
                TEMPLATING
              </a>
            </div>
            <div className="col-lg-4 col-12 mb-2">
              <img src="/assets/images/gnf_new/home/2.jpg" alt="..." />
              <a href="/fabrication" className="templating-trending">
                FABRICATION
              </a>
            </div>
            <div className="col-lg-4 col-12 mb-2">
              <img src="/assets/images/gnf_new/home/3.jpg" alt="..." />
              <a href="/installation" className="templating-trending">
                INSTALLATION
              </a>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-4">
          <hr className="trending-hr" />
        </div>
        {/* 6th Make it happen component ends here */}
        {/* 7th Over 400 component starts here */}
        <div id="over-stone-7000">
          <div className="container inner-over-stone-7000">
            <h1 className="heading-over-stone-7000">100s OF</h1>
            <h1 className="heading-over-inner">
              WORKTOP INSTALLATIONS <br />
              AND COUNTING
            </h1>
            <span className="lorem-one">
              GLASS & FUSION proudly delivers the highest quality material and
              best workmanship to the heart of your home. We have over 20 years
              experience in Templating, Installation and Fabrication to deliver
              best quality bespoke kitchen worktops from granite, quartz,
              marble, and glass splashbacks for both residential and commercial
              properties. Our products are not limited to stone kitchen worktops
              but extend to marble stairs, dining tables, fireplaces and
              bathrooms.
            </span>
          </div>
        </div>
        <div className="container mt-4 mb-4">
          <hr className="trending-hr" />
        </div>
        {/* 7th Over 400 component ends here */}
        {/* 8th from our blog component starts here */}
        <div className="container from-our-blog" id="one-two-three">
          <div className="blog-posts" style={{ backgroundColor: "#fafafa" }}>
            <div className="container">
              <h1 className="HANDICRAFTS_h text-center mb-3 mb-md-4">
                From Our Blog
              </h1>
              <OwlCarousel
                adClass="owl-simple carousel-with-shadow"
                carouselOptions={blogSlider}
              >
                {posts.map((item, index) => (
                  <PostTwo
                    post={item}
                    key={index}
                    adClass="entry-display"
                    bodyClass="pb-4 text-center"
                  />
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <hr className="trending-hr" />
        </div>
        {/* 8th from our blog component ends here */}
        {/* 9th contact component starts here */}

        {/* <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 col-12 text-start contact-map-selected">
              <div className="contact-map-selected text-start">
                <h2 className="text-white">Discuss your project</h2>
              </div>
            </div>
            <div className="col-lg-6 col-12 contact-map-selected">
              <button className="btn btn-dark form-control our-selected-bttn submit_ch_btn_mobile ch_button_handel mt-2">
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}>Contact Us</Link>
              </button>
            </div>
          </div>
        </div> */}

        {/* 9th contact component ends here */}
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
const mapStateToProps = (state, props) => {
  return {
    posts: state.posts.items ? state.posts.items : [],
  };
};

export default connect(mapStateToProps)(bespoke_stone);
