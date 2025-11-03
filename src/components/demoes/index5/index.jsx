import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import axios from "axios";
// import Custom Components
import HeaderFive from "../../common/header/header-5";
import OuterOverlay from "../../common/overlay/outer-overlay";
import FooterTwo from "../../common/footer/footer-two";
import OwlCarousels from "../../features/owl-carousel";
import MobileMenu from "../../common/header/common/mobile-menus/menu-1";
import BrandTwo from "../../features/brand/brand-two";
import VideoBanner from "../../features/videobanner/videobanner-one";
import VideoModal from "../../features/video-modal";
import NewsletterModal from "../../features/newsletter-modal";
import ServiceThree from "../../features/service-list/service-three";

import IntroSlide from "./intro-slide";
import Banner from "./banner";
import CTA from "./cta";
import Instagram from "./instagram";
import NewCollection from "./new-collection";
import SpecialCollection from "./special-collection";
import TrendyCollection from "./trendy-collection";
import { introSlider } from "./settings";
import PostGroup from "./post-group";
import { changeDemo, outerLoading } from "../../../actions";
import { initSettings } from "../../../utils/utils";
import _data from "../../../mock_data/data.json";
import store from "../../../store/index";
import BannerGroup from "./banner-group";
import SearchBar from "./search-bar";
import './style.scss';

class IndexFive extends Component {
  // adding change
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      loading: false,
      validForm: false,
      checked: false,
      name: "",
      phone: "",
      town: "",
      postcode: "",
      email: "",
      material_val: "",
      selectedFile: null,
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
  // change end
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

