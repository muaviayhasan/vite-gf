import React, { Component, Fragment } from "react";
import axios from "axios";
import InnerOverlay from "../../common/overlay/inner-overlay";
import Breadcrumb from "../../common/breadcrumb";
import ProductDetailTab from "./common/product-detail-tab";
import { Magnifier } from "react-image-magnifiers";
import { Link, useParams } from "react-router-dom";
import SingleProductComponent from "./common/base";
import ProductDetailOne from "./common/detail-one";
import "./product_style.css";
import parse from 'html-react-parser';
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Helmet } from "react-helmet";

import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  PinterestShareButton,
} from "react-share";

class ProductDetailClass extends SingleProductComponent {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer: "",
      brand: "",
      color: "",
      productName: "",
      data: {},
      images: [],
      thickness: "",
      finish: "",
      video: "",
      color_shade: "",
      redirect: false,
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    console.log("PROPS =>>>", this.props);
    let brand = this.props.brand
      .replace(/\-/g, " ")
      .replace("and", "&")
      .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
    let manufacturer = this.props.manufacturer
      .replace(/\-/g, " ")
      .replace("and", "&")
      .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
    let color = this.props.color
      .replace(/\-/g, " ")
      .replace("and", "&")
      .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
    // let productName = this.props.productName
    //   .replace(/\-/g, " ")
    //   .replace("and", "&")
    //   .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
    let id = this.props.id;
    console.log(
      `${import.meta.env.VITE_API_URL}/sku/show/${manufacturer}/${brand}/${color}/${id}`
    );
    // console.log("ID =>>>>", id);
    // const headers = {
    //   "sku-id-header": id,
    // };

    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/show/${manufacturer}/${brand}/${color}/${id}`,
      method: "get",
      // headers: headers,
      data: null,
    });

    const getColour = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/getSku/${resp.data.sku.id}`,
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

    this.setState({
      data: resp.data,
      thickness: null,
      manufacturer: manufacturer,
      brand: brand,
      color: color,
      productName: resp.data.sku.name,
      video: getVideo,
      loading: false,
      blockSize: 50,
      finishes: null,
      // finishes: filtered,
      finishes: resp.data.finishes,
      color_shade: getColour.data[0].color_shade,
    });

