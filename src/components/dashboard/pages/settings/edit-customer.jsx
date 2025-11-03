import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
 // import "../../css/custome.scoped.css";

class EditCustomer extends Component {
  constructor(props) {
    super(props);
    const data = props.history.location.state.data;
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      customer_group: "",
      postcode: "",
      id: "",
    };
    console.log("data: ");
  }
  componentDidMount() {
    // console.log("data: ", this.props.data);
    axios.get(`${import.meta.env.VITE_API_URL}/customers`).then((res) => {
      console.log(this.props.history.location.state.data);
      res.data.forEach((element) => {
        if (element.email === this.props.history.location.state.data.email) {
          console.log("here: ", element);
          const {
            firstname,
            lastname,
            email,
            phone,
            id,
            address,
            city,
            customer_group,
            postcode,
          } = element;
          this.setState({
            firstname,
            lastname,
            email,
            phone,
            id,
            address,
            city,
            customer_group,
            postcode,
          });
        }
      });
    });
    document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }


  updateCustomer = (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = this.state;
    axios
      .post(`${import.meta.env.VITE_API_URL}/customers/update`, data, config)
      .then((res) => {
        toast.success(`Customer Updated`);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };
  render() {
    const {
      firstname,
      lastname,
      email,
      phone,
      id,
      address,
      city,
      customer_group,
      postcode,
    } = this.state;
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
                    <h1 className="heading-settings-table">Edit Customers</h1>
                  </div>{" "}
                  <br />
                 
                  <form id="form" className="theme-form hide_div show_div">
                    <div className="form-row">
                      <input name="id" type="hidden" defaultValue={1} />
                      <div className="col-md-3 form__group">
                        <input
                          name="firstname"
                          type="text"
                          className="form__field"
                          placeholder="First Name"
                          id="firstname"
                          defaultValue="shahzad"
                          value={firstname}
                          onChange={(e) => {
                            this.setState({ firstname: e.target.value });
                          }}
                        />
                        <label htmlFor="firstname" className="form__label">
                          First Name{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="lastname"
                          type="text"
                          className="form__field"
                          placeholder="Last Name"
                          id="lastname"
                          value={lastname}
                          onChange={(e) => {
                            this.setState({ lastname: e.target.value });
                          }}
                        />
                        <label htmlFor="lastname" className="form__label">
                          Last Name{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="phone"
                          type="text"
                          className="form__field"
                          placeholder="Phone"
                          id="phone"
                          value={phone}
                          onChange={(e) => {
                            this.setState({ phone: e.target.value });
                          }}
                        />
                        <label htmlFor="phone" className="form__label">
                          Phone{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="email"
                          type="text"
                          className="form__field"
                          placeholder="Email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                        <label htmlFor="email" className="form__label">
                          Email{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="address"
                          type="text"
                          className="form__field"
                          placeholder="Address Line 1"
                          id="address"
                          value={address}
                          onChange={(e) => {
                            this.setState({ address: e.target.value });
                          }}
                        />
                        <label htmlFor="address" className="form__label">
                          Address Line 1{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="city"
                          type="text"
                          className="form__field"
                          placeholder="City"
                          id="city"
                          value={city}
                          onChange={(e) => {
                            this.setState({ city: e.target.value });
                          }}
                        />
                        <label htmlFor="city" className="form__label">
                          City{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="postcode"
                          type="text"
                          className="form__field"
                          placeholder="PostCode"
                          id="postcode"
                          value={postcode}
                          onChange={(e) => {
                            this.setState({ postcode: e.target.value });
                          }}
                        />
                        <label htmlFor="postcode" className="form__label">
                          PostCode{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <select
                          className="form__field"
                          name="customer_group"
                          id="customer_group"
                          onChange={(e) => {
                            this.setState({ customer_group: e.target.value });
                          }}
                        >
                          <option value={1}>Individual</option>
                          <option value={2}>Trade</option>
                        </select>
                        <label htmlFor="customer_group" className="form__label">
                          Group{" "}
                        </label>
                      </div>
                    </div>
                    <br />
                  </form>
                  <div className="col-md-12">
                    <button
                      className="btn btn-solid"
                      onClick={(e) => {
                        this.updateCustomer(e);
                      }}
                    >
                      Save Customers
                    </button>
                    <button
                      className="btn btn-solid"
                      style={{ marginLeft: "5%" }}
                      onClick={(e) => {
                        this.props.history.goBack();
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default EditCustomer;
