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
          title="PROS & CONS FOR PRINTED GLASS SPLASHBACKS"
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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Pros-Cons-for-Printed-Glass-Splashbacks-1.jpg`}
                        alt="desc"
                      />

                      <h3>PROS & CONS FOR PRINTED GLASS SPLASHBACKS</h3>

                      <ul>
                        <li>
                          The days of having a splashback that is simply just
                          there to offer practicality are gone. You are now able
                          to have printed glass splashbacks that can add
                          pattern, colour and texture to the bathroom or
                          kitchen. So while the splashback is protecting your
                          walls, it is also a piece of art in its own right that
                          you almost forget what its job is.
                          <br />
                          <br />
                          But, is a printed glass splashback for you? While they
                          have their list of benefits, they are not without
                          their downfalls.
                        </li>
                      </ul>

                      <div className="pb-1 clearfix"></div>

                      <ul>
                        <li>
                          <b> Pros of Printed Glass Splashbacks</b>
                          A printed glass splashback is able to complement the
                          design of your bathroom or kitchen even more than an
                          ordinary glass splashback. Instead of having a simple
                          glass splashback, why not use it as an opportunity to
                          create a beautiful piece of art? Glass splashbacks are
                          stunning and sleek pieces as they are able to be
                          installed in large panels, instead of lots of smaller
                          ones. This adds to the overall finished look as they
                          blend in with each other far more and adds
                          consistency.
                          <br />
                          <br />
                          So that your new splashbacks are less likely to
                          scratch or get damaged, you are able to request them
                          to be toughened, which leaves you with strong and
                          durable splashbacks that you never have to really
                          worry about. Printed glass splashbacks are so easy to
                          keep clean so it is ideal for both bathrooms and
                          kitchens as they are both areas where you are needing
                          an easy cleaning routine to maintain. All you have to
                          do is use a mild detergent and wipe with a cloth – job
                          done! Lastly, glass splashbacks are extremely easy to
                          install so it minimizes the fuss. They can be
                          installed by either being screwed or glued into place
                          and once they have been installed, there is no chance
                          of them coming loose.
                        </li>
                        <li>
                          <b>Cons of Printed Glass Splashbacks</b> While printed
                          glass splashbacks certainly do have their benefits,
                          they are not without their pitfalls either. Printed
                          glass splashbacks are far more likely to clash against
                          a design if you choose to redesign the room, so you
                          need to think about the print you are choosing in case
                          you decide to change the theme. Having to be
                          restricted to picking a neutral print may not be what
                          you had in mind, after all it has the opportunity to
                          be a piece of art. As printed glass splashbacks can
                          clash quite easily, you need to consider your existing
                          design a bit more as you need to ensure that the print
                          does match with your current accessories and colour
                          theme. Lastly, you need to make sure that you will be
                          happy with the print for a long time to come. Your
                          taste for prints will tire far quicker than a colour
                          and while it is not impossible to change the glass
                          splashback, it is not an easy task.
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
