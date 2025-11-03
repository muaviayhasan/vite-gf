import React, { Component } from "react";
import { Link } from "react-router-dom";

import MobileMainNav from "./nav";

class MobileMenu extends Component {
  render() {
    const { adClass } = this.props;

    return (
      <div className={`mobile-menu-container ${adClass}`}>
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close"></i>
          </span>

          {/* <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form> */}

          <nav className="mobile-nav">
            <MobileMainNav />
          </nav>

          <div className="social-icons">
            <a
              href="https://facebook.com/glassandfusion"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/"
              className="social-icon"
              target="_blank"
              title="Twitter"
            >
              <i className="icon-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/glassandfusion/"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
            <a
              href="https://www.houzz.co.uk/photos/users/glassandfusionltd/"
              className="social-icon"
              target="_blank"
              title="Youtube"
            >
              <i className="icon-houzz"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
