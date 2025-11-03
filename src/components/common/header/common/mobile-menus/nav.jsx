import React, { Component } from "react";
import { Link } from "react-router-dom";

import { mobileMenu } from "../../../../../utils/utils";

class MobileMainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: null,
      isRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProductName = this.handleProductName.bind(this);
  }

  componentDidMount() {
    mobileMenu();
  }

  handleProductName(e) {
    this.setState({
      productName: e.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = `${import.meta.env.VITE_PUBLIC_URL}/q=${this.state.productName}`;
  }

  render() {
    return (
      <nav className="mobile-nav">
        <form
          onSubmit={this.handleSubmit}
          style={{ width: "90%", margin: "5%" }}
        >
          <div className="header-search-wrapper">
            <label htmlFor="q" className="sr-only">
              Search
            </label>
            <input
              type="text"
              className="form-control icon-search"
              name="q"
              id="q"
              placeholder="Search Products"
              onChange={(e) => this.handleProductName(e)}
              required
            />
          </div>
        </form>

        <ul className="mobile-menu">
          <li>
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/home`}>Home</Link>
          </li>
          <li>
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/about-us`}>ABOUT</Link>
          </li>
          <li className="">
            <a className="sf-with-ul">Glass</a>
            <ul>
              <li>
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Plain`}>
                  Plain
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Metallic-Effect`}
                >
                  Metallic Effect
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Shimmer-Effect`}
                >
                  Shimmer Effect
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Special-Effect`}
                >
                  Special Effect
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Digital-Print`}
                >
                  Digital Print
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Double-Layer`}
                >
                  Double Layer
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Cracked-Glass`}
                >
                  Cracked Glass
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Toughened-Mirrors`}
                >
                  Toughened Mirrors
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Untoughened-Mirrors`}
                >
                  Untoughened Mirrors
                </Link>
              </li>
              <li>
                <Link
                  to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/Satin-Glass`}
                >
                  Satin Glass
                </Link>
              </li>
              <li>
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category`}>
                  <b>View All</b>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/bespoke_stone_worktops_London`}
            >
              worktops
            </Link>
          </li>
          <li>
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/bespoke_glass_splashbacks_London`}
            >
              splashbacks
            </Link>
          </li>
          <li>
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/quick-quote-kitchen-worktops`}>
              QUICK QUOTE
            </Link>
          </li>

          <li>
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/product-catalogue`}>
              CATALOGUE
            </Link>
          </li>

          <li>
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/get-a-quote`}>
              ADVANCED QUOTE
            </Link>
          </li>

          <li>
            <a className="sf-with-ul">SERVICES</a>
            <ul>
              <li>
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/templating`}>
                  Templating
                </Link>
              </li>
              <li>
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/fabrication`}>
                  Fabrication
                </Link>
              </li>
              <li>
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/installation`}>
                  Installation
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a className="sf-with-ul">MORE</a>
            <ul>
              <li>
                <a href="/pages/glass-splashbacks-london">Glass Splashbacks</a>
              </li>
              <li>
                <a href="/pages/stone-splashbacks-london">Stone Splashback</a>
              </li>
              <li>
                <a href="/pages/quartz-worktops-london">Quartz Worktops</a>
              </li>
              <li>
                <a href="/pages/granite-worktops-london">Granite Worktops</a>
              </li>
              <li>
                <a href="/pages/porcelain-splashbacks-london">
                  Porcelain Splashbacks
                </a>
              </li>
              <li>
                <a href="/pages/bespoke-furniture">Bespoke Furniture</a>
              </li>
            </ul>
          </li>

          <li>
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default MobileMainNav;
