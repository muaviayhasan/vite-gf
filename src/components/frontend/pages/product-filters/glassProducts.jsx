import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import GlassProduct from "../home/GlassProducts";
import GlassCategory from "./GlassCategory";

class GlassProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: "Plain",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/plain-final.jpg`,
        },
        {
          name: "Metallic Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/Metallic-effect-final.jpg`,
        },
        {
          name: "Shimmer Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/shimmer-effect-final.jpg`,
        },
        {
          name: "Special Effect",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/special-effect-final.jpg`,
        },
        {
          name: "Digital Print",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/digital-print-final.jpg`,
        },
        {
          name: "Double Layer",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/double-layers-final.jpg`,
        },
        {
          name: "Crackled Glass",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/cracked-glass-final.jpg`,
        },
        {
          name: "Toughened Mirrors",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/toughened-final.jpg`,
        },
        {
          name: "Untoughened Mirrors",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/untoughened-final.jpg`,
        },
        {
          name: "Satin Glass",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/stain-glass-final.jpg`,
        },
        {
          name: "Plain + Sparkle",
          image: `${import.meta.env.VITE_PUBLIC_URL}/assets/images/glass-category/plain-sparkle-final.jpg`,
        },
      ],
    };
  }
  async componentDidMount() {
    // const resp = await axios({
    //   url: `${import.meta.env.VITE_API_URL}/sku`,
    //   method: "get",
    //   data: null
    // });
    // this.setState({
    //   items: resp.data
    // });
  }

  render() {
    // const obj = this;

    return (
      <div>
        <Helmet>
          <title>GNF Glass Categories</title>
        </Helmet>
        {/*Forget Password section*/}
        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row col-md-12 section-b-space">
              {/* <div className="col-md-12">
                <h1>GLASS CATEGORIES</h1>
              </div> */}
              <div
                style={{
                  "border-bottom": "1px solid black",
                  width: "100%",
                  display: "flex",
                  width: "94%",
                  display: "flex",
                  paddingBottom: " 2%",
                  marginLeft: "3%",
                }}
              >
                <div>
                  <h3>Glass</h3>
                </div>
                <div
                  style={{
                    marginLeft: "13%",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h5>
                    Nowadays, glass panels are the most popular form of kitchen
                    wall decor. Their advantage is the ability to use almost
                    every possible motif or pattern. Together with glass panels,
                    your ideas are endless…
                  </h5>
                </div>
              </div>

              <br />
              <Fragment>
                {this.state.categories.map((category) => {
                  return (
                    <div
                      className="col-xl-3 col-md-4 col-sm-6 mb-3 _testing"
                      style={{
                        width: 228,
                        height: 377,
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2%",
                      }}
                    >
                      <GlassCategory
                        category={category.name}
                        image={category.image}
                      />
                    </div>
                  );
                })}

                {/* <GlassProduct
            material="Glass"
            products={obj.state.items}
            defaultImage="\assets\images\211 x 277 tile.png"
          /> */}
              </Fragment>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default GlassProducts;
