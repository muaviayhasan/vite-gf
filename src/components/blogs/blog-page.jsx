import React, { Component } from "react";
import Breadcrumb from "../common/breadcrumb";
import { Link } from "react-router-dom";

const custspan = {
  fontSize: "12px",
  color: "rgb(183, 130, 80)",
};

class BlogPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb title={"Blog Page"} />

        {/*Blog Details section*/}
        <section className="section-b-space  blog-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-5">
                <div className="blog-sidebar">
                  <div className="theme-card">
                    <h4>Recent Blog</h4>
                    <ul className="recent-blog">
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Most-Popular-Types-of-Glass-Splashbacks-for-Kitchens-300x225.jpg`}
                            alt="MOST POPULAR TYPES"
                          />
                          <div className="media-body align-self-center">
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/popular-types-glass-splashbacks-kitchens`}
                            >
                              <span style={custspan}>17 July 2020</span>
                            </Link>

                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/popular-types-glass-splashbacks-kitchens`}
                            >
                              <p>MOST POPULAR TYPES ...</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Stone-Kitchen-Worktops-vs-Glass-Worktops-300x225.jpg`}
                            alt="STONE KITCHEN WORKTOPS"
                          />
                          <div className="media-body align-self-center">
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/stone-kitchen-worktops-vs-glass-worktops`}
                            >
                              <span style={custspan}>17 July 2020</span>
                            </Link>
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/stone-kitchen-worktops-vs-glass-worktops`}
                            >
                              <p>STONE KITCHEN WORKTOPS</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/10-Things-You-Should-Know-About-Kitchen-Glass-Splashbacks-300x225.jpg`}
                            alt="Generic placeholder image"
                          />
                          <div className="media-body align-self-center">
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/10-things-know-kitchen-glass-splashbacks`}
                            >
                              <span style={custspan}>17 July 2020</span>
                            </Link>
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/10-things-know-kitchen-glass-splashbacks`}
                            >
                              <p>10 THINGS YOU ...</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Best-Tips-and-Tricks-to-Clean-Kitchen-Glass-Splashbacks-300x182.jpg`}
                            alt="BEST TIPS AND TRICKS"
                            style={{ height: 75 }}
                          />
                          <div className="media-body align-self-center">
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-tips-tricks-clean-kitchen-glass-splashbacks`}
                            >
                              <span style={custspan}>17 July 2020</span>
                            </Link>
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-tips-tricks-clean-kitchen-glass-splashbacks`}
                            >
                              <p>BEST TIPS AND TRICKS</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Pros-Cons-for-Printed-Glass-Splashbacks-300x300.jpg`}
                            alt="PROS & CONS FOR PRINTED"
                            style={{ height: 75 }}
                          />
                          <div className="media-body align-self-center">
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-cons-printed-glass-splashbacks`}
                            >
                              <span style={custspan}>17 July 2020</span>
                            </Link>
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-cons-printed-glass-splashbacks`}
                            >
                              <p>PROS & CONS FOR ...</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/shutterstock_56408032-300x194.jpg`}
                            alt="GLASS SPLASHBACKS"
                            style={{ height: 75 }}
                          />
                          <div className="media-body align-self-center">
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/glass-splashbacks-north-south-east-west-london-supply-installation`}
                            >
                              <span style={custspan}>17 July 2020</span>
                            </Link>
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/glass-splashbacks-north-south-east-west-london-supply-installation`}
                            >
                              <p>GLASS SPLASHBACKS ...</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/kitchen-panels-photos-printed-on-glass-300x161.jpg`}
                            alt="HOW TO CHOOSE THE RIGHT ..."
                            style={{ height: 75 }}
                          />
                          <div className="media-body align-self-center">
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/how-to-choose-the-right-glass-splashback-for-your-kitchen`}
                            >
                              <span style={custspan}>17 July 2020</span>
                            </Link>
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/blog/how-to-choose-the-right-glass-splashback-for-your-kitchen`}
                            >
                              <p>HOW TO CHOOSE THE ...</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-8 col-md-7 order-sec">
                <div className="row blog-media">
                  <div className="col-xl-6">
                    <div className="blog-left">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/blog/popular-types-glass-splashbacks-kitchens`}
                      >
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Most-Popular-Types-of-Glass-Splashbacks-for-Kitchens-300x225.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{ width: 386, height: 228 }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/popular-types-glass-splashbacks-kitchens`}
                        >
                          <h4>
                            MOST POPULAR TYPES OF GLASS SPLASHBACKS FOR KITCHENS
                          </h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          When it comes to deciding on which material you are
                          going to use for your kitchen splashback it can often
                          be a difficult decision. However, when you have
                          finally decided on glass, your decision process does
                          not stop there. You now have to choose which type of
                          glass you are wanting to have and what ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row blog-media">
                  <div className="col-xl-6">
                    <div className="blog-left">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/blog/stone-kitchen-worktops-vs-glass-worktops`}
                      >
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Stone-Kitchen-Worktops-vs-Glass-Worktops-300x225.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{ width: 386, height: 228 }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/stone-kitchen-worktops-vs-glass-worktops`}
                        >
                          <h4>STONE KITCHEN WORKTOPS VS GLASS WORKTOPS</h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          Deciding on the material of your kitchen worktop is
                          such an important one as it will set the tone for your
                          whole kitchen. When making the decision it comes from
                          a variety factors such as cost, how you will be using
                          the worktop and how much time and money you can allow
                          for care and ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row blog-media">
                  <div className="col-xl-6">
                    <div className="blog-left">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/blog/10-things-know-kitchen-glass-splashbacks`}
                      >
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/10-Things-You-Should-Know-About-Kitchen-Glass-Splashbacks-300x225.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{ width: 386, height: 228 }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/10-things-know-kitchen-glass-splashbacks`}
                        >
                          <h4>
                            10 THINGS YOU SHOULD KNOW ABOUT KITCHEN GLASS
                            SPLASHBACKS
                          </h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          You are considering installing a glass splashback in
                          your kitchen but is it right for you? A kitchen
                          splashback is so important as it will be protecting
                          your walls whilst you are cooking. This overview will
                          provide you with some of the things that you need to
                          know about kitchen glass splashbacks before you
                          purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row blog-media">
                  <div className="col-xl-6">
                    <div className="blog-left">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-tips-tricks-clean-kitchen-glass-splashbacks`}
                      >
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Best-Tips-and-Tricks-to-Clean-Kitchen-Glass-Splashbacks-300x182.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{ width: 386, height: 228 }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-tips-tricks-clean-kitchen-glass-splashbacks`}
                        >
                          <h4>
                            BEST TIPS AND TRICKS TO CLEAN KITCHEN GLASS
                            SPLASHBACKS
                          </h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          Here at Glass Fusion we can supply and fit glass
                          splashbacks that are completely bespoke to your
                          specification, colour, finish and shape. You tell us
                          what you want, and we will create it! Through years of
                          experience, our specialist fitters can meet any
                          requirements that our clients have. Our team will also
                          match your glass
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row blog-media">
                  <div className="col-xl-6">
                    <div className="blog-left">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-cons-printed-glass-splashbacks`}
                      >
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Pros-Cons-for-Printed-Glass-Splashbacks-300x300.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{ width: 386, height: 228 }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-cons-printed-glass-splashbacks`}
                        >
                          <h4>PROS & CONS FOR PRINTED GLASS SPLASHBACKS</h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          The days of having a splashback that is simply just
                          there to offer practicality are gone. You are now able
                          to have printed glass splashbacks that can add
                          pattern, colour and texture to the bathroom or
                          kitchen. So while the splashback is protecting your
                          walls, it is also a piece of art in its own
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row blog-media">
                  <div className="col-xl-6">
                    <div className="blog-left">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/blog/glass-splashbacks-north-south-east-west-london-supply-installation`}
                      >
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/shutterstock_56408032-300x194.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{ width: 386, height: 228 }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/glass-splashbacks-north-south-east-west-london-supply-installation`}
                        >
                          <h4>
                            GLASS SPLASHBACKS IN NORTH, SOUTH, EAST & WEST
                            LONDON – SUPPLY & INSTALLATION
                          </h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          Here at Glass and Fusion, we provide high standard
                          glass splashbacks to the whole of London. We are able
                          to see the process straight through from the supply to
                          installation. In addition to choosing from our range,
                          we are also able to create a bespoke splashback for
                          your bathroom or kitchen areas. If you are
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row blog-media">
                  <div className="col-xl-6">
                    <div className="blog-left">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/blog/how-to-choose-the-right-glass-splashback-for-your-kitchen`}
                      >
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/kitchen-panels-photos-printed-on-glass-300x161.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{ width: 386, height: 228 }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/how-to-choose-the-right-glass-splashback-for-your-kitchen`}
                        >
                          <h4>
                            HOW TO CHOOSE THE RIGHT GLASS SPLASHBACK FOR YOUR
                            KITCHEN?
                          </h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          Splashbacks are very important pieces to have within
                          the kitchen, after all they protect your walls. So,
                          you have decided on a glass splashback on your kitchen
                          but you do not know what one to choose. This overview
                          will provide you with some information on how you can
                          choose the best glass splashback for your
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/thinking-of-replacing-your-kitchen-worktop`}
                        >
                          <h4>Thinking of Replacing Your Kitchen Worktop?</h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          The kitchen worktop plays a significant role in the
                          functionality and design of your kitchen. It is the
                          most used surface in the room and has to be strong
                          enough to withstand the daily wear and tear associated
                          with cooking. However, like everything else
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/things-to-consider-when-choosing-a-material-for-your-kitchen-worktop`}
                        >
                          <h4>
                            Things to Consider When Choosing a Material for Your
                            Kitchen Worktop
                          </h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          Whether you are remodeling your kitchen or designing
                          one for your new house, there are some crucial
                          decisions that you have to make before you begin.
                          People only focus on the cabinets when thinking of the
                          kitchen, but the worktop
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/the-ideal-thickness-for-your-quartz-worktop`}
                        >
                          <h4>The Ideal Thickness for Your Quartz Worktop</h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          Quartz worktops are the new popular choice for homes
                          because they are durable, modern and require very
                          little maintenance. They are available in many
                          different colors and styles, so contractors use them
                          in residential and commercial spaces.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/kitchen-worktop-looks-that-never-go-out-of-style`}
                        >
                          <h4>
                            Kitchen Worktop Looks That Never Go Out of Style
                          </h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          Gone are the days when the only two options for
                          kitchen worktops were stone or marble. Now you can
                          take your pick from a variety of materials in any
                          color or pattern. Homeowners are no longer by the
                          available color palettes and can use
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-right">
                      <div>
                        <h6>17 July 2020</h6>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/blog/5-kitchen-worktop-materials-that-are-easy-to-maintain`}
                        >
                          <h4>
                            5 Kitchen Worktop Materials that are Easy to
                            Maintain
                          </h4>
                        </Link>
                        <ul className="post-social">
                          <li>Posted By : G&F Admin</li>
                        </ul>
                        <p>
                          Whether it is for the kitchen, bathroom, or island, a
                          worktop should be durable and elegant. The appearance
                          and strength of the surface come down to the material
                          used. The material also determines the lifetime of the
                          worktop and whether it requires constant maintenance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BlogPage;
