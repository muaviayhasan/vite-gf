import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";

class Templating extends Component {
  render() {
    return (
      <div className="main">
        {/* <Helmet><title>GNF - Templating</title></Helmet> */}

        <Breadcrumb title="Templating" adClass="border-0 mb-0" />

        <div className="">
          <div className="container">
            <br />
            <h6>Templating:</h6>
            Templating or measuring is one of our services and it is a key stage
            while processing your order.
            <br />
            <br />
            Upon site survey or templating, we will be discussing all
            requirements for your worksurface while the final product will be
            manufactured accordingly. Our surveyor will not only take
            measurements instead will highlight all aspect of job with you in
            terms of safety, support, cut positions, edge, colour confirmation,
            practical advice and practise, overhangs, angles and other
            requirements. Our main product is stone kitchen worktop and we
            produce templates, laser measuring and site survey for no obligation
            quote.
            <br />
            <br />
            Granite, Quartz & ceramic kitchen worktops measuring will take about
            an hour depends on the kitchen sizes. Our templating service not
            limited to worktops, we survey for marble stairs, marble vanity
            tops, wet-room cladding, stone fireplaces, onyx counters, bath
            surround, stone dining tables and barbeque granite worktops.
            Ultimately, we can bespoke our stone fabrication tailored to your
            project requirements.
            <br />
            <br />
            We mainly cover London and its surrounding counties however our
            dedicated team can travel further subject to job size.
            <br />
            <br />
            We have procedures in place for made to measure kitchen worktops and
            stone worksurfaces ranging from quotation upon fitting. Upon
            quotation we will generate digital drawing for the stone worktops
            highlighting their lengths and possible joint location.
            <br />
            <img src="assets/images/gnf/templating/1.png" />
            <br />
            <br />
            <h6>Corex Sheets templating:</h6>
            Corex sheet templating will form replica for your stone kitchen
            worktop, shaped to the desired area with highlight to cut positions,
            overhangs, corners …etc. It will help to visualise the worktop
            before committing to final layout. Most of stone worktop attached
            appliances have no digital drawing which make it more practical to
            take template by plastic corex sheets.
            <br />
            <img src="assets/images/gnf/templating/2.jpg" />
            <br />
            <h6>Laser measuring:</h6>
            <br />
            Most of ultra-compact counters and worktops will be measured by
            laser templating device to be processed though our CNC machines and
            this service also available to all fabricated countertops depends on
            the complexity of the job.
            <img
              src="assets/images/gnf/templating/3.jpg"
              width="50%"
              height="50%"
            />
            <br />
            <img
              src="assets/images/gnf/templating/4.jpg"
              width="50%"
              height="50%"
            />
            <br />
            <img src="assets/images/gnf/templating/5.jpg" />
            <br />
            <img
              src="assets/images/gnf/templating/6.jpg"
              width="50%"
              height="30%"
            />{" "}
            <br /> <br />
            All templates and measuring goes into thorough examination before go
            into production, selected pictures above as example: the surveyor
            generate two layouts for fabrications, one drawing is being used for
            accurately checking the requirements and its details while the
            second worktop laser measurements downloaded to machine software for
            cutting. Quality control documents will be circulated with the
            worktop as it travels from one stage to another upon worktop
            fabrication.
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div style={{ width: "48%" }}>
                <img src="assets/images/gnf/templating/8.jpg" />
              </div>
              <div style={{ width: "48%" }}>
                <img src="assets/images/gnf/templating/9.jpg" />
              </div>
            </div>
            <br />
            <img src="assets/images/gnf/templating/10.jpg" />
            <br />
            <img src="assets/images/gnf/templating/11.jpg" />
            <br />
            <img src="assets/images/gnf/templating/12.jpg" />
            <br />
            <h6>Template Checklist:</h6>
            - Support & safety: Kitchen cabinet and units should be secured and
            levelled. Firm & rigid structure supporting the weight of the stone
            worktop.
            <br />- Appliances: We need to make cut for all appliances connected
            to the worktops such sinks/hobs/pop-up sockets, supporting legs
            …etc. Those appliances need to be onsite to check against worktop
            requirements and to precisely measure cut position and shape.
            <br />- Joint & worktop layout: Project manager should be onsite to
            further discuss joint locations and final layout with our surveyors
            <br />- Overhang & corners: Handless cabinet doors have less worktop
            overhung while kitchen unit with handled doors will have larger
            worktop overhangs. Most of exposed kitchen worktop corners will be
            rounded and it will be discussed onsite with surveyors.
            <br />- Access: It is crucial to have clear access. Access to flats
            where there is flight of stairs can affect the length of the
            worktops.
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Templating;
