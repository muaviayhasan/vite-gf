import React, { Component } from "react";

import FrontEndHeader from "./header";
import FooterOne from "../../common/footers/footer-one";

class FrontEndLayout extends Component {
  render() {
    let countSku = [];
    if (JSON.parse(localStorage.getItem("sku")))
    {
      countSku = JSON.parse(localStorage.getItem("sku"));
    }

    return (
      <div>
        <FrontEndHeader logoName={"logo.png"} total={countSku.length} />
        <br />
        {this.props.children}
        <FooterOne logoName={"logo.png"} />
      </div>
    );
  }
}

export default FrontEndLayout;
