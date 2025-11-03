import React from "react";

import { Link } from "react-router-dom";
import "./search-bar.css";

export default () => (
  <div className="container categories pt-6">
    <h2 className="title-lg text-center mb-4">Our Catalogue</h2>

    <div className="row">
      <div className="col-6 col-lg-4">
        <div className="banner banner-display banner-link-anim">
          <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/banners/Marble-worktops-kitchen-bathroom-London-glass-and-fusion-stone.png`}
              alt="Banner"
              width="376"
              height="540"
            />
          </Link>

          <div className="banner-content banner-content-center">
            <h3
              className="banner-title text-white"
              style={{ fontSize: "30px" }}
            >
              Granite
              <br />
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}>
                <div className="btn btn-outline-primary-2 btn-round btn-more btn-catalouge text-white">
                  View Colours Range
                </div>
              </Link>
              {/* <Link
                to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}
                className="btn btn-outline-white banner-link"
              >
                Shop Now<i className="icon-long-arrow-right"></i>
              </Link> */}
            </h3>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg-4 order-lg-last">
        <div className="banner banner-display banner-link-anim">
          <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/marble`}>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/banners/Granite-worktops-kitchen-bathroom-London-glass-and-fusion-stone.png`}
              alt="Banner"
              width="376"
              height="540"
            />
          </Link>

          <div className="banner-content banner-content-center">
            <h3
              className="banner-title text-white"
              style={{ fontSize: "30px" }}
            >
              Marble
              <br />
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/marble`}>
                <div className="btn btn-outline-primary-2 btn-round btn-more btn-catalouge text-white">
                  View Colours Range
                </div>
              </Link>
            </h3>
            {/* <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}
              className="btn btn-outline-white banner-link"
            >
              Shop Now<i className="icon-long-arrow-right"></i>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-4 banners-sm">
        <div className="row">
          <div className="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12">
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/quartz`}>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/banners/Quartz-worktops-kitchen-bathroom-London-glass-and-fusion-stone.png`}
                alt="Banner"
                width="376"
                height="270"
              />
            </Link>

            <div className="banner-content banner-content-center">
              <h3
                className="banner-title text-white"
                style={{ fontSize: "30px" }}
              >
                Quartz
                <br />
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/quartz`}>
                  <div className="btn btn-outline-primary-2 btn-round btn-more btn-catalouge text-white">
                    View Colours Range
                  </div>
                </Link>
              </h3>
              {/* <Link
                to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}
                className="btn btn-outline-white banner-link"
              >
                Shop Now<i className="icon-long-arrow-right"></i>
              </Link> */}
            </div>
          </div>

          <div className="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12">
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/compact worktops`}>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/gnf/banners/Compact-Worktop-kitchen-bathroom-London-glass-and-fusion-stone.png`}
                alt="Banner"
                width="376"
                height="270"
              />
            </Link>

            <div className="banner-content banner-content-center">
              <h3
                className="banner-title text-white"
                style={{ fontSize: "30px" }}
              >
                Compact Worktops
                <br />
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/compact worktops`}>
                  <div className="btn btn-outline-primary-2 btn-round btn-more btn-catalouge text-white">
                    View Colours Range
                  </div>
                </Link>
              </h3>
              {/* <Link
                to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}
                className="btn btn-outline-white banner-link"
              >
                Shop Now<i className="icon-long-arrow-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
