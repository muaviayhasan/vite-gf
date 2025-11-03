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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/MOST-POPULAR-TYPES-OF-GLASS-SPLASHBACKS-FOR-KITCHENS.jpg`}
                        alt="desc"
                        className="float-left"
                      />

                      <h3>
                        MOST POPULAR TYPES OF GLASS SPLASHBACKS FOR KITCHENS
                      </h3>

                      <ul>
                        <li>
                          When it comes to deciding on which material you are
                          going to use for your kitchen splashback it can often
                          be a difficult decision. However, when you have
                          finally decided on glass, your decision process does
                          not stop there. You now have to choose which type of
                          glass you are wanting to have and what will go with
                          your kitchen design better.
                        </li>
                        <li>
                          The most popular is toughened glass, however there are
                          more that you can choose from. There are many options
                          for your glass kitchen splashbacks and it is so
                          popular and is usually chosen for modern houses and
                          kitchens.
                        </li>
                        <li>
                          But why is glass so popular? It has a long list of
                          benefits which appeals to homeowners. If you are
                          looking for a hygienic splashback that will have no
                          grout lines, be affordable and available in an
                          unlimited number of colours and designs, then glass is
                          for you. You can further personalise your glass
                          splashback by choosing a piece of artwork or pattern
                          for it. Furthermore, glass is great at reflecting
                          light to create depth and space around the kitchen.
                        </li>
                      </ul>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <li>
                          <b>Types of Glass</b> There are three popular choices
                          when it comes to choosing your glass splashback and we
                          will give a brief overview of them to help you decide
                          which one is for you.
                        </li>
                        <li>
                          <b>Toughened 6mm Safety Glass</b> is one of the most
                          popular choices and is the typical glass that
                          homeowners go for. The glass that gets used can either
                          be clear which has a natural green tint or Starphire
                          glass.
                        </li>
                        <li>
                          <b>Starphire Glass</b> is a low iron glass which
                          eliminates that natural green tint that some people
                          may not be a fan of. Because of this, it allows for
                          colour matching for light and warmer colours.
                        </li>
                        <li>
                          <b>Mirrored Splashbacksare</b> getting used more often
                          in kitchen renovations as they are very fashionable
                          and offer huge benefits. Mirrored splashbacks are heat
                          resistant and are available in many different colours
                          such as silver, bronze and smokey. Much like clear
                          glass, a mirrored splashback will help to create the
                          illusion of a bigger room by reflecting light, so
                          would be a great choice for smaller kitchens. Mirrors
                          also help to create style in the room and would go
                          perfect in an all-white kitchen.
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
