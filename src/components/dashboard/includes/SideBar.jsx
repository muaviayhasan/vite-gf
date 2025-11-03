import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../js/custome.js";
import DashboardFooter from "../includes/Footer";
import { logout } from "../../../actions/authAction";
import store from "../../../store";
import auth from "../../../auth/auth";

class AdminSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:
        localStorage.getItem("toggle") !== null
          ? localStorage.getItem("toggle")
          : "admin",
    };
  }
  closeNav() {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classNameList.remove("open-side");
  }

  handleSubmenu = (event) => {
    if (event.target.classNameList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classNameList.contains("opensub1"))
      event.target.nextElementSibling.classNameList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function(value) {
        value.classNameList.remove("opensub1");
      });
      event.target.nextElementSibling.classNameList.add("opensub1");
    }
  };
  handleSubTwoMenu = (event) => {
    if (event.target.classNameList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classNameList.contains("opensub2"))
      event.target.nextElementSibling.classNameList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function(value) {
        value.classNameList.remove("opensub2");
      });
      event.target.nextElementSibling.classNameList.add("opensub2");
    }
  };
  handleSubThreeMenu = (event) => {
    if (event.target.classNameList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classNameList.contains("opensub3"))
      event.target.nextElementSibling.classNameList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function(value) {
        value.classNameList.remove("opensub3");
      });
      event.target.nextElementSibling.classNameList.add("opensub3");
    }
  };
  handleSubFourMenu = (event) => {
    if (event.target.classNameList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classNameList.contains("opensub4"))
      event.target.nextElementSibling.classNameList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function(value) {
        value.classNameList.remove("opensub4");
      });
      event.target.nextElementSibling.classNameList.add("opensub4");
    }
  };

  handleMegaSubmenu = (event) => {
    if (event.target.classNameList.contains("sub-arrow")) return;

    if (
      event.target.nextElementSibling.classNameList.contains("opensidesubmenu")
    )
      event.target.nextElementSibling.classNameList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classNameList.add("opensidesubmenu");
    }
  };

  logout1 = () => {
    store.dispatch(logout());
  };

  render() {
    const { active } = this.state;
    return (
      <div className="page-wrapper chiller-theme toggled">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
          <i className="fas fa-bars"></i>
        </Link>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/admin/dashboard`}>
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/site/logo.png`}
                  style={{ width: "37%", height: 53 }}
                  className="img-circle"
                  alt="User Image"
                />{" "}
              </Link>
              <div id="close-sidebar">
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img
                  className="img-responsive img-rounded"
                  src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                  alt="User picture"
                />
              </div>
              <div className="user-info">
                <span className="user-name">
                  Admin
                  <strong>(gnf)</strong>
                </span>
                <span className="user-role">Administrator</span>
                <span className="user-status">
                  <i className="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>

            <div className="sidebar-menu">
              <ul>
                <li className="sidebar-dropdown">
                  <Link
                    to="#"
                    className="slider-toggle"
                    onClick={() => {
                      localStorage.setItem("toggle", "admin");
                    }}
                  >
                    <span>Admin</span>
                  </Link>
                  <div
                    className="sidebar-submenu settings"
                    id="admin"
                    style={
                      active === "admin"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <ul>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/define-colors`}
                          className="child _childCustomFont"
                        >
                          Define Colors
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/color-shades`}
                          className="child _childCustomFont"
                        >
                          Color shades
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/add-sku`}
                          className="child _childCustomFont"
                        >
                          Add SKU
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/sku-list`}
                          className="child _childCustomFont"
                        >
                          SKU List
                        </Link>
                      </li>

                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/customers`}
                          className="child _childCustomFont"
                        >
                          Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/quote-list`}
                          className="child _childCustomFont"
                        >
                          Customers Quote List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/extra-services`}
                          className="child _childCustomFont"
                        >
                          Extra Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/pages`}
                          className="child _childCustomFont"
                        >
                          Pages
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              {auth.isAuthenticatedAdmin() ? (
                <ul>
                  <li className="sidebar-dropdown">
                    <Link
                      to="#"
                      className="slider-toggle"
                      onClick={() => {
                        localStorage.setItem("toggle", "settings");
                      }}
                    >
                      <span>Settings</span>
                    </Link>
                    <div
                      className="sidebar-submenu settings"
                      id="settings"
                      style={
                        active === "settings"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <ul>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/suppliers`}
                            className="child _childCustomFont"
                          >
                            Suppliers
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/maunfacturers`}
                            className="child _childCustomFont"
                          >
                            Maunfacturers
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/material-names`}
                            className="child _childCustomFont"
                          >
                            Material Names
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/material-types`}
                            className="child _childCustomFont"
                          >
                            Material Types
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/glass-category`}
                            className="child _childCustomFont"
                          >
                            Glass Categories
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/application-areas`}
                            className="child _childCustomFont"
                          >
                            Application Areas
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/material-thickness`}
                            className="child _childCustomFont"
                          >
                            Material Thickness
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/define-colors`}
                            className="child _childCustomFont"
                          >
                            Define Colors
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/color-shades`}
                            className="child _childCustomFont"
                          >
                            Color shades
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/slab-size`}
                            className="child _childCustomFont"
                          >
                            Slab size
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/tile-size`}
                            className="child _childCustomFont"
                          >
                            Tile size
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/finishes`}
                            className="child _childCustomFont"
                          >
                            Finishes
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/effects`}
                            className="child _childCustomFont"
                          >
                            Effects
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/brands`}
                            className="child_childCustomFont"
                          >
                            Brands
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/worktop-options`}
                            className="child _childCustomFont"
                          >
                            Worktop Dimensions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/fabrication-options`}
                            className="child _childCustomFont"
                          >
                            Fabrication Options
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/edge-detail-options`}
                            className="child _childCustomFont"
                          >
                            Edge Detail Options
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/splashbacks`}
                            className="child _childCustomFont"
                          >
                            Splashback Dimensions
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/cutouts`}
                            className="child _childCustomFont"
                          >
                            Cutouts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/survey-fit-options`}
                            className="child _childCustomFont"
                          >
                            Survey Fit options
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/design-options`}
                            className="child _childCustomFont"
                          >
                            Design options
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sidebar-footer">
            <Link to="#">
              <i className="fa fa-bell"></i>
              <span className="badge badge-pill badge-warning notification">
                3
              </span>
            </Link>
            <Link to="#">
              <i className="fa fa-envelope"></i>
              <span className="badge badge-pill badge-success notification">
                7
              </span>
            </Link>
            <Link to="#">
              <i className="fa fa-cog"></i>
              <span className="badge-sonar"></span>
            </Link>
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/admin`} onClick={this.logout1}>
              <i className="fa fa-power-off"></i>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default AdminSideBar;