  submit = (e) => {
    this.setState({ loading: true, validForm: true });
    const {
      checked,
      name,
      email,
      phone,
      message,
      postcode,
      material_val,
      selectedFile,
    } = this.state;
    if (
      checked &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== "" &&
      postcode !== "" &&
      material_val !== ""
    ) {
      const payload = {
        name,
        email,
        phone,
        message,
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

      this.props.history.push("/quick-enquiry-homepage-thank-you-page");
      console.log(res);
      toast.success(`${res.data}`);
      this.setState({
        loading: false,
        validForm: false,
        name: "",
        email: "",
        phone: "",
        message: "",
        postcode: "",
        selectedFile: null,
      });
    } else {
      toast.error(`${res.data}`);
    }
  };

  fileSelectedHandler = (event) => {
    let data = new FormData();
    data.append("file", event.target.files[0]);

    this.setState({
      selectedFile: data,
    });
  };

  componentDidMount() {
    initSettings();
    store.dispatch(changeDemo("5"));
    if (
      localStorage.getItem("scrollHomePage") !== null &&
      localStorage.getItem("scrollHomePage") == "true"
    ) {
      setTimeout(() => {
        window.scroll(0, 2200);
        localStorage.removeItem("scrollHomePage");
      }, 1000);
    }
  }

  UNSAFE_componentWillMount() {
    store.dispatch(outerLoading());
  }

  componentWillUnmount() {
  }

  render() {
    const projects = [
      {
        img: "assets/images/gnf/showcase-projects/1-1.jpg",
      },
    ];
    const {
      loading,
      validForm,
      name,
      email,
      phone,
      message,
      town,
      postcode,
      material_type,
    } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>Glass and Fusion</title>
        </Helmet>

        <h1 className="d-none">Glass and Fusion</h1>

        <OuterOverlay />

        <div className="page-wrapper">
          <HeaderFive />

          <div className="main">
            <div className="intro-slider-container mb-0">
              <OwlCarousels
                adClassName="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
                carouselOptions={introSlider}
              >
                {_data.demo5.introBanners.map((item, index) => (
                  <IntroSlide slide={item} key={index} />
                ))}
              </OwlCarousels>

              <span
                className="slider-loader "
                style={{ color: "black" }}
              ></span>
            </div>

            <BrandTwo adClassName="brands-border owl-simple mb-1" />

            <SearchBar />
            <br />
            <div className="container">
              <div className="banner-group">
                <div className="row">
                  <div className="col-md-6">
                    <Banner banner={_data.demo5.banners[0]} />
                  </div>

                  <div className="col-md-6">
                    <Banner banner={_data.demo5.banners[1]} />
                    <Banner banner={_data.demo5.banners[2]} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4"></div>

            {/* <TrendyCollection /> */}

            <div className="mb-5"></div>

            <VideoBanner
              image="assets/images/demos/demo-5/bg-2.jpg"
              content="<span>New Collection</span><strong>Winter’19 <i>/</i> Spring’20</strong>"
            />

            <div className="mb-5"></div>
            <NewCollection filter />
            <div className="mb-5"></div>
            <BannerGroup />
            <div className="mb-5"></div>
            <div className="container">
              <hr />

              <div className="mb-2"></div>
            </div>
            {/* form here new  */}

            {/* <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="contact-map-selected">
                    <h1 className="fill-head">FILL IN DETAILS</h1>
                    <span className="form-span">
                      submit a form to get connected or receive a quote
                    </span>
                    <div className="contact-inner-form-map">
                      <form className="theme-form" id="one-two-form">
                        <div className="form-row">
                          <div className="col-md-4">
                            {name === "" && loading && (
                              <span className="error text-danger">
                                Name is required*
                              </span>
                            )}
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              required
                              name="name"
                              value={name}
                              onChange={this._handleChange}
                            />
                          </div>
                          <div className="col-md-4">
                            {name === "" && loading && (
                              <span className="error text-danger">
                                Name is required*
                              </span>
                            )}
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Contact No."
                              required
                              name="name"
                              value={name}
                              onChange={this._handleChange}
                            />
                            <div className="form-group form-check">
                              <input
                                name="check"
                                type="file"
                                className=""
                                id="check"
                                required=""
                                onChange={(e) => this.termsandconditions(e)}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/*---------------------  */}
            <div className="contact-map-selected">
              <div className="container contact-map-selected">
                <div className="row" style={{ width: "100%" }}>
                  <div
                    className="theme-form"
                    id="one-two-form"
                    style={{ width: "100%" }}
                  >
                    <div className="col-12 text-sm-center">
                      <h1 className="fill-head heading_mobil_quick">
                        QUICK ENQUIRY
                      </h1>
                    </div>
                    <div className="col-12 pb-1 ">
                      <span className=" pl-3 heading_mobil_quick_span">
                        Send us your brief requirements, and we will talk to you
                        for the details
                      </span>
                    </div>
                    <div className="col-lg-12 row">
                      <div className="col-lg-6 col-12">
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
                      </div>
                      <div className="col-lg-6 col-12">
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
                      </div>
                    </div>

                    <div className="col-lg-12 row">
                      <div className="col-lg-4 col-12">
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
                      </div>
                      <div className="col-lg-4 col-12">
                        {/* <div className="col-md-12">
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
                        </div> */}

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
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="ml-3 mr-3">
                          <select
                            className="form-select form-control"
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
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 row">
                      <div className="col-lg-12 col-12">
                        <div className="ml-3 mr-3">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Message.."
                            id="exampleFormControlTextarea1"
                            onChange={this._handleChange}
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 1">
                      <div className="col-lg-6 col-12"></div>

                      <div className="col-lg-6 col-12">
                        <div className="form-group form-check pl-0">
                          <input
                            name="image"
                            type="file"
                            className=""
                            required=""
                            onChange={this.fileSelectedHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 pb-1 2">
                      <div className="form-check ml-3 mr-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={(e) => this.termsandconditions(e)}
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
                          <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>
                            Privacy policy
                          </Link>
                        </label>
                      </div>
                    </div>
                    <div className="col-12 Sumbit_btn_width">
                      <div className="">
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
            {/* ///////////// */}
            <div className="container justify-content-center text-center d-none">
              <div className="row justify-content-center">
                <div className="col-lg-9 col-12">
                  <div className="contact-map-selected pt-4">
                    <h1 className="fill-head text-center new_home_form">
                      FILL IN DETAILS
                    </h1>
                    <span className="mb-3 text-center new_home_form">
                      submit a form to get connected or receive a quote
                    </span>
                    <div className="contact-inner-form-map new_home_form">
                      <form className="theme-form" id="one-two-form">
                        {/* <div className="form-row"> */}

                        {/* name */}
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
                        {/* email */}
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
                        {/* phone */}
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
                        {/* Town */}
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
                        {/* postcode */}
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

                        {/* select material */}
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

                        {/* file input */}
                        <div className="col-md-12">
                          <div className="form-group form-check">
                            <input
                              name="file"
                              type="file"
                              className="form-check-input"
                              id="check"
                              required=""
                              onChange={(e) => this.termsandconditions(e)}
                            />
                          </div>
                          <div className="form-check pt-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => this.termsandconditions(e)}
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
                          <br />
                          <button
                            disabled={!this.state.checked}
                            onClick={this.submit}
                            className="btn btn-dark form-control our-selected-bttn"
                          >
                            SUBMIT NOW
                          </button>
                        </div>

                        {/* </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* form end */}
            <div className="bg-lighter pt-7 pb-4">
              <div className="container">
                <div className="instagram-feed-container">
                  <h2 className="title-lg text-center mb-4">
                    Examples of Our Work
                  </h2>
                  <div className="row">
                    {_data.demo5.instagram.map((item, index) => (
                      <Instagram insta={item} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container"
              style={{
                width: "100%",
                maxWidth: "100%",
                paddingLeft: "0px",
                paddingRight: "0px",
                background: `URL(${import.meta.env.VITE_PUBLIC_URL}/assets/images/site/why-us-1.png.jpg) no-repeat center center fixed`,
                backgroundSize: "cover",
                height: "auto",
                minHeight: "400px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
            >
              <br />
              <h3 style={{ textAlign: "center", color: "white" }}>Why Us?</h3>
              <br />
              <div className="row col-md-12">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/site/paint.svg`}
                    style={{
                      width: "100px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      height: 100,
                    }}
                  />
                  <h4 className="text-center " style={{ color: "white" }}>
                    Exquisite Craftsmanship
                  </h4>
                  <p
                    className="text-center ___white"
                    style={{ color: "white" }}
                  >
                    Our skilled people are trained work on your project taking
                    in consideration application area, material type, functional
                    design, well crafted and beautifully fitted with attention
                    to every detail.
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/site/open-24-hours.svg`}
                    style={{
                      width: "100px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      height: 100,
                    }}
                  />
                  <h4 className="text-center " style={{ color: "white" }}>
                    Flexible Timing
                  </h4>
                  <p
                    className="text-center ___white"
                    style={{ color: "white" }}
                  >
                    We can work around your time to allocate templating and
                    fitting that best suits your schedule. You could be given a
                    few options to pick and choose a time slot that works for
                    you.
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/site/warranty.svg`}
                    style={{
                      width: "100px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      height: 100,
                    }}
                  />
                  <h4 className="text-center " style={{ color: "white" }}>
                    Warranty
                  </h4>
                  <p
                    className="text-center ___white"
                    style={{ color: "white" }}
                  >
                    All our materials come with a minimum 10 years warranty
                    including our stock. Leaving you enjoy our product with
                    peace of mind.
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/site/flexibility.svg`}
                    style={{
                      width: "100px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      height: 100,
                    }}
                  />
                  <h4 className="text-center " style={{ color: "white" }}>
                    Fast Turnaround
                  </h4>
                  <p
                    className="text-center ___white"
                    style={{ color: "white" }}
                  >
                    Fast turnaround time. Stone worktops usually fitted within 5
                    working days from date of measurements. While site survey
                    only needs 2 days notice.
                  </p>
                </div>
              </div>
            </div>

            <PostGroup />

            <CTA />
          </div>

          <FooterTwo type={2} />
        </div>

        <VideoModal />
        <MobileMenu />
        <NewsletterModal demo="5" />
        <ToastContainer autoClose={3000} className="toast-container" />
      </React.Fragment>
    );
  }
}

export default IndexFive;
