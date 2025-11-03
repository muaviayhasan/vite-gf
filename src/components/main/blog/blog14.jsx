import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";
import BlogSidebar from "../../features/sidebar/blog-sidebar";
import OwlCarousels from "../../features/owl-carousel";
import ErrorPage from "../pages/404";

class Blog14 extends Component {
  render() {
    return (
      <div className="main">
        {/* <PageHeader title="Default With Sidebar" subTitle="Single Post" /> */}
        <Breadcrumb title="Pros and Cons of Granite Worktops" adClass="mb-3" />

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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/bb11.jpg`}
                        alt="desc"
                      />
                      <br />
                      <h3>Pros and Cons of Granite Worktops</h3>

                      <div>
                        <div>
                          Granite is a natural material that never falls out of
                          fashion and gives everything a luxurious look. Granite
                          worktops are rapidly increasing in popularity and are
                          becoming a top choice when it comes to worktops. These
                          worktops come in a large variety of styles to best fit
                          your kitchen. We provide 29 different styles and
                          colors for you to choose from and to compliment your
                          kitchen. It will be no shock if you decide to choose
                          your worktop to be made out of granite because its
                          luxurious looks give an appealing look to the kitchen
                          and your home.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <div>
                          <b> Advantages of granite worktops </b>{" "}
                          &nbsp;&nbsp;There are many advantages of granite
                          worktops which gives the perfect reason for their
                          increasing popularity. Granite worktops are the top
                          choice when it comes to selecting worktops. We provide
                          the best granite worktops and will give you all the
                          things you need to know when buying the most suitable
                          worktop.
                        </div>
                        <br />

                        <div>
                          <b>Granite worktops look good </b> &nbsp;&nbsp; When
                          we talk about granite worktops, we need to know that
                          granite worktops are the most good-looking worktops
                          that are available because of their appealing looks.
                          It also gives your home and kitchen a luxury touch.
                          Granite worktops have their unique style which no one
                          can compete with. We provide many different styles and
                          colors to make your kitchen look unique and to make
                          sure your granite worktops are exactly the ones you
                          need.
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/Untitled-4.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b>They are Durable </b> &nbsp;&nbsp; Granite worktops
                          are one of the most durable worktops that are
                          available and are ideal for rough use. Not only do
                          they provide you with their good looks but they are
                          also well known for their durability. Only a very
                          serious effort will be able to scratch the granite
                          surface. We provide the most reliable and durable
                          worktops that can last for a lifetime if treated with
                          care.
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/Untitled-1.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b>They are heat and stain resistant </b> &nbsp;&nbsp;
                          Granite worktops are heat and stain resistant which
                          makes them ideal material for your kitchen because
                          both these factors play a vital role in your kitchen.
                          You won't need to worry when you drop a piece of your
                          food or spill your drink because granite worktops are
                          stain-proof.{" "}
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/Untitled-2.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b>Disadvantages of Granite worktops </b> &nbsp;&nbsp;
                          With many advantages, some disadvantages can change
                          your opinion.{" "}
                        </div>
                        <br />
                        <div>
                          <b>They can be Porous </b> &nbsp;&nbsp; Granite
                          worktops are only resistant to stains when they are
                          sealed perfectly. Poor sealing will lead to the
                          granite absorbing the liquids which could result in a
                          long-time stain. You can avoid this by resealing your
                          granite worktops once a year. We also provide
                          resealing options for the owners.{" "}
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/Untitled-5.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b>They are costly </b> &nbsp;&nbsp; Granite worktop's
                          main disadvantage is that these worktops are costly
                          when compared to other types of worktops which can be
                          enough to change the mind of many people. We make sure
                          that these worktops are the best value for their money
                          and bring comfort to their owners.{" "}
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/Untitled-3.jpg`}
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

export default Blog14;
