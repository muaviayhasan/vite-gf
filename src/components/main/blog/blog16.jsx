import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";
import BlogSidebar from "../../features/sidebar/blog-sidebar";
import OwlCarousels from "../../features/owl-carousel";
import ErrorPage from "../pages/404";

class Blog16 extends Component {
  render() {
    return (
      <div className="main">
        {/* <PageHeader title="Default With Sidebar" subTitle="Single Post" /> */}
        <Breadcrumb title="Best qualities of Marble worktops" adClass="mb-3" />

        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <article className="entry single-entry">
                  <div className="entry-body">
                    <h2 className="entry-title"></h2>

                    <div className="entry-content editor-content">
                      <div className="pb-1"></div>

                      <h3>5 things to consider when Renovating your kitchen</h3>

                      <div>
                        <p style={{ fontSize: 17 }}>
                          It’s a journey to create your dream kitchen.
                        </p>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/16-Picture1.png`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          Renovating your kitchen can be costly work and can be
                          very hard because of the number of choices and types
                          of materials available. We will help you renovate your
                          kitchen at the lowest prices possible and provide you
                          with many things to help you redesign and remodel your
                          kitchen. We will also help you pick a theme for your
                          kitchen and materials to match your theme. Here are
                          some things you should consider when renovating your
                          kitchen.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <div>
                          <br />
                          <b
                            style={{
                              fontSize: 18,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Planning your goals{" "}
                          </b>
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/16-Picture2.png`}
                          alt="desc"
                        />
                        <br />
                        When renovating your kitchen, the first thing that you
                        should do is plan out your goals so you can have an idea
                        about what you need for your kitchen and what theme it
                        should be. We provide many products to choose from, such
                        as splashbacks and worktops, which will help you select
                        the ideal products for your kitchen renovation. A
                        well-planned kitchen looks flawless which makes this
                        step very crucial and important. You should plan the
                        theme, the colour and your budget to make sure your
                        renovations look fabulous.
                        <br />
                        <br />
                        <div>
                          <b
                            style={{
                              fontSize: 18,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Setting a budget{" "}
                          </b>
                          <br />
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/16-Picture3.png`}
                            alt="desc"
                          />
                          <br />
                          The most important thing you should consider when
                          renovating your kitchen is setting up a budget to have
                          an idea of how much you are willing to spend on the
                          renovation. Setting up a budget will help you set a
                          goal and help you find the things you need under your
                          budget. We provide the best products for renovating
                          your kitchen at a fair price that isn't costly.
                          Finding things you want for your kitchen can be
                          difficult due to the large amounts of choices
                          available but having a budget set will allow you to
                          know what can be done and what cannot be done.{" "}
                        </div>
                        <br />
                        <div>
                          <b
                            style={{
                              fontSize: 18,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Selecting a Theme <br />
                          </b>
                          <br />
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/16-Picture4.png`}
                            alt="desc"
                          />
                          <br />
                          One of the most critical steps to renovating our
                          kitchen is selecting a theme. You should keep in mind
                          the theme you want to have in your kitchen to make it
                          look beautiful. We provide many types of themes to
                          choose from at a fairly reasonable price which will
                          help you pick the suitable theme for your kitchen
                          while staying within budget. Without a proper theme,
                          your kitchen will look incomplete and messed up.
                        </div>
                        <br />
                        <div>
                          <b
                            style={{
                              fontSize: 18,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Deciding on a colour scheme <br />
                          </b>
                          <br />
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/16-Picture5.png`}
                            alt="desc"
                          />
                          <br />
                          When you decide on a theme for your kitchen, you have
                          to also decide on a colour scheme which is also a
                          critical step when renovating your kitchen because you
                          have to make sure the colour scheme you have chosen
                          suits your kitchen theme. We provide a wide variety of
                          colours to choose from, which will allow you to select
                          the colour you want for your kitchen renovation.
                          Colour scheme defies your kitchen along with the theme
                          which makes this step extremely important in
                          renovating your kitchen.
                        </div>
                        <br />
                        <div>
                          <b
                            style={{
                              fontSize: 18,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Picking the best material for your kitchen <br />
                          </b>
                          <br />
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/16-Picture6.png`}
                            alt="desc"
                          />
                          <br />
                          The last but very crucial step is selecting the best
                          material for your kitchen. The material plays a vital
                          role in the kitchen as worktops and splashbacks are
                          made out of these materials. We provide a wide variety
                          of materials to choose from, such as glass, granite,
                          marble and many more, which will help you pick the
                          most suitable material.{" "}
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

export default Blog16;
