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
          title="BEST TIPS AND TRICKS TO CLEAN KITCHEN GLASS SPLASHBACKS"
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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Best-Tips-and-Tricks-to-Clean-Kitchen-Glass-Splashbacks-1.jpg`}
                        alt="desc"
                        className="float-left"
                      />

                      <h3>
                        BEST TIPS AND TRICKS TO CLEAN KITCHEN GLASS SPLASHBACKS
                      </h3>

                      <ul>
                        <li>
                          Here at Glass Fusion we can supply and fit glass
                          splashbacks that are completely bespoke to your
                          specification, colour, finish and shape. You tell us
                          what you want, and we will create it!
                          <br />
                          <br />
                          Through years of experience, our specialist fitters
                          can meet any requirements that our clients have. Our
                          team will also match your glass splashback with any
                          fixtures and fittings that you have.
                          <br />
                          <br />
                          We know that you will be happy with your glass
                          splashbacks, so we have put together some tips and
                          tricks for cleaning and keeping them well maintained.
                        </li>
                      </ul>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <li>
                          <b>Choose Your Cleaning Products</b> Before you start
                          cleaning, you should have a look on the market for
                          glass-cleaning products as these will be the best ones
                          out there to help keep your glass free of smudges.
                          There are some great products out there, but you may
                          already have your favourite one!
                        </li>
                        <li>
                          <b>Removing Stubborn Stains</b> If you have stubborn
                          stains on your glass splashbacks then you may be
                          tempted to use something more abrasive than usual,
                          however we advise that you do not do this as it can
                          scratch or damage the glass. For those stubborn
                          stains, simply spray with a glass cleaner of your
                          choice and leave to soak for a few minutes; the stain
                          should then wipe away easily. If not, repeat as
                          necessary.
                        </li>
                        <li>
                          <b>Clean as You Go</b> Cleaning your glass splashbacks
                          regularly or daily can help make the job a lot easier
                          when you do your thorough cleaning. Wiping away food
                          splatters and grease as and when they appear is what
                          we advise, as very often a quick clean after every use
                          it all that is needed to help keep it looking fresh.
                          If you leave on the spillages and splatters from the
                          food, then this is when you will create those stubborn
                          stains we were talking about before. Deal with the
                          mess immediately and then your regular clean will be
                          much easier by focusing on just getting that shine
                          back.
                        </li>
                        <li>
                          <b>Regular Cleaning</b> Even though we recommend to
                          clean as you go along, you should also be cleaning
                          your glass splashback around once every two weeks.
                          This will make sure that the splashback is well
                          maintained and looked after, to ensure it lasts many
                          years. If your glass splashback is not cleaned
                          regularly then it will lose that shine and will end up
                          looking dull.
                        </li>
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
