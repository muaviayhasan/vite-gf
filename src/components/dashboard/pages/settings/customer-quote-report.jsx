import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import "../../css/custome.scoped.css";
import MaterialTable from "material-table";
import momemt from "moment";

class CustomerQuoteReport extends Component {
  constructor(props) {
    super(props);
    const data = window.location.pathname.split("/")[3];
    this.state = {
      id: data,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      data: [],
      isLoaded: false,
    };
  }
  async componentDidMount() {
    console.log("data: ", this.state.id);

    await axios.get(`${import.meta.env.VITE_API_URL}/customers`).then((res) => {
      res.data.forEach((element) => {
        if (element.email === this.state.id) {
          console.log(element);
          const { firstname, lastname, email, phone } = element;
          this.setState({
            firstname,
            lastname,
            email,
            phone,
          });
        }
      });
    });
    await axios
      .get(`${import.meta.env.VITE_API_URL}/customer-quotation-report/${this.state.id}`)
      .then((res) => {
        console.log(res.data);
        const temp = [];
        res.data.forEach((e) => {
          e.firstname = this.state.firstname;
          e.lastname = this.state.lastname;
          e.email = this.state.email;
          e.phone = this.state.phone;
          e.date = momemt(e.created_at).format("LLLL");
          temp.push(e);
        });
        let desc = temp.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
        this.setState({ data: desc, isLoaded: true }, () => {
          // console.log("HERE => ", this.state.data);
          // console.log(" desc HERE => ", desc);
        });
      });
    document
      .getElementById("adminPanel")
      .setAttribute(
        "href",
        `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`
      );
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  render() {
    const {
      id,
      firstname,
      lastname,
      email,
      phone,
      data,
      isLoaded,
    } = this.state;
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
        name: "date",
        value: "",
        placeholder: "Date",
      },
    ];
    let columns = [
      { title: "First name", field: "firstname" },
      { title: "Last name", field: "lastname" },
      { title: "Email", field: "email" },
      { title: "Ref.", field: "ref" },
      { title: "Date", field: "date" },
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
                    <h1 className="heading-settings-table">
                      Customer Qutoes Report
                    </h1>
                  </div>{" "}
                  <br />
                  <MaterialTable
                    title="Customer Quotes Report"
                    isLoading={!isLoaded ? true : false}
                    columns={[
                      { title: "Quote Ref #", field: "ref" },
                      { title: "Name", field: "firstname" },
                      { title: "Phone", field: "phone" },
                      { title: "Email", field: "email" },
                      { title: "Date", field: "date" },
                      {
                        field: "ref",
                        title: "Action",
                        render: (rowData) => {
                          return (
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/admin/edit-quote/${rowData.ref}`}
                              className="btn btn-outline-primary-2 btn-round btn-sm"
                            >
                              Edit Quote
                            </Link>
                          );
                        },
                      },
                    ]}
                    data={data}
                  />
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CustomerQuoteReport;
