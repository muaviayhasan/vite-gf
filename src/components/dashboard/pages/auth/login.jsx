import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../../style/index.scss";

import AuthHeader from "./authHeader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../../actions/authAction";
import { clearErrors } from "../../../../actions/errorAction";
// import "../../../../public/assets/css/custome.scoped.css";

class adminLogin extends Component {
  state = {
    email: "",
    password: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.message });
      } else {
        this.setState({ msg: null });
      }
    }
    if (isAuthenticated === true) {
      window.location.reload();
      document.body.setAttribute("style", " background : #fff !important");
      setTimeout(() => {
        this.props.history.push(`${import.meta.env.VITE_PUBLIC_URL}/admin/dashboard`);
    }, 2000);
      
    }
  }

  componentDidMount() {
    if (this.props.isAuthenticated === true) {
      this.props.history.push(`${import.meta.env.VITE_PUBLIC_URL}/admin/dashboard`);
    }

    this.props.clearErrors();
    document
      .getElementById("color")
      .setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/color3.css`);
    document.body.setAttribute("style", " background : #5d4ef3e0 !important");

    document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
    document.getElementById("loginStyle").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/login.css`);

  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
    document.getElementById("loginStyle").removeAttribute("href");

  }

  checkForm(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = {
      email,
      password
    };

    // Attempt to login
    this.props.login(user);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>GNF | Login</title>
        </Helmet>
        <AuthHeader />
        {/*About Section*/}

        <div className="main-bg">
          <div className="box-conatiner">
            <div id="a">
              <div className="circle-ripple"></div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-6">
                <h1 className="heading-left">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/Logo-glass-fusion.png`}
                    alt=""
                    className="img-fluid blur-up lazyload"
                  />
                </h1>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="wrap-login100">
                  <span className="login100-form-title">Sign In</span>
                  <form
                    className="login100-form validate-form p-l-55 p-r-55 p-t-20"
                    onSubmit={e => this.checkForm(e)}
                  >
                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Please enter username"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="email"
                        placeholder="Email"
                      />
                      <span className="focus-input100"></span>
                    </div>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Please enter password"
                    >
                      <input
                        className="input100"
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <span className="focus-input100"></span>
                    </div>
                    <div
                      className="text-right p-t-13 p-b-23"
                      style={{ display: "flex", float: "right" }}
                    >
                      <span className="txt1">Forgot &nbsp;</span>
                      <p className="txt2">Username / Password?</p>
                    </div>
                    <div className="container-login100-form-btn">
                      <button type="submit" className="login100-form-btn">
                        Sign in
                      </button>
                    </div>
                    {this.state.msg ? (
                      <p className="login_message_error">{this.state.msg}</p>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(adminLogin);
