import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";

 // import "../../css/custome.scoped.css";
class Manufacturers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null
    };
  }
  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/manufacturer`).then(res => {
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
        type: "text",
        name: "name",
        value: "",
        placeholder: "Manufacturer Name",
        required: true
      },
      {
        type: "email",
        name: "email",
        value: "",
        placeholder: "Email",
        required: true
      },
      {
        type: "text",
        name: "contact_person",
        value: "",
        placeholder: "Contact Person",
        required: false
      },
      {
        type: "text",
        name: "phone_number",
        value: "",
        placeholder: "Phone",
        required: true
      },

      {
        type: "text",
        name: "website",
        value: "",
        placeholder: "Website",
        required: false
      },
      {
        type: "text",
        name: "address",
        value: "",
        placeholder: "Address",
        required: true
      },
      {
        type: "text",
        name: "postcode",
        value: "",
        placeholder: "Postcode",
        required: true
      }
    ];

    let columns = [
      { title: "Manufacturer Name", field: "name" },
      { title: "Contact Person", field: "contact_person" },
      { title: "Phone", field: "phone_number" },
      { title: "Email", field: "email" }
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
                  <h1 className="heading-settings-table">Manufacturers</h1>
                  {isLoaded ? (
                    <FormTamplate
                      fields={fields}
                      title="Manufacturers"
                      columns={columns}
                      data={data}
                      multiselectName = ""
                      saveUrl={`${import.meta.env.VITE_API_URL}/manufacturer`}
                      updateUrl={`${import.meta.env.VITE_API_URL}/manufacturer/update`}
                      deleteUrl={`${import.meta.env.VITE_API_URL}/manufacturer/delete`}
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

export default Manufacturers;
