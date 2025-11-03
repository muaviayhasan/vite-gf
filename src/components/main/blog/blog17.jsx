import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";
import BlogSidebar from "../../features/sidebar/blog-sidebar";
import OwlCarousels from "../../features/owl-carousel";
import ErrorPage from "../pages/404";

class Blog17 extends Component {
  render() {
    return (
      <div className="main">
        {/* <PageHeader title="Default With Sidebar" subTitle="Single Post" /> */}
        <Breadcrumb title="Pros and Cons of Quartz worktops" adClass="mb-3" />

        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <article className="entry single-entry">
                  <div className="entry-body">
                    <h2 className="entry-title"></h2>

                    <div className="entry-content editor-content">
                      <div className="pb-1"></div>

                      <h3>Pros and Cons of Quartz worktops</h3>

                      <div>
                        <div>
                          Quartz is one of the most beautiful and durable
                          worktops to work with and is a very popular pick when
                          it comes to redesigning or renovating your kitchen. We
                          make sure our customers are satisfied by providing the
                          highest quality quartz available. Quartz worktops are
                          well known for their durability and are considered as
                          the most durable and strong worktop available in the
                          market and are also a great value for money. Quartz
                          worktops are ideal for kitchens as their durability
                          removes the tension of damaging the worktop and also
                          ensures to give your kitchen an appealing look. These
                          worktops have many advantages but even superman has
                          kryptonite, quartz also has few minor flaws.
                        </div>
                        <br />
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/1_blog17.jpg`}
                          alt="desc"
                        />
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
                            Pros of Quartz worktops{" "}
                          </b>
                          <br />
                          <p>
                            We will tell you about some advantages you can get
                            from having a quartz worktop and will also make sure
                            that you develop good knowledge from our blog.
                          </p>
                        </div>
                        <b>Durable</b>
                        <br />
                        When we talk about the advantages of Quartz worktops, we
                        have to mention their durability. Quartz is one of the
                        most durable if not the most durable material to work
                        with. Quartz is well known for its durability which
                        makes it a top pick for your kitchen and household. We
                        provide the best quartz worktops to make sure that our
                        customers are satisfied. Along with its durability, it
                        also has beautiful looks which continue its popularity
                        to grow. These worktops are also scratch-resistant so
                        you won't have to worry about scratching your worktop.
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
                            Easy to maintain{" "}
                          </b>
                          <br />
                          Quartz worktops are also very easy to maintain when
                          compared to other worktops. All you need is a clean
                          cloth with soap and water to keep your worktop
                          shining. Quartz worktops require little or no effort
                          to maintain them making them ideal for kitchens.{" "}
                          <br />
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/2_blog17.jpg`}
                            alt="desc"
                          />
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
                            Cons of Quartz worktops <br />
                          </b>
                          <p>
                            Even the world's strongest heroes have a weakness so
                            quartz also has a few weaknesses.
                          </p>
                          <b>These worktops are not heat resistant</b>
                          <br />
                          With so many pros of Quartz worktops, they have their
                          cons as well. One of the biggest disadvantages of
                          quartz worktops is that they are not heat resistant
                          and can be damaged by heat. This is a big flaw as you
                          can damage your worktop while cooking, leaving stans
                          to last forever. We provide a warranty to make sure
                          you can feel safe buying our worktops.
                          <br />
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/3_blog17.jpg`}
                            alt="desc"
                          />
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
                            Flexibility <br />
                          </b>
                          Quartz has many advantages and flexibility is one of
                          them. Quartz can be bent into any shape or size to
                          suit your kitchen. This will end your tension to find
                          a material that fits your kitchen. We provide the most
                          high-quality worktops which can be bent into any shape
                          to fit your kitchen.
                          <br />
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/4_blog17.jpg`}
                            alt="desc"
                          />
                        </div>
                        <br />
                        <div>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/5_blog17.jpg`}
                            alt="desc"
                          />
                          <br />
                          <b
                            style={{
                              fontSize: 18,
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            Quartz worktops can be chipped
                            <br />
                          </b>
                          <br />
                          Quartz worktops might be the most durable worktops but
                          still, they can be chipped which will potentially ruin
                          the worktops look. If you put a large solid object
                          with a decent amount of pressure then the quartz will
                          be chipped. We provide the most durable worktops to
                          try to prevent this from happening.{" "}
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

export default Blog17;
