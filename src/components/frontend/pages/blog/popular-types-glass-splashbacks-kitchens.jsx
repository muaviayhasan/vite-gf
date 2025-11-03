import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PopularTypesBlog extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{`GNF - ${this.props.title}`}</title>
        </Helmet>
        <section className=" contact-page section-b-space">
          <div className="container">
            <div className="row section-b-space">
              <div className="col-xl-5 col-lg-5 col-md-12 ">
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/MOST-POPULAR-TYPES-OF-GLASS-SPLASHBACKS-FOR-KITCHENS.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>MOST POPULAR TYPES OF GLASS SPLASHBACKS FOR KITCHENS</h3>
                <br />

                <p className="about_text">
                  When it comes to deciding on which material you are going to
                  use for your kitchen splashback it can often be a difficult
                  decision. However, when you have finally decided on glass,
                  your decision process does not stop there. You now have to
                  choose which type of glass you are wanting to have and what
                  will go with your kitchen design better.
                  <br />
                  <br />
                  The most popular is toughened glass, however there are more
                  that you can choose from. There are many options for your
                  glass kitchen splashbacks and it is so popular and is usually
                  chosen for modern houses and kitchens.
                  <br />
                  <br />
                  But why is glass so popular? It has a long list of benefits
                  which appeals to homeowners. If you are looking for a hygienic
                  splashback that will have no grout lines, be affordable and
                  available in an unlimited number of colours and designs, then
                  glass is for you. You can further personalise your glass
                  splashback by choosing a piece of artwork or pattern for it.
                  Furthermore, glass is great at reflecting light to create
                  depth and space around the kitchen.
                  <br />
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  1: <span className="gold_text_blog">Types of Glass </span>
                  There are three popular choices when it comes to choosing your
                  glass splashback and we will give a brief overview of them to
                  help you decide which one is for you.
                  <br />
                  <br />
                  2:
                  <span className="gold_text_blog">
                    Toughened 6mm Safety Glass
                  </span>
                  is one of the most popular choices and is the typical glass
                  that homeowners go for. The glass that gets used can either be
                  clear which has a natural green tint or Starphire glass.
                  <br />
                  <br />
                  3: <span className="gold_text_blog">Starphire Glass</span> is
                  a low iron glass which eliminates that natural green tint that
                  some people may not be a fan of. Because of this, it allows
                  for colour matching for light and warmer colours.
                  <br />
                  <br />
                  4:{" "}
                  <span className="gold_text_blog">Mirrored Splashbacks</span>
                  are getting used more often in kitchen renovations as they are
                  very fashionable and offer huge benefits. Mirrored splashbacks
                  are heat resistant and are available in many different colours
                  such as silver, bronze and smokey. Much like clear glass, a
                  mirrored splashback will help to create the illusion of a
                  bigger room by reflecting light, so would be a great choice
                  for smaller kitchens. Mirrors also help to create style in the
                  room and would go perfect in an all-white kitchen.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PopularTypesBlog;
