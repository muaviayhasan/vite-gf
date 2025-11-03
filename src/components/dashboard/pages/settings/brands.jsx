import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";

 // import "../../css/custome.scoped.css";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
      manucturers: ""
    };
  }
  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/manufacturer`).then(manufacturer => {
      axios.get(`${import.meta.env.VITE_API_URL}/brand`).then(brands => {
        this.setState({
          // using spread operator, you will need transform-object-rest-spread from babel or
          // another transpiler to use this
          ...this.state, // spreading in state for future proofing
          isLoaded: true,
          data: brands.data,
          manucturers: manufacturer.data
        });
      });
    });
    document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  render() {
    const { isLoaded, data , manucturers } = this.state;
    let fields = [
      {
        type: "select",
        name: "manufacturer_id",
        value: "",
        placeholder: "Select Manucturer",
        options: manucturers,
        required: true
      },
      {
        type: "text",
        name: "name",
        value: "",
        placeholder: "Brand Name"
      }
    ];
    let columns = [
      { title: "Manufacturer", field: "manufacturer.name" },
      { title: "Brand Name", field: "name" },
      
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
                  <h1 className="heading-settings-table">Brands</h1>
                  {isLoaded ? (
                    <FormTamplate
                      fields={fields}
                      title="Brands"
                      columns={columns}
                      data={data}
                      saveUrl={`${import.meta.env.VITE_API_URL}/brand`}
                      updateUrl={`${import.meta.env.VITE_API_URL}/brand/update`}
                      deleteUrl={`${import.meta.env.VITE_API_URL}/brand/delete`}
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

export default Brands;
