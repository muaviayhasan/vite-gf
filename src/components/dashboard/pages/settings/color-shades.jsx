import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";

 // import "../../css/custome.scoped.css";

class Colorshades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
      base_colors:null
    };
  }

  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/base_color`).then(base_color => {
      axios.get(`${import.meta.env.VITE_API_URL}/color_shades`).then(color_shades => {
        this.setState({
          // using spread operator, you will need transform-object-rest-spread from babel or
          // another transpiler to use this
          ...this.state, // spreading in state for future proofing
          isLoaded: true,
          data: color_shades.data,
          base_colors: base_color.data
        });
      });
    });
    document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  render() {
    const { isLoaded, data, base_colors } = this.state;

    let fields = [
      
      {
        type: "select",
        name: "base_color_id",
        value: "",
        placeholder: "Select Base Color",
        options: base_colors,
        required: true
      },
      {
        type: "text",
        name: "name",
        value: "",
        placeholder: "Color Name"
      },
      {
        type: "text",
        name: "color_code",
        value: "",
        placeholder: "Color Code"
      }
    ];
    let columns = [
      { title: "Color Name", field: "name" },
      { title: "Color Code", field: "baseColor.name" }
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
                  <h1 className="heading-settings-table">Color Shades</h1>
                  {isLoaded ? (
                    <FormTamplate
                      fields={fields}
                      title="Color Shades"
                      columns={columns}
                      data={data}
                      saveUrl={`${import.meta.env.VITE_API_URL}/color_shades`}
                      updateUrl={`${import.meta.env.VITE_API_URL}/color_shades/update`}
                      deleteUrl={`${import.meta.env.VITE_API_URL}/color_shades/delete`}
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

export default Colorshades;
