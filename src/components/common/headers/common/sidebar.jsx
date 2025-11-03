import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  closeNav() {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  }

  handleSubmenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function(value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };
  handleSubTwoMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function(value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };
  handleSubThreeMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub3"))
      event.target.nextElementSibling.classList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function(value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };
  handleSubFourMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub4"))
      event.target.nextElementSibling.classList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function(value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  handleMegaSubmenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensidesubmenu"))
      event.target.nextElementSibling.classList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
  };

  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <a
          href="javascript:void(0)"
          className="sidebar-overlay"
          onClick={this.closeNav}
        ></a>
        <nav>
          <a onClick={this.closeNav}>
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
            </div>
          </a>
          <ul id="sub-menu" className="sidebar-menu">
            {/* <li>
                            <Link to="#" onClick={(e) => this.handleMegaSubmenu(e)}>
                                clothing
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>women's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">dresses</Link>
                                                    </li>
                                                    <li>
                                                    <Link to="#">skirts</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">westarn wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">ethic wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">sport wear</Link>
                                                    </li>
                                                </ul>
                                                <h5>men's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">sports wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">western wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">ethic wear</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>accessories</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#">fashion jewellery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">caps and hats</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">precious jewellery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">necklaces</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">earrings</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">wrist wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">ties</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">cufflinks</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">pockets squares</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <a href="#" className="mega-menu-banner">
                                            <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/mega-menu/fashion.jpg`} alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li> */}

            <li>
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
