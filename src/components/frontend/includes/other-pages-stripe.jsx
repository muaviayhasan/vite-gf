import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

class UpperBrownStripe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        quantity:
          localStorage.getItem("sku") &&
          JSON.parse(localStorage.getItem("sku")).length,
      });
    }, 500);
  }
  render() {
    return (
      <div>
        <div
          className="col-md-12 row header-stripe"
          style={{
            width: "100%",
            minWidth: "100%",
            maxWidth: "100%",
            paddingRight: "0px",
            paddingLeft: "0px",
            margin: "0px",
          }}
        >
          <div className=" col-md-6 col-sm-12 stripe-align">
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/book-home-visit`}
              className="spn-cls"
            >
              Book Home Visit
            </Link>
            &nbsp; <span className="spn-cls">|</span> &nbsp;
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/book-showroom-visit`}
              className="spn-cls"
            >
              Book Showroom Appointment
            </Link>
          </div>
          <div className="col-md-6 col-sm-12" style={{ textAlign: "right" }}>
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/about-us`} className="spn-cls">
              About
            </Link>
            &nbsp; <span className="spn-cls">|</span> &nbsp;
            <a href="tel:07823345500" className="components-align">
              02039359199
            </a>
            &nbsp; <span className="spn-cls">|</span> &nbsp;
            <a
              href="mailto:info@glassfusionltd.co.uk"
              className="components-align"
            >
              info@glassfusionltd.co.uk
            </a>
            &nbsp; <span className="spn-cls">|</span> &nbsp;
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/get-a-quote`}
              className="spn-cls"
            >
              Shortlisted for Quote{" "}
              {localStorage.getItem("sku") ? (
                <label className="custome_lable" style={{ color: "white" }}>
                  ({this.state.quantity})
                </label>
              ) : (
                0
              )}
            </Link>
            {/* &nbsp; <span className="spn-cls">|</span> &nbsp;
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/`} className="spn-cls">
              My Account
            </Link> */}
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default UpperBrownStripe;
