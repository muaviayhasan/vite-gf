import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SearchBar from "../../common/search-bar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import auth from "../../../auth/auth";
import Select from "react-select";
import axios from "axios";

class EmptyShortList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: [],
      filter_thickness: [],
      selected_product: { value: 0, label: "select product" },
      selected_thickness: { value: 0, label: "select thickness" },
      selected_finish: { value: 0, label: "select finish" },
      all_products: [],
      all_products_search: [],
      filter_finishes: [],
    };
  }

  getThickness = (e) => {
    let getProduct = this.state.all_products.filter((el) => {
      return el.id === e.value;
    });
    let thickness = [];
    if (getProduct[0].finishes) {
      getProduct[0].finishes.map((el) => {
        let checkOldThickness = thickness.findIndex((elOld) => {
          return elOld.value === el.thickness_id;
        });
        if (checkOldThickness === -1) {
          thickness.push({ value: el.thickness_id, label: el.thickness });
        }
      });
    }

    this.setState(
      {
        ...this.state,
        newProduct: getProduct,
        filter_thickness: thickness,
        selected_product: e,
        selected_thickness: { value: 0, label: "select thickness" },
        selected_finish: { value: 0, label: "select thickness first" },
      },
      () => {
        console.log(this.state.filter_thickness);
      }
    );
  };

  getFinishes = (e) => {
    this.setState({
      ...this.state,
      filter_finishes: [],
    });
    let getFinishes = this.state.newProduct[0].finishes.filter((el) => {
      return el.thickness_id == e.value;
    });
    let getFinishesObj = [];

    getFinishes.map((el) => {
      let checkOldFinishes = getFinishesObj.findIndex((elOld) => {
        return elOld.value === el.finish_id;
      });
      if (checkOldFinishes === -1) {
        getFinishesObj.push({ value: el.finish_id, label: el.finish });
      }
    });
    this.setState({
      ...this.state,
      filter_finishes: getFinishesObj,
      selected_thickness: e,
      selected_finish: { value: 0, label: "select finish" },
    });
  };

  saveFinish = (e) => {
    this.setState({
      ...this.state,
      selected_finish: e,
    });
  };

  saveNewProduct = (e) => {
    let product = [
      {
        product_id: this.state.selected_product.value,
        thickness_id: this.state.selected_thickness.value,
        finish_id: this.state.selected_finish.value,
      },
    ];

    let products = localStorage.getItem("sku");
    if (!(this.state.thickness_id != "" && this.state.finish_id != "")) {
      toast.error(`Please select atlest 1 finish`);
      return false;
    }

    if (products) {
      products = JSON.parse(products);

      if (products.length === 5) {
        toast.error(
          `You have reached maximum limit of products. You can't add new for quotation.`
        );
        return false;
      }

      let index = products.findIndex(function(item) {
        return (
          item.thickness_id == product[0].thickness_id &&
          item.product_id == product[0].product_id &&
          item.finish_id == product[0].finish_id
        );
      });
      console.log("index: ", index);
      if (index === -1) {
        toast.success(
          <p style={{ marginLeft: "-10%" }}>
            Product shortlisted for{" "}
            <Link
              to="/get-a-quote"
              style={{ color: "black", fontWeight: "bold" }}
            >
              FREE Quote
            </Link>{" "}
            <br />
            click here to{" "}
            <Link
              to="/get-a-quote"
              style={{ color: "black", fontWeight: "bold" }}
            >
              proceed
            </Link>{" "}
          </p>,
          {
            autoClose: 6000,
          }
        );
        products.push(product[0]);
        localStorage.setItem("sku", JSON.stringify(products));
        window.location.href = "/get-a-quote";
        return;
      } else {
        toast.error(`Item already shortlisted`);
        return;
      }
    }
  };

  async componentDidMount() {
    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku`,
      method: "get",
      data: null,
    });
    this.setState(
      {
        all_products: resp.data,
      },
      () => {
        if (this.state.all_products) {
          let all_products_search = this.state.all_products.map((product) => {
            return {
              value: product.id,
              label: `${product.material} - ${product.material_type} - ${product.name}`,
            };
          });
          this.setState({
            ...this.state,
            all_products_search: all_products_search,
          });
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - ${this.props.title}`}</title>
        </Helmet>
        {/*Forget Password section*/}

        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space">
              <div className="col-sm-12" style={{ "textAlign": "center" }}>
                <div>
                  <SearchBar />
                </div>

                <br />
                {auth.isAuthenticatedAdmin() ? (
                  <React.Fragment>
                    <div
                      className="col-12"
                      style={{
                        marginTop: "2%",
                        marginBottom: "3%",
                      }}
                    >
                      <div className="row" style={{ marginLeft: "-3.7%" }}>
                        <div className="container" style={{ display: "flex" }}>
                          <div className="col-md-5 col-sm-12">
                            <Select
                              value={this.state.selected_product}
                              placeholder="Search Product"
                              className="custome_select_box"
                              onChange={(e) => this.getThickness(e)}
                              options={this.state.all_products_search}
                            />
                          </div>
                          {this.state.filter_thickness.length === 0 ? (
                            ""
                          ) : (
                            <div className="col-md-3 col-sm-12">
                              <Select
                                value={this.state.selected_thickness}
                                placeholder="Select Thickness"
                                className="custome_select_box"
                                onChange={(e) => this.getFinishes(e)}
                                options={this.state.filter_thickness}
                              />
                            </div>
                          )}

                          {this.state.filter_finishes.length === 0 ? (
                            ""
                          ) : (
                            <div className="col-md-4 col-sm-12">
                              <Select
                                value={this.state.selected_finish}
                                placeholder="Select Finish"
                                className="custome_select_box"
                                onChange={(e) => this.saveFinish(e)}
                                options={this.state.filter_finishes}
                              />
                            </div>
                          )}

                          <br />
                          <button
                            type="button"
                            className="btn btc"
                            onClick={(e) => this.saveNewProduct(e)}
                          >
                            Add New Product
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  ""
                )}
                <br />

                <h4 style={{ marginTop: "5%" }}>
                  There are no items in the list "Shortlisted for Quote", please
                  use the search above to select material and colour
                </h4>
                <br />
                <br />
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/home`}
                  className="btn btn-solid"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default EmptyShortList;
