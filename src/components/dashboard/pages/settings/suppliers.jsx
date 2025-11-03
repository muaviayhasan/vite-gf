import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";

 // import "../../css/custome.scoped.css";
import { element, array } from "prop-types";

class Suppliers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
      brands : null,
      brandsSelect: null
    };
  }

  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/brand`).then(brands => {
    axios.get(`${import.meta.env.VITE_API_URL}/suppliers`).then(res => {
      let brandsSelect = brands.data.map(brand=>{
        return {label: brand.name, value: brand.id}
      });
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        data: res.data,
        brands : brands.data,
        brandsSelect: brandsSelect
      });
    });
  })
  document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
}

componentWillUnmount() {
  document.getElementById("adminPanel").removeAttribute("href");
}

  render() {
    const { isLoaded, data , brands, brandsSelect ,} = this.state;
    if(data)
    {
      data.map(element => {
        let brand = "";
        for (let index = 0; index < element.brands.length; index++) {
          if(index != element.brands.length - 1)
          {
            brand+=element.brands[index].name+", ";
          }
          else
          {
            brand+=element.brands[index].name;
          }
        
        }
        element.brand = brand
       });
    }

    let fields = [
      {
        type: "multi_select",
        name: "brand_ids",
        value: "",
        placeholder: "Select Brands",
        options: brandsSelect,
        required: true
      },
      {
        type: "text",
        name: "name",
        value: "",
        placeholder: "Supplier Name",
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
      { title: "Brands", field: "brand" },
      { title: "Supplier", field: "name" },
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
                  <h1 className="heading-settings-table">Suppliers</h1>
                  {isLoaded ? (
                    <FormTamplate
                      fields={fields}
                      multiselectName="brand_ids"
                      title="Suppliers"
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

export default Suppliers;
