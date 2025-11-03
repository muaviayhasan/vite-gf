import React, { Component } from "react";
import { Helmet } from "react-helmet";

class SpringSaleThankYou extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (window.location.href.indexOf("https://glassfusionltd.co.uk") > -1) {
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
        fbq('track', 'CompleteRegistration');
    `;
      this.instance.appendChild(s);
    }
  }

  render() {
    return (
      <div style={{ paddingBottom: "10%" }} ref={(el) => (this.instance = el)}>
        <Helmet>
          <title>{`GNF - Spring-Sale-Thank-You`}</title>
        </Helmet>
        {/*Forget Password section*/}
        <section className=" contact-page section-b-space">
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=902066167116621&ev=PageView
      &noscript=1"
            />
          </noscript>
          <div className="container">
            <div className="row section-b-space">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <h4
                  style={{
                    textAlign: "center",
                    lineHeight: "1.5",
                  }}
                >
                  Thank you for your interest in our Spring Sale. One of our
                  expert team member will contact you shortly
                </h4>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SpringSaleThankYou;
