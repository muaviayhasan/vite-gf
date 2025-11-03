import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import "../../common/index.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import ThemeSettings from "../../common/theme-settings";
import axios from "axios";
import Products from "../../frontend/pages/home/Products";
import GlassProduct from "../../frontend/pages/home/GlassProducts";

// Import custom components
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
} from "../../../services/script";

import NewProduct from "../../common/new-product";
import Instagram from "../common/instagram";
import HeaderOne from "../../common/headers/header-one";
import FooterOne from "../../common/common/footers/footer-one";
import BlogSection from "../common/blogsection";
import ProjectSection from "../common/projectsection";
import { Form } from "formik";
import GraniteProduct from "./granite";
import MarbleProduct from "./marble";
import QuartzProduct from "./quartz";
import ProductShow from "./productshow";
import SearchBar from "../../common/search-bar";
import LogoBlock from "../common/logo-block";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class Beauty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      isLoaded: false,
      data: [],
      glass: [],
      granite: [],
      quartz: [],
      marble: [],
      items: [],
      categories: [
        {
          name: "Plain",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/plain-final.jpg`,
        },
        {
          name: "Metallic Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/Metallic-effect-final.jpg`,
        },
        {
          name: "Shimmer Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/shimmer-effect-final.jpg`,
        },
        {
          name: "Special Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/special-effect-final.jpg`,
        },
        {
          name: "Digital Print",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/digital-print-final.jpg`,
        },
        {
          name: "Double Layer",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/double-layers-final.jpg`,
        },
        {
          name: "Crackled Glass",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/cracked-glass-final.jpg`,
        },
        {
          name: "Toughened Mirrors",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/toughened-final.jpg`,
        },
        {
          name: "Untoughened Mirrors",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/untoughened-final.jpg`,
        },
        {
          name: "Satin Glass",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/stain-glass-final.jpg`,
        },
        {
          name: "Plain + Sparkle",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/plain-sparkle-final.jpg`,
        },
      ],
    };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  filterMarble = () => {};

  async componentDidMount() {
    toast.info(
      `Website is under-construction and updated daily, any errors please let us know info@glassfusionltd.co.uk`,
      {
        autoClose: 20000,
        hideProgressBar: false,
        closeOnClick: true,
      }
    );

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = `
      
    `;
    this.instance.appendChild(s);

    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku`,
      method: "get",
      data: null,
    });
    this.setState({
      items: resp.data,
      isLoaded: true,
    });
    document
      .getElementById("color")
      .setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/color3.css`);
  }
  // componentDidMount() {
  //   axios.get(`${import.meta.env.VITE_API_URL}/sku`).then(product => {
  //     let marbleFilter = product.data.filter(function(item) {
  //       return item.material_type == "Marble";
  //     });

  //     let graniteFilter = product.data.filter(function(item) {
  //       return item.material_type == "Granite";
  //     });

  //     let quartzFilter = product.data.filter(function(item) {
  //       return item.material_type == "Quartz";
  //     });
  //     // let glass = product.data.filter(function(item) {
  //     //   return item.material_type == "Marble";
  //     // });
  //     this.setState({
  //       ...this.state,
  //       isLoaded: true,
  //       data: product,
  //       granite: graniteFilter,
  //       quartz: quartzFilter,
  //       marble: marbleFilter
  //     });
  //   });

  // }

  render() {
    return (
      <div ref={(el) => (this.instance = el)}>
        <Helmet>
          <title>Glass &amp; Fusion</title>
        </Helmet>
        <HeaderOne logoName={"layout3/logo.png"} />
        <div className="container" style={{ "textAlign": "center" }}>
          <SearchBar />
          {/* <SearchBar /> */}
        </div>
        {/*About Section*/}
        <section className="beauty-about">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-md-12"
                style={{ padding: "0px", "padding-right": "10px" }}
              >
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/about/homepage-about-glassandfusion-marble-glass-stone-quartz.png`}
                  style={{ width: "400px", height: "300px" }}
                  alt=""
                  className="img-fluid blur-up lazyload"
                />
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div>
                  <div>
                    {/* <h2>About</h2> */}
                    <div className="about-text">
                      <p className="about_text">
                        We pride ourselves with delivering the best quality and
                        workmanship to the heart of your home. Our products are
                        not limited to stone kitchen worktops or toughened glass
                        splashback but extensive knowledge in our products can
                        direct your project to the right track in terms of
                        styling and pricing.
                      </p>
                      <p className="about_text">
                        Bespoke kitchen worktops from granite, quartz, marble
                        and ultra compact surfaces requires great deal of
                        attention. We can help you to choose the right colour
                        and material for your need and leave the rest to us. We
                        are specialised in fabrication and installation of stone
                        worktops along with glass splashbacks for both trade and
                        residential clients. Our main aim is to provide you with
                        the knowledge and details about our product making sure
                        that you are making the right kitchen worktop choice,
                        bespoke and tailored to your requirements. Over the
                        years Glass &amp; Fusion have build extensive links in
                        the industry from sourcing to fabrication and fitting of
                        kitchen worktops.
                        <br /> <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-12 col-lg-12 col-md-12"
                style={{ padding: "0px" }}
              >
                <div className="about-section">
                  <div>
                    <div className="about-text">
                      <p className="about_text">
                        The variety in type and colours of natural &amp;
                        composite stone worktops have a huge impact on decision
                        making, we will highlight the pros and cons of your
                        choice and advise the affordability option. Glass &amp;
                        Fusion supplied and fitted kitchen quartz worktops for
                        large commercial project minimising the overall cost
                        from the start. At consultation stage all options
                        presented with accurate figures, time scale and list of
                        detailed requirements. Clear visions, single point of
                        contact and studying the project prosses are the
                        skeleton of Glass &amp; Fusion success.
                      </p>

                      <p className="about_text">
                        The key stages of processing a client order are in house
                        managed using our fabrication unit while the fabrication
                        office is open six days a week handling and oversee the
                        order progression.
                      </p>
                    </div>
                    <div className="service small-section pb-0">
                      <div className="row">
                        <div className="col-sm-4 service-block1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: svgFreeShipping,
                            }}
                          />
                          <h5>Fast & Timely Delivery</h5>
                        </div>
                        <div className="col-sm-4 service-block1">
                          <div
                            dangerouslySetInnerHTML={{ __html: svgservice }}
                          />
                          <h5>Free Online Quote</h5>
                        </div>
                        <div className="col-sm-4 service-block1">
                          <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                          <h5>Expert Personalised Advice</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About Section End*/}
        {/*Product slider*/}

        <GlassProduct
          material="Glass"
          products={this.state.categories}
          defaultImage="\assets\images\211 x 277 tile.png"
          description="Nowadays, glass panels are the most popular form of kitchen wall decor. Their advantage is the ability to use almost every possible motif or pattern. Together with glass panels, your ideas are endless…"
        />
        <Fragment>
          <Products
            material="Granite"
            per_page="8"
            defaultImage="\assets\images\211 x 277 tile.png"
            description="Hard wearing granite kitchen worktop is a popular choice for its unique natural look, identify the style best suits your project, “View All” and shortlist the thickness and textures for pricing…"
          />
        </Fragment>
        <Fragment>
          <Products
            material="Marble"
            per_page="8"
            defaultImage="\assets\images\211 x 277 tile.png"
            description="Huge selection of marble, you an “View All” and browse to choose the right colour for marble worktops, marble vanity, bespoke marble tiles and more…"
          />
        </Fragment>
        <Fragment>
          <Products
            material="Quartz"
            per_page="8"
            defaultImage="\assets\images\211 x 277 tile.png"
            description="A popular choice for a kitchen worktop, 1000 ‘s of colours, pattern and marble effects. Quartz worktops, factory direct made to measure. “View all” and use the search functionality to find your desired colour shade…"
          />
        </Fragment>
        <Fragment>
          <Products
            material="Compact Worktops"
            per_page="8"
            defaultImage="\assets\images\211 x 277 tile.png"
            description="Most hard-wearing material in the market, compact, sleek, heat proof, scratch resistant, various thickness and textures. We have it all and we can craft it as you wish, browse our collection…"
          />
        </Fragment>
        {/* Granite End */}

        {/* Marble Section */}

        {/* <MarbleProduct /> */}
        {/* Marble End */}
        {/* Quartz */}

        {/* <QuartzProduct /> */}
        {/* Quartz End */}
        <br />
        {/*Video Section*/}
        {/* <section className="video-section pt-0">
          <div className="title1">
            <h4>special offer</h4>
            <h2 className="title-inner1">product tutorial</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <a href="javascript:void(0)" onClick={this.onOpenModal}>
                  <div className="video-img">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/beauty/video_1.jpg`}
                      alt=""
                      className="img-fluid blur-up lazyload"
                    />
                    <div className="play-btn">
                      <span>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </a>
                <Modal
                  open={this.state.open}
                  onClose={this.onCloseModal}
                  id="video"
                  className="modal fade video-modal"
                  center
                >
                  <iframe
                    src="https://www.youtube.com/embed/FRIDLxM8Roc"
                    allowFullScreen
                  ></iframe>
                </Modal>
              </div>
            </div>
          </div>
        </section> */}
        <br />
        {/*Video Section End*/}
        {/*Product slider*/}

        {/*Product slider End*/}

        {/*Projects Section*/}
        <div className="container container-past-project-full-width">
          <div className="row">
            <div className="col">
              <div className="title1">
                <br />
                <br />
                <h4 style={{ padding: 18 }}>Projects</h4>
                <h2
                  className="title-inner1"
                  style={{ fontSize: 25, paddingBottom: 22 }}
                >
                  A Few Examples of Our Work
                </h2>
              </div>
            </div>
          </div>
        </div>
        <section className="blog p-t-0 ratio3_2 fdgdfgfg">
          <div className="container container-past-project-full-width">
            <div className="row">
              <div className="col-md-12">
                <ProjectSection />
              </div>
            </div>
          </div>
        </section>
        {/*Projects Section End */}

        {/*Blog Section*/}
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title1">
                <h4 style={{ padding: 25 }}>Happy Reading</h4>
                <h2 className="title-inner1" style={{ fontSize: 25 }}>
                  {" "}
                  Latest from Our blog
                </h2>
              </div>
            </div>
          </div>
        </div>
        <section className="blog p-t-0 ratio3_2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <BlogSection />
              </div>
            </div>
          </div>
        </section>
        <LogoBlock />
        {/*Blog Section end*/}
        <FooterOne className="sec-b-spc" logoName={"layout3/logo.png"} />
      </div>
    );
  }
}

export default Beauty;
