import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "../../css/custome.scoped.css";
import { toast } from "react-toastify";
import MaterialTable from "material-table";
import $ from "jquery";
import moment from "moment";

class quoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      editableSku: [],
    };
    // this.editSku = this.editSku.bind(this);
  }

  componentDidMount() {
    $("td").hide();
    axios.get(`${import.meta.env.VITE_API_URL}/quote`).then((res) => {
      res.data.map((el) => {
        el.created_at = moment(el.created_at).format("DD-MM-YYYY")
      })
      $("td").show();
      this.setState(
        {
          // using spread operator, you will need transform-object-rest-spread from babel or
          // another transpiler to use this
          ...this.state, // spreading in state for future proofing
          isLoaded: true,
          data: res.data,
        },
        () => {
          this.state.data.length === 0 && $("td").show();
          console.log(res.data);
        }
      );
    });
    document
      .getElementById("adminPanel")
      .setAttribute(
        "href",
        `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`
      );
  }

  hideQuote = (id) => {
    // console.log(id);
    // return;
    axios
      .put(`${import.meta.env.VITE_API_URL}/hide-quote`, { quote_id: id })
      .then((res) => {
        toast.success(`Quote has been hide`);
        this.componentDidMount();
      });
  };

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  redirect = (rowData) => {
    console.log(rowData);
  };

  render() {
    const { isLoaded, data, editableSku } = this.state;
    console.log(data);
    return (
      <div>
        <section className="admin-dashboard">
          <div className="row col-md-12">
            <div className="col-md-3">
              <DashboardHeader />
            </div>

            <div
              className="col-md-9 skulist-padding-class"
              style={{ paddingLeft: "2%" }}
            >
              <br />
              <br />
              {/* <Link title="Create Custom Quote">
                <button className="btn btc mt-2">Create Quote</button>
              </Link> */}

              <MaterialTable
                options={{
                  rowStyle: {
                    fontSize: 12,
                  },
                  headerStyle: { fontSize: 12 },
                }}
                title="Customer Quote List"
                isLoading={!isLoaded ? true : false}
                columns={[
                  { title: "Quote Ref #", field: "ref" },
                  { title: "Name", field: "firstname" },
                  { title: "Phone", field: "phone" },
                  { title: "Email", field: "email" },
                  { title: "Date", field: "created_at",minWidth: "110px", },
                  {
                    field: "ref",
                    title: "Customer",
                    render: (rowData) => (
                      <a
                        onClick={() => {
                          this.props.history.push(
                            `${import.meta.env.VITE_PUBLIC_URL}/admin/edit-customer`,
                            { data: rowData }
                          );
                        }}
                        className="btn btn-outline-primary-2 btn-round btn-more custome-edit-customer-button"
                        style={{
                          paddingTop: "0.40rem",
                          paddingBottom: "0.40rem",
                          minWidth: "120px",
                          padding: "0.5%",
                          textTransform: "capitalize",
                        }}
                      >
                        Edit Customer
                      </a>
                    ),
                  },
                  {
                    field: "ref",
                    title: "Action",
                    render: (rowData) => {
                      console.log(rowData);
                      return (
                        <Link
                          to={`${import.meta.env.VITE_PUBLIC_URL}/admin/edit-quote/${rowData.ref}`}
                          className="btn btn-outline-primary-2 btn-round btn-more"
                          style={{
                            paddingTop: "0.40rem",
                            paddingBottom: "0.40rem",
                            minWidth: "120px",
                            padding: "0.5%",
                            textTransform: "capitalize",
                          }}
                        >
                          Edit Quote
                        </Link>
                      );
                    },
                  },
                  {
                    field: "ref",
                    title: "Quotes Report",
                    render: (rowData) => (
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/admin/customer-quote-report/${rowData.email}`}
                        className="btn btn-outline-primary-2 btn-round btn-more"
                        style={{
                          paddingTop: "0.40rem",
                          paddingBottom: "0.40rem",
                          minWidth: "120px",
                          padding: "0.5%",
                          textTransform: "capitalize",
                        }}
                      >
                        Quotes Report
                      </Link>
                    ),
                  },
                  // {
                  //   field: "hide",
                  //   title: "Hide",
                  //   render: (rowData) => (
                  //     <button
                  //       onClick={() => {
                  //         this.hideQuote(rowData.ref);
                  //       }}
                  //       className="btn btn-outline-primary-2 btn-round btn-more"
                  //       style={{
                  //         paddingTop: "0.40rem",
                  //         paddingBottom: "0.40rem",
                  //         minWidth: "120px",
                  //         padding: "0.5%",
                  //         textTransform: "capitalize",
                  //       }}
                  //     >
                  //       Hide Quote
                  //     </button>
                  //   ),
                  // },
                ]}
                data={data}
                actions={[
                  {
                    icon: "add",
                    tooltip: `Add`,
                    isFreeAction: true,
                    onClick: () => {
                      this.props.history.push("/get-a-quote");
                    },
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default quoteList;
