import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import BaseMenu from "./base";

class MainMenu extends BaseMenu {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      pages: [],
    };
  }

  componentDidMount() {
    axios.get(`${import.meta.env.VITE_API_URL}/pages-active`).then((res) => {
      console.log(res.data);
      this.setState({ pages: res.data, isLoaded: true });
    });
  }

  render() {
    const { pages } = this.state;
    return (
      <nav className="main-nav" onClick={this.activeNav}>
        <ul className="menu sf-arrows">
          <li className="megamenu-container active">
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/home`}>HOME</Link>
          </li>
          <li className="megamenu-container">
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/about-us`}>ABOUT</Link>
          </li>
          <li className="megamenu-container">
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/glass-categories`}
              className="sf-with-ul"
            >
              Glass
            </Link>

            <div className="megamenu demo">
              <div className="menu-col">
                <div className="menu-title">Glass categories</div>

                <div className="demo-list">
                  <div className="demo-item">
                    <Link to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/plain`}>
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/plain/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Plain</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/metallic-effect`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/metallic-effect/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Metallic Effect</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/shimmer-effect`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/shimmer-effect/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Shimmer Effect</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/special-effect`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/special-effect/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Special Effect</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/digital-print`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/digital-print/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Digital Print</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/double-layer`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/double-layer/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Double Layer</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/crackled-glass`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-page/cracked-glass-final.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Crackled Glass</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/toughened-mirrors`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/toughened-mirrors/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Toughened Mirrors</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/untoughened-mirrors`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/untoughened-mirrors/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Untoughened Mirrors</span>
                    </Link>
                  </div>

                  <div className="demo-item">
                    <Link
                      to={`${import.meta.env.VITE_PUBLIC_URL}/glass-category/satin-glass`}
                    >
                      <span
                        className="demo-bg"
                        style={{
                          backgroundImage:
                            "url(assets/images/gnf/glass-category/satin-glass/1.jpg)",
                        }}
                      ></span>
                      <span className="demo-title">Satin Glass</span>
                    </Link>
                  </div>
                </div>

                <div className="megamenu-action text-center">
                  <Link
                    to="/glass-categories"
                    className="btn btn-outline-primary-2 btn-round btn-more view-all-demos"
                  >
                    <span>View All</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="megamenu-container">
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/bespoke_stone_worktops_London`}
            >
              WORKTOPS
            </Link>
          </li>
          <li className="megamenu-container">
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/bespoke_glass_splashbacks_London`}
            >
              SPLASHBACKS
            </Link>
          </li>
          <li className="megamenu-container">
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/quick-quote-kitchen-worktops`}>
              quick&nbsp;quote
            </Link>
          </li>
          <li className="megamenu-container">
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/product-catalogue`}>
              CATALOGUE
            </Link>
          </li>

          <li className="megamenu-container">
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/get-a-quote`}>QUOTE</Link>
          </li>

          <li>
            <Link
              to={`${import.meta.env.VITE_PUBLIC_URL}/templating`}
              className="sf-with-ul"
            >
              Services
            </Link>

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

          {/* <li>
            <a className="sf-with-ul" href="/">
              More
            </a>
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
          </li> */}
          {pages && pages.length > 0 && (
            <li>
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}`} className="sf-with-ul">
                More
              </Link>

              <ul>
                {pages.map((item, index) => (
                  <li key={index}>
                    <a href={`${import.meta.env.VITE_PUBLIC_URL}/pages/${item.seo_url}`}>
                      {item.menu_name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )}

          <li className="megamenu-container">
            <Link to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export const mapStateToProps = (state) => ({
  demo: state.demo.current,
});

export default connect(mapStateToProps)(MainMenu);