    if (resp.data.images.length > 0) {
      this.setState({
        images: images,
      });
    } else {
      this.setState({
        images: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/default-placeholder.jpg`,
            caption: "default GNF image",
          },
        ],
      });
    }

    return true;
  }

  setThickness = (event) => {
    this.setState(
      {
        thickness: parseInt(event.target.value),
      },
      () => {
        setTimeout(() => {
          this.setFinish(event);
        }, 1000);
      }
    );
  };

  setFinish = (event) => {
    let val = document.getElementById("finish").value;
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

  setFinishSticky = (event) => {
    let val = document.getElementById("finish-sticky").value;
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

  getPriceRange(list, key) {
    let values = 0;
    let html = "<font class='text-danger' style='font-weight: bold;'>£</font>";
    if (list) {
      for (var i in list) {
        if (list[i][key] > values) {
          values = list[i][key];
        }
      }
      for (var i = 1; i < 6; i++) {
        if (values > 50 * i) {
          html +=
            "<font class='text-danger' style='font-weight: bold;'>£</font>";
        } else {
          html += "<font style='font-weight: bold;'>£</font>";
        }
      }
    }
    return html;
  }

  scrollToDescription() {
    const section = document.querySelector("#product_description");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // const middle = window.innerHeight / 1;
    // window.scrollTo(0, middle);
  }

  getThickness() {
    return (
      <Fragment>
        <div className="details-filter-row details-row-size">
          <label htmlFor="size" style={{ fontWeight: "bold" }}>
            Thickness:
          </label>
          <div className="select-custom">
            <select
              onChange={(e) => {
                this.setThickness(e);
              }}
              className="form-control"
            >
              <option value="">Select thickness</option>
              {this.state.data.thicknesses.map(function (thickness, index) {
                return (
                  <option value={thickness.id} key={index}>
                    {thickness.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </Fragment>
    );
  }

  getFinishes() {
    const obj = this;
    return (
      <Fragment>
        <div className="details-filter-row details-row-size">
          <label htmlFor="size" style={{ fontWeight: "bold" }}>
            Finish:
          </label>
          <div className="select-custom">
            <select
              className="form-control"
              id="finish"
              onChange={(e) => {
                this.setFinish(e);
              }}
            >
              {this.state.thickness ? (
                <option value="">Select finish</option>
              ) : (
                <option value="">Select thickness first</option>
              )}

              {this.state.finishes &&
                this.state.finishes.length > 0 &&
                this.state.finishes.map(function (finish, index) {
                  if (finish.thickness_id === obj.state.thickness) {
                    return (
                      <option value={finish.id} key={index}>
                        {finish.name}
                      </option>
                    );
                  }
                })}
            </select>
          </div>
        </div>
      </Fragment>
    );
  }

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

  removeDuplicates = (originalArray, prop) => {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  };

  toggleWishList() {
    console.log("Whish list data", this.state.data);
    var product = this.state.data;
    product.id = this.state.data.sku.id;
    product.name = this.state.data.sku.name;
    product.manufacturer_id = this.state.data.manufacturer_id;
    product.manufacturer = this.state.data.manufacturer.name;
    product.brand = this.state.data.brand.name;
    product.base_color = this.state.data.color.name;
    product.brand_id = this.state.data.brand.id;
    product.color_code = this.state.data.sku.color_code;
    product.images = [
      {
        path: this.state.data.images[0]
          ? this.state.data.images[0].image_path
          : `${import.meta.env.VITE_PUBLIC_URL}uploads/images/Logo-glass-fusion.png`,
      },
    ];
    product.material_type = this.state.data.materialType;
    product.material = this.state.data.materialType;
    var existing = JSON.parse(localStorage.getItem("wishlist"));
    if (existing && existing.length > 0) {
      existing.push(product);
      existing = this.removeDuplicates(existing, "id");
    } else {
      existing = [product];
    }
    localStorage.setItem("wishlist", JSON.stringify(existing));
    toast.success(
      <p style={{ marginLeft: "-10%" }}>
        Product added to{" "}
        <Link to="/wishlist" style={{ color: "black", fontWeight: "bold" }}>
          wishlist
        </Link>{" "}
        <br />
        click{" "}
        <Link to="/wishlist" style={{ color: "black", fontWeight: "bold" }}>
          here
        </Link>{" "}
        to enquire about it
      </p>,
      {
        autoClose: 6000,
      }
    );
  }

  render() {
    const obj = this;

    if (this.state.images.length === 0) {
      console.log("nothing found");
      return null;
    }

    if (obj.state.redirect === true) {
      return (
        <Navigate to="/get-a-quote" replace={false} />
      );
    }

    const colourShade = this.state.color_shade.replace(/[\s()-]+/gi, "");
    // if ( ! product ) {
    //     return (
    //         <ErrorPage />
    //     )
    // }
    // const bigImages = this.state.data.lgPictures ? this.state.data.lgPictures : this.state.data.pictures;
    // const smallImages = this.state.data.smPictures ? this.state.data.smPictures : this.state.data.pictures;

    return (
      <div className="main">
        <Helmet>
          <title>{`${this.state.data.sku.name} - Glass & Fusion`}</title>
        </Helmet>
        <br />
        <InnerOverlay />

        <div className="page-content">
          <div className="container">
            <div className="product-details-top">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-gallery product-gallery-vertical">
                    <div className="row">
                      <figure className="product-main-image" index="0">
                        <Magnifier
                          imageSrc={this.state.images[0].path}
                          imageAlt="Example"
                          largeImageSrc={this.state.images[0].path} // Optional
                          dragToMove={false}
                          mouseActivation="hover"
                          cursorStyleActive="crosshair"
                          id="product-zoom"
                        />

                        <Link
                          to="#"
                          id="btn-product-gallery"
                          className="btn-product-gallery"
                          onClick={this.openLightBox}
                        >
                          <i className="icon-arrows"></i>
                        </Link>
                      </figure>

                      <div
                        id="product-zoom-gallery"
                        className="product-image-gallery"
                      >
                        {this.state.images.map((item, index) => (
                          <Link
                            className={`product-gallery-item active`}
                            to="#"
                            data-image={item.path}
                            data-zoom-image={item.path}
                            key={this.state.data.id + "-" + index}
                          >
                            <img src={item.path} alt="product back" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={`product-details`}>
                    <h1 className="product-title">
                      {this.state.data.sku.name}
                    </h1>

                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: this.state.data.ratings * 20 + "%" }}
                        ></div>
                      </div>
                      ( {this.state.data.reviews} Reviews )
                    </div>
                    <div className="product-content">
                      <span className="" style={{ fontWeight: "bold" }}>
                        Price Band:{" "}
                      </span>
                      {parse(
                        this.getPriceRange(this.state.data.finishes, "price")
                      )}
                      <br />
                      <div>
                        {this.state.data.sku.description
                          ? parse(
                            this.state.data.sku.description.substring(
                              0,
                              135
                            ) + "..."
                          )
                          : ""}
                        <button
                          onClick={() => {
                            this.scrollToDescription();
                          }}
                          className="readMoreButton"
                        >
                          Read More
                        </button>
                      </div>
                    </div>

                    <ReactTooltip />

                    <div className="details-filter-row details-row-size">
                      <label style={{ fontWeight: "bold" }}>Colour:</label>
                      <div
                        className="product-nav product-nav-dots"
                        data-tip={"Main Colour: " + this.state.data.color.name}
                      >
                        <span
                          className="active"
                          style={{ background: this.state.data.color.name }}
                        ></span>
                      </div>
                      &nbsp;&nbsp;&nbsp;
                      <div
                        className="product-nav product-nav-dots"
                        data-tip={"Colour: " + this.state.data.sku.color_code}
                      >
                        <span
                          to="#"
                          className="active"
                          style={{ background: this.state.data.sku.color_code }}
                        ></span>
                      </div>
                    </div>

                    {this.getThickness()}
                    {this.getFinishes()}

                    <div className="product-details-action">
                      <div className="row">
                        <div
                          className="col col-md-12"
                          style={{ display: "flex" }}
                        >
                          <div className="col col-md-5">
                            <button
                              className="btn-product btn btn-outline-primary-2 btn-round btn-more _fixedWidth"
                              onClick={this.addToWatchList}
                              style={{ textTransform: "none" }}
                              id="custom_pound_icon1"
                            >
                              <img
                                src="/assets/images/gnf/cart_new_icon_black.png"
                                style={{ height: 23, marginRight: "6%" }}
                                id="brown_img1"
                              ></img>
                              <img
                                src="/assets/images/gnf/cart_new_icon_white.png"
                                style={{
                                  height: 23,
                                  marginRight: "6%",
                                  display: "none",
                                }}
                                id="white_img1"
                              ></img>
                              <span>Shortlist for quote</span>
                            </button>
                          </div>
                          <div className="col col-md-5">
                            <button
                              className="btn-product pl-0 pr-0 btn btn-outline-primary-2 btn-round btn-more _fixedWidth"
                              title="Wishlist"
                              id="custom_pound_icon"
                              style={{
                                // minWidth: "127px",
                                marginLeft: "1%",
                                textTransform: "none",
                                borderLeft: "1px solid",
                              }}
                              onClick={this.startQuote}
                            >
                              <img
                                src="/assets/images/gnf/cart_new_icon_black.png"
                                style={{ height: 23, marginRight: "6%" }}
                                id="brown_img"
                              ></img>
                              <img
                                src="/assets/images/gnf/cart_new_icon_white.png"
                                style={{
                                  height: 23,
                                  marginRight: "6%",
                                  display: "none",
                                }}
                                id="white_img"
                              ></img>
                              <span>Start online quote</span>
                            </button>
                          </div>
                        </div>

                        <div
                          className="col col-md-12"
                          style={{ display: "flex" }}
                        >
                          <div className="col col-md-5">
                            <button
                              className="btn-product btn-compare pr-0 btn btn-outline-primary-2 btn-round btn-more _fixedWidth"
                              title="Compare"
                              style={{
                                // minWidth: "157px",
                                textTransform: "none",
                                borderLeft: "1px solid",
                              }}
                              onClick={() => {
                                localStorage.setItem(
                                  "enquireProduct",
                                  window.location.href
                                );
                                this.props.history.push(`/enquire`);
                              }}
                            >
                              <span>Enquire now</span>
                            </button>
                          </div>

                          <div className="col col-md-5">
                            <button
                              className="btn-product btn-wishlist pr-0 btn btn-outline-primary-2 btn-round btn-more _fixedWidth"
                              title="Compare"
                              style={{
                                // minWidth: "157px",
                                textTransform: "none",
                                borderLeft: "1px solid",
                              }}
                              onClick={() => this.toggleWishList()}
                            >
                              <i className="fa fa-heart"></i>
                              <span className="title-font">
                                Add to wishList
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product-details-footer">
                      <div className="product-cat">
                        <div
                          className="row"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingLeft: 7,
                          }}
                        >
                          <div>
                            <span className="" style={{ fontWeight: "bold" }}>
                              {this.state.data.sku.material_id == 1
                                ? "Material: "
                                : "Type: "}{" "}
                              &nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="mr-0">
                              {this.state.data.materialType}
                            </span>
                          </div>
                          <div>
                            {this.state.data.tileSizes.map(function (
                              item,
                              index
                            ) {
                              return (
                                <Fragment key={index}>
                                  <span
                                    className="mr-0"
                                    style={{ display: "inline-block" }}
                                  >
                                    {item.name}
                                  </span>
                                  {obj.state.data.tileSizes.length > 1 &&
                                    index + 1 !==
                                    obj.state.data.tileSizes.length && (
                                      <Fragment>,&nbsp;&nbsp;&nbsp;</Fragment>
                                    )}
                                </Fragment>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      {/* <div className="product-cat">
                        <span>Category: </span>
                        <span className="mr-0">{this.state.data.materialType}</span>
                    </div> */}

                      <div className="social-icons social-icons-sm">
                        <span className="social-label">
                          <b>Share:</b>
                        </span>

                        <a
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <FacebookShareButton
                            url={`${window.location.href}`}
                            quote={this.props.productName}
                            className="social-icon"
                          >
                            <i className="icon-facebook-f"></i>
                          </FacebookShareButton>
                        </a>

                        <a
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <FacebookMessengerShareButton
                            url={`${window.location.href}`}
                            media={`${String(
                              window.location
                            )}/assets/images/logo.png`}
                            quote={this.props.productName}
                            className="social-icon"
                            appId="521270401588372"
                          >
                            <i className="icon-facebook-messenger"></i>
                          </FacebookMessengerShareButton>
                        </a>

                        <a
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <WhatsappShareButton
                            url={`${window.location.href}`}
                            media={`${String(
                              window.location
                            )}/assets/images/logo.png`}
                            quote={this.props.productName}
                            className="social-icon"
                          >
                            <i className="icon-whatsapp"></i>
                          </WhatsappShareButton>
                        </a>

                        <a
                          className="social-icon"
                          title="Twitter"
                          target="_blank"
                        >
                          <TwitterShareButton
                            url={`${window.location.href}`}
                            media={`${String(
                              window.location
                            )}/assets/images/logo.png`}
                            quote={this.props.productName}
                            className="social-icon"
                          >
                            <i className="icon-twitter"></i>
                          </TwitterShareButton>
                        </a>

                        <a
                          className="social-icon"
                          title="Email"
                          target="_blank"
                        >
                          <EmailShareButton
                            url={`${window.location.href}`}
                            media={`${String(
                              window.location
                            )}/assets/images/logo.png`}
                            quote={this.props.productName}
                            className="social-icon"
                          >
                            <i className="icon-envelope"></i>
                          </EmailShareButton>
                        </a>

                        <a
                          className="social-icon"
                          title="Pinterest"
                          target="_blank"
                        >
                          <PinterestShareButton
                            url={String(window.location)}
                            media={`${String(
                              window.location
                            )}/assets/images/logo.png`}
                            quote={this.props.productName}
                            className="social-icon"
                          >
                            <i className="icon-pinterest"></i>
                          </PinterestShareButton>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductDetailTab
              product={this.state.data}
              video={this.state.video}
              brand={this.state.brand}
              manufacturer={this.state.manufacturer}
              color={this.state.color}
            ></ProductDetailTab>

            {/* <h2 className="title text-center mb-4">You May Also Like</h2>

                        { this.relatedProducts() } */}
          </div>
        </div>

        <div className="sticky-bar" style={{ paddingTop: "0rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1 className="product-title __customSize">
                  {this.state.data.sku.name}
                </h1>
              </div>

              <div className="col-6 justify-content-end">
                <div className="product-details-action">
                  <div
                    className="details-filter-row details-row-size"
                    style={{ marginTop: "-1.5%" }}
                  >
                    <label htmlFor="size" style={{ fontWeight: "bold" }}>
                      Price Band:
                    </label>
                    {parse(
                      this.getPriceRange(this.state.data.finishes, "price")
                    )}
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  {this.getThickness()}
                  <div className="details-filter-row details-row-size">
                    <label htmlFor="size" style={{ fontWeight: "bold" }}>
                      Finish:
                    </label>
                    <div className="select-custom">
                      <select
                        className="form-control"
                        id="finish-sticky"
                        onChange={(e) => {
                          this.setFinishSticky(e);
                        }}
                      >
                        {this.state.thickness ? (
                          <option value="">Select finish</option>
                        ) : (
                          <option value="">Select thickness first</option>
                        )}

                        {this.state.finishes &&
                          this.state.finishes.length > 0 &&
                          this.state.finishes.map(function (finish, index) {
                            if (finish.thickness_id === obj.state.thickness) {
                              return (
                                <option value={finish.id} key={index}>
                                  {finish.name}
                                </option>
                              );
                            }
                          })}
                      </select>
                    </div>
                  </div>
                  <button
                    className="btn-product btn btn-outline-primary-2 btn-round btn-more"
                    id="custom_pound_icon2"
                    onClick={this.addToWatchList}
                  >
                    {/* <img
                      src="/assets/images/gnf/cart_icon_black.png"
                      style={{
                        height: 23,
                        width: 25,
                        marginRight: "6%",
                        marginLeft: "-7%",
                        marginTop: "-2%",
                      }}
                    ></img> */}

                    <img
                      src="/assets/images/gnf/cart_new_icon_black.png"
                      style={{
                        height: 23,
                        width: 25,
                        marginRight: "6%",
                        marginLeft: "-7%",
                        marginTop: "-2%",
                      }}
                      id="brown_img2"
                    ></img>
                    <img
                      src="/assets/images/gnf/cart_new_icon_white.png"
                      style={{
                        height: 23,
                        width: 25,
                        marginRight: "6%",
                        marginLeft: "-7%",
                        marginTop: "-2%",
                        display: "none",
                      }}
                      id="white_img2"
                    ></img>

                    <span style={{ display: "flex", textTransform: "initial" }}>
                      {" "}
                      Shortlist for quote
                    </span>
                  </button>
                  <button
                    className="btn-product-icon btn-wishlist"
                    data-tip={"Add to wishlist"}
                    style={{
                      paddingLeft: "1%",
                      paddingRight: "1%",
                      marginLeft: "1%",
                      fontSize: 24,
                    }}
                    onClick={() => this.toggleWishList()}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.lightbox()}
      </div>
    );
  }
}

// Wrapper component to provide useParams to class component
function ProductDetail() {
  const { manufacturer, brand, color, id } = useParams();
  return <ProductDetailClass manufacturer={manufacturer} brand={brand} color={color} id={id} productName={id} />;
}

export default ProductDetail;
