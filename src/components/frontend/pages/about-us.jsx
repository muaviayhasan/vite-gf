import React, { Component } from "react";
import { Helmet } from "react-helmet";
class aboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - About Us`}</title>
        </Helmet>
        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space">
              <div className="col-sm-12">
                <div>
                  <h2>About us</h2>
                  <br />
                  <p className="about_text">
                  We pride ourselves in delivering the highest quality material and best workmanship to the heart of your home. Our products are not limited to stone kitchen worktops or toughened glass splashback and our extensive knowledge in our products can direct your project to the right track in terms of styling and pricing.

                  </p>
                  <p className="about_text">
                    Bespoke kitchen worktops from granite, quartz, marble and ultra compact surfaces require great deal of attention. We can help you to choose the right colour and material for your needs. We are specialised in fabrication and installation of stone worktops along with glass splashbacks for both trade and residential clients. Our main aim is to provide you with the knowledge and details about our products, ensuring that you are making the right kitchen worktop choice, bespoke and tailored to your requirements.

                  </p>
                  <p className="about_text">
                    Over the years Glass &amp; Fusion have built extensive connections in the industry from sourcing to fabrication and fitting of kitchen worktops. The variety in type and colours of natural &amp; composite stone worktops have a huge impact on decision making, we will highlight the pros and cons of your choice and advise the affordability option.

                  </p>
                  <p className="about_text">
                    Glass &amp; Fusion supplied and fitted kitchen quartz worktops for large commercial projects minimising the overall cost from the start. At the consultation stage all options presented with accurate figures, time scale and list of detailed requirements. Clear vision, single point of contact and studying the project process are the skeleton of Glass &amp; Fusion’s success.

                  </p>
                  <p className="about_text">
                  The key stages of processing a client order are managed in house using our fabrication unit while the fabrication office is open six days a week handling and overseeing the order progression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default aboutUs;
