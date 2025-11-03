import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SocialLink } from "../../features/social-link";

class FooterTwo extends Component {
  componentDidMount() {
    if (window.location.href.indexOf("https://glassfusionltd.co.uk/") > -1) {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.innerHTML = `
      !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '902066167116621'); 
        fbq('track', 'PageView');
    `;
      this.instance.appendChild(s);
    }
  }
  render() {
    const {
      type = 1,
      logo = "assets/images/gnf/GnF-Glass-Marble-Stone-London.svg",
    } = this.props;
    return (
      <footer className="footer footer-2" ref={(el) => (this.instance = el)}>
        {this.props.children}
        <div className={`footer-middle ${type === 2 ? "border-0" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-5">
                <div className="widget widget-about">
                  <Link to={`${import.meta.env.VITE_PUBLIC_URL}/home`}>
                    <img
                      src={logo}
                      className="footer-logo"
                      alt="Footer Logo"
                      width="105"
                      height="25"
                    />
                  </Link>
                  <p style={{ width: "100%", maxWidth: "100%" }}>
                    Over the years Glass & Fusion have built extensive links in
                    the industry from sourcing granite, quartz, marble, &
                    ultra-compact to fabrication & fitting kitchen worktops.{" "}
                  </p>

                  <div
                    className="widget-about-info pt-4"
                    style={{ paddingTop: "-0.3rem", paddingBottom: "1.5rem" }}
                  >

                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-lg-2">
                <div className="widget">
                  <h4 className="widget-title">Information</h4>

                  <ul className="widget-list">
                    <li>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/about-us`}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/testimonials`}>
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/faq`}>FAQ</Link>
                    </li>
                    <li>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/blogs`}>Blog</Link>
                    </li>
                    <li>
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/categories`}>
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/glass-categories`}>
                        Glass
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4 col-lg-2">
                <div className="widget">
                  <h4 className="widget-title">Showroom</h4>

                  <ul className="widget-list">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Glass+%26+Fusion+Ltd/@51.506069,-0.409503,16z/data=!4m5!3m4!1s0x0:0x27907a8aac63a82b!8m2!3d51.5060693!4d-0.4095027?hl=en"
                      >
                        Unit 10 Chesterfield Way
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Glass+%26+Fusion+Ltd/@51.506069,-0.409503,16z/data=!4m5!3m4!1s0x0:0x27907a8aac63a82b!8m2!3d51.5060693!4d-0.4095027?hl=en#"
                      >
                        Hayes, UB3 3NW
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Glass+%26+Fusion+Ltd/@51.506069,-0.409503,16z/data=!4m5!3m4!1s0x0:0x27907a8aac63a82b!8m2!3d51.5060693!4d-0.4095027?hl=en"
                      >
                        United Kingdom
                      </a>
                    </li>
                    <li>
                      <a href="tel:02039359199">02039359199</a>
                    </li>
                    <li>
                      <a href="tel:07823345500">07823345500</a>
                    </li>
                    <li>
                      <a href="mailto:info@glassfusionltd.co.uk">
                        info@glassfusionltd.co.uk
                      </a>
                    </li>
                    <li>
                      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/contact`}>
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">About Us</h4>

                  <div className="widget-list">
                    <p>
                      We pride ourselves on delivering the best quality and
                      workmanship to the heart of your home. Our products are
                      not limited to stone kitchen worktops or toughened glass
                      splashback but extensive knowledge in our products can
                      direct your project to the right track in terms of styling
                      and pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <span
                  className="widget-about-title"
                  style={{ color: "#cc9966" }}
                >
                  <b>Opening Hours:</b>
                </span>
                <span
                  className="widget-about-title"
                  style={{ color: "#cc9966" }}
                >
                  Weekdays:
                  <span style={{ color: "black" }}>
                    {" "}
                    09:00am - 05:00pm
                  </span>
                </span>

                <span
                  className="widget-about-title"
                  style={{ color: "#cc9966" }}
                >
                  Saturday:
                  <span style={{ color: "black" }}>
                    &nbsp;&nbsp; 09:00am - 05:00pm
                  </span>
                </span>

                <span
                  className="widget-about-title"
                  style={{ color: "#cc9966" }}
                >
                  Sunday:
                  <span style={{ color: "black" }}>
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed
                  </span>
                </span>
              </div>
              <div className="col-sm-6 col-md-6">
                <span className="widget-about-title">
                  {/* Payment Method */}
                </span>
                <figure
                  className="footer-payments"
                  style={{ display: "flex" }}
                >
                  <a
                    href="https://www.houzz.co.uk/pro/glassandfusionltd"
                    target="blank"
                    style={{ display: "flex" }}
                  >
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/houze1.png`}
                      alt="Payment methods"
                      width="52"
                      style={{ marginLeft: 5, width: 80, height: 80 }}
                    />
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/houze2.png`}
                      alt="Payment methods"
                      width="52"
                      style={{ marginLeft: 5, width: 80, height: 80 }}
                    />
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/houze3.png`}
                      alt="Payment methods"
                      width="52"
                      style={{ marginLeft: 5, width: 80, height: 80 }}
                    />
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/2024.png`}
                      alt="Payment methods"
                      width="52"
                      style={{ marginLeft: 5, width: 80, height: 80 }}
                    />

                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/2022.png`}
                      alt="Payment methods"
                      width="52"
                      style={{ marginLeft: 5, width: 80, height: 80 }}
                    />

                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/houz.png`}
                      alt="Payment methods"
                      width="52"
                      style={{ marginLeft: 5, width: 80, height: 80 }}
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="footer-copyright">
              Copyright Glass & Fusion 2025 Powered by:{" "}
              <a
                href="https://www.isetech.co/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ISETech
              </a>
            </p>
            <ul className="footer-menu">
              <li>
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}>
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <SocialLink label={true} />
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterTwo;
