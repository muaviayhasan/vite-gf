import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class Customerdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - ${this.props.title}`}</title>
        </Helmet>
        {/*Forget Password section*/}
        <section className=" contact-page">
          <div className="container">
            <div className="row section-b-space">
              <div
                // className="col-sm-12 col-md-5 col-offset-md-2"
                className="book-appointment-form col-sm-12 col-md-5 col-offset-md-2"
              >
                <h1>Customers Details</h1>
                <form className="theme-form ">
                  <div className="form-row">
                    <div className="col-md-12">
                      <label htmlFor="name" className="custome_lable">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="review" className="custome_lable">
                        Phone number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your number"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="email" className="custome_lable">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="group" className="custome_lable">
                        Group:
                      </label>
                      <select class="form-control customer-select" id="group">
                        <option>Customer Group</option>
                        <option>individual</option>
                        <option>Trade</option>
                      </select>
                    </div>
                    &nbsp;
                    <div className="col-md-12">
                      <div className="col-sm-6"></div>
                      <label htmlFor="addressline1" className="custome_lable">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="addressline1"
                        placeholder="Address Line 1"
                        required=""
                      />
                      <div className="col-sm-6"></div>
                      <label htmlFor="addressline2" className="custome_lable">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="addressline2"
                        placeholder="Address Line 2"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="city" className="custome_lable">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="postcode" className="custome_lable">
                        Post Code{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="postcode"
                        placeholder="Post Code"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <button
                        id="subbmit_button"
                        className="btn btn-solid"
                        type="submit"
                      >
                        Save Customer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Customerdetails;
