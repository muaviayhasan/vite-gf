import React, { Component } from "react";
import "../style/index.scss";

import DashboardHeader from "../includes/Header";

// import "../css/custome.scoped.css";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  render() {
    return (
      <div>
        <section className="admin-dashboard">
          <div className="row col-md-12">
            <div className="col-md-3">
              <DashboardHeader />
            </div>
            <div className="col-md-9" style={{ marginTop: "20px" }}>
              <main className="page-content">
                <div className="container-fluid" style={{ padding: "2%" }}>
                  <h2 className="heading-settings-table">GNF DASHBOARD</h2>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AdminDashboard;
