import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import ProfileOne from "../../features/profile/profile-one";
import OwlCarousels from "../../features/owl-carousel";
import Testimonial from "../../features/testimonial/testimonial";

// import Utils
import { mainSlider5 } from "../settings";

import _data from "../../../mock_data/data.json";

class TemplatingNew extends Component {
  componentDidMount() {
    document.querySelector(".footer-middle").classList.add("border-0");
  }

  render() {
    return (
      <div className="main">
        <Helmet>
          <title>Templating Services, London</title>
          <meta
            name="description"
            content="Glass & Fusion provides templating and measuring services while processing your order."
          />
          <meta
            name="keywords"
            content="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
          />
        </Helmet>

        <Breadcrumb title="Templating" adClass="border-0 mb-0" />

        <div className="container">
          <img
            src="/assets/images/gnf/templating/1.png"
            alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
          />
          {/* <h1 className="page-title text-white">
            GNF<span className="text-white">Templating</span>
          </h1> */}
          <h1 className="page-title text-white"></h1>
        </div>

        <div className="page-content pb-0">
          <div className="container">
            <h2 className="title" style={{ marginLeft: "0.6%" }}>
              Templating:
            </h2>
            <p className="col-md-12">
              Templating or measuring is one of our services and it is a key
              stage while processing your order.
              <br />
              Upon site survey or templating, we will be discussing all
              requirements for your worksurface while the final product will be
              manufactured accordingly. Our surveyor will not only take
              measurements instead will highlight all aspect of job with you in
              terms of safety, support, cut positions, edge, colour
              confirmation, practical advice and practise, overhangs, angles and
              other requirements. Our main product is stone kitchen worktop and
              we produce templates, laser measuring and site survey for no
              obligation quote.
              <br />
              Granite, Quartz & ceramic kitchen worktops measuring will take
              about an hour depends on the kitchen sizes. Our templating service
              not limited to worktops, we survey for marble stairs, marble
              vanity tops, wet-room cladding, stone fireplaces, onyx counters,
              bath surround, stone dining tables and barbeque granite worktops.
              Ultimately, we can bespoke our stone fabrication tailored to your
              project requirements.
              <br />
              We mainly cover London and its surrounding counties however our
              dedicated team can travel further subject to job size.
              <br />
              We have procedures in place for made to measure kitchen worktops
              and stone worksurfaces ranging from quotation upon fitting. Upon
              quotation we will generate digital drawing for the stone worktops
              highlighting their lengths and possible joint location.
            </p>

            <div className="mb-2"></div>
          </div>

          <div className="bg-light-2 pt-2 pb-2 mb-6 mb-lg-8">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 mb-3 mb-lg-0">
                  <h2 className="title">Corex Sheets templating</h2>
                  <p className="mb-2">
                    Corex sheet templating will form replica for your stone
                    kitchen worktop, shaped to the desired area with highlight
                    to cut positions, overhangs, corners …etc. It will help to
                    visualise the worktop before committing to final layout.
                    Most of stone worktop attached appliances have no digital
                    drawing which make it more practical to take template by
                    plastic corex sheets.{" "}
                  </p>
                </div>

                <div className="col-lg-6 offset-lg-1">
                  <div className="about-images" style={{ paddingTop: "0px" }}>
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/templating/2.jpg`}
                      alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                      className="templating-img-front"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="brands-text">
                  <h2 className="title">Laser measuring:</h2>
                  <p>
                    Most of ultra-compact counters and worktops will be measured
                    by laser templating device to be processed though our CNC
                    machines and this service also available to all fabricated
                    countertops depends on the complexity of the job.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12">
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/templating/3.jpg`}
                      alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                      className="templating-img-front"
                      style={{ height: "500px", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 row mt-3">
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/templating/4.jpg`}
                  alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                  className="templating-img-front col-md-4 col-sm-12 col-lg-4"
                  style={{ height: "500px", width: "100%" }}
                />
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/templating/5.jpg`}
                  alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                  className="templating-img-front col-md-4 col-sm-12 col-lg-4"
                  style={{ height: "500px", width: "100%" }}
                />
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/templating/6.jpg`}
                  alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                  className="templating-img-front col-md-4 col-sm-12 col-lg-4"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
              <br />
              <p className="col-md-12 mt-3">
                All templates and measuring goes into thorough examination
                before go into production, selected pictures above as example:
                the surveyor generate two layouts for fabrications, one drawing
                is being used for accurately checking the requirements and its
                details while the second worktop laser measurements downloaded
                to machine software for cutting. Quality control documents will
                be circulated with the worktop as it travels from one stage to
                another upon worktop fabrication.
              </p>
              <br />
              <div
                className="mt-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ width: "48%" }}>
                  <img
                    src="assets/images/gnf/templating/8.jpg"
                    alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                  />
                </div>
                <div style={{ width: "48%" }}>
                  <img
                    src="assets/images/gnf/templating/9.jpg"
                    alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 row mt-3">
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/templating/10.jpg`}
                  alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                  className="templating-img-front col-md-6 col-sm-12 col-lg-6"
                  style={{ height: "500px", width: "100%" }}
                />
                {/* <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/templating/11.jpg`}
                  alt=""
                  className="templating-img-front col-md-4 col-sm-12 col-lg-4"
                  style={{ height: "500px", width: "100%" }}
                /> */}
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/templating/12.jpg`}
                  alt="Templating, measuring, kitchen manufacturing, stone kitchen worktop, Laser measuring, Site survey, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Corex sheets templating, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                  className="templating-img-front col-md-6 col-sm-12 col-lg-6"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>

              <h6 className="col-md-12 mt-3">Template Checklist:</h6>
              <p className="col-md-12 mt-1">
                - Support & safety: Kitchen cabinet and units should be secured
                and levelled. Firm & rigid structure supporting the weight of
                the stone worktop.
                <br />- Appliances: We need to make cut for all appliances
                connected to the worktops such sinks/hobs/pop-up sockets,
                supporting legs …etc. Those appliances need to be onsite to
                check against worktop requirements and to precisely measure cut
                position and shape.
                <br />- Joint & worktop layout: Project manager should be onsite
                to further discuss joint locations and final layout with our
                surveyors
                <br />- Overhang & corners: Handless cabinet doors have less
                worktop overhung while kitchen unit with handled doors will have
                larger worktop overhangs. Most of exposed kitchen worktop
                corners will be rounded and it will be discussed onsite with
                surveyors.
                <br />- Access: It is crucial to have clear access. Access to
                flats where there is flight of stairs can affect the length of
                the worktops.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplatingNew;
