import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class SearchToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: null,
      isRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProductName = this.handleProductName.bind(this);
  }
  
  handleProductName(e)
  {
    this.setState({
      productName: e.target.value
    });
  }

  handleSubmit(event)
  {
  event.preventDefault();
 window.location.href = `${import.meta.env.VITE_PUBLIC_URL}/q=${this.state.productName}`
  }
  componentDidMount() {
    document
      .querySelector(".search-toggle")
      .addEventListener("click", this.onSearchToggle);
    document
      .querySelector(".header-search")
      .addEventListener("click", function(e) {
        e.stopPropagation();
      });

    document.querySelector("body").addEventListener("click", function(e) {
      if (
        document.querySelector(".header-search-wrapper") &&
        document
          .querySelector(".header-search-wrapper")
          .classList.contains("show")
      ) {
        document
          .querySelector(".header-search-wrapper")
          .classList.remove("show");
        document.querySelector(".search-toggle").classList.remove("active");
        document.querySelector("body").classList.remove("is-search-active");
        e.preventDefault();
      }
    });
  }

  onSearchToggle(e) {
    document.querySelector(".header-search-wrapper").classList.toggle("show");
    document.querySelector(".search-toggle").classList.toggle("active");
    document.querySelector(".header-search-wrapper input").focus();
    e.preventDefault();
  }

  render() {
   
    return (
      <div className="header-search">
        <a
          href="#dropdown"
          className="search-toggle"
          role="button"
          title="Search"
          style={{ color: "white" }}
        >
          <i className="icon-search"></i>
        </a>
        <form onSubmit={this.handleSubmit}>
          <div className="header-search-wrapper">
            <label htmlFor="q" className="sr-only">
              Search
            </label>
            <input
              type="text"
              className="form-control"
              name="q"
              id="q"
              placeholder="Search Products"
              onChange={(e) => this.handleProductName(e)}
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchToggle;
