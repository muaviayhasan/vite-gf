import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { responsive } from "../../../services/script";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class BlogSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={4000}
              autoPlay={false}
              keyBoardControl={true}
              transitionDuration={500}
              removeArrowOnDeviceType={[
                "tablet",
                "mobile",
                "desktop",
                "superLargeDesktop",
              ]}
            >
              <div>
                <div className="col-md-12">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/popular-types-glass-splashbacks-kitchens`}
                  >
                    <div className="classic-effect">
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Most-Popular-Types-of-Glass-Splashbacks-for-Kitchens-300x225.jpg`}
                        className="img-fluid blog-image"
                        alt=""
                      />
                      <span></span>
                    </div>
                  </Link>
                  <div className="blog-details">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/blog/popular-types-glass-splashbacks-kitchens`}
                    >
                      <p style={{ fontSize: 18 }}>
                        MOST POPULAR TYPES OF GLASS SPLASHBACKS FOR KITCHENS
                      </p>
                    </Link>
                    <hr className="style1" style={{ height: 2 }} />
                  </div>
                </div>
              </div>
              <div>
                <div className="col-md-12">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/stone-kitchen-worktops-vs-glass-worktops`}
                  >
                    <div className="classic-effect">
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Stone-Kitchen-Worktops-vs-Glass-Worktops-300x225.jpg`}
                        className="img-fluid blog-image"
                        alt=""
                      />
                      <span></span>
                    </div>
                  </Link>
                  <div className="blog-details">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/blog/stone-kitchen-worktops-vs-glass-worktops`}
                    >
                      <p style={{ fontSize: 18 }}>
                        STONE KITCHEN WORKTOPS VS GLASS WORKTOPS
                      </p>
                    </Link>
                    <hr className="style1" style={{ height: 2 }} />
                  </div>
                </div>
              </div>
              <div>
                <div className="col-md-12">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/10-things-know-kitchen-glass-splashbacks`}
                  >
                    <div className="classic-effect">
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/10-Things-You-Should-Know-About-Kitchen-Glass-Splashbacks-300x225.jpg`}
                        className="img-fluid blog-image"
                        alt=""
                      />
                      <span></span>
                    </div>
                  </Link>
                  <div className="blog-details">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/blog/10-things-know-kitchen-glass-splashbacks`}
                    >
                      <p style={{ fontSize: 18 }}>
                        10 THINGS YOU SHOULD KNOW ABOUT KITCHEN GLASS
                        SPLASHBACKS
                      </p>
                    </Link>
                    <hr className="style1" style={{ height: 2 }} />
                  </div>
                </div>
              </div>
              <div>
                <div className="col-md-12">
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-tips-tricks-clean-kitchen-glass-splashbacks`}
                  >
                    <div className="classic-effect">
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Best-Tips-and-Tricks-to-Clean-Kitchen-Glass-Splashbacks-300x182.jpg`}
                        className="img-fluid blog-image"
                        alt=""
                      />
                      <span></span>
                    </div>
                  </Link>
                  <div className="blog-details">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/blog/best-tips-tricks-clean-kitchen-glass-splashbacks`}
                    >
                      <p style={{ fontSize: 18 }}>
                        BEST TIPS AND TRICKS TO CLEAN KITCHEN GLASS SPLASHBACKS
                      </p>
                    </Link>
                    <hr className="style1" style={{ height: 2 }} />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogSection;
