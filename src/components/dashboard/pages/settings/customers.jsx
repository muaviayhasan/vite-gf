import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";
import { Link } from "react-router-dom";

 // import "../../css/custome.scoped.css";

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null,
    };
  }
  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/customers`).then((res) => {
      console.log(res)
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
    const { isLoaded, data } = this.state;

    let fields = [
      {
        type: "text",
        name: "firstname",
        value: "",
        placeholder: "First Name",
      },
      {
        type: "text",
        name: "lastname",
        value: "",
        placeholder: "Last Name",
      },
      {
        type: "text",
        name: "phone",
        value: "",
        placeholder: "Phone",
      },
      {
        type: "text",
        name: "email",
        value: "",
        placeholder: "Email",
      },

      {
        type: "text",
        name: "address",
        value: "",
        placeholder: "Address Line 1",
      },
      {
        type: "text",
        name: "city",
        value: "",
        placeholder: "City",
      },
      {
        type: "text",
        name: "postcode",
        value: "",
        placeholder: "PostCode",
      },
      {
        type: "select",
        name: "customer_group",
        value: "",
        placeholder: "Group",
        options: [
          {
            id: 1,
            name: "Individual",
          },
          {
            id: 2,
            name: "Trade",
          },
        ],
      },
    ];
    let columns = [
      { title: "Name", field: "firstname" },
      { title: "Email", field: "email" },
      { title: "City", field: "city" },
      { title: "PostCode", field: "postcode" },
      {
        field: "ref",
        title: "Quotes Report",
        render: (rowData) => (
          <Link
            to={`${import.meta.env.VITE_PUBLIC_URL}/admin/customer-quote-report/${rowData.email}`}
            className="btn btn-outline-primary-2 btn-round btn-more" style=
            {{
              paddingTop: '0.40rem', paddingBottom: '0.40rem', minWidth: '120px' , padding:'0.5%' , textTransform:'capitalize'
          }}
          >
            Quotes Report
          </Link>
        ),
      },
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
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h1 className="heading-settings-table">Customers</h1>
                  </div>{" "}
                 
                  {isLoaded ? (
                    <FormTamplate
                      fields={fields}
                      title="Customers"
                      columns={columns}
                      data={data}
                      saveUrl={`${import.meta.env.VITE_API_URL}/customers`}
                      updateUrl={`${import.meta.env.VITE_API_URL}/customers/update`}
                      deleteUrl={`${import.meta.env.VITE_API_URL}/customers/delete`}
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

export default Customers;
