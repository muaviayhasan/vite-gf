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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/things to consider when choosing a material for your kitchen worktop.jpg`}
                        alt="desc"
                      />

                      <h3>
                        Things to Consider When Choosing a Material for Your
                        Kitchen Worktop
                      </h3>

                      <div>
                        <div>
                          Whether you are remodeling your kitchen or designing
                          one for your new house, there are some crucial
                          decisions that you have to make before you begin.
                          People only focus on the cabinets when thinking of the
                          kitchen, but the worktop is also an integral part of
                          the room. Other than the floor, it is the only
                          horizontal plane, making it a prominent aspect of the
                          interior design.
                          <br />
                          The worktop is the most used surface in the kitchen,
                          so it has to be practical and aesthetically pleasing.
                          There are different materials and variations for
                          kitchen worktops. Each one comes with its pros and
                          cons. The kitchen trends have changed over the years,
                          with different materials emerging as the top choice.
                          Technology has resulted in many new materials that are
                          tough enough to withstand a lot of wear and tear, but
                          ultimately the decision depends on your budget and
                          use.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <div>
                        <br />
                        <div>
                          <b> Visualize Your Kitchen </b> &nbsp; &nbsp; Before
                          you choose the material, refer to your dream kitchen's
                          visuals so you can narrow down the color and design
                          choices. Some materials are available in many colors
                          like the humanmade laminate, but others like the
                          wooden worktops only come in specific shades. If you
                          are looking for a worktop with a personality, look to
                          the tiled or quartz worktops for inspiration.
                        </div>
                        <br />
                        <div>
                          <b>Don’t Ignore the Specifics </b> &nbsp; &nbsp; The
                          shape, size, and thickness of the slabs are also
                          essential factors if you want a made to order worktop.
                          Your kitchen's style determines the thickness of the
                          slab, where a thicker worktop is generally for
                          contemporary kitchens. You should also know the
                          thicker the slab is, the more expensive it will be
                          too. Suppose you are designing your kitchen worktop in
                          an unusual shape. In that case, there are only a few
                          available materials in custom sizes and designs, one
                          example of which is the quartz worktop.
                        </div>
                        <br />
                        <div>
                          <b>Be Practical </b> &nbsp; &nbsp; There are countless
                          benefits of a worktop, and not having a functional
                          horizontal space in the kitchen can disrupt your
                          chores. The material has to be one that can absorb
                          heat, so when you place cooking utensils straight off
                          the stove, it doesn't leave a mark. If you will be
                          using the area for informal meals, it has to be easy
                          to clean. Materials that can stain easily like marble
                          worktops are not ideal for such use.
                        </div>
                        <br />{" "}
                        <div>
                          <b>Add All Costs </b> &nbsp; &nbsp; Another factor to
                          consider is the kitchen worktop's maintenance, so the
                          surface should be simple to wipe down after use.
                          Ensure you are aware of the time and costs required to
                          take care of the worktop when making the decision.
                          Granite worktops are very difficult to clean and
                          require a lot of care to keep their seal in good
                          condition.
                        </div>
                        <br />{" "}
                        <div>
                          <b>Make the Right Choice at the Right Time </b> &nbsp;
                          &nbsp; When you are drawing up plans for the kitchen,
                          give worktops the time by considering all factors.
                          Changing the worktops later can cost a lot of money,
                          and it is better to make an informed decision on time
                          than to spend resources correcting the mistake.
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
