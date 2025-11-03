import React, { Component } from "react";
import SearchBar from "../../../common/search-bar";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";

 // import "../../css/custome.scoped.css";
class CustomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
    };
  }
  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/manufacturer`).then((res) => {
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        data: res.data,
      });
    });
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
            <div className="col-md-9" style={{ "margin-top": "20px" }}>
              <main className="page-content">
                <div className="container-fluid">
                  <h1 className="heading-settings-table">Custom Quote</h1>
                 
                  <div className="container" style={{ "textAlign": "center" }}>
                    <SearchBar adminProductSearch={true} />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CustomQuote;
