import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import TopBarProgress from "react-topbar-progress-indicator";
import { Link } from "react-router-dom";

class CustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      validForm: false,
      checked: false,
      name: "",
      phone: "",
      material: "",
      message: "",
    };
    this.termsandconditions = this.termsandconditions.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = `(function ( $ ) {
        function pad(n) {
            return (n < 10) ? ("0" + n) : n;
        }
      
        $.fn.showclock = function() {
            
            var currentDate=new Date();
            var fieldDate=$(this).data('date').split('-');
            var fieldTime=[0,0];
            if($(this).data('time')!=undefined)
            fieldTime=$(this).data('time').split(':');
            var futureDate=new Date(fieldDate[0],fieldDate[1]-1,fieldDate[2],fieldTime[0],fieldTime[1]);
            var seconds=futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
      
            if(seconds<=0 || isNaN(seconds)){
              this.hide();
              return this;
            }
      
            var days=Math.floor(seconds/86400);
            seconds=seconds%86400;
            
            var hours=Math.floor(seconds/3600);
            seconds=seconds%3600;
      
            var minutes=Math.floor(seconds/60);
            seconds=Math.floor(seconds%60);
            
            var html="";
      
            if(days!=0){
              html+="<div class='countdown-container days'>"
                html+="<span class='countdown-heading days-top'>Days</span>";
                html+="<span class='countdown-value days-bottom'>"+pad(days)+"</span>";
              html+="</div>";
          }
      
            html+="<div class='countdown-container hours'>"
              html+="<span class='countdown-heading hours-top'>Hours</span>";
              html+="<span class='countdown-value hours-bottom'>"+pad(hours)+"</span>";
            html+="</div>";
      
            html+="<div class='countdown-container minutes'>"
              html+="<span class='countdown-heading minutes-top'>Minutes</span>";
              html+="<span class='countdown-value minutes-bottom'>"+pad(minutes)+"</span>";
            html+="</div>";
      
            html+="<div class='countdown-container seconds'>"
              html+="<span class='countdown-heading seconds-top'>Seconds</span>";
              html+="<span class='countdown-value seconds-bottom'>"+pad(seconds)+"</span>";
            html+="</div>";
      
            this.html(html);
        };
      
        $.fn.countdown = function() {
          var el=$(this);
          el.showclock();
          setInterval(function(){
            el.showclock();	
          },1000);
          
        }
      
      }($));
      
      $(document).ready(function(){
        if($(".countdown").length>0){
          $(".countdown").each(function(){
            $(this).countdown();	
          })
          
        }
      })`;
    this.instance.appendChild(s);
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
    // return;
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/quartz-granite-form`,
      payload
    );
    console.log(res);
    toast.success(`${res.data}`);
    this.setState({
      loading: false,
      validForm: false,
      name: "",
      email: "",
      phone: "",
      material: "",
      message: "",
    });
    this.props.history.push("spring-sale-thank-you");
  };

  submit = (e) => {
    this.setState({ loading: true, validForm: true });
    const { checked, name, email, material, phone, message } = this.state;
    if (
      checked &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      material !== "" &&
      message !== ""
    ) {
      const payload = {
        name,
        email,
        material,
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
      material,
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
      <div className="main" ref={(el) => (this.instance = el)}>
        <Helmet>
          <title>GNF - Quartz Granite</title>
        </Helmet>

        <Breadcrumb title={"Quartz Granite"} adclassName="border-0 mb-0" />

        <div className="container">
          <figure className="entry-media">
            <div className="owl-carousel owl-simple owl-light owl-nav-inside owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transition: "all 0.4s ease 0s",
                    // width: "3504px",
                  }}
                >
                  <div className="owl-item active">
                    <div className="lazy-overlay bg-3">
                      <img
                        src="/assets/images/GnF-sale-banner.jpg"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <div
          className="thrv_wrapper thrv-button tcb-mobile-hidden ________desktop"
          data-css="tve-u-17309267c44"
          data-button-size="m"
          data-tcb_hover_state_parent
          style={{
            padding: 35,
            textAlign: "center",
            cursor: "pointer",
            height: 200,
            marginBottom: "-2%",
          }}
        >
          <div
            className="tcb-button-texts"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="tcb-button-link"
              style={{
                cursor: "pointer",
                width: "60%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <div style={{ fontSize: 26 }}>
                {" "}
                50% off Labouring &nbsp;&nbsp; || &nbsp;&nbsp; 60% off Kitchen
                Splashback
              </div>
              <div style={{ fontSize: 26 }}>Free Chopping Boards</div>
            </div>
          </div>
        </div>

        <div
          className="thrv_wrapper thrv-button tcb-mobile-hidden ________mobile"
          data-css="tve-u-17309267c44"
          data-button-size="m"
          data-tcb_hover_state_parent
          style={{
            padding: 35,
            textAlign: "center",
            cursor: "pointer",
            height: 200,
            marginBottom: "-2%",
          }}
        >
          <div
            className="tcb-button-texts"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="tcb-button-link"
              style={{
                cursor: "pointer",
                textAlign: "center",
                fontWeight: "bold",
                width: "93%",
                paddingTop: "4%",
                paddingBottom: "4%",
              }}
            >
              <div style={{ fontSize: 16 }}> 50% off Labouring</div>
              <div style={{ fontSize: 16 }}>60% off Kitchen Splashback</div>
              <div style={{ fontSize: 16 }}>Free Chopping Boards</div>
            </div>
          </div>
        </div>

        <div className="countdown" data-date="2021-05-31"></div>

        <div
          className="page-content pb-0"
          style={{
            width: "100%",
            paddingRight: "5%",
            width: "100%",
            paddingLeft: "5%",
          }}
        >
          {/* <div className="container"> */}
          <p
            className="col-md-12"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          ></p>

          <h2
            className="title-lg text-center mb-4"
            style={{ textAlign: "center", marginTop: "3%" }}
          >
            Hurry, the offer ends 31 May, 21
          </h2>

          <div className="mb-2"></div>
          {/* </div> */}

          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-lg-6">
              <h5 className="mb-2" style={{ textAlign: "center" }}>
                Fill the form below, and we will contact you shortly
              </h5>

              <form action="#" className="contact-form mb-3">
                <div className="row">
                  <div className="col-sm-12">
                    <label htmlFor="cname" className="sr-only">
                      Name
                    </label>
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
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <label htmlFor="cemail" className="sr-only">
                      Email
                    </label>
                    {email === "" && loading && (
                      <span className="error text-danger">
                        Email is required*
                      </span>
                    )}
                    <input
                      type="text"
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

                <div className="row">
                  <div className="col-sm-12">
                    <label htmlFor="cphone" className="sr-only">
                      Material
                    </label>
                    {material === "" && loading && (
                      <span className="error text-danger">
                        Material is required*
                      </span>
                    )}
                    <select
                      className="form-control"
                      name="material"
                      onChange={this._handleChange}
                    >
                      <option value="">choose material</option>
                      <option value="Marble">Marble</option>
                      <option value="Stone">Quartz</option>
                      <option value="Granite">Granite</option>
                      <option value="Compact">Compact</option>
                      <option value="Any">Any</option>
                    </select>
                  </div>
                </div>

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

          <div className="container categories pt-6 __custom_line">
            <h2 className="title-lg text-center mb-4">---=== OR ===---</h2>
            <h5
              className="mb-2"
              style={{ marginTop: "0%", textAlign: "center" }}
            >
              Click on the Material of Your Choice to Start FREE Online Quote
            </h5>
            <br />

            <div className="row">
              <div className="col-6 col-lg-4">
                <div className="banner banner-display banner-link-anim">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}>
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/banners/Marble-worktops-kitchen-bathroom-London-glass-and-fusion-stone.png`}
                      alt="Banner"
                      width="376"
                      height="540"
                    />
                  </Link>

                  <div className="banner-content banner-content-center">
                    <h3
                      className="banner-title text-white"
                      style={{ fontSize: "30px" }}
                    >
                      Granite
                      <br />
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}>
                        <div className="btn btn-outline-primary-2 btn-round btn-more btn-catalouge text-white">
                          View Colours Range
                        </div>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4 order-lg-last">
                <div className="banner banner-display banner-link-anim">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/marble`}>
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/banners/Granite-worktops-kitchen-bathroom-London-glass-and-fusion-stone.png`}
                      alt="Banner"
                      width="376"
                      height="540"
                    />
                  </Link>

                  <div className="banner-content banner-content-center">
                    <h3
                      className="banner-title text-white"
                      style={{ fontSize: "30px" }}
                    >
                      Marble
                      <br />
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/marble`}>
                        <div className="btn btn-outline-primary-2 btn-round btn-more btn-catalouge text-white">
                          View Colours Range
                        </div>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-4 banners-sm">
                <div className="row">
                  <div className="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12">
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/quartz`}>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/banners/Quartz-worktops-kitchen-bathroom-London-glass-and-fusion-stone.png`}
                        alt="Banner"
                        width="376"
                        height="270"
                      />
                    </Link>

                    <div className="banner-content banner-content-center">
                      <h3
                        className="banner-title text-white"
                        style={{ fontSize: "30px" }}
                      >
                        Quartz
                        <br />
                        <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/quartz`}>
                          <div className="btn btn-outline-primary-2 btn-round btn-more btn-catalouge text-white">
                            View Colours Range
                          </div>
                        </Link>
                      </h3>
                    </div>
                  </div>

                  <div className="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/stone/compact worktops`}
                    >
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/banners/Compact-Worktop-kitchen-bathroom-London-glass-and-fusion-stone.png`}
                        alt="Banner"
                        width="376"
                        height="270"
                      />
                    </Link>

                    <div className="banner-content banner-content-center">
                      <h3
                        className="banner-title text-white"
                        style={{ fontSize: "30px" }}
                      >
                        Compact Worktops
                        <br />
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/stone/compact worktops`}
                        >
                          <div className="btn btn-outline-primary-2 btn-round btn-more btn-catalouge text-white">
                            View Colours Range
                          </div>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr id="custom_hr_line" />
          </div>

          <div className="container" style={{ marginTop: "3%" }}>
            <div className="instagram-feed-container">
              <h2 className="title-lg text-center mb-4">
                Examples of our work
              </h2>
              <div className="row" style={{ marginTop: "2%" }}>
                <div className="feed-col col-sm-3">
                  <div className="instagram-feed">
                    <img
                      alt="img"
                      height={218}
                      src="/assets/images/gnf/showcase-projects/1-1.jpg"
                      width={218}
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
                <div className="feed-col col-sm-3">
                  <div className="instagram-feed">
                    <img
                      alt="img"
                      height={218}
                      src="/assets/images/gnf/showcase-projects/4-3.jpg"
                      width={218}
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
                <div className="feed-col col-sm-3">
                  <div className="instagram-feed">
                    <img
                      alt="img"
                      height={218}
                      src="/assets/images/gnf/showcase-projects/11 (1).png"
                      width={218}
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
                <div className="feed-col col-sm-3">
                  <div className="instagram-feed">
                    <img
                      alt="img"
                      height={218}
                      src="/assets/images/gnf/showcase-projects/22 (1).png"
                      width={218}
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
                <div className="feed-col col-sm-3">
                  <div className="instagram-feed">
                    <img
                      alt="img"
                      // height={218}
                      src="/assets/images/gnf/showcase-projects/joy-kitchen-design-dubai-4.jpg"
                      // width={218}
                      style={{ height: "100%", height: 277 }}
                    />
                  </div>
                </div>
                <div className="feed-col col-sm-3">
                  <div className="instagram-feed">
                    <img
                      alt="img"
                      height={218}
                      src="/assets/images/gnf/showcase-projects/Mitered island with matching calacatta splashback.jpg"
                      width={218}
                      style={{ height: 277 }}
                    />
                  </div>
                </div>
                <div className="feed-col col-sm-3">
                  <div className="instagram-feed">
                    <img
                      alt="img"
                      height={218}
                      src="/assets/images/gnf/showcase-projects/plans-de-travail-pierre-naturelle-1.jpg"
                      width={218}
                      style={{ height: 277 }}
                    />
                  </div>
                </div>
                <div className="feed-col col-sm-3">
                  <div className="instagram-feed">
                    <img
                      alt="img"
                      height={218}
                      src="/assets/images/gnf/showcase-projects/way-kitchen-design-dubai-6.jpg"
                      width={218}
                      style={{ height: 277 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomPage;
