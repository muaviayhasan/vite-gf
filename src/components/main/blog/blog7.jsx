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
          title="HOW TO CHOOSE THE RIGHT GLASS SPLASHBACK FOR YOUR KITCHEN?"
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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/kitchen-panels-photos-printed-on-glass.jpg`}
                        alt="desc"
                      />

                      <h3>
                        HOW TO CHOOSE THE RIGHT GLASS SPLASHBACK FOR YOUR
                        KITCHEN?
                      </h3>

                      <ul>
                        <li>
                          Splashbacks are very important pieces to have within
                          the kitchen, after all they protect your walls. So,
                          you have decided on a glass splashback on your kitchen
                          but you do not know what one to choose. This overview
                          will provide you with some information on how you can
                          choose the best glass splashback for your kitchen.
                        </li>
                      </ul>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <li>
                          <b> Toughening</b>
                          Usually, all of the glass splashbacks that we create
                          we will toughen them automatically, however this does
                          not need to be done all the time. Toughening can
                          interfere with the style slightly so if this is
                          something that you are not keen on happening, then you
                          need to make sure you know the measurements and
                          whether or not we can install your splashback this
                          way.
                          <br />
                          <br />
                          Our requirements for glass splashbacks not being
                          toughened are: Needs to be 200mm away from heat
                          sourcePots cannot rest against glass splashbackCut
                          outs for sockets/switches need to be 50mm from edges
                          <br />
                          <br />
                          Furthermore, if you are unsure then you are able to
                          send us photos of your kitchen area and we will advise
                          on what we think is best upon viewing them. We can
                          only give our best advice on clear pictures and based
                          on what we are able to see. Toughening is more
                          beneficial but it is not always needed. We provide
                          both modern and traditional glass splashbacks to suit
                          the overall appearance that you have in mind to help
                          create the kitchen or bathroom of your dreams. We are
                          even able to fully hide the glass splashbacks if this
                          is something that you would prefer – all you have to
                          do is let us know your requirements and we will work
                          to meet them.
                        </li>
                        <li>
                          <b>Bespoke </b>
                          If our range of glass splashbacks are not what you had
                          in mind, then we are able to create fully bespoke
                          glass splashbacks for your kitchen. All you have to do
                          is have an idea of what you would want or need and we
                          will help you create the splashback of your dreams
                          that meets all the practicality needs too.
                        </li>
                        <li>
                          <b>Consider Your Style </b>
                          All of our glass splashbacks are as practical as the
                          next, so regardless of what the style is they will all
                          meet your standards so picking out the style has never
                          been easier. When picking which style you would like,
                          decide on whether you want it to stand out as a focal
                          point or blend in. Regardless of either, we will
                          create a glass splashback that will complement the
                          design of the kitchen.
                          <br />
                          <br />
                          We offer a range of both traditional and contemporary
                          glass splashbacks, so it is all down to the vision you
                          have in mind for your kitchen.
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
