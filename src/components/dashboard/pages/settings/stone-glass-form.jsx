import React, { Component } from "react";
var Parent = React.createClass({
  getInitialState: function() {
    return { signup: false, login: true };
  },
  switch: function(word) {
    var signup, login;
    if (word == "signup") {
      signup = true;
      login = false;
    } else {
      login = true;
      signup = false;
    }
    return this.setState({ login: login, signup: signup });
  },
  render: function() {
    var self = this;
    return (
      <div>
        <div id="buttons">
          <p
            id="signupButton"
            onClick={self.switch.bind(null, "signup")}
            className={self.state.signup ? "yellow" : "blue"}
          >
            Sign In
          </p>
          <p
            id="loginButton"
            onClick={self.switch.bind(null, "login")}
            className={self.state.login ? "yellow" : "blue"}
          >
            {" "}
            Login
          </p>
        </div>

        {self.state.signup ? <Signup /> : null}
        {self.state.login ? <Login /> : null}
      </div>
    );
  }
});

var Signup = React.createClass({
  render: function() {
    return (
      <div>
        <div class="container">
          <form>
            <h5>Select Material Type</h5>
            <div className="row">
              <div className="col-md-1">
                <label className="custome_lable">Stone:</label>
                <input
                  type="radio"
                  className="form-control"
                  id="stone"
                  placeholder="Stone"
                  // onChange={this.handleChange}
                />
              </div>
              <div className="col-md-1">
                <label className="custome_lable">Glass:</label>
                <input
                  type="radio"
                  className="form-control"
                  id="glass"
                  placeholder="glass"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {this.state.show && <glassform />}
            <br />
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Manufacturer:</label>
                  <select className="form-control">
                    <option value="">Select manufacturer</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Brand:</label>
                  <select className="form-control">
                    <option value="">Select Brand</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Supplier:</label>
                  <select className="form-control">
                    <option value="">Select Supplier</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Main Color:</label>
                  <select className="form-control">
                    <option value="">Main Color</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Color Name:</label>
                  <select className="form-control">
                    <option value=""> Color Name</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Color Code:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="color-code"
                    placeholder="Color Code"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="custome_lable">Material:</label>
                  <select className="form-control">
                    <option value=""> Material</option>
                    <option value="">Glass</option>
                    <option value="">granite</option>
                    <option value="">Quartz</option>
                    <option value="">Marble</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <div>
        <div id="login">
          <form>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Manufacturer:</label>
                  <select className="form-control">
                    <option value="">Select manufacturer</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Brand:</label>
                  <select className="form-control">
                    <option value="">Select Brand</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Supplier:</label>
                  <select className="form-control">
                    <option value="">Select Supplier</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Glass Type :</label>
                  <select className="form-control">
                    <option value="">Glass Types</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Glass Category:</label>
                  <select className="form-control">
                    <option value="">Glass Category</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Main Color:</label>
                  <select className="form-control">
                    <option value="">Main Color</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Color Name:</label>
                  <select className="form-control">
                    <option value=""> Color Name</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Color Code:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="color-code"
                    placeholder="Color Code"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Parent />, document.getElementById("space"));
