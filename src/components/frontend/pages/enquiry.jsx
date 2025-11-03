import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class Enquiry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - ${this.props.title}`}</title>
        </Helmet>
        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space book-appointment-form col-sm-12 col-md-5 col-offset-md-2">
              <div className="col-sm-12">
                <h2>Enquiry</h2>
                <form className="theme-form">
                  <div className="form-row">
                    <div className="col-md-12">
                      <label className="custome_lable" htmlFor="name">
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
                      <label className="custome_lable" htmlFor="review">
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
                      <label className="custome_lable" htmlFor="email">
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
                      <label className="custome_lable" htmlFor="review">
                        Write Your Message
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Write Your Message"
                        id="exampleFormControlTextarea1"
                        rows="6"
                      ></textarea>
                    </div>
                    {/* <div className="col-md-1 inline">
                      <input
                        type="checkbox"
                        className="form-control"
                        id="check"
                        required=""
                      />
                      I accept the
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                      >
                        Terms & Conditions and
                      </Link>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>
                        Privacy policy
                      </Link>
                    </div> */}
                    <div className="col-md-12">
                      <div class="form-group form-check">
                        <input
                          name="check"
                          type="checkbox"
                          className="form-check-input"
                          id="check"
                          required=""
                        />
                        <label className="form-check-label" htmlFor="check">
                          {" "}
                          I accept the &nbsp;
                          <Link
                            to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                          >
                            Terms & Conditions
                          </Link>
                          &nbsp; and &nbsp;
                          <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>
                            &nbsp; Privacy policy
                          </Link>
                        </label>
                      </div>
                    </div>
                    &nbsp;
                    <div className="col-md-12">
                      <button className="btn btn-solid" type="submit">
                        Send Your Message
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

export default Enquiry;
