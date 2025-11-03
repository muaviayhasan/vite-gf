import React, { Component, Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isIEBrowser } from "../../../../utils/utils";
import parse from 'html-react-parser';
import "../product_style.css";

export default class ProductDetailTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getFinishes() {
    let finishes = this.props.product.finishes;

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
    let thicknesses = this.props.product.thicknesses;
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
    let applications = this.props.product.applications;
    let distinctapplications = applications.filter((value, index, self) => {
      let i = self.findIndex((item) => {
        return item.name === value.name;
      });

      return i === index;
    });

    let str = "";
    for (let i in distinctapplications) {
      str += distinctapplications[i].name;
      if (i < distinctapplications.length - 1) str += ", ";
    }

    return str;
  }

  getEffects() {
    let effects = this.props.product.effects;
    let distincteffects = effects.filter((value, index, self) => {
      let i = self.findIndex((item) => {
        return item.name === value.name;
      });

      return i === index;
    });

    let str = "";
    for (let i in distincteffects) {
      str += distincteffects[i].name;
      if (i < distincteffects.length - 1) str += ", ";
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
        if (values > 50 * i) {
          html += "<font class='text-danger'>£</font>";
        } else {
          html += "<font>£</font>";
        }
      }
    }
    return html;
  }

  render() {
    const { product } = this.props;
    const obj = this;

    return (
      <Tabs selectedTabClassName="show" selectedTabPanelClassName="active show" id="product_description">
        <div className="product-details-tab">
          <TabList className="nav nav-pills justify-content-center">
            <Tab className="nav-item">
              <span className="nav-link" > Description</span>
            </Tab>

            <Tab className="nav-item">
              <span className="nav-link"> Product Data</span>
            </Tab>

            <Tab className="nav-item">
              <span className="nav-link"> Additional Information</span>
            </Tab>

            <Tab className="nav-item">
              <span className="nav-link">Technical Information</span>
            </Tab>

            <Tab className="nav-item">
              <span className="nav-link">Video</span>
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel className="tab-pane" id="description">
              <div className="product-desc-content">
                {parse(this.props.product.sku.description)}
              </div>
            </TabPanel>

            <TabPanel className="tab-pane">
              <div className="product-desc-content">
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
                    {this.props.product.materialType}
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
                    {this.props.color}
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                    style={{ fontSize: 13 }}
                  >
                    Slab Sizes
                  </div>
                  <div
                    className="col-7 border table-border-right-left-bottom-none ft-10"
                    style={{ fontSize: 13 }}
                  >
                    {this.props.product.slabSizes.map(function(item, index) {
                      return (
                        <Fragment>
                          <span className="mr-0" key={index}>
                            {item.name}
                          </span>
                          {obj.props.product.slabSizes.length > 1 &&
                            index + 1 !==
                              obj.props.product.slabSizes.length && (
                              <Fragment>,&nbsp;</Fragment>
                            )}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-5  border font-weight-bold table-border-left-bottom-none ft-10 pl-3"
                    style={{ fontSize: 13 }}
                  >
                    Tile Sizes
                  </div>
                  <div
                    className="col-7 border table-border-right-left-bottom-none ft-10"
                    style={{ fontSize: 13 }}
                  >
                    {this.props.product.tileSizes.map(function(item, index) {
                      return (
                        <Fragment>
                          <span className="mr-0" key={index}>
                            {item.name}
                          </span>
                          {obj.props.product.tileSizes.length > 1 &&
                            index + 1 !==
                              obj.props.product.tileSizes.length && (
                              <Fragment>,&nbsp;</Fragment>
                            )}
                        </Fragment>
                      );
                    })}
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
                      this.getPriceRange(this.props.product.finishes, "price")
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
                    {this.getThicknesses()}
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
                    {this.getFinishes()}
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
                    {this.getEffects()}
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
                    {this.props.brand}
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
                    {this.props.manufacturer}
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
                    {`${this.props.product.sku.warranty} years`}
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
                    {this.getApplications()}
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel className="tab-pane">
              <div className="product-desc-content">
                {this.props.product.sku.additional_info !== "<p>null</p>" &&
                this.props.product.sku.additional_info !== null
                  ? parse(this.props.product.sku.additional_info)
                  : "No Additional Information"}
              </div>
            </TabPanel>

            <TabPanel className="tab-pane">
              <div className="product-desc-content">
                {this.props.product.sku.technical_info !== "<p>null</p>" &&
                this.props.product.sku.technical_info !== null
                  ? parse(this.props.product.sku.technical_info)
                  : "No Technical Information"}
              </div>
            </TabPanel>

            <TabPanel className="tab-pane">
              <div className="reviews">
                {this.props.product.sku.video !== "<p>null</p>" &&
                this.props.video !== null ? (
                  <iframe
                    id="video"
                    width="654"
                    height="300"
                    src={`//www.youtube.com/embed/${this.props.video}?rel=0`}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                ) : (
                  "No Video"
                )}
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    );
  }
}
