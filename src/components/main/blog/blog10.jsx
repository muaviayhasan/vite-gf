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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/the ideal thickness for your worktop.jpg`}
                        alt="desc"
                      />

                      <h3>The Ideal Thickness for Your Quartz Worktop</h3>

                      <div>
                        <div>
                          Quartz worktops are the new popular choice for homes
                          because they are durable, modern and require very
                          little maintenance. They are available in many
                          different colors and styles, so contractors use them
                          in residential and commercial spaces.
                          <br />
                          If you have decided that you want a quartz worktop,
                          then you are halfway there. There are many more
                          decisions to be made about the color, style, setting,
                          and size of the slab. However, a critical aspect of
                          the kitchen worktop that many ignore is the counter's
                          thickness—knowing what thickness to keep requires some
                          background knowledge and a vision for the room. We
                          have compiled some tips that will make choosing easier
                          for you.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <div>
                        <br />
                        <div>
                          <b> The of Basics Quartz </b> &nbsp;&nbsp; The first
                          thing to do is to find out all the options that are
                          available for you. The most common thicknesses are 2-3
                          cm for quartz, but you can have a thicker slab for
                          your custom made kitchen worktop. The contractor can
                          build the edge up to create a more contemporary look.
                        </div>
                        <br />
                        <div>
                          <b>Available Space </b> &nbsp;&nbsp; Quartz worktops
                          are limited to kitchens and work as bars, islands,
                          bathrooms, and any other space that requires a
                          horizontal surface. The kitchen is the center of the
                          home, especially one with an open floor plan. A
                          thicker worktop will make the room pop, and it will
                          also be sturdy enough to withstand the constant use.
                          <br />
                          The thinner 2cm quartz worktops are the right choice
                          for bathrooms where a lot of material is not required
                          to make a statement. They are also only used to keep a
                          few skincare items as well as the odd makeup brush.
                        </div>
                        <br />
                        <div>
                          <b>Style it Your Way </b> &nbsp;&nbsp; Quartz worktops
                          are versatile and can fit into any aesthetic. They can
                          look like marble or granite and feel as sturdy as them
                          too. However, it would be best if you were sure of
                          what style would suit your home. The thickness of the
                          worktop depends on the space and interior design of
                          the room. A sleeker, thinner kitchen worktop would
                          look better in a smaller room and has a minimalistic
                          design.
                          <br />
                          Pay attention to the focal points in a room before you
                          decide on a thickness. Some rooms look good with a
                          waterfall side, but a sleek slab on the top of the
                          counter could be the most cost-effective solution for
                          others.
                        </div>
                        <br />
                        <div>
                          <b>Over the Edge </b> &nbsp;&nbsp; You can ask for a
                          worktop design with different edges, and the most
                          popular is the eased edge, where the sides are
                          rounded-off to create smooth lines. There are many
                          other options to choose from, but it again depends on
                          the thickness. The thinner edge is more suited for the
                          DuPont or ogee styles, but the bullnose is one that
                          would look great on a thick kitchen worktop. The half
                          bullnose also looks excellent when the thickness is at
                          least 3 centimeters, so you can decide what kind of
                          surfaces you want in your rooms by settling on a
                          thickness.
                        </div>
                      </div>
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
