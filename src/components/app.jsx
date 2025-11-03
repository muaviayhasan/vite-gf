import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

import store from "../store";

// import Custom Components
import HeaderOne from "./common/header/header-1";
import FooterTwo from "./common/footer/footer-two";
import MobileMenu from "./common/header/common/mobile-menus/menu-1";
import OuterOverlay from "./common/overlay/outer-overlay";

// import Utils
import { initSettings } from "../utils/utils";

// import Actions
import { outerLoading, closeQuickViewModal } from "../actions";

class App extends Component {
  componentDidMount() {
    initSettings();
    store.dispatch(outerLoading());
  }

  componentDidUpdate() {
    if (store.getState() && store.getState().overlay.type === "outer") {
      store.dispatch(outerLoading());
    }

    if (store.getState() && store.getState().data.quickView) {
      store.dispatch(closeQuickViewModal());
    }
  }

  render() {
    return (
      <React.Fragment>
        <OuterOverlay />
        <div className="page-wrapper">
          <HeaderOne />
          <Outlet />
          <FooterTwo />
          <ToastContainer autoClose={3000} className="toast-container" />
        </div>
        <MobileMenu />
      </React.Fragment>
    );
  }
}

export default App;
