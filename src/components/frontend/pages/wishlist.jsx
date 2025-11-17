import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import parse from "html-react-parser";
import withNavigate from "../../../utils/withNavigate";

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("wishlist")) || [],
      loading: false,
      validForm: false,
      checked: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      requestForQuote: null,
      isRedirect: false,
    };
  }

  componentDidMount() {
    if (!this.state.data.length) {
      this.props.navigate("/empty-wishlist", { replace: true });
    }
  }

  termsandconditions = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  _handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  formSubmitHandler = async (payload) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/enquire-products`,
        payload
      );
      toast.success(res.data);
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
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    }
  };

  submit = () => {
    const { checked, name, email, phone, message, requestForQuote } = this.state;
    if (checked && name && email && phone && message && requestForQuote !== null) {
      const data = this.state.data.map((item) => ({
        pUrl: `${window.location.host}/product-detail/${item.manufacturer}/${item.brand}/${item.base_color}/${item.name}`,
        pName: item.name,
        pMaterial: item.material,
        pImage: item?.images?.length
          ? `${import.meta.env.VITE_API_URL}/${item.images[0].path}`
          : null,
        pBrand: item.brand,
      }));
      const payload = {
        data,
        name,
        email,
        phone,
        message,
        requestForQuote: requestForQuote ? "Yes" : "No",
      };
      this.formSubmitHandler(payload);
      this.setState({ isRedirect: true });
    } else {
      this.setState({ validForm: false });
      toast.error("Please fill all the fields.");
    }
  };

  remove = (i) => {
    const newData = [...this.state.data];
    newData.splice(i, 1);
    this.setState({ data: newData }, () => {
      localStorage.setItem("wishlist", JSON.stringify(newData));
      if (this.state.data.length === 0) {
        this.props.navigate("/empty-wishlist", { replace: true });
      }
    });
  };

  getPriceRange = (list, key) => {
    let maxValue = 0;
    list?.forEach((item) => {
      if (item[key] > maxValue) maxValue = item[key];
    });
    let priceHtml = "<font style='color: #cc9966;'>£</font>";
    for (let i = 1; i <= 5; i++) {
      priceHtml += maxValue > 50 * i ? "<font style='color: #cc9966;'>£</font>" : "<font style='color: silver'>£</font>";
    }
    return priceHtml;
  };

  render() {
    if (this.state.isRedirect) {
      return <Navigate to="/thanks-for-wishlist" replace />;
    }

    const { data, name, email, phone, message, checked, loading } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "4%" }}>
            <table className="table table-image quote_table_border">
              <thead className="header_color">
                <tr>
                  <th className="sky_th_color" scope="col" style={{ fontWeight: "bold" }}>
                    Name
                  </th>
                  <th className="sky_th_color" scope="col" style={{ fontWeight: "bold" }}>
                    Material
                  </th>
                  <th className="sky_th_color" scope="col" style={{ fontWeight: "bold" }}>
                    Image
                  </th>
                  <th className="sky_th_color" scope="col" style={{ fontWeight: "bold" }}>
                    Brand
                  </th>
                  <th className="sky_th_color" scope="col" style={{ fontWeight: "bold" }}>
                    Price
                  </th>
                  <th className="sky_th_color" scope="col" style={{ fontWeight: "bold" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/product-detail/${item.manufacturer}/${item.brand}/${item.color_code}/${item.name}`}>
                        {item.name}
                      </Link>
                    </td>
                    <td>{item.material}</td>
                    <td className="w-25">
                      <Link to={`/product-detail/${item.manufacturer}/${item.brand}/${item.color_code}/${item.name}`}>
                        <img
                          src={`${import.meta.env.VITE_API_URL}/${item?.images[0]?.path || "/path/to/fallback-image.jpg"}`}
                          className="img-fluid sku_img_thumbnails"
                          alt={item.name}
                        />
                      </Link>
                    </td>
                    <td>{item.brand}</td>
                    <td>
                      <p className="Component-paragraphs-inner" style={{ fontWeight: "bold", fontSize: 16 }}>
                        {parse(this.getPriceRange(item.finishes, "price"))}
                      </p>
                    </td>
                    <td className="remove_item_sku">
                      <button
                        className="cutome-rounded-delete-button btn btn-outline-primary-2 btn-round btn-more"
                        type="button"
                        onClick={() => this.remove(index)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-12">
            <h5 className="mb-2" style={{ fontWeight: "bold" }}>
              Using the form below, please feel free to send us your queries. You may also request a FREE quote from us
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
                              marginLeft: "1%",
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

              <div className="row">
                <div className="col-sm-12">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message *"
                    required
                    name="message"
                    value={message}
                    onChange={this._handleChange}
                  />
                </div>
              </div>

              <div className="col-md-12" style={{ display: "flex", flexDirection: "row" }}>
                <h6 className="mb-2" style={{ fontWeight: "bold", marginTop: "5%", fontSize: "inherit" }}>
                  <span style={{ color: "red" }}>*</span> Would you like us to send a Quote:
                </h6>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="requestForQuote"
                    className="custom-control-input"
                    id="quote-yes"
                    onChange={() => this.setState({ requestForQuote: true })}
                  />
                  <label htmlFor="quote-yes" style={{ fontSize: 14, color: "#333", fontWeight: "600" }}>
                    Yes, please
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="requestForQuote"
                    className="custom-control-input"
                    id="quote-no"
                    onChange={() => this.setState({ requestForQuote: false })}
                  />
                  <label htmlFor="quote-no" style={{ fontSize: 14, color: "#333", fontWeight: "600" }}>
                    No, thanks
                  </label>
                </div>
              </div>

              <div className="col-md-12" style={{ marginTop: "2%" }}>
                <div className="form-check">
                  <input
                    style={{ marginTop: "0.6rem" }}
                    name="check"
                    type="checkbox"
                    className="form-check-input"
                    id="check"
                    required
                    onChange={this.termsandconditions}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="check"
                    style={{ fontSize: 12, marginLeft: "1%" }}
                  >
                    <span style={{ color: "red" }}>*</span> I accept the{" "}
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}>
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>
                      Privacy policy
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withNavigate(Wishlist);