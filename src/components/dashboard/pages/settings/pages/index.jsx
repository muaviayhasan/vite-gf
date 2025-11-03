import React, { Component, Fragment } from "react";
import "../../../style/index.scss";
import DashboardHeader from "../../../includes/Header";
import axios from "axios";
import MaterialTable from "material-table";
import { toast } from "react-toastify";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      pages: [],
    };
  }
  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/pages`).then((res) => {
      var temp = [];
      res.data.forEach((element) => {
        if (element.status === true) {
          element.status = "Active";
        } else {
          element.status = "Inactive";
        }
        temp.push(element);
      });
      this.setState({ pages: temp, isLoaded: true });
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

  delete = (id) => {
    axios.get(`${import.meta.env.VITE_API_URL}/pages/delete/${id}`).then((res) => {
      this.setState({ pages: res.data }, () => {
        toast.success(`Custom page deleted`);
      });
    });
  };

  render() {
    const { isLoaded, data, pages } = this.state;

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
                    title="Custom Page"
                    isLoading={!isLoaded ? true : false}
                    columns={[
                      { title: "Title", field: "title" },
                      { title: "SEO URL", field: "seo_url" },
                      { title: "Menu Order", field: "order" },
                      { title: "Menu Status", field: "status" },
                      { title: "Menu name", field: "menu_name" },
                    ]}
                    actions={[
                      {
                        icon: "add",
                        tooltip: `Add`,
                        isFreeAction: true,
                        onClick: () => {
                          this.props.history.push("/admin/create-page");
                        },
                      },
                      {
                        icon: "edit",
                        tooltip: `Edit`,
                        cellStyle: { paddingRight: 0 },
                        onClick: (event, rowData) => {
                          this.props.history.push(
                            `/admin/edit-page/${rowData.id}`
                          );
                        },
                      },

                      {
                        icon: "delete",
                        tooltip: `Delete`,
                        onClick: (event, rowData) => {
                          this.delete(rowData.id);
                        },
                      },
                    ]}
                    data={pages}
                  />
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

export default Index;
