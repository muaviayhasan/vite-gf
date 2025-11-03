import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClose: { right: "0px" },
    };
  }

  componentWillMount() {
    if (window.innerWidth < 750) {
      this.setState({ navClose: { right: "-410px" } });
    }
    if (window.innerWidth < 1199) {
      this.setState({ navClose: { right: "-300px" } });
    }
  }

  openNav() {
    console.log("open");
    this.setState({ navClose: { right: "0px" } });
  }
  closeNav() {
    this.setState({ navClose: { right: "-410px" } });
  }

  onMouseEnterHandler() {
    if (window.innerWidth > 1199) {
      document.querySelector("#main-menu").classList.add("hover-unset");
    }
  }

  handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensubmenu"))
      event.target.nextElementSibling.classList.remove("opensubmenu");
    else {
      document.querySelectorAll(".nav-submenu").forEach(function(value) {
        value.classList.remove("opensubmenu");
      });
      document
        .querySelector(".mega-menu-container")
        .classList.remove("opensubmenu");
      event.target.nextElementSibling.classList.add("opensubmenu");
    }
  };

  handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (
      event.target.parentNode.nextElementSibling.classList.contains(
        "opensubmegamenu"
      )
    )
      event.target.parentNode.nextElementSibling.classList.remove(
        "opensubmegamenu"
      );
    else {
      document.querySelectorAll(".menu-content").forEach(function(value) {
        value.classList.remove("opensubmegamenu");
      });
      event.target.parentNode.nextElementSibling.classList.add(
        "opensubmegamenu"
      );
    }
  };

  render() {
    return (
      <div>
        <div className="main-navbar">
          <div id="mainnav">
            <div className="toggle-nav" onClick={this.openNav.bind(this)}>
              <i className="fa fa-bars sidebar-bar"></i>
            </div>
            <ul className="nav-menu" style={this.state.navClose}>
              <li className="back-btn" onClick={this.closeNav.bind(this)}>
                <div className="mobile-back text-right">
                  <span>Back</span>
                  <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                </div>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/home`}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  Services
                  <span className="sub-arrow"></span>
                </Link>
                <ul className="nav-submenu">
                  <li>
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/templating`}>
                      Templating
                    </Link>
                  </li>
                  <li>
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/fabrication`}>
                      Fabrication
                    </Link>
                  </li>
                  <li>
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/installation`}>
                      Installation
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/glass-categories`}>
                  GLASS
                </Link>
                {/* <ul className="nav-submenu">
                  <li>
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/glass-products`}>
                      Toughened
                    </Link>
                  </li>
                  <li>
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/glass/untoughened`}>
                      Untoughened 
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  Stone
                  <span className="sub-arrow"></span>
                </Link>
                <ul className="nav-submenu" style={{ width: 170 }}>
                  <li>
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/quartz`}>
                      Quartz
                    </Link>
                  </li>
                  <li>
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/granite`}>
                      Granite
                    </Link>
                  </li>
                  <li>
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/stone/marble`}>
                      Marble
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/stone/compact-worktops`}
                    >
                      Compact Worktops
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/product-catalogue`}
                  className="nav-link"
                >
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/get-a-quote`}
                  className="nav-link"
                >
                  Get a Quote
                </Link>
              </li>
              <li className="mega-menu">
                <div className="mega-menu-container"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
