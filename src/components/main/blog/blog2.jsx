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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Stone-Kitchen-Worktops-vs-Glass-Worktops.jpg`}
                        alt="desc"
                        className="float-left"
                        style={{ width: "100%" }}
                      />
                      <h3>STONE KITCHEN WORKTOPS VS GLASS WORKTOPS</h3>
                      <ul>
                        <li>
                          Deciding on the material of your kitchen worktop is
                          such an important one as it will set the tone for your
                          whole kitchen. When making the decision it comes from
                          a variety factors such as cost, how you will be using
                          the worktop and how much time and money you can allow
                          for care and maintaining it.
                        </li>
                        <li>
                          The cost of the kitchen worktop will vary hugely
                          depending on the exact material of your choice. Stone
                          worktops are not necessarily cheaper because there are
                          so many different stones that you can choose from,
                          ranging from budget-friendly to expensive.
                        </li>
                        <li>
                          Two of the most common worktop materials are stone and
                          glass; this overview will talk briefly about both to
                          help you decide which one would be better for your
                          home. They both have very different advantages and
                          disadvantages, so this will help clear that up, so you
                          can consider both sides before purchasing.
                        </li>
                      </ul>
                      <div className="pb-1 clearfix"></div>
                      <ul>
                        <li>
                          <b>Glass Kitchen Worktops</b> Glass has been
                          traditionally used for kitchen splashbacks, however it
                          is now being used as a very popular material for
                          kitchen worktops as well. Glass is ideal for being
                          used as a worktop in modern homes and will come
                          available in a range of colours; glass comes in almost
                          all colours you can think of, so you shouldn’t be
                          disappointed.
                          <br />
                          <br />
                          Additionally, glass can withstand up to 400 degrees,
                          so it makes the perfect cooking surface as you will no
                          doubt be placing hot pots and pans onto the worktop
                          surface. However, we do recommend that you still use
                          heat pads where necessary to help your glass worktop
                          last a lifetime.
                          <br />
                          <br />
                          Glass kitchen worktops can be quite expensive,
                          depending on the quality, however so are some stones
                          depending on which stone you are looking at. So over
                          all the price of glass may not come up as the most
                          expensive option and can often be cheaper!
                        </li>
                        <li>
                          <b>Stone Kitchen Worktops</b> There are three commonly
                          used stones for stone kitchen worktops and these are:
                          Granite, Quartz and Marble. Granite is most probably
                          the most popular because it is hard and offers so many
                          benefits such as being heat, stain and scratch
                          resistant. However, Quartz offers almost every benefit
                          that Granite does so it is a close contender.
                          <br />
                          <br />
                          Marble is also very popular however its price tag
                          means that not everyone can buy it. Marble comes in a
                          variety of beautiful colours and shades but is a
                          porous material, unlike Granite and Quartz. This means
                          that Marble will hold onto any spillages and will
                          likely stain. So, you need to be far more careful as
                          well as having to spend out for the long-term
                          maintenance fees of re-sealing every year. However,
                          Marble is perfect for those who bake a lot, especially
                          pastry, as it can handle heat well and will prevent
                          the dough from sticking to the surface.
                          <br />
                          <br />
                          Hopefully this guide to stone kitchen worktops and
                          glass worktops have given you some of the information
                          that you need in order to make a decision on which
                          would be better for you and your home.
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
