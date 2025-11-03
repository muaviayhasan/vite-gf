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
          title="Thinking of Replacing Your Kitchen Worktop?"
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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/thinking of replacing your kitchen worktop.jpg`}
                        alt="desc"
                      />

                      <h3>Thinking of Replacing Your Kitchen Worktop?</h3>

                      <div>
                        <div>
                          The kitchen worktop plays a significant role in the
                          functionality and design of your kitchen. It is the
                          most used surface in the room and has to be strong
                          enough to withstand the daily wear and tear associated
                          with cooking. However, like everything else, worktops
                          also have a shelf-life, and they can get worn out from
                          the constant staining and scrubbing over the decades.
                          <br />
                          If you want to redo your kitchen and increase your
                          home's resale value, there are better options for
                          smooth surfaces for your kitchen worktop. You should
                          only replace a worktop if you are renovating the
                          entire kitchen, including cabinets. It is a hefty
                          task, but you can have the kitchen of your dreams if
                          done right. Here are some tips to pay attention to
                          when replacing your kitchen worktop.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <div>
                        <br />
                        <div>
                          <b> When to Know its Time </b> &nbsp;&nbsp; Replacing
                          the kitchen worktop is a big decision, so you should
                          be entirely sure they are no longer usable. Generally,
                          it is acceptable to change the countertop when it no
                          longer matches the kitchen's design or has been wholly
                          damaged through an accident. Countertops with deep,
                          pitted areas, large cracks, or burn marks are due for
                          a replacement. The brittle tiles can also break, and
                          damage from knives, water, and food stains can make
                          the kitchen look dirty and unkempt. If your kitchen
                          worktop is an unsightly mess, then chances are you
                          need to replace it.
                        </div>
                        <br />
                        <div>
                          <b>Can it be Salvaged? </b> &nbsp;&nbsp; If the damage
                          is not that bad and you do not mind your current
                          kitchen worktop style, you can have it refinished
                          instead. Laminate worktops can be polished to remove
                          stains and scratches. Other options like lamination,
                          painting, patching are available, and professionals do
                          all of it, so you will not even notice the difference.
                          For stone worktops, fragments replacing fragments
                          using epoxy glue and pieces from the same design or a
                          different contrasting one to give it a new refreshing
                          look. There are repair kits and services available for
                          wooden, marble, granite, and quartz worktops, and they
                          are less expensive and time-consuming than the
                          replacement option.
                        </div>
                        <br />
                        <div>
                          <b>Measure All Surfaces </b> &nbsp;&nbsp; Replacing a
                          kitchen worktop is a hefty task, so you should do it
                          right the first time around. Once you know what
                          material you want, make sure you take all the
                          measurements. It helps if you make a sketch of the
                          worktop and write down the length, width, and
                          thickness for each section. The islands, corners, and
                          other spaces should be separate, so there is no
                          confusion. You can calculate the square footage by
                          calculating the area in square inches and dividing it
                          by 144. This number is useful when getting estimates
                          from vendors, and it makes the decision based on a
                          budget easier for you.
                          <br />
                          It would help if you also considered the long-term
                          costs of replacing the kitchen worktop because you do
                          not want to be in the same situation a few years down
                          the road. Make sure to do your research and factor in
                          the maintenance and cleaning requirements as well.
                        </div>
                      </div>

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
