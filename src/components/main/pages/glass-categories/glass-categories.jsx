import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

// import Custom Components
import Breadcrumb from "../../../common/breadcrumb";
import GLassProduct from "./product";

class GlassCategories extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: "plain",
        images: ["assets/images/gnf/glass-page/plain-final.jpg"],
      },
      {
        id: 2,
        name: "metallic-effect",
        images: ["assets/images/gnf/glass-page/Metallic-effect-final.jpg"],
      },
      {
        id: 3,
        name: "shimmer-effect",
        images: ["assets/images/gnf/glass-page/shimmer-effect-final.jpg"],
      },
      {
        id: 4,
        name: "special-effect",
        images: ["assets/images/gnf/glass-page/special-effect-final.jpg"],
      },
      {
        id: 5,
        name: "digital-print",
        images: ["assets/images/gnf/glass-page/digital-print-final.jpg"],
      },
      {
        id: 6,
        name: "double-layer",
        images: ["assets/images/gnf/glass-page/double-layers-final.jpg"],
      },
      {
        id: 7,
        name: "crackled-glass",
        images: ["assets/images/gnf/glass-page/cracked-glass-final.jpg"],
      },
      {
        id: 8,
        name: "toughened-mirrors",
        images: ["assets/images/gnf/glass-page/toughened-final.jpg"],
      },
      {
        id: 9,
        name: "untoughened-mirrors",
        images: ["assets/images/gnf/glass-page/untoughened-final.jpg"],
      },
      {
        id: 10,
        name: "satin-glass",
        images: ["assets/images/gnf/glass-page/stain-glass-final.jpg"],
      },
      {
        id: 11,
        name: "plain-sparkle",
        images: ["assets/images/gnf/glass-page/plain-sparkle-final.jpg"],
      },
    ];
    return (
      <div className="main">
        <Helmet>
          <title>Glass Product Categories</title>
          <meta
            name="description"
            content="Glass & Fusion can supply and fit glass splashbacks that are completely bespoke to your specification, colour, finish and shape."
          />
          <meta
            name="keywords"
            content="Glass splashbacks, Kitchen worktop, Toughened glass splashback, Bespoke glass wall covering, bespoke kitchen design, crackled glass, toughened mirror, satin glass"
          />
        </Helmet>

        <h1 className="d-none">glass categories page</h1>

        <Breadcrumb title="Glass Categories" adClass="border-0 mb-0" />

        <div className="container">
          <div className="row justify-content-center">
            {data &&
              data.length > 0 &&
              data.map((item, index) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={index + item.name}
                >
                  <GLassProduct product={item} key={index + item.name} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GlassCategories;
