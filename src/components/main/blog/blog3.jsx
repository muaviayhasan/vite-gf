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
          title="MOST POPULAR TYPES OF GLASS SPLASHBACKS FOR KITCHENS"
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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/10-Things-You-Should-Know-About-Kitchen-Glass-Splashbacks-1024x768.jpg`}
                        alt="desc"
                        className="float-left"
                      />

                      <h3>
                        10 THINGS YOU SHOULD KNOW ABOUT KITCHEN GLASS
                        SPLASHBACKS
                      </h3>

                      <ul>
                        <li>
                          You are considering installing a glass splashback in
                          your kitchen but is it right for you? A kitchen
                          splashback is so important as it will be protecting
                          your walls whilst you are cooking.
                        </li>
                        <li>
                          The most popular is toughened glass, however there are
                          more that you can choose from. There are many options
                          for your glass kitchen splashbacks and it is so
                          popular and is usually chosen for modern houses and
                          kitchens.
                          <br />
                          <br />
                          This overview will provide you with some of the things
                          that you need to know about kitchen glass splashbacks
                          before you purchase.
                        </li>
                      </ul>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <li>
                          <b>Modern</b> If you have a traditional home, then a
                          glass splashback may not be the right decision for
                          your home as they are usually placed within modern
                          kitchens and homes. However, depending on your kitchen
                          design it may still work for you regardless. You just
                          need to make sure that a glass splashback will fit in.
                        </li>
                        <li>
                          <b>Colours and Patterns</b> You may not realise but
                          when creating a glass splashback, you will have a huge
                          range of colours and patterns to choose from, rather
                          than just plain glass or a plain colour. If you would
                          like,
                        </li>
                        <li>
                          <b>Expensive</b> Your budget will be a big decider
                          over which material you have for your splashback, so
                          glass being expensive may rule it out for you.
                          However, it may be expensive, but you will be getting
                          a high quality splashback that can last you for years.
                        </li>
                        <li>
                          <b>Easy to Clean</b> Glass has an amazing feature
                          where it can make your kitchen feel and look much
                          bigger than it actually is. You can use the glass in
                          your kitchen design to help bring more light in to
                          create the illusion that your smaller kitchen is
                          rather large and roomy.
                        </li>

                        <li>
                          <b>Light Reflecting</b> Glass has an amazing feature
                          where it can make your kitchen feel and look much
                          bigger than it actually is. You can use the glass in
                          your kitchen design to help bring more light in to
                          create the illusion that your smaller kitchen is
                          rather large and roomy.
                        </li>

                        <li>
                          <b>Welcoming</b> As we mentioned above, having a glass
                          splashback can help make your kitchen feel so much
                          bigger, but it can also make it look lighter. Bringing
                          in the light to your kitchen can make it feel much
                          more welcoming, especially in family homes.
                        </li>

                        <li>
                          <b>No Windows? No Problem!</b> If your kitchen has no
                          windows or very few, then glass splashbacks will also
                          help the design of your kitchen. Your glass splashback
                          will help to reflect light around the kitchen from
                          other rooms to make your kitchen feel much more open
                          than it actually is; whereas a stone splashback cannot
                          offer you this and may make your kitchen feel closed
                          off.
                        </li>

                        <li>
                          <b>Easily Scratch</b> One of the biggest downfalls of
                          a glass splashback is that it can scratch easily, so
                          you need to be careful what you use when cleaning.
                          However, it generally should not be a problem as
                          splashbacks do not tend to make contact with abrasive
                          or sharp objects by accident, it will usually be a
                          decision you make.
                        </li>

                        <li>
                          <b>DIY</b> Unlike stone splashbacks, it is possible
                          for you to install your glass splashback yourself.
                          However, you still need to know what you are doing to
                          ensure that it has been fitted correctly and will
                          therefore last years. But it is much easier to install
                          than stone splashbacks, which you absolutely should
                          not attempt yourself unless you are a professional.
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
