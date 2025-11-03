import React, { Component } from "react";
import { FormTamplate } from "../../settings_form";
import "../../../../style/index.scss";
import DashboardHeader from "../../../../includes/Header";
import axios from "axios";
// import "../../../../css/custome.scoped.css";

class Cutouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
      materials: []
    };
  }
  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/materials`).then(material => {
      axios.get(`${import.meta.env.VITE_API_URL}/cutouts`).then(cutouts => {
        this.setState({
          // using spread operator, you will need transform-object-rest-spread from babel or
          // another transpiler to use this
          ...this.state, // spreading in state for future proofing
          isLoaded: true,
          data: cutouts.data,
          materials: material.data
        });
      });
    });
    document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }
  render() {
    const { isLoaded, data, materials } = this.state;
    let fields = [
      {
        type: "select",
        name: "material_id",
        value: "",
        placeholder: "Material",
        options: materials,
        required: true
      },
      {
        type: "text",
        name: "name",
        value: "",
        placeholder: "Cutout"
      },
      {
        type: "text",
        name: "price",
        value: "",
        placeholder: "Price"
      }
    ];
    let columns = [
      { title: "Material", field: "materialType.name" },
      { title: "Cutouts", field: "name" },
      { title: "Price", field: "price" }
    ];
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
                  <h2 className="heading-settings-table">Cutouts</h2> <br />
                  {isLoaded ? (
                    <FormTamplate
                      fields={fields}
                      title="Cutout"
                      columns={columns}
                      data={data}
                      saveUrl={`${import.meta.env.VITE_API_URL}/cutouts`}
                      updateUrl={`${import.meta.env.VITE_API_URL}/cutouts/update`}
                      deleteUrl={`${import.meta.env.VITE_API_URL}/cutouts/delete`}
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

export default Cutouts;
