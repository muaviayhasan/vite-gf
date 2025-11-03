import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogSidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="widget">
          <h3 className="widget-title">Popular Posts</h3>

          <ul className="posts-list">
            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-and-cons-of-quartz-worktops`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/1_blog17.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>7 July 2021</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-and-cons-of-quartz-worktops`}
                  >
                    Pros and Cons of Quartz worktops
                  </Link>
                </h4>
              </div>
            </li>
            
            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/5-things-to-consider-when-renovating-your-kitchen`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/16-Picture1.png`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>21 June 2021</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/5-things-to-consider-when-renovating-your-kitchen`}
                  >
                    5 things to consider when Renovating ...
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-qualities-of-marble-worktops`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/15-Picture1.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>7 June 2021</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-qualities-of-marble-worktops`}
                  >
                    Best qualities of Marble worktops ...
                  </Link>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-and-cons-of-granite-worktops`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/bb11.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>28 MAY 2021</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-and-cons-of-granite-worktops`}
                  >
                    Pros and Cons of Granite Worktops ...
                  </Link>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/popular-types-glass-splashbacks-kitchens`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/MOST-POPULAR-TYPES-OF-GLASS-SPLASHBACKS-FOR-KITCHENS.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/popular-types-glass-splashbacks-kitchens`}
                  >
                    MOST POPULAR TYPES OF GLASS...
                  </Link>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/stone-kitchen-worktops-vs-glass-worktops`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/post-2.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/stone-kitchen-worktops-vs-glass-worktops`}
                  >
                    STONE KITCHEN WORKTOPS VS GLASS...
                  </Link>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/10-things-know-kitchen-glass-splashbacks`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/post-3.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/10-things-know-kitchen-glass-splashbacks`}
                  >
                    10 THINGS YOU SHOULD KNOW ABOUT...
                  </Link>
                </h4>
              </div>
            </li>
            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-tips-tricks-clean-kitchen-glass-splashbacks`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Best-Tips-and-Tricks-to-Clean-Kitchen-Glass-Splashbacks-1.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-tips-tricks-clean-kitchen-glass-splashbacks`}
                  >
                    BEST TIPS AND TRICKS TO CLEAN KITCHEN...
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-cons-printed-glass-splashbacks`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/Pros-Cons-for-Printed-Glass-Splashbacks-1.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>

              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/pros-cons-printed-glass-splashbacks`}
                  >
                    PROS & CONS FOR PRINTED GLASS SPLASHBACKS
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/glass-splashbacks-north-south-east-west-london-supply-installation`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/post-6.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>
              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/glass-splashbacks-north-south-east-west-london-supply-installation`}
                  >
                    GLASS SPLASHBACKS IN NORTH, SOUTH...
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/how-to-choose-the-right-glass-splashback-for-your-kitchen`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/kitchen-panels-photos-printed-on-glass.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>
              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/how-to-choose-the-right-glass-splashback-for-your-kitchen`}
                  >
                    HOW TO CHOOSE THE RIGHT GLASS SPLASHBACK FOR YOUR KITCHEN?
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/thinking-of-replacing-your-kitchen-worktop`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/thinking of replacing your kitchen worktop.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>
              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/thinking-of-replacing-your-kitchen-worktop`}
                  >
                    Thinking of Replacing Your Kitchen Worktop?
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/things-to-consider-when-choosing-a-material-for-your-kitchen-worktop`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/things to consider when choosing a material for your kitchen worktop.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>
              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/things-to-consider-when-choosing-a-material-for-your-kitchen-worktop`}
                  >
                    Things to Consider When Choosing a Material for Your Kitchen
                    Worktop
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/the-ideal-thickness-for-your-quartz-worktop`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/the ideal thickness for your worktop.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>
              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/the-ideal-thickness-for-your-quartz-worktop`}
                  >
                    The Ideal Thickness for Your Quartz Worktop
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/kitchen-worktop-looks-that-never-go-out-of-style`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/kitchen worktop looks that never go out of style.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>
              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/kitchen-worktop-looks-that-never-go-out-of-style`}
                  >
                    Kitchen Worktop Looks That Never Go Out of Style
                  </Link>
                </h4>
              </div>
            </li>

            <li>
              <figure>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/blog/5-kitchen-worktop-materials-that-are-easy-to-maintain`}
                >
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/blog/listing/5 kitchen worktop materials that are easy to maintain.jpg`}
                    alt="post"
                  />
                </Link>
              </figure>
              <div>
                <span style={{ lineHeight: 0.25 }}>17 JULY 2020</span>
                <h4>
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/5-kitchen-worktop-materials-that-are-easy-to-maintain`}
                  >
                    5 Kitchen Worktop Materials that are Easy to Maintain
                  </Link>
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BlogSidebar;
