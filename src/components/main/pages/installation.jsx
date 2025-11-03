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
          <title>Worktop Installation Services, London</title>
          <meta
            name="description"
            content="Glass & Fusion has an experienced inhouse team to install all products; kitchen worktops, fireplaces, bathroom and bespoke tile and complete wet-room marble."
          />
          <meta
            name="keywords"
            content="Installation, kitchen manufacturing, stone kitchen worktop, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Stone splashbacks, Ceramic kitchen worktop, marble stairs, stone fireplace,Bespoke tile,  Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops, London kitchen worktops."
          />
        </Helmet>

        <Breadcrumb title="Installation" adClass="border-0 mb-0" />

        <div className="container">
          <img
            src="/assets/images/gnf/fabrication/installation.jpg"
            style={{ maxHeight: "470px", width: "100%" }}
            alt="Installation, kitchen manufacturing, stone kitchen worktop, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Stone splashbacks, Ceramic kitchen worktop, marble stairs, stone fireplace,Bespoke tile,  Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops, London kitchen worktops."
          />
          {/* <h1 className="page-title text-white">
            GNF<span className="text-white">Fabrication</span>
          </h1> */}
          <h1 className="page-title text-white"></h1>
        </div>

        <div className="page-content pb-0">
          <div className="container">
            <h2 className="title" style={{ marginLeft: "0.6%" }}>
              Worktop Installation:
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
                    <p className="mb-2">
                      Apart from supplying and fabrication, we have experienced
                      team install all our products, kitchen worktops
                      installation, fireplaces, bathroom and bespoke tile and
                      complete wet-room marble installation.
                      <br />
                      <br />
                      Installation of stone worksurfaces completely managed by
                      Glass & Fusion and there is no subcontract. Usually the
                      site surveyor is a member of installation team making sure
                      all requirements is met upon installation.
                      <br />
                      <br />
                      Fixing the kitchen worktop, granite worktops, quartz
                      worktop, marble worktop and compact worktop takes 2 to 5
                      hours depends on the size of the kitchen worktop.
                      <br />
                      <br />
                      Glass & Fusion is a UK provider of workmanship to the
                      heart of your home, but you can call us G&F. We are based
                      in London and for 20 years we have focused on delivering
                      the highest quality worktops, splashbacks and full kitchen
                      worktops for both residential and commercial projects.
                      Whenever you think about kitchen, you should think G&F,
                      and we will tell you why.
                      <br />
                    </p>
                  </div>

                  <div className="col-lg-6 offset-lg-1">
                    <div className="about-images" style={{ paddingTop: "0px" }}>
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/fabrication/istallation-2.jpg`}
                        alt="Installation, kitchen manufacturing, stone kitchen worktop, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Stone splashbacks, Ceramic kitchen worktop, marble stairs, stone fireplace,Bespoke tile,  Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops, London kitchen worktops."
                        className="templating-img-front"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="col-md-12">
              In today's housing market, your kitchen valuation can drastically
              drive the price of your home up. According to Houzz.com it does
              not matter whether you are selling your home now or years from
              now, installing the right kitchen could be key to getting the
              right price. It's widely recognised that the room most likely to
              add vaue is the kitchen and when it comes to kitchen we are here
              to help you with design, planning and installation.
              <br />
              We are a long established, family-run business, with tons of
              knowledge in the sourcing of stones, design of kitchens and
              delivery of a finely-installed project. Here at G&F, we pride
              ourselves in offering the best quality work and service to help
              you achieve your Dream Kitchen. If you are on the market for a
              kitchen transformation you will need to decide if you want quartz,
              granite, marble, sintered stone, or who knows, even a quartzite.
              <br />
              <br />
              In order to provide you with the best advice, we do a lot of
              research in finding out today's trending colors and suppliers of
              natural and artificial stones, so that we can deliver a unique job
              to each customer. You can check all our portfolio of colors on the
              website so that you can start to plan what your future kitchen is
              going to look like. Of course, we recommend scheduling an
              appointment so that you can see some finished projects and touch
              the different colors and materials yourself.
              <br />
              <br />
              From stylish marbles, to exotic granites, all the way quartz, we
              carry colors supplied by the industry's most reliable providers of
              slabs for kitchen worktops, such as Silestone, Caesarstone and
              Dekton.
              <br />
              <br />
              Say what you want, but achieving the desired goal in a kitchen
              project is not always easy. Whether you decide natural stones are
              for you, or you have a feeling that quartz might be better, we
              will be here to tell you the pros and cons of each choice, and the
              maintenance costs (or not) that come with it.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Fabrication;
