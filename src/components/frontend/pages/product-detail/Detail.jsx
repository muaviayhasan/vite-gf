import React, { Component, Fragment } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Slider from "./Slider";
import { Card, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import parse from 'html-react-parser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Skeleton from "react-loading-skeleton";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer: "",
      brand: "",
      color: "",
      productName: "",
      data: {},
      thickness: "",
      finish: "",
      video: "",
      redirect: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    let brand = this.props.match.params.brand;
    let manufacturer = this.props.match.params.manufacturer;
    let color = this.props.match.params.color;
    let productName = this.props.match.params.productName;
    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/show/${manufacturer}/${brand}/${color}/${productName}`,
      method: "get",
      data: null,
    });

    let images = resp.data.images.map(function (item) {
      return {
        path: `${import.meta.env.VITE_API_URL}/${item.image_path}`,
        caption: item.image_caption,
      };
    });

    let getVideo = resp.data.sku.video;
    let video = [];
    if (getVideo) {
      getVideo = getVideo.split("v=")[1];
      if (getVideo) {
        let ampersandPosition = getVideo.indexOf("&");
        if (ampersandPosition != -1) {
          video = getVideo.substring(0, ampersandPosition);
        }
      }
    }

    // function removeDuplicates(originalArray, prop) {
    //   var newArray = [];
    //   var lookupObject = {};

    //   for (var i in originalArray) {
    //     lookupObject[originalArray[i][prop]] = originalArray[i];
    //   }

    //   for (i in lookupObject) {
    //     newArray.push(lookupObject[i]);
    //   }
    //   return newArray;
    // }

    // const filtered = removeDuplicates(resp.data.finishes, "id");

    this.setState(
      {
        data: resp.data,
        thickness: null,
        manufacturer: manufacturer,
        brand: brand,
        color: color,
        productName: productName,
        images: images,
        video: getVideo,
        loading: false,
        blockSize: 50,
        finishes: null,
        // finishes: filtered,
        finishes: resp.data.finishes,
      },
      () => {
        console.log("video: ", getVideo);
      }
    );

    return true;
  }

  getFinishes() {
    let finishes = this.state.data.finishes;

    let distinctFinishes = finishes.filter((value, index, self) => {
      let i = self.findIndex((item) => {
        return item.name === value.name;
      });

      return i === index;
    });

    let str = "";
    for (let i in distinctFinishes) {
      str += distinctFinishes[i].name;
      if (i < distinctFinishes.length - 1) str += ",";
    }

    return str;
  }

  getThicknesses() {
    let thicknesses = this.state.data.thicknesses;
    let distinctthicknesses = thicknesses.filter((value, index, self) => {
      let i = self.findIndex((item) => {
        return item.name === value.name;
      });

      return i === index;
    });

    let str = "";
    for (let i in distinctthicknesses) {
      str += distinctthicknesses[i].name;
      if (i < distinctthicknesses.length - 1) str += ",";
    }

    return str;
  }

  getApplications() {
    let applications = this.state.data.applications;
    let distinctapplications = applications.filter((value, index, self) => {
      let i = self.findIndex((item) => {
        return item.name === value.name;
      });

      return i === index;
    });

    let str = "";
    for (let i in distinctapplications) {
      str += distinctapplications[i].name;
      if (i < distinctapplications.length - 1) str += ",";
    }

    return str;
  }

  getEffects() {
    let effects = this.state.data.effects;
    let distincteffects = effects.filter((value, index, self) => {
      let i = self.findIndex((item) => {
        return item.name === value.name;
      });

      return i === index;
    });

    let str = "";
    for (let i in distincteffects) {
      str += distincteffects[i].name;
      if (i < distincteffects.length - 1) str += ",";
    }

    return str;
  }

  getPriceRange(list, key) {
    let values = 0;
    let html = "<font class='text-danger'>£</font>";
    if (list) {
      for (var i in list) {
        if (list[i][key] > values) {
          values = list[i][key];
        }
      }
      for (var i = 1; i < 6; i++) {
        if (values > this.state.blockSize * i) {
          html += "<font class='text-danger'>£</font>";
        } else {
          html += "<font>£</font>";
        }
      }
    }
    return html;
  }

  setThickness = (event) => {
    console.log(event.target.value);
    this.setState(
      {
        thickness: parseInt(event.target.value),
      },
      () => {
        setTimeout(() => {
          console.log("here");
          this.setFinish(event);
        }, 1000);
      }
    );
  };

  setFinish = (event) => {
    let val = document.getElementById("finish").value;
    console.log(val);
    if (val) {
      this.setState({
        finish: parseInt(val),
      });
    } else {
      this.setState({
        finish: "",
      });
    }
  };

  startQuote = (event) => {
    let products = localStorage.getItem("sku");
    if (!(this.state.thickness != "" && this.state.finish != "")) {
      toast.error(`Please select atlest 1 finish`);
      return false;
    }

    var product = {
      product_id: this.state.data.sku.id,
      thickness_id: this.state.thickness,
      finish_id: this.state.finish,
    };

    if (products) {
      products = JSON.parse(products);

      let index = products.findIndex(function (item) {
        return (
          item.thickness_id == product.thickness_id &&
          item.product_id == product.product_id &&
          item.finish_id == product.finish_id
        );
      });
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
        products.push(product);
        localStorage.setItem("sku", JSON.stringify(products));
      }
    } else {
      products = [];
      products.push(product);
      localStorage.setItem("sku", JSON.stringify(products));
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
    }

    this.setState({
      redirect: true,
    });
  };

  addToWatchList = (event) => {
    let products = localStorage.getItem("sku");
    if (!(this.state.thickness != "" && this.state.finish != "")) {
      toast.error(`Please select atlest 1 finish`);
      return false;
    }

    var product = {
      product_id: this.state.data.sku.id,
      thickness_id: this.state.thickness,
      finish_id: this.state.finish,
    };

    if (products) {
      products = JSON.parse(products);
      if (products.length >= 5) {
        toast.error(`you have reached the maximum limit`);
        return false;
      }
      let index = products.findIndex(function (item) {
        return (
          item.thickness_id == product.thickness_id &&
          item.product_id == product.product_id &&
          item.finish_id == product.finish_id
        );
      });
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

        products.push(product);
        localStorage.setItem("sku", JSON.stringify(products));
      }
      if (index !== -1) {
        toast.error(`Item already added`);
      }
    } else {
      products = [];
      products.push(product);
      localStorage.setItem("sku", JSON.stringify(products));
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
    }
  };

  render() {
    const obj = this;
    if (obj.state.redirect === true) {
      return (
        <Navigate to="/get-a-quote" replace={false} />
      );
    }

    if (obj.state.loading) {
      return (
        <div>
          <section className=" contact-page section-b-space">
            <div className="container">
              <div className="row section-b-space">
                <div
                  className="col-sm-12"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div
                    style={{
                      display: "grid",
                      // marginLeft: "15%",
                      marginTop: "3%",
                    }}
                  >
                    <Skeleton circle={false} height={250} width={700} />
                    <Skeleton circle={false} height={30} width={150} />
                    <Skeleton circle={false} height={30} width={150} />
                    <Skeleton
                      circle={false}
                      height={30}
                      width={70}
                    // style={{ marginLeft: "54%" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "grid",
                      // marginLeft: "15%",
                      marginTop: "3%",
                    }}
                  >
                    <Skeleton circle={false} height={250} width={200} />
                    <Skeleton circle={false} height={30} width={150} />
                    <Skeleton circle={false} height={30} width={150} />
                    <Skeleton
                      circle={false}
                      height={30}
                      width={70}
                    // style={{ marginLeft: "54%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
    return (
      <div>
        <section className=" contact-page section-b-space">
          <div className="container section-b-space">
            <div className="row col-md-12">
              <div className="col-lg-7 col-md-7 col-sm-12 pl-0">
                <Slider images={obj.state.images} />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="col-md-12">
                  <div className="row mb-2">
                    <div className="col-12 mb-2 text-align-middle">
                      <h3>{obj.state.data.sku.name}</h3>
                    </div>
                    <div
                      className="col-4 form-group-sm"
                      style={{ paddingRight: "0px" }}
                    >
                      <select
                        onChange={(e) => {
                          obj.setThickness(e);
                        }}
                        className="form-control"
                        style={{ padding: "1px", maxHeight: " 29px" }}
                      >
                        <option value="">Select thickness</option>
                        {obj.state.data.thicknesses.map(function (
                          thickness,
                          index
                        ) {
                          return (
                            <option value={thickness.id} key={index}>
                              {thickness.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div
                      className="col-4 form-group-sm"
                      style={{ paddingLeft: "4px" }}
                    >
                      <select
                        className="form-control"
                        id="finish"
                        onChange={obj.setFinish}
                        style={{ padding: "1px", maxHeight: " 29px" }}
                      >
                        {obj.state.thickness ? (
                          <option value="">Select finish</option>
                        ) : (
                          <option value="">Select thickness first</option>
                        )}

                        {obj.state.finishes &&
                          obj.state.finishes.length > 0 &&
                          obj.state.finishes.map(function (finish, index) {
                            if (finish.thickness_id === obj.state.thickness) {
                              console.log(obj.state.finishes);
                              return (
                                <option value={finish.id} key={index}>
                                  {finish.name}
                                </option>
                              );
                            }
                          })}
                      </select>
                    </div>
                    <div className="col-12 align-self-center">
                      <div
                        className="row"
                        style={{ "margin-top": "1%", "margin-bottom": "2%" }}
                      >
                        <div className="col-4">
                          <button
                            className="btn btn-sm btn-dark"
                            onClick={obj.addToWatchList}
                            style={{
                              "font-size": "10px",
                              padding: "2px",
                              paddingTop: 5,
                            }}
                          >
                            Shortlist for Quote
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            className="btn btn-sm btn-warning"
                            onClick={obj.startQuote}
                            style={{
                              "font-size": "10px",
                              padding: "2px",
                              paddingTop: 5,
                            }}
                          >
                            Start Online Quote
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            className="btn btn-sm btn-success"
                            style={{
                              "font-size": "10px",
                              padding: "2px",
                              paddingTop: 5,
                              width: "100%",
                            }}
                            onClick={() => {
                              localStorage.setItem(
                                "enquireProduct",
                                window.location.href
                              );
                              this.props.history.push(`/enquire`);
                            }}
                          >
                            Enquire now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="border">
                    <div
                      className="bg-dark text-white"
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        padding: "4px",
                        paddingLeft: "2%",
                      }}
                    >
                      Facts Sheet
                    </div>
                    <div
                      className="row"
                      style={{ margin: " 0px", fontSize: "13px" }}
                    >
                      <div
                        className="col-4 border font-weight-bold ft-10 pl-3 table-border-left-bottom-none"
                        style={{ fontSize: "12px" }}
                      >
                        Price band
                      </div>
                      <div
                        className="col-8 border ft-10 table-border-right-left-bottom-none"
                        style={{ fontSize: "12px" }}
                      >
                        {" "}
                        {parse(
                          obj.getPriceRange(obj.state.data.finishes, "price")
                        )}
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ margin: " 0px", fontSize: "12px" }}
                    >
                      <div
                        className="col-4 border font-weight-bold ft-10 pl-3 pr-0 table-border-left-bottom-none"
                        style={{ fontSize: "12px" }}
                      >
                        Manufacturer's Warranty
                      </div>
                      <div
                        className="col-8 border ft-10 table-border-right-left-bottom-none"
                        style={{ fontSize: "12px" }}
                      >
                        {obj.state.data.sku.warranty}
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ margin: " 0px", fontSize: "13px" }}
                    >
                      <div
                        className="col-4 border font-weight-bold ft-10 pl-3 table-border-left-bottom-none"
                        style={{ fontSize: "12px" }}
                      >
                        Slab sizes
                      </div>
                      <div
                        className="col-8 border ft-10 table-border-right-left-bottom-none"
                        style={{ marginLeft: -2 }}
                      >
                        <div
                          className="row col-12 ml-1 ft-10 p-0"
                          style={{ fontSize: "12px" }}
                        >
                          {obj.state.data.slabSizes.map(function (item, index) {
                            return (
                              <Fragment>
                                <span key={index}>{item.name}</span>
                                {obj.state.data.slabSizes.length > 1 &&
                                  index + 1 !==
                                  obj.state.data.slabSizes.length &&
                                  " ,  "}
                              </Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ margin: " 0px" }}>
                      <div
                        className="col-4 border font-weight-bold ft-10 pl-3 table-border-left-bottom-none"
                        style={{ fontSize: "12px" }}
                      >
                        Tile sizes
                      </div>
                      <div
                        className="col-8 border ft-10 table-border-right-left-bottom-none"
                        style={{ marginLeft: -2 }}
                      >
                        {" "}
                        <div
                          className="row col-12 ml-1 ft-10 p-0"
                          style={{ fontSize: "12px" }}
                        >
                          {obj.state.data.tileSizes.map(function (item, index) {
                            return (
                              <Fragment>
                                <span key={index}>{item.name}</span>
                                {obj.state.data.tileSizes.length > 1 &&
                                  index + 1 !==
                                  obj.state.data.tileSizes.length &&
                                  " ,  "}
                              </Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                    <div className="col-5">Price band: ££££££</div>
                    <div className="col-7" style={{ fontSize: ".8rem" }}>
                      Manufacturer's Warranty: {obj.state.data.sku.warranty}
                    </div>
                  </div> */}
                    {/* <div className="row col-12 mt-2">Slab sizes: </div> */}

                    {/* 
                  <div className="row col-12 mt-2">Tile sizes: </div>
                  {obj.state.data.tileSizes.map(function(item, index) {
                    return (
                      <div className="row col-12 ml-1" key={index}>
                        {item.name}
                      </div>
                    );
                  })} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            {parse(obj.state.data.sku.description)}
            <br />
            <br />
          </div>
          <div
            className="container section-b-space"
            style={{ "padding-top": "5px" }}
          >
            <div className="mt-1">
              <Tabs id="uncontrolled-tab-example">
                <Tab
                  eventKey="product_data"
                  title="Product Data"
                  style={{ fontSize: 14 }}
                >
                  <div className="col-10 mb-3">
                    <Card>
                      <Card.Body
                        className="pt-1 "
                        style={{
                          padding: "15px",
                          "padding-top": "0px",
                          paddingBottom: "0px",
                        }}
                      >
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Type
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {obj.state.data.materialType}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Color
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {obj.state.color}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Price Band
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {parse(
                              obj.getPriceRange(
                                obj.state.data.finishes,
                                "price"
                              )
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Thicknesses
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {obj.getThicknesses()}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Finishes
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {obj.getFinishes()}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Effect
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {obj.getEffects()}
                          </div>
                        </div>

                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Brand
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {obj.state.brand}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Manufacturer
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {obj.state.manufacturer}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Manufacturer's Warranty
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10 align-center"
                            style={{ fontSize: 13 }}
                          >
                            {`${obj.state.data.sku.warranty} years`}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                            style={{ fontSize: 13 }}
                          >
                            Application Areas
                          </div>
                          <div
                            className="col-7 border table-border-right-left-bottom-none ft-10"
                            style={{ fontSize: 13 }}
                          >
                            {obj.getApplications()}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Tab>
                <Tab
                  eventKey="additional_information"
                  title="Additional Information"
                >
                  <div className="col-6 mb-3">
                    <Card>
                      <Card.Body className="vh-25">
                        {obj.state.data.sku.additional_info !== "<p>null</p>" &&
                          obj.state.data.sku.additional_info !== null
                          ? parse(obj.state.data.sku.additional_info)
                          : "No Additional Information"}
                      </Card.Body>
                    </Card>
                  </div>
                </Tab>
                <Tab
                  eventKey="technical_information"
                  title="Technical Information"
                >
                  <div className="col-6 mb-3">
                    <Card>
                      <Card.Body className="vh-25">
                        {obj.state.data.sku.technical_info !== "<p>null</p>" &&
                          obj.state.data.sku.technical_info !== null
                          ? parse(obj.state.data.sku.technical_info)
                          : "No Technical Information"}
                      </Card.Body>
                    </Card>
                  </div>
                </Tab>
                <Tab eventKey="video" title="Video">
                  <div className="col-6 mb-3">
                    <Card>
                      <Card.Body className="vh-25">
                        <div className="embed-responsive embed-responsive-16by9">
                          {obj.state.data.sku.video !== "<p>null</p>" &&
                            obj.state.video !== null ? (
                            <iframe
                              id="video"
                              width="654"
                              height="300"
                              src={`//www.youtube.com/embed/${obj.state.video}?rel=0`}
                              frameborder="0"
                              allowfullscreen
                            ></iframe>
                          ) : (
                            "No Video"
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Tab>
              </Tabs>
            </div>
            {/*             
            <Row>
              <Col>
                <Card>
                  <Card.Title className="bg-dark text-white px-2">
                    Additional Information
                  </Card.Title>
                  <Card.Body className="vh-25">
                    {parse(obj.state.data.sku.additional_info)}
                  </Card.Body>
                </Card>
              </Col>
              <div className="col-6 mb-3">
                <Card>
                  <Card.Title className="bg-dark text-white px-2">
                    Technical Information
                  </Card.Title>
                  <Card.Body className="vh-25">
                    {parse(obj.state.data.sku.technical_info)}
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6 mb-3">
                <Card>
                  <Card.Title className="bg-dark text-white px-2">
                    Video
                  </Card.Title>
                  <Card.Body className="vh-25">
                    <div class="embed-responsive embed-responsive-16by9">
                      {parse(obj.state.data.sku.video)}
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6 mb-3">
                <Card>
                  <Card.Title className="bg-dark text-white px-2">
                    Product Data
                  </Card.Title>
                  <Card.Body className="pt-1">
                    <div className="row">
                      <div className="col-4 border font-weight-bold">Type</div>
                      <div className="col-8 border">
                        {obj.state.data.materialType}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">Color</div>
                      <div className="col-8 border">{obj.state.color}</div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Price Band
                      </div>
                      <div className="col-8 border">££££££</div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Thicknesses
                      </div>
                      <div className="col-8 border">{obj.getThicknesses()}</div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Finishes
                      </div>
                      <div className="col-8 border">{obj.getFinishes()}</div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Effect
                      </div>
                      <div className="col-8 border">{obj.getEffects()}</div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Suitable for
                      </div>
                      <div className="col-8 border">{obj.state.color}</div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">Brand</div>
                      <div className="col-8 border">{obj.state.brand}</div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Manufacturer
                      </div>
                      <div className="col-8 border">
                        {obj.state.manufacturer}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Manufacturer's Warranty
                      </div>
                      <div className="col-8 border align-center">
                        {`${obj.state.data.sku.warranty} years`}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Application
                      </div>
                      <div className="col-8 border">
                        {obj.getApplications()}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 border font-weight-bold">
                        Country
                      </div>
                      <div className="col-8 border">{obj.state.color}</div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Row> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Detail;
