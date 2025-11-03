import React, { Component } from "react";
import { FormTamplate } from "../../settings_form";
import "../../../../style/index.scss";
import DashboardHeader from "../../../../includes/Header";
import axios from "axios";
// import "../../../../css/custome.scoped.css";

class FabricationStone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/suppliers`).then(res => {
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        data: res.data
      });
    });
    document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  render() {
    const { isLoaded, data } = this.state;
    let fields = [
      {
        type: "select",
        name: "fabrication",
        value: "",
        placeholder: "Fabrication",
        options: [
          "Angles",
          "Chopping Board",
          "Curve (over 500mm)",
          "Drainer Grooves",
          "Extractor Cut Out",
          "Hob Bars",
          "Inset Sink Cut Out",
          " Intergrity Sink",
          "Notch",
          "Plug Socket Cut Out",
          " Polished Sink Cut Out",
          "Pop Up Extractor Cut Out",
          "Pop Up Plug Socket Cut Out",
          "Radius Curve (up to 500mm)",
          "Recess Hob Cut Out",
          "Recess Pop Up Socket Cut Out",
          "Recess Sink Cut Out",
          "Recessed Drainer Cut Out",
          " Standard Hob Cut Out",
          "Tap Holes",
          "Waste Hole"
        ],
        required: true
      }
    ];
    let columns = [{ title: "Fabrication", field: "fabrication" }];
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
                  <h2 className="heading-settings-table">Fabrication</h2> 
                  {isLoaded ? (
                    <FormTamplate
                      fields={fields}
                      title="fabrication"
                      columns={columns}
                      data={data}
                      saveUrl={`${import.meta.env.VITE_API_URL}/suppliers`}
                      updateUrl={`${import.meta.env.VITE_API_URL}/suppliers/update`}
                      deleteUrl={`${import.meta.env.VITE_API_URL}/suppliers/delete`}
                    />
                  ) : (
                    ""
                  )}
                  <br />
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FabricationStone;
