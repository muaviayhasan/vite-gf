import React, { Component, Fragment } from "react";
import axios from "axios";
import InnerOverlay from "../../common/overlay/inner-overlay";
import Breadcrumb from "../../common/breadcrumb";
import ProductDetailTab from "./common/product-detail-tab";
import { Magnifier } from "react-image-magnifiers";
import { Link, useParams, useNavigate } from "react-router-dom";
import SingleProductComponent from "./common/base";
import ProductDetailOne from "./common/detail-one";
import "./product_style.css";
import parse from "html-react-parser";
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
      blockSize: 50,
      finishes: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      const safe = (s) =>
        (s || "")
          .replace(/\-/g, " ")
          .replace(/(^\w{1})|(\s{1}\w{1})/g, (m) => m.toUpperCase())
          .replace(/\sand\s/gi, " & ");

      const manufacturer = safe(this.props.manufacturer);
      const brand = safe(this.props.brand);
      const color = safe(this.props.color);
      const id = this.props.id;

      const showUrl = `${import.meta.env.VITE_API_URL}/sku/show/${manufacturer}/${brand}/${color}/${id}`;
      const resp = await axios.get(showUrl);

      const skuId = resp?.data?.sku?.id;

      const getColour = await axios.get(
        `${import.meta.env.VITE_API_URL}/sku/getSku/${skuId}`
      );

      const images =
        Array.isArray(resp?.data?.images) && resp.data.images.length > 0
          ? resp.data.images.map((item) => ({
            path: `${import.meta.env.VITE_API_URL}/${item.image_path}`,
            caption: item.image_caption,
          }))
          : [
            {
              path: `${import.meta.env.VITE_PUBLIC_URL || ""
                }/assets/images/default-placeholder.jpg`,
              caption: "default GNF image",
            },
          ];

      let video = "";
      const rawVideo = resp?.data?.sku?.video;
      if (rawVideo && rawVideo.includes("v=")) {
        let part = rawVideo.split("v=")[1];
        if (part) {
          const amp = part.indexOf("&");
          video = amp !== -1 ? part.substring(0, amp) : part;
        }
      }

      this.setState({
        data: resp.data,
        thickness: "",
        manufacturer,
        brand,
        color,
        productName: resp?.data?.sku?.name || "",
        video,
        loading: false,
        finishes: resp?.data?.finishes || [],
        color_shade: getColour?.data?.[0]?.color_shade || "",
        images,
      });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
      toast.error("Failed to load product");
    }
  }

  setThickness = (event) => {
    const val = event.target.value ? parseInt(event.target.value, 10) : "";
    this.setState({ thickness: val }, () => {
      setTimeout(() => {
        this.setFinish(event);
      }, 300);
    });
  };

  setFinish = () => {
    const el = document.getElementById("finish");
    const val = el ? el.value : "";
    this.setState({ finish: val ? parseInt(val, 10) : "" });
  };

  setFinishSticky = () => {
    const el = document.getElementById("finish-sticky");
    const val = el ? el.value : "";
    this.setState({ finish: val ? parseInt(val, 10) : "" });
  };

  getPriceRange(list, key) {
    let values = 0;
    let html = "<font class='text-danger' style='font-weight: bold;'>£</font>";
    if (Array.isArray(list)) {
      for (const it of list) {
        if (it?.[key] > values) values = it[key];
      }
      for (let i = 1; i < 6; i++) {
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
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  getThickness() {
    const thicknesses = this.state?.data?.thicknesses || [];
    return (
      <Fragment>
        <div className="details-filter-row details-row-size">
          <label htmlFor="size" style={{ fontWeight: "bold" }}>
            Thickness:
          </label>
          <div className="select-custom">
            <select onChange={this.setThickness} className="form-control">
              <option value="">Select thickness</option>
              {thicknesses.map((th, idx) => (
                <option value={th.id} key={idx}>
                  {th.name}
                </option>
              ))}
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
            <select className="form-control" id="finish" onChange={this.setFinish}>
              {this.state.thickness ? (
                <option value="">Select finish</option>
              ) : (
                <option value="">Select thickness first</option>
              )}

              {this.state.finishes &&
                this.state.finishes.length > 0 &&
                this.state.finishes.map((finish, index) => {
                  if (finish.thickness_id === obj.state.thickness) {
                    return (
                      <option value={finish.id} key={index}>
                        {finish.name}
                      </option>
                    );
                  }
                  return null;
                })}
            </select>
          </div>
        </div>
      </Fragment>
    );
  }

  startQuote = () => {
    if (!(this.state.thickness !== "" && this.state.finish !== "")) {
      toast.error("Please select at least 1 finish");
      return;
    }

    const product = {
      product_id: this.state.data.sku.id,
      thickness_id: this.state.thickness,
      finish_id: this.state.finish,
    };

    let products = localStorage.getItem("sku");
    if (products) {
      products = JSON.parse(products);
      if (products.length >= 5) {
        toast.error("You have reached the maximum limit");
        return;
      }
      const exists = products.findIndex(
        (it) =>
          it.thickness_id === product.thickness_id &&
          it.product_id === product.product_id &&
          it.finish_id === product.finish_id
      );
      if (exists === -1) {
        toast.success(
          <p style={{ marginLeft: "-10%" }}>
            Product shortlisted for{" "}
            <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
              FREE Quote
            </Link>{" "}
            <br />
            click here to{" "}
            <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
              proceed
            </Link>{" "}
          </p>,
          { autoClose: 6000 }
        );
        products.push(product);
        localStorage.setItem("sku", JSON.stringify(products));
      }
    } else {
      products = [product];
      localStorage.setItem("sku", JSON.stringify(products));
      toast.success(
        <p style={{ marginLeft: "-10%" }}>
          Product shortlisted for{" "}
          <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
            FREE Quote
          </Link>{" "}
          <br />
          click here to{" "}
          <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
            proceed
          </Link>{" "}
        </p>,
        { autoClose: 6000 }
      );
    }

    this.setState({ redirect: true });
  };

  addToWatchList = () => {
    if (!(this.state.thickness !== "" && this.state.finish !== "")) {
      toast.error("Please select at least 1 finish");
      return;
    }

    const product = {
      product_id: this.state.data.sku.id,
      thickness_id: this.state.thickness,
      finish_id: this.state.finish,
    };

    let products = localStorage.getItem("sku");
    if (products) {
      products = JSON.parse(products);
      if (products.length >= 5) {
        toast.error("You have reached the maximum limit");
        return;
      }
      const index = products.findIndex(
        (it) =>
          it.thickness_id === product.thickness_id &&
          it.product_id === product.product_id &&
          it.finish_id === product.finish_id
      );
      if (index === -1) {
        toast.success(
          <p style={{ marginLeft: "-10%" }}>
            Product shortlisted for{" "}
            <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
              FREE Quote
            </Link>{" "}
            <br />
            click here to{" "}
            <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
              proceed
            </Link>{" "}
          </p>,
          { autoClose: 6000 }
        );
        products.push(product);
        localStorage.setItem("sku", JSON.stringify(products));
      } else {
        toast.error("Item already added");
      }
    } else {
      products = [product];
      localStorage.setItem("sku", JSON.stringify(products));
      toast.success(
        <p style={{ marginLeft: "-10%" }}>
          Product shortlisted for{" "}
          <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
            FREE Quote
          </Link>{" "}
          <br />
          click here to{" "}
          <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
            proceed
          </Link>{" "}
        </p>,
        { autoClose: 6000 }
      );
    }
  };

  removeDuplicates = (originalArray, prop) => {
    const lookup = {};
    originalArray.forEach((o) => {
      lookup[o[prop]] = o;
    });
    return Object.values(lookup);
  };

  toggleWishList() {
    const d = this.state.data;
    const product = {
      ...d,
      id: d?.sku?.id,
      name: d?.sku?.name,
      manufacturer_id: d?.manufacturer_id,
      manufacturer: d?.manufacturer?.name,
      brand: d?.brand?.name,
      base_color: d?.color?.name,
      brand_id: d?.brand?.id,
      color_code: d?.sku?.color_code,
      images: [
        {
          path: d?.images?.[0]?.image_path
            ? d.images[0].image_path
            : `${import.meta.env.VITE_PUBLIC_URL || ""}uploads/images/Logo-glass-fusion.png`,
        },
      ],
      material_type: d?.materialType,
      material: d?.materialType,
    };

    let existing = JSON.parse(localStorage.getItem("wishlist"));
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
      { autoClose: 6000 }
    );
  }

  render() {
    if (this.state.loading) return null;
    if (!this.state.images || this.state.images.length === 0) return null;

    if (this.state.redirect === true) {
      return <Navigate to="/get-a-quote" replace={false} />;
    }

    const shareUrl = `${window.location.href}`;
    const shareTitle = this.props.productName || this.state.productName || "";

    return (
      <div className="main">
        <Helmet>
          <title>{`${this.state.data?.sku?.name || "Product"} , Glass & Fusion`}</title>
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
                          imageAlt={this.state.data?.sku?.name || "product"}
                          largeImageSrc={this.state.images[0].path}
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

                      <div id="product-zoom-gallery" className="product-image-gallery">
                        {this.state.images.map((item, index) => (
                          <Link
                            className="product-gallery-item active"
                            to="#"
                            data-image={item.path}
                            data-zoom-image={item.path}
                            key={`${this.state.data?.sku?.id || "sku"}-${index}`}
                          >
                            <img src={item.path} alt="product" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product-details">
                    <h1 className="product-title">{this.state.data?.sku?.name}</h1>

                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: (this.state.data?.ratings || 0) * 20 + "%" }}
                        ></div>
                      </div>
                      ( {this.state.data?.reviews || 0} Reviews )
                    </div>

                    <div className="product-content">
                      <span className="" style={{ fontWeight: "bold" }}>
                        Price Band,{" "}
                      </span>
                      {parse(this.getPriceRange(this.state.data?.finishes || [], "price"))}
                      <br />
                      <div>
                        {this.state.data?.sku?.description
                          ? parse(
                            this.state.data.sku.description.substring(0, 135) + "..."
                          )
                          : ""}
                        <button
                          onClick={() => this.scrollToDescription()}
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
                        data-tip={`Main Colour, ${this.state.data?.color?.name || ""}`}
                      >
                        <span
                          className="active"
                          style={{ background: this.state.data?.color?.name || "#ccc" }}
                        ></span>
                      </div>
                      &nbsp;&nbsp;&nbsp;
                      <div
                        className="product-nav product-nav-dots"
                        data-tip={`Colour, ${this.state.data?.sku?.color_code || ""}`}
                      >
                        <span
                          className="active"
                          style={{ background: this.state.data?.sku?.color_code || "#ccc" }}
                        ></span>
                      </div>
                    </div>

                    {this.getThickness()}
                    {this.getFinishes()}

                    <div className="product-details-action">
                      <div className="row">
                        <div className="col col-md-12" style={{ display: "flex" }}>
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
                                alt=""
                              />
                              <img
                                src="/assets/images/gnf/cart_new_icon_white.png"
                                style={{ height: 23, marginRight: "6%", display: "none" }}
                                id="white_img1"
                                alt=""
                              />
                              <span>Shortlist for quote</span>
                            </button>
                          </div>
                          <div className="col col-md-5">
                            <button
                              className="btn-product pl-0 pr-0 btn btn-outline-primary-2 btn-round btn-more _fixedWidth"
                              title="Wishlist"
                              id="custom_pound_icon"
                              style={{ marginLeft: "1%", textTransform: "none", borderLeft: "1px solid" }}
                              onClick={this.startQuote}
                            >
                              <img
                                src="/assets/images/gnf/cart_new_icon_black.png"
                                style={{ height: 23, marginRight: "6%" }}
                                id="brown_img"
                                alt=""
                              />
                              <img
                                src="/assets/images/gnf/cart_new_icon_white.png"
                                style={{ height: 23, marginRight: "6%", display: "none" }}
                                id="white_img"
                                alt=""
                              />
                              <span>Start online quote</span>
                            </button>
                          </div>
                        </div>

                        <div className="col col-md-12" style={{ display: "flex" }}>
                          <div className="col col-md-5">
                            <button
                              className="btn-product btn-compare pr-0 btn btn-outline-primary-2 btn-round btn-more _fixedWidth"
                              title="Compare"
                              style={{ textTransform: "none", borderLeft: "1px solid" }}
                              onClick={() => {
                                localStorage.setItem("enquireProduct", window.location.href);
                                const base = import.meta.env.VITE_PUBLIC_URL || "";
                                this.props.navigate(`${base}/enquire`);
                              }}
                            >
                              <span>Enquire now</span>
                            </button>
                          </div>

                          <div className="col col-md-5">
                            <button
                              className="btn-product btn-wishlist pr-0 btn btn-outline-primary-2 btn-round btn-more _fixedWidth"
                              title="Compare"
                              style={{ textTransform: "none", borderLeft: "1px solid" }}
                              onClick={() => this.toggleWishList()}
                            >
                              <i className="fa fa-heart"></i>
                              <span className="title-font">Add to wishList</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product-details-footer">
                      <div className="product-cat">
                        <div
                          className="row"
                          style={{ display: "flex", flexDirection: "column", paddingLeft: 7 }}
                        >
                          <div>
                            <span className="" style={{ fontWeight: "bold" }}>
                              {this.state.data?.sku?.material_id == 1 ? "Material, " : "Type, "} &nbsp;&nbsp;&nbsp;
                            </span>
                            <span className="mr-0">{this.state.data?.materialType}</span>
                          </div>
                          <div>
                            {(this.state.data?.tileSizes || []).map((item, index) => (
                              <Fragment key={index}>
                                <span className="mr-0" style={{ display: "inline-block" }}>
                                  {item.name}
                                </span>
                                {this.state.data.tileSizes.length > 1 &&
                                  index + 1 !== this.state.data.tileSizes.length && (
                                    <Fragment>,&nbsp;&nbsp;&nbsp;</Fragment>
                                  )}
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="social-icons social-icons-sm">
                        <span className="social-label">
                          <b>Share:</b>
                        </span>

                        <a className="social-icon" title="Facebook" target="_blank" rel="noreferrer">
                          <FacebookShareButton url={shareUrl} quote={shareTitle} className="social-icon">
                            <i className="icon-facebook-f"></i>
                          </FacebookShareButton>
                        </a>

                        <a className="social-icon" title="Messenger" target="_blank" rel="noreferrer">
                          <FacebookMessengerShareButton
                            url={shareUrl}
                            appId="521270401588372"
                            className="social-icon"
                          >
                            <i className="icon-facebook-messenger"></i>
                          </FacebookMessengerShareButton>
                        </a>

                        <a className="social-icon" title="WhatsApp" target="_blank" rel="noreferrer">
                          <WhatsappShareButton url={shareUrl} title={shareTitle} className="social-icon">
                            <i className="icon-whatsapp"></i>
                          </WhatsappShareButton>
                        </a>

                        <a className="social-icon" title="Twitter" target="_blank" rel="noreferrer">
                          <TwitterShareButton url={shareUrl} title={shareTitle} className="social-icon">
                            <i className="icon-twitter"></i>
                          </TwitterShareButton>
                        </a>

                        <a className="social-icon" title="Email" target="_blank" rel="noreferrer">
                          <EmailShareButton url={shareUrl} subject={shareTitle} className="social-icon">
                            <i className="icon-envelope"></i>
                          </EmailShareButton>
                        </a>

                        <a className="social-icon" title="Pinterest" target="_blank" rel="noreferrer">
                          <PinterestShareButton url={shareUrl} media={`${shareUrl}`} className="social-icon">
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
            />
          </div>
        </div>

        <div className="sticky-bar" style={{ paddingTop: "0rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1 className="product-title __customSize">{this.state.data?.sku?.name}</h1>
              </div>

              <div className="col-6 justify-content-end">
                <div className="product-details-action">
                  <div className="details-filter-row details-row-size" style={{ marginTop: "-1.5%" }}>
                    <label htmlFor="size" style={{ fontWeight: "bold" }}>
                      Price Band:
                    </label>
                    {parse(this.getPriceRange(this.state.data?.finishes || [], "price"))}
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
                        onChange={this.setFinishSticky}
                      >
                        {this.state.thickness ? (
                          <option value="">Select finish</option>
                        ) : (
                          <option value="">Select thickness first</option>
                        )}

                        {this.state.finishes &&
                          this.state.finishes.length > 0 &&
                          this.state.finishes.map((finish, index) => {
                            if (finish.thickness_id === this.state.thickness) {
                              return (
                                <option value={finish.id} key={index}>
                                  {finish.name}
                                </option>
                              );
                            }
                            return null;
                          })}
                      </select>
                    </div>
                  </div>
                  <button
                    className="btn-product btn btn-outline-primary-2 btn-round btn-more"
                    id="custom_pound_icon2"
                    onClick={this.addToWatchList}
                  >
                    <img
                      src="/assets/images/gnf/cart_new_icon_black.png"
                      style={{ height: 23, width: 25, marginRight: "6%", marginLeft: "-7%", marginTop: "-2%" }}
                      id="brown_img2"
                      alt=""
                    />
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
                      alt=""
                    />

                    <span style={{ display: "flex", textTransform: "initial" }}>
                      Shortlist for quote
                    </span>
                  </button>
                  <button
                    className="btn-product-icon btn-wishlist"
                    data-tip={"Add to wishlist"}
                    style={{ paddingLeft: "1%", paddingRight: "1%", marginLeft: "1%", fontSize: 24 }}
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

function ProductDetail() {
  const { manufacturer, brand, color, id } = useParams();
  const navigate = useNavigate();
  return (
    <ProductDetailClass
      manufacturer={manufacturer}
      brand={brand}
      color={color}
      id={id}
      productName={id}
      navigate={navigate}
    />
  );
}

export default ProductDetail;
