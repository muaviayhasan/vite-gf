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
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/kitchen worktop looks that never go out of style.jpg`}
                        alt="desc"
                      />

                      <h3>Kitchen Worktop Looks That Never Go Out of Style</h3>

                      <div>
                        <div>
                          Gone are the days when the only two options for
                          kitchen worktops were stone or marble. Now you can
                          take your pick from a variety of materials in any
                          color or pattern. Homeowners are no longer by the
                          available color palettes and can use their worktop to
                          achieve whatever aesthetic they have in mind. We have
                          put together a list of popular styles for custom-made
                          worktops based on interior design trends.
                        </div>
                      </div>

                      <div className="pb-1 clearfix"></div>

                      <div>
                        <div>
                          <b> Woody </b> &nbsp;&nbsp; There is something about a
                          wooden interior that makes the room look more
                          welcoming yet contemporary. It is an excellent choice
                          to add natural color tones and go for a traditional
                          look. Classic wood worktops can balance out a
                          monochrome kitchen, and it blends in since it is a
                          natural color.
                          <br />
                          For a rustic look, lighter-toned wood is preferable
                          because it is light and breezy instead of the polished
                          look of darker wood. It is best to stick to one tone
                          instead of clashing different shades to avoid
                          clashing. Wooden worktops are the best way to
                          accentuate a dull kitchen if you want it to remain
                          traditional.
                        </div>
                        <br />
                        <div>
                          <b>Gothic </b> &nbsp;&nbsp; A dark kitchen worktop
                          like the black or charcoal gray one will fit in with a
                          gothic theme where the cabinets and floors also have a
                          darker toned finishing. The entirely dark kitchen
                          works if you have enough light fixtures to make the
                          space look sophisticated instead of scary. It also
                          works well with subtly colored worktops, but only if
                          the black appliances and other kitchen elements
                          integrate the color palette too.
                          <br />A black and white theme is also possible with
                          dark countertops to offset the white cabinets with
                          black knobs. Sprinkle a bit of white in the black by
                          choosing a dark worktop with a white pattern for a
                          more toned-down version of this style.
                        </div>
                        <br />
                        <div>
                          <b>Neutral or Muted </b> &nbsp;&nbsp; Soft tones like
                          gray, beige, cream and other neutral options are
                          always in style and can tie together whatever look you
                          hope to achieve. They are easy to clean and can easily
                          disguise any stains as part of the pattern. Colorful
                          cabinets and floors work well with neutral and nude
                          shades. They can bring together two-toned kitchens,
                          and the worktop will be the middle ground.
                          <br />
                          Gray shines out with brass-colored designs or metallic
                          kitchen appliances because it can shine that way.
                          These shades are soft and friendly, which are perfect
                          for a forever family home.
                        </div>
                        <br />
                        <div>
                          <b>Bold and Bright </b> &nbsp;&nbsp; Bright colors and
                          bold patterns are always eye-catching and will win the
                          admiration of any visitor. A marble with long, dark
                          veins or laminate in a color that pops are examples of
                          this style. They add character to the kitchen and look
                          nice when the other elements are subtle and muted.
                          However, you should note the dramatic take on the
                          kitchen worktop only works for larger spaces because
                          otherwise, they will only serve as a distraction. If
                          you are a bold and daring person in real life, you can
                          reflect that with your quartz kitchen worktop in
                          bright and bold designs. It will be the statement
                          piece and will set the tone for the room.
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
