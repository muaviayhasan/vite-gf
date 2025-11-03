import React, { Component } from "react";
import { Helmet } from "react-helmet";

class GreenSplashback extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - ${this.props.title}`}</title>
        </Helmet>
        {/*Forget Password section*/}
        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space">
              <div className="col-xl-5 col-lg-5 col-md-12 ">
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/b2full.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>Expert Tips On Maintaining Your Work Surfaces</h3>
                <br />

                <p className="about_text">
                  As a rather new kid on the block, only a handful of people
                  know about this new wave of worktops. If I asked “which is
                  your favourite worktop material?” Your answer would likely be
                  either granite, marble or quartz. Well you are not alone. 9/10
                  people would answer the same.
                  <br />
                  <br />
                  There is now an alternative which is becoming increasingly
                  popular, porcelain worktops. Porcelain worktops come with a
                  host of benefits, including but not limited to; durability,
                  heat resistant, eco friendly and lightweight.
                  <br />
                  <br />
                  Porcelain is typically made from a type of clay called China
                  clay. This clay is known to contain a huge amount of
                  kaolinite, silica, feldspar and other mineral mixtures which
                  accounts for its unmatched strength and longevity. When fired
                  up, this clay forms an extremely dense material that is almost
                  impossible to crack, scratch, chip or destroy.
                  <br />
                  <br />
                  Benefits of porcelain worktops:
                  <br />
                  <br />
                  1: <span className="gold_text_blog">Durability - </span>
                  Although granite prides itself as the strongest stone around,
                  porcelain has proven to be way stronger due to the mineral
                  mixture it is made of. Thus, porcelain worktops are sure to
                  last just as long as granite worktops.
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  <br />
                  2: <span className="gold_text_blog">Low maintenance - </span>
                  No sealing necessary and highly water resistant. Cleaning and
                  maintenance is very easy in comparison to stone. You can
                  restore the glamorous look of your worktop with just a damp
                  cloth. No special cleanser, no sealing and not much attention
                  needed at all.
                  <br />
                  <br />
                  3: <span className="gold_text_blog">Damage Resistant - </span>
                  Porcelain is touted to be highly resistant to damages – and
                  for good reason. This new wave of worktops tends to be
                  resistant to heat, scratch, spills, stains and UV light. They
                  are made tough enough to handle prolonged exposure to heat, UV
                  light and spills.
                  <br />
                  <br />
                  4: <span className="gold_text_blog">Eco-friendly - </span>
                  Made from natural materials but is also renewable. Since it is
                  made from clay, porcelain can be recycled and used as raw
                  materials to manufacture other products.
                  <br />
                  <br />
                  5: <span className="gold_text_blog">Lightweight - </span>
                  Unlike natural stones that are typically heavy, porcelain is
                  fairly lightweight, as such, can be transferred easily without
                  breaking a sweat. The new 4mm thick porcelain even offers more
                  advantages, Natural stones just can’t beat it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default GreenSplashback;
