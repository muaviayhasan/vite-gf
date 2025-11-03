import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";
import BlogSidebar from "../../features/sidebar/blog-sidebar";
import OwlCarousels from "../../features/owl-carousel";
import ErrorPage from "../pages/404";

class Blog13 extends Component {
  render() {
    return (
      <div className="main">
        {/* <PageHeader title="Default With Sidebar" subTitle="Single Post" /> */}
        <Breadcrumb title="Five home remodeling ideas" adClass="mb-3" />

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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Picture2.jpg`}
                        alt="desc"
                      />

                      <h3>Five home remodeling ideas</h3>

                      <div>
                        <div>
                          Remodeling your house can be done for various reasons;
                          you could be looking to increase your property's value
                          before selling. You may want to update your house's
                          internal workings for personal use or simply because
                          you felt like doing something different with your
                          space. Whatever your reasons may be, remodeling is
                          long and tedious, with various steps and planning to
                          be done beforehand to cut down on costs related to
                          materials, contractors, etc.
                          <br />
                          <br />
                          One of the most common struggles people face when
                          remodeling is to come up with ideas and plans of what
                          they want. Sometimes your visions may not translate
                          too well when being executed. Keeping that in mind, we
                          have prepared a list including give home remodeling
                          ideas to fit all your remodeling needs and make your
                          house a home.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <div>
                          <b> 1. New kitchen worktops </b> &nbsp;&nbsp;One new
                          remodeling concept that is on the rise includes newer,
                          more modern kitchen worktops. Most people live in
                          houses they have lived in for years or maybe decades.
                          The most affordable option includes updating your
                          current residence to make it look sleeker and more
                          modern, rather than the original and more traditional
                          work. Glass & Fusion offers a wide variety of kitchen
                          worktops to choose from, including granite, marble,
                          and quartz, in order to ensure that your kitchen is a
                          unique set up, made possible by your vision.
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Picture1.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b>2. New floors </b> &nbsp;&nbsp; Another interesting
                          remodeling idea could include newer, more modern
                          floors. Most traditional floors are either covered
                          with outdated tiles or carpets. Therefore, an
                          interesting idea could be to get new hardwood or
                          marble floors, so your house looks and feels airier,
                          as well as open.
                        </div>
                        <br />

                        <div>
                          <b>3. New outdoor setting </b> &nbsp;&nbsp; In
                          addition, another exciting home remodeling idea could
                          include installing a new patio or outdoor furniture
                          such as new lawn chairs and tables. Most traditional
                          houses lack a nice outdoor deck; therefore, a good
                          remodeling idea could even be installing one. These
                          new remodeling ideas can make your home look very
                          aesthetic and also create a space where you would want
                          to hang out with your family or friends and invite
                          people over for an outdoor barbeque to have a good
                          time.
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Picture3.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b>4. New bathroom interior </b> &nbsp;&nbsp; One of
                          the most common remodeling ideas includes updating
                          your bathroom interior as, over the years, there have
                          been many advancements in items such as bathtubs,
                          sinks, toilets, etc. People have now switched over
                          from regular bathtubs to Jacuzzis as well as from
                          manual showers to electric ones; therefore, updating
                          your bathroom to look sleeker is a good idea.
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Picture4.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b>5. New ceilings </b> &nbsp;&nbsp; Another
                          remodeling idea includes getting new ceilings as the
                          traditional ones may be very high and bare. In
                          contrast, the new ceiling styles include ones with
                          various neon lights or spotlights installed that can
                          make your whole room look extremely aesthetic and put
                          together, adding more depth to your house. This method
                          is not very expensive as well. Therefore, it can be
                          implemented everywhere, sometimes even without a
                          contractor.{" "}
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Picture5.jpg`}
                          alt="desc"
                        />
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

export default Blog13;
