import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    const { width = "90", height = "25" } = this.props;

    return (
      <Link
        to={`${import.meta.env.VITE_PUBLIC_URL}/home`}
        className={`logo ${this.props.className}`}
        style={{ marginTop: "0.55rem", marginBottom: "0.55rem" }}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/site/${this.props.logo}`}
          alt="Glass and Fusion"
          width={width}
          height={height}
          style={{ padding: "7px", height: "85px" }}
        />
      </Link>
    );
  }
}

export default Logo;
