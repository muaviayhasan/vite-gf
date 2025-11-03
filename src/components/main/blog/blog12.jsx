import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";
import BlogSidebar from "../../features/sidebar/blog-sidebar";
import OwlCarousels from "../../features/owl-carousel";
import ErrorPage from "../pages/404";

class Blog1 extends Component {
  render() {
    return (
      <div className="main">
        {/* <PageHeader title="Default With Sidebar" subTitle="Single Post" /> */}
        <Breadcrumb
          title="Thinking of Replacing Your Kitchen Worktop?"
          adClass="mb-3"
        />

        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <article className="entry single-entry">
                  <div className="entry-body">
                    <h2 className="entry-title"></h2>

                    <div className="entry-content editor-content">
                      <div className="pb-1"></div>

                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/5 kitchen worktop materials that are easy to maintain.jpg`}
                        alt="desc"
                      />

                      <h3>
                        5 Kitchen Worktop Materials that are Easy to Maintain
                      </h3>

                      <div>
                        <div>
                          Whether it is for the kitchen, bathroom, or island, a
                          worktop should be durable and elegant. The appearance
                          and strength of the surface come down to the material
                          used. The material also determines the lifetime of the
                          worktop and whether it requires constant maintenance
                          and care. There are many different materials to choose
                          from; however, some require a lot of time and money in
                          upkeep.
                          <br />
                          <br />
                          We have listed down the low maintenance materials yet
                          trendy so that you can make a great choice within your
                          budget. There is a kitchen worktop material for every
                          style, and you can find yours here.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <div>
                          <b> 1. Laminate </b> &nbsp;&nbsp;A laminate worktop
                          offers many advantages other than the easy
                          maintenance. It is affordable and available in almost
                          any color or design. The surface is entirely solid and
                          non-porous, so you can clean it yourself using
                          store-bought cleaning agents. A laminate worktop will
                          not need refinishing or sealing after installation,
                          bringing down the cost considerably. It is easily
                          replaced and available in many different brands.
                        </div>
                        <br />
                        <div>
                          <b>2. Glass Chips in Resin </b> &nbsp;&nbsp; One
                          sustainable and eco-friendly kitchen worktop is the
                          crushed glass embedded in resin to create beautiful
                          patterns. The surface has a smooth finishing, and it
                          is another non-porous countertop option making the
                          cleanup quick. The resin is resistant to heat, stains,
                          and other kinds of wear and tear, and as a bonus, it
                          does not require sealing either.
                        </div>
                        <br />
                        <div>
                          <b>3. Solid Surface </b> &nbsp;&nbsp; There are plenty
                          of options in solid surface worktops, including the
                          popular Soapstone and Corian. These worktops are
                          highly rated and can be easily wiped clean with a
                          table cloth and soapy water. The solid surface
                          worktops are epoxy or acrylic resin products, and it
                          is resistant to heat and does not stain easily. You
                          can restore them yourselves by sanding out any
                          scratches, and the expenses are easy to manage on a
                          limited budget.
                        </div>
                        <br />
                        <div>
                          <b>4. Stainless Steel </b> &nbsp;&nbsp; Stainless
                          steel is another good option for a low-maintenance
                          kitchen worktop. You might think associate stainless
                          steel with industrial kitchens, but it can look very
                          chic in a household setting as well. There is no
                          sealing or refinishing for stainless steel, and
                          cleaning it is quick and easy. There is no reason to
                          worry about spilling juice, sauce, wine, or curry on
                          them because they will not stain or fade. The steel is
                          heat resistant, and you can place hot pans directly on
                          it. Many brands produce custom made kitchen worktops,
                          and you can order yours from them.
                        </div>
                        <br />
                        <div>
                          <b>5. Quartz </b> &nbsp;&nbsp; Quartz worktop looks
                          attractive in any kitchen because of the many styles
                          they can adopt. It is the ideal material for those
                          with a flexible budget because it has the appearance
                          and characteristics we all want in a kitchen worktop.
                          It looks exactly like marble or granite but comes
                          without the high installation and sealing costs.
                          Quartz is non-porous and does not require unique
                          cleaning products. It is a humanmade stone known to
                          resist scratches and dents, so it lasts longer than
                          the other materials.{" "}
                        </div>
                      </ul>
                      <div className="pb-1"></div>
                    </div>
                  </div>
                </article>
              </div>

              <aside className="col-lg-3">
                <BlogSidebar />
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog1;
