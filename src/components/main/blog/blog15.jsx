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

                      <h3>Best qualities of Marble worktops</h3>

                      <div>
                        <p style={{ fontWeight: 600, fontSize: 14 }}>
                          Considering installing a marble worktop? You are on
                          the right track!
                        </p>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/15-Picture1.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          Marble worktops are the best type of worktops that are
                          available in the market to buy. These worktops give
                          your house an appealing look and are rapidly
                          increasing in popularity. Marble worktops are very
                          unique when compared to other worktops but are
                          relatively expensive as well. However marble worktops
                          are vulnerable to stains and scratches so you have to
                          take good care of them.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <div>
                          <b
                            style={{
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            Qualities of marble worktops{" "}
                          </b>{" "}
                          &nbsp;&nbsp;Marble worktops are increasing in
                          popularity because of their impressive qualities. We
                          will talk about few qualities which will give u a
                          brief idea about the increasing popularity of marble
                          worktops.
                        </div>
                        <br />

                        <div>
                          <b
                            style={{
                              fontSize: 16,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Provides functionality{" "}
                          </b>{" "}
                          &nbsp;&nbsp; Marble worktops are a delicate type of
                          stone that allows them to withstand heat which makes
                          them ideal for a kitchen. Marble worktops are also
                          sealed which makes them resistant to stains so you
                          won't have to worry about spillovers. They are also
                          very easy to clean and to take care of because you
                          only need a sponge and water to clean them. We provide
                          the best marble worktops which are durable and provide
                          the most functionality.
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/15-Picture2.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b
                            style={{
                              fontSize: 16,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Have timeless beauty{" "}
                          </b>{" "}
                          &nbsp;&nbsp; Marble worktops have timeless beauty
                          which tends to remain for many years if taken good
                          care of. Marble worktops are well known for their good
                          looks which can stay for a very long time making it
                          ideal for your kitchen as it gives the most appealing
                          and modern looks. We provide the most beautiful types
                          of Marble worktops for your kitchens which will help
                          you give your kitchen a beautiful look. When marble
                          worktops are installed expertly and are sealed you can
                          expect to enjoy their beauty for a lifetime. We make
                          sure your marble worktops are sealed and installed
                          perfectly and can give your kitchen an amazing look
                          for a lifetime.
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/15-Picture3.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b
                            style={{
                              fontSize: 16,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Adds value to your home{" "}
                          </b>{" "}
                          &nbsp;&nbsp; Marble worktops if kept in good condition
                          can increase the value of your home because many
                          modern houses have marble worktops installed in them.
                          Marble worktops give the house a beautiful look and
                          are the most liked material when selecting a worktop.
                          Marble worktops are the best type of worktops and are
                          rapidly increasing in popularity. Having marble
                          worktops in your house will automatically add value to
                          your house because of their increasing demand and
                          gorgeous looks. We provide the best types of marble
                          worktops for your home which will be worth your money.{" "}
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/15-Picture4.jpg`}
                          alt="desc"
                        />
                        <br />
                        <div>
                          <b
                            style={{
                              fontSize: 16,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Marble’s beauty enhances over time{" "}
                          </b>{" "}
                          &nbsp;&nbsp; When we talk about Marble there is no
                          doubt that the most beautiful worktops are made out of
                          marble. Marble worktops may be vulnerable to scratches
                          and stains but it does not stop them from standing
                          out. These worktops might take a beating as time goes
                          by but in the end, these scratches are hidden as
                          marble develops a beautiful patina. These scratches
                          become a part of marble worktop's character and
                          continue to look beautiful for a lifetime.{" "}
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/15-Picture5.jpg`}
                          alt="desc"
                        />
                        <br />
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
