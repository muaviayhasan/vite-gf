import React, { Component, Fragment } from "react";
import { renderToString } from "react-dom/server";
import moment from "moment";
import { Helmet } from "react-helmet";
import { Button } from "@material-ui/core";
import { fontWeight } from "@material-ui/system";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import auth from "../../../auth/auth";
import parse from 'html-react-parser';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:
        localStorage.getItem("wishlist") &&
          JSON.parse(localStorage.getItem("wishlist")).length > 0
          ? JSON.parse(localStorage.getItem("wishlist"))
          : [],

      loading: false,
      validForm: false,
      checked: false,
      productUrl: localStorage.getItem("enquireProduct")
        ? localStorage.getItem("enquireProduct")
        : "",
      name: "",
      email: "",
      phone: "",
      message: "",
      requestForQuote: null,
      isRedirect: false
    };
    this.termsandconditions = this.termsandconditions.bind(this);
  }

  componentDidMount() {
    if (
      localStorage.getItem("wishlist") == null ||
      JSON.parse(localStorage.getItem("wishlist")).length === 0
    ) {
      this.props.history.push("/empty-wishlist");
    }
  }

  termsandconditions = (e) => {
    if (e.target.checked === true) {
      this.setState({
        ...this.state,
        checked: true,
      });
    } else {
      this.setState({
        ...this.state,
        checked: false,
      });
    }
  };

  _handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  };

  formSubmitHandler = async (payload) => {
    console.log(payload);
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/enquire-products`,
      payload
    );
    toast.success(`${res.data}`);
    localStorage.setItem("wishlist", "[]");
    this.setState({
      loading: false,
      validForm: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      data: [],
    });
  };

  submit = (e) => {
    this.setState({ loading: true, validForm: true });
    const {
      checked,
      name,
      email,
      phone,
      message,
      requestForQuote,
    } = this.state;
    if (
      checked &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== "" &&
      requestForQuote !== null
    ) {
      var data = [];
      JSON.parse(localStorage.getItem("wishlist")).forEach((element) => {
        data.push({
          pUrl:
            window.location.host +
            `/product-detail/${element.manufacturer}/${element.brand}/${element.base_color}/${element.name}`,
          pName: element.name,
          pMaterial: element.material,
          pImage: `${import.meta.env.VITE_API_URL}/${element.images[0].path}`,
          pBrand: element.brand,
        });
      });
      const payload = {
        data,
        name,
        email,
        phone,
        message,
        requestForQuote: requestForQuote === true ? "Yes" : "No",
      };
      console.log("valid form");

      this.formSubmitHandler(payload);
      this.setState({ isRedirect: true })
    } else {
      console.log("invalid form");
      console.log(this.state);
      this.setState({ validForm: false });
      toast.error(`Please fill all the fields`);
      return;
    }
  };

  getPriceRange = (list, key) => {
    let values = 0;
    let html = "<font style='color: #cc9966;'>£</font>";
    if (list) {
      for (var i in list) {
        if (list[i][key] > values) {
          values = list[i][key];
        }
      }
      for (var i = 1; i < 6; i++) {
        if (values > 50 * i) {
          html += "<font style='color: #cc9966;'>£</font>";
        } else {
          html += "<font style='color: silver'>£</font>";
        }
      }
    }
    return html;
  };

  remove = (i) => {
    var temp = [];
    this.state.data.forEach((element, index) => {
      if (index !== i) {
        temp.push(element);
      }
    });
    this.setState({ data: temp }, () => {
      localStorage.setItem("wishlist", JSON.stringify(temp));
      if (this.state.data.length === 0) {
        this.props.history.push("/empty-wishlist");
      }
    });
  };

  render() {

    if (this.state.isRedirect) {
      return (
        <Navigate to="/thanks-for-wishlist" replace={false} />
      );
    }

    const {
      data,
      loading,
      validForm,
      productUrl,
      name,
      email,
      phone,
      message,
    } = this.state;
    // console.log("data: ", JSON.parse(localStorage.getItem("wishlist")));
    // if (!localStorage.getItem("sku")) {
    //   return <Redirect to={`${import.meta.env.VITE_PUBLIC_URL}/empty-short-list`} />;
    // }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "4%" }}>
            <table className="table table-image quote_table_border">
              <thead className="header_color">
                <tr>
                  <th
                    className="sky_th_color"
                    scope="col"
                    style={{ fontWeight: "bold" }}
                  >
                    &nbsp;Name
                  </th>
                  <th
                    className="sky_th_color"
                    scope="col"
                    style={{ fontWeight: "bold" }}
                  >
                    &nbsp;Material
                  </th>
                  <th
                    className="sky_th_color"
                    scope="col"
                    style={{ fontWeight: "bold" }}
                  >
                    &nbsp;Image
                  </th>
                  <th
                    className="sky_th_color"
                    scope="col"
                    style={{ fontWeight: "bold" }}
                  >
                    &nbsp;Brand
                  </th>
                  <th
                    class="sky_th_color"
                    scope="col"
                    style={{ fontWeight: "bold" }}
                  >
                    &nbsp;Price
                  </th>
                  <th
                    className="sky_th_color"
                    scope="col"
                    style={{ fontWeight: "bold" }}
                  >
                    &nbsp;Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.length > 0 &&
                  data.map((item, index) => {
                    console.log("item: ", item);
                    return (
                      <tr>
                        <td>
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/${item.manufacturer}/${item.brand}/${item.color_code}/${item.name}`}
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td>{item.material}</td>
                        <td class="w-25">
                          <td class="w-25">
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/product-detail/${item.manufacturer}/${item.brand}/${item.color_code}/${item.name}`}
                            >
                              <img
                                src={
                                  // CHANGE: Simplified string template and added explicit checks
                                  `${import.meta.env.VITE_API_URL}/${item && item.name === "White Macaubas" && item.images && item.images[1] && item.images[1].path
                                    ? item.images[1].path
                                    : item && item.images && item.images[0]
                                      ? item.images[0].path
                                      : "/path/to/fallback-image.jpg"
                                  }`
                                }
                                className="img-fluid sku_img_thumbnails"
                                alt={item.name}
                              />
                            </Link>
                          </td>
                        </td>
                        <td>{item.brand}</td>
                        <td>
                          <p
                            className="Component-paragraphs-inner"
                            style={{ fontWeight: "bold", fontSize: 16 }}
                          >
                            {parse(
                              this.getPriceRange(item.finishes, "price")
                            )}
                          </p>
                        </td>
                        <td class="remove_item_sku">
                          <button
                            className="cutome-rounded-delete-button btn btn-outline-primary-2 btn-round btn-more"
                            type="button"
                            onClick={() => {
                              this.remove(index);
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="col-md-12">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-lg-12">
                {/* <h2 className="title mb-1">Got Any Questions?</h2> */}
                <h5 className="mb-2" style={{ fontWeight: "bold" }}>
                  Using the form below, please feel free to send us your
                  queries. You may also request a FREE quote from us
                </h5>

                <form action="#" className="contact-form mb-3">
                  <div className="row">
                    <div className="col-sm-4">
                      <label htmlFor="cname" className="sr-only">
                        Name
                      </label>
                      <br />
                      {name === "" && loading && (
                        <span className="error text-danger">
                          Name is required*
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        id="cname"
                        placeholder="Name *"
                        required
                        name="name"
                        value={name}
                        onChange={this._handleChange}
                      />
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="cemail" className="sr-only">
                        Email
                      </label>
                      <br />
                      {email === "" && loading && (
                        <span className="error text-danger">
                          Email is required*
                        </span>
                      )}
                      <input
                        type="email"
                        className="form-control"
                        id="cemail"
                        placeholder="Email *"
                        required
                        name="email"
                        value={email}
                        onChange={this._handleChange}
                      />
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="cphone" className="sr-only">
                        Phone
                      </label>
                      <br />
                      {phone === "" && loading && (
                        <span className="error text-danger">
                          Phone is required*
                        </span>
                      )}
                      <input
                        type="tel"
                        className="form-control"
                        id="cphone"
                        placeholder="Phone *"
                        required
                        name="phone"
                        value={phone}
                        onChange={this._handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="cmessage" className="sr-only">
                        Message
                      </label>
                      <br />
                      {message === "" && loading && (
                        <span className="error text-danger">
                          Message is required*
                        </span>
                      )}
                      <textarea
                        className="form-control"
                        cols="30"
                        rows="4"
                        id="cmessage"
                        required
                        name="message"
                        value={message}
                        onChange={this._handleChange}
                        placeholder="Message *"
                      ></textarea>

                      <div
                        className="col-md-12"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div className="custom-control custom-radio">
                            <h6
                              className="mb-2"
                              style={{
                                fontWeight: "bold",
                                marginTop: "5%",
                                marginLeft: "-18%",
                                fontSize: "inherit",
                              }}
                            >
                              <span style={{ color: "red" }}>*</span> Would you
                              like us to send a Quote:
                            </h6>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              name="search_metrial"
                              className="custom-control-input"
                              id="free-shipping-1"
                              style={{ fontSize: 12 }}
                              onChange={() => {
                                this.setState({ requestForQuote: true });
                              }}
                            />
                            <label
                              class="custom-control-label __yes"
                              htmlFor="free-shipping-1"
                              style={{
                                fontSize: 14,
                                color: "#333",
                                fontWeight: "600",
                                marginTop: "8%",
                              }}
                            >
                              Yes, please
                            </label>
                          </div>
                          <span
                            class="custom-control-label custom-control-label1 custom-control-label-mobile"
                            style={{
                              fontSize: 12,
                              color: "#333",
                              fontWeight: "600",
                              marginTop: "1.8rem",
                              paddingLeft: "4%",
                            }}
                          >
                            ||
                          </span>
                          <div
                            className="custom-control custom-radio"
                            style={{ marginLeft: "2%" }}
                          >
                            <input
                              type="radio"
                              name="search_metrial"
                              className="custom-control-input"
                              id="free-shipping-2"
                              style={{ fontSize: 14 }}
                              onChange={() => {
                                this.setState({ requestForQuote: false });
                              }}
                            />
                            <label
                              class="custom-control-label __yes"
                              htmlFor="free-shipping-2"
                              style={{
                                fontSize: 14,
                                color: "#333",
                                fontWeight: "600",
                                marginTop: "8%",
                              }}
                            >
                              No, thanks
                            </label>
                          </div>{" "}
                        </div>
                      </div>
                      <div className="col-md-12" style={{ marginTop: "2%" }}>
                        <div className="form-group form-check">
                          <input
                            style={{ marginTop: "0.6rem" }}
                            name="check"
                            type="checkbox"
                            className="form-check-input"
                            id="check"
                            required=""
                            onChange={(e) => this.termsandconditions(e)}
                          />
                          <label
                            className="custome_lable form-check-label"
                            htmlFor="check"
                            style={{
                              fontSize: 12,
                              marginLeft: "1%",
                              fontSize: "inherit",
                              color: "#333",
                            }}
                          >
                            <span style={{ color: "red" }}>*</span> I accept the
                            &nbsp;
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                            >
                              Terms & Conditions
                            </Link>
                            &nbsp; and &nbsp;
                            <Link
                              to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}
                            >
                              &nbsp; Privacy policy
                            </Link>
                          </label>
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled={!this.state.checked}
                        onClick={this.submit}
                        className="btn btn-outline-primary-2 btn-minwidth-sm btn-round"
                      >
                        <span>SUBMIT</span>
                        <i className="icon-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
