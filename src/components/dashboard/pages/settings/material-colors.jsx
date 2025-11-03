import React, { Component } from "react";
import DefineColors from "./define-colors";
import Colorshades from "./color-shades";
class Materialcolors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section className="contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space">
              <div className="col-sm-12">
                <h1>Material Colors</h1>
                <DefineColors />
                <hr className="theme-form input" />
                <Colorshades />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Materialcolors;
