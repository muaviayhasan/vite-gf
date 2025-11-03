import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

class DetailsTopTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      blockSize: 50
    };
  }

  getValues(list, key) {
    let values = "";
    for (var i in list) {
      values += list[i][key] + (i < list.length - 1 ? "," : "");
    }
    return values;
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
  componentDidUpdate(oldProps) {
    if (!oldProps.data.data && this.props.data.data.length) {
      this.setState({
        data: this.props.data.data[0]
      });
    }
  }
  render() {
    const { data } = this.state;
    if (data) {
      return (
        <section className="tab-product m-0">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <Tabs className="tab-content nav-material">
                <TabList className="nav nav-tabs nav-material">
                  <Tab className="nav-item">
                    <span className="nav-link active">
                      <i className="icofont icofont-ui-home"></i>Additional
                      Infromation
                    </span>
                    <div className="material-border"></div>
                  </Tab>
                  <Tab className="nav-item">
                    <span className="nav-link">
                      <i className="icofont icofont-man-in-glasses"></i>
                      Technical Information
                    </span>
                    <div className="material-border"></div>
                  </Tab>
                  <Tab className="nav-item">
                    <span className="nav-link">
                      <i className="icofont icofont-contacts"></i>Video
                    </span>
                    <div className="material-border"></div>
                  </Tab>
                  <Tab className="nav-item">
                    <span className="nav-link">
                      <i className="icofont icofont-contacts"></i>Product Data
                    </span>
                    <div className="material-border"></div>
                  </Tab>
                </TabList>
                <TabPanel className="tab-pane fade mt-4 show active">
                  <table className="table table-striped mb-0">
                    <tbody>
                      <tr>
                        <th>Ideal For :</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>Pattern :</th>
                        <td>Embroidered</td>
                      </tr>
                      <tr>
                        <th>Dress Fabric :</th>
                        <td>Silk</td>
                      </tr>
                      <tr>
                        <th>Type :</th>
                        <td>Ghagra, Choli, Dupatta Set</td>
                      </tr>
                      <tr>
                        <th>Neck :</th>
                        <td>Round Neck</td>
                      </tr>
                      <tr>
                        <th>Sleeve :</th>
                        <td>3/4 Sleeve</td>
                      </tr>
                      <tr>
                        <th>Work :</th>
                        <td>N/A</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel>
                  <p className="mt-4 p-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </TabPanel>
                <TabPanel>
                  <div className="mt-4 text-center">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        src="https://www.youtube.com/embed/BUWzX78Ye_8"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="tab-pane fade mt-4 show active">
                  <table className="table table-striped mb-0">
                    <tbody>
                      <tr>
                        <th>Type :</th>
                        <td>{data.material_type}</td>
                      </tr>
                      <tr>
                        <th>Colour :</th>
                        <td>{data.base_color}</td>
                      </tr>
                      <tr>
                        <th>Price Band :</th>
                        <td>
                          {" "}
                          {parse(
                            this.getPriceRange(data.finishes, "price")
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Thicknesses:</th>
                        <td>{this.getValues(data.finishes, "thickness")}</td>
                      </tr>
                      <tr>
                        <th>Finishes :</th>
                        <td>Polished</td>
                      </tr>
                      <tr>
                        <th>Effect :</th>
                        <td>{this.getValues(data.effects, "effect")}</td>
                      </tr>
                      <tr>
                        <th>Brand:</th>
                        <td>{data.brand}</td>
                      </tr>
                      <tr>
                        <th>Manufacturer :</th>
                        <td>{data.manufacturer}</td>
                      </tr>
                      <tr>
                        <th>Manufacturer's Warranty :</th>
                        <td>10 years</td>
                      </tr>
                      <tr>
                        <th>Application :</th>
                        <td>
                          {/* Bar countertop, Bathroom coverings, Bathroom worktop,
                          Countertop, Floorings, Kitchen worktop, Shower tray,
                          Splashbacks, staircases, Table tops, Vanity top, Wall
                          cladding, Washbasins */}
                          {/* {this.getApplication(
                            data.application_areas,
                            "application"
                          )} */}
                          {parse(
                            this.getValues(
                              data.application_areas,
                              "application"
                            )
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Country :</th>
                        <td>Brazil</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="tab-product m-0">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <Tabs className="tab-content nav-material">
                <TabList className="nav nav-tabs nav-material">
                  <Tab className="nav-item">
                    <span className="nav-link active">
                      <i className="icofont icofont-ui-home"></i>Additional
                      Infromation
                    </span>
                    <div className="material-border"></div>
                  </Tab>
                  <Tab className="nav-item">
                    <span className="nav-link">
                      <i className="icofont icofont-man-in-glasses"></i>
                      Technical Information
                    </span>
                    <div className="material-border"></div>
                  </Tab>
                  <Tab className="nav-item">
                    <span className="nav-link">
                      <i className="icofont icofont-contacts"></i>Video
                    </span>
                    <div className="material-border"></div>
                  </Tab>
                  <Tab className="nav-item">
                    <span className="nav-link">
                      <i className="icofont icofont-contacts"></i>Product Data
                    </span>
                    <div className="material-border"></div>
                  </Tab>
                </TabList>
                <TabPanel className="tab-pane fade mt-4 show active">
                  <table className="table table-striped mb-0">
                    <tbody>
                      <tr>
                        <th>Ideal For :</th>
                        <td>{this.props.title}</td>
                      </tr>
                      <tr>
                        <th>Pattern :</th>
                        <td>Embroidered</td>
                      </tr>
                      <tr>
                        <th>Dress Fabric :</th>
                        <td>Silk</td>
                      </tr>
                      <tr>
                        <th>Type :</th>
                        <td>Ghagra, Choli, Dupatta Set</td>
                      </tr>
                      <tr>
                        <th>Neck :</th>
                        <td>Round Neck</td>
                      </tr>
                      <tr>
                        <th>Sleeve :</th>
                        <td>3/4 Sleeve</td>
                      </tr>
                      <tr>
                        <th>Work :</th>
                        <td>N/A</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel>
                  <p className="mt-4 p-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </TabPanel>
                <TabPanel>
                  <div className="mt-4 text-center">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        src="https://www.youtube.com/embed/BUWzX78Ye_8"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="tab-pane fade mt-4 show active">
                  <table className="table table-striped mb-0">
                    <tbody>
                      <tr>
                        <th>Type :</th>
                        <td>empty</td>
                      </tr>
                      <tr>
                        <th>Colour :</th>
                        <td>Golden, Grey, Orange</td>
                      </tr>
                      <tr>
                        <th>Price Band :</th>
                        <td>££££££</td>
                      </tr>
                      <tr>
                        <th>Thicknesses:</th>
                        <td>20mm, 30mm</td>
                      </tr>
                      <tr>
                        <th>Finishes :</th>
                        <td>Polished</td>
                      </tr>
                      <tr>
                        <th>Effect :</th>
                        <td>Fine grain with Swirls, Wave</td>
                      </tr>
                      <tr>
                        <th>Suitable for:</th>
                        <td>Exterior, Interior</td>
                      </tr>
                      <tr>
                        <th>Brand:</th>
                        <td>Granith</td>
                      </tr>
                      <tr>
                        <th>Manufacturer :</th>
                        <td>The Size</td>
                      </tr>
                      <tr>
                        <th>Manufacturer's Warranty :</th>
                        <td>10 years</td>
                      </tr>
                      <tr>
                        <th>Application :</th>
                        <td>
                          Bar countertop, Bathroom coverings, Bathroom worktop,
                          Countertop, Floorings, Kitchen worktop, Shower tray,
                          Splashbacks, staircases, Table tops, Vanity top, Wall
                          cladding, Washbasins
                        </td>
                      </tr>
                      <tr>
                        <th>Country :</th>
                        <td>Brazil</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default DetailsTopTabs;
