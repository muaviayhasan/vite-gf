import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { IntlActions } from "react-redux-multilingual";
import Pace from "react-pace-progress";
import { Helmet } from "react-helmet";

// Import custom components
import store from "../../../store";

import { loadUser } from "../../../actions/authAction";

import TopBarWhite from "../../common/headers/common/topbar-white";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import LogoImage from "../../common/headers/common/logo";
import NavBar from "../../common/headers/common/navbar";
import DashboardFooter from "./Footer";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

class DashboardHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  /*=====================
         Pre loader
         ==========================*/
  componentDidMount() {
    setTimeout(function () { }, 2000);
    document
      .getElementById("color")
      .setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/color3.css`);
    document.body.setAttribute("style", " background : #ffffff !important");

    //work on this in feature
    // store.dispatch(loadUser());
  }

  changeLanguage(lang) {
    store.dispatch(IntlActions.setLocale(lang));
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  openNav() {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  }
  openSearch() {
    document.getElementById("search-overlay").style.display = "block";
  }

  closeSearch() {
    document.getElementById("search-overlay").style.display = "none";
  }

  load = () => {
    this.setState({ isLoading: true });
    fetch().then(() => {
      // deal with data fetched
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated === false) {
      return <Navigate to="/admin" replace={false} />;
    }
    return (
      <div>
        <Helmet>
          <title>GNF | Dashboard</title>
        </Helmet>
        <header>
          {this.state.isLoading ? <Pace color="#27ae60" /> : null}
          <div className="mobile-fix-option"></div>
          {/*Top Header Component*/}

          <SideBar />
        </header>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(DashboardHeader);
