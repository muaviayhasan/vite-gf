import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";

class Fabrication extends Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>Fabrication Services, London</title>
          <meta
            name="description"
            content="In house fabrication using automated and semi-automated machineries, skilled stonemasons fabricate and shape stone worktops to perfection."
          />
          <meta
            name="keywords"
            content="Fabrication, kitchen manufacturing, stone kitchen worktop, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Stone splashbacks, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
          />
        </Helmet>

        <Breadcrumb title="Fabrication" adClass="border-0 mb-0" />

        <div className="container">
          <img
            src="/assets/images/gnf/fabrication/fabrication-2.jpg"
            style={{ maxHeight: "470px", width: "100%" }}
            alt="Fabrication, kitchen manufacturing, stone kitchen worktop, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Stone splashbacks, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
          />
          {/* <h1 className="page-title text-white">
            GNF<span className="text-white">Fabrication</span>
          </h1> */}
          <h1 className="page-title text-white"></h1>
        </div>

        <div className="page-content pb-0">
          <div className="container">
            <h2 className="title" style={{ marginLeft: "0.6%" }}>
              Fabrication:
            </h2>
            <p className="col-md-12">
              In house fabrication using automated and semi-automated
              machineries, skilled stonemasons fabricate and shape stone
              worktops and other product to perfection. The factory & its
              showroom over 3500 SFT with three production lines for granites
              and marbles worktops, quartz worktops and sintered stone surfaces.
              Consistency and quality control are maintained through quality
              check procedures for each and every product we supply meeting and
              exceeding UK standard. Production is not limited to commercial
              projects, we also fabricate for residentials, builders and kitchen
              showrooms.
            </p>
            <div className="pt-2 mb-1 mb-lg-1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 mb-3 mb-lg-0">
                    <h2 className="title">Products are (not limited to):</h2>
                    <p className="mb-2">
                      - Granite kitchen worktop.
                      <br />- Marble kitchen worktop.
                      <br />- Quartz Kitchen worktop.
                      <br />- Bespoke Marble tiles.
                      <br />- Fireplaces.
                      <br />- Marble, Granite and Quartz vanity tops.
                      <br />- Stone & sintered stone countertops.
                      <br />- Made to measure stone stairs.
                      <br />- Stone splashbacks.
                      <br />- Glass Splashbacks.
                      <br />- Compact surfaces facades.
                      <br />- Sintered stone worktops.
                      <br />- Porcelain and Ceramic decorative panels.
                      <br />- All type of stone worksurfaces including cladding,
                      bath surrounds and bespoke marble wet- rooms. <br />
                      Over 20 years of experience with extensive sourcing links,
                      Glass & Fusion have managed quality, consistency and
                      prices crafting beautiful worksurfaces at affordable
                      prices. <br />
                      <br />
                    </p>
                  </div>

                  <div className="col-lg-6 offset-lg-1">
                    <div className="about-images" style={{ paddingTop: "0px" }}>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/fabrication/fabrication.jpg`}
                        alt="Fabrication, kitchen manufacturing, stone kitchen worktop, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Stone splashbacks, Ceramic kitchen worktop, marble stairs, stone fireplace, Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops"
                        className="templating-img-front"
                        style={{ height: 600 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="col-md-12">
              <h6>Our main services but not limited to:</h6>-{" "}
              <b>Supply only:</b> Fabrication based on client measurements with
              sourcing materials and stone slabs.
              <br />- <b>Supply and Fit:</b> Measure, supply and fit.
              <br />- <b>Replace worktops:</b> Replacing existing worksurface
              with option of dismantle existing worktop and reconnect appliances
              to the newly fabricated worktop.
              <br />- <b>Showrooms assistance:</b> We fabricate and source
              materials for showrooms for display purpose with 75% to 100% OFF.
              <br />- <b>Contracts:</b> Contractors can enjoy the benefit of our
              interior design consultant while Glass & Fusion source, fabricate
              and deliver projects on time. Projects are managed by dedicated
              team controlling cost, schedule, fabrication and delivery time.
              <br />- <b>Designing:</b> At Glass & Fusion we can help sourcing
              the right material fit to purpose worksurface with colour scheme &
              cost in mind, including fitting lit countertops and worksurfaces.
              <br />- <b>Materials:</b> We process Marble, Granite, Quartz,
              Sintered stone (porcelain & ceramic), Onyx, Slate, Limestone,
              Basalt, Sandstone, Semi-Precious stone, quartzite and Glass.
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Fabrication;
