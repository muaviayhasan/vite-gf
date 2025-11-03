import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class GetFreeAdvice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      message: ""
    };
  }

  selectImages = event => {
    let images = [];
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/));
    let message = `${images.length} valid image(s) selected`;
    this.setState({ images, message });
  };
  // uploadImages = () => {
  // const uploaders = this.state.images.map(image => {
  // const data = new FormData();
  // data.append("image", image, image.name);
  // // Make an AJAX upload request using Axios
  // return axios.post(BASE_URL + 'upload', data)
  // .then(response => {
  // this.setState({
  // imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
  // });
  // })
  // });
  // // Once all the files are uploaded
  // axios.all(uploaders).then(() => {
  // console.log('done');
  // }).catch(err => alert(err.message));
  // }

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
                <h2>Get Free Advice</h2>
                <form className="theme-form ">
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
                    <div>
                      <input
                        className="form-control "
                        type="file"
                        onChange={this.selectImages}
                        multiple
                      />
                    </div>

                    <div className="col-md-12">
                      <div class="form-group form-check">
                        <input
                          name="check"
                          type="checkbox"
                          className="form-check-input"
                          id="check"
                          required=""
                          onClick={this.handleChange}
                        />
                        <label
                          className="custome_lable form-check-label"
                          htmlFor="check"
                        >
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
                    <div className="col-md-12">
                      <button
                        id="subbmit_button"
                        className="btn btn-solid"
                        type="submit"
                      >
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

export default GetFreeAdvice;
