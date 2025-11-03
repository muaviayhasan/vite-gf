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
          title="GLASS SPLASHBACKS IN NORTH, SOUTH, EAST & WEST LONDON – SUPPLY & INSTALLATION"
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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/shutterstock_56408032.jpg`}
                        alt="desc"
                      />

                      <h3>
                        GLASS SPLASHBACKS IN NORTH, SOUTH, EAST & WEST LONDON –
                        SUPPLY & INSTALLATION
                      </h3>

                      <ul>
                        <li>
                          Here at Glass and Fusion, we provide high standard
                          glass splashbacks to the whole of London. We are able
                          to see the process straight through from the supply to
                          installation. In addition to choosing from our range,
                          we are also able to create a bespoke splashback for
                          your bathroom or kitchen areas.
                          <br />
                          <br />
                          If you are interested in getting a FREE quote from us,
                          then do not hesitate to get in touch where one of our
                          friendly team will be able to assist you further.
                        </li>
                      </ul>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <li>
                          <b> Why Choose a Glass Splashback?</b>
                          Glass splashbacks are perfect for both kitchen and
                          bathroom areas and will create one stunning feature
                          for the room in question. One of the bonuses of having
                          a glass splashback is that it is able to bounce and
                          reflect light around the room, creating the illusion
                          of the room being much bigger than it is. For our
                          glass splashbacks, we offer lengths of up to 3 metres.
                          But this can only be done if the height is no more
                          than 1 metre. However, we do advise that sometimes the
                          longer lengths should be divided into 3 different
                          panels to help the access and installation process.
                        </li>
                        <li>
                          <b>Why Choose Us? </b>
                          Glass and Fusion are one of the best services for
                          glass splashbacks in North, South, East & West London.
                          We are able to create glass splashbacks that will
                          complement your existing design and style which
                          includes your flooring, cupboards, worktops etc.
                          Whatever your theme is, we will be able to offer you
                          the perfect accompaniment. We provide both modern and
                          traditional glass splashbacks to suit the overall
                          appearance that you have in mind to help create the
                          kitchen or bathroom of your dreams. We are even able
                          to fully hide the glass splashbacks if this is
                          something that you would prefer – all you have to do
                          is let us know your requirements and we will work to
                          meet them.
                        </li>
                        <li>
                          <b>Style and Toughening </b>
                          When it comes to choosing the style of glass
                          splashbacks, you need to keep in mind where the heat
                          sources are located. All of our splashbacks are
                          usually toughened but this can interfere with the
                          style, so we are more than happy to not toughen the
                          glass splashbacks if it is possible. If your heat
                          source is positioned right next to the splashback then
                          it would need to be toughened, for this not to happen
                          we would need the heat source to be 200mm away from
                          the splashback. However if any cut outs are needed for
                          the sockets or switches in the room and they are 50mm
                          from the edge of the glass or another socket, then we
                          will not necessarily have to toughen it.
                          <br />
                          <br />
                          If you need any assistance in whether or not
                          toughening is needed, then we are more than happy for
                          you to send us some pictures and we will see for
                          ourselves whether it is needed. We will have a look at
                          the photos and then offer you some advice based on
                          what we can see.
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
