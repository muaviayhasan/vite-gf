import React, { Component, Fragment } from "react";
import HeaderOne from "../../common/headers/header-one";
import FooterOne from "../../common/footers/footer-one";
import DetailsTopTabs from "../../products/common/tabs";
import FactSheet from "../../products/common/fact-sheet";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isLoaded: false,
      thickness_checked: [],

      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/sku/getSku/${this.props.match.params.id}`)
      .then(product => {
        let thickness_checked = this.state.thickness_checked;
        product.data[0]["finishes"].map((finishes, index) => {
          thickness_checked.push({
            value: finishes["thickness"],
            name: finishes["thickness_id"]
          });
        });

        this.setState({
          ...this.state,
          isLoaded: true,
          data: product,
          thicknesses: thickness_checked
        });
      });
  }

  render() {
    const photos = [
      {
        name: "pic1",
        url:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.isales.pk%2Fimage%2Fcache%2Fcatalog%2Fshahroz%2520nov%25202019%2FWhatsApp%2520Image%25202019-10-30%2520at%25201.47.45%2520PM%2520(1)-min-1280x1280.jpeg&imgrefurl=https%3A%2F%2Fwww.isales.pk%2Fajrak-style-3-piece-suits&docid=VSNSO1ZoyyabVM&tbnid=mAYmWxRit2AcXM%3A&vet=10ahUKEwi2xNXcwfbmAhWUonEKHY0ABBkQMwicAihcMFw..i&w=1280&h=1280&bih=864&biw=1280&q=1280%20x%201280%20image&ved=0ahUKEwi2xNXcwfbmAhWUonEKHY0ABBkQMwicAihcMFw&iact=mrc&uact=8"
      },
      {
        name: "pic2",
        url:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fgespak.com.pk%2Fwp-content%2Fuploads%2F2016%2F07%2Fportfolio_06-1280x1280.jpg&imgrefurl=https%3A%2F%2Fgespak.com.pk%2F&docid=alG21tGbpiWqOM&tbnid=HSncANlM38HGpM%3A&vet=12ahUKEwjel4TuxfbmAhV0DGMBHa1tB8g4ZBAzKA4wDnoECAEQIA..i&w=1280&h=1280&bih=864&biw=1280&q=1280%20x%201280%20image&ved=2ahUKEwjel4TuxfbmAhV0DGMBHa1tB8g4ZBAzKA4wDnoECAEQIA&iact=mrc&uact=8"
      }
    ];
    const settings = {
      data: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    };
    // let thicknesses = this.state.thickness_checked.map(item => {
    //   return {
    //     label: thicknesses.name,
    //     value: thicknesses.value
    //   };
    // });

    let thicknesses = this.state.thickness_checked;
    return (
      <div>
        <HeaderOne logoName={"layout3/logo.png"} />
        <Slider {...settings}></Slider>
        <section>
          <div className="form-check-inline">
            <p className="productName" style={{ marginLeft: "14px" }}>
              Product Name
            </p>

            <select
              name="thickness_select"
              className=" "
              style={{ marginLeft: "9px" }}
              required
            >
              <option key="base" value="">
                Select option
              </option>
              {thicknesses.map(element => {
                return (
                  <option key={element.value} value={element.value}>
                    {element.label}
                  </option>
                );
              })}
            </select>

            <button
              className="btn bt-cust"
              style={{ fontSize: "9px", marginLeft: "9px" }}
            >
              Start Online Quote
            </button>
            <button
              className="btn bt-orange"
              style={{ fontSize: "9px", marginLeft: "9px" }}
            >
              Shortlist for Online Quote
            </button>
            {/* <button
              className="btn bt-green"
              style={{ fontSize: "9px", marginLeft: "9px" }}
            >
              Enquire Now
            </button> */}
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/enquiry`}
              className="btn bt-green"
              style={{ fontSize: "9px", marginLeft: "9px" }}
            >
              Enquire Now
            </Link>
          </div>
          {/* <div className="facts-sheet">
            <div className="facts-inner">
              <div className="facts-heading">
                <p className="fact-para">facts Sheet</p>
              </div>
              <div className="form-check-inline">
                <p className="priceBand">Price Band:</p>
                <p>££££££</p>
              </div>
              <div className="">
                <p className="priceBand">Slab Size:</p>
                <p>4mm, 6mm, 12mm</p>
              </div>
            </div>
          </div> */}
          <div>
            <FactSheet data={this.state.data} />
          </div>
          <div className="container">
            <div className="row section-b-space">
              <div className="col-sm-12">
                <DetailsTopTabs data={this.state.data} />
              </div>
            </div>
          </div>
        </section>
        <FooterOne className="sec-b-spc" logoName={"layout3/logo.png"} />
      </div>
    );
  }
}
export default ProductDetail;
