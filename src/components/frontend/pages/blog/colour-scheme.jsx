import React, { Component } from "react";
import { Helmet } from "react-helmet";

class ColourScheme extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/b3full.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>
                  A guide to matching your kitchen worktop to the rest of your
                  kitchen
                </h3>
                <br />

                <p className="about_text">
                  As the most functional part of the home – the heart of the
                  home if you will, the colour scheme of your kitchen is crucial
                  to defining your taste and aesthetics. This is why most
                  homeowners spend time and money to choose the perfect colour
                  scheme for their kitchens.
                  <br />
                  <br />
                  There are just too many options to choose from and too many
                  factors to consider – the worktop, floor, wall or backsplash,
                  kitchen appliances, etc.
                  <br />
                  <br />
                  One wrong move with matching your kitchen colour scheme could
                  ruin your entire interior décor.
                  <br />
                  <br />
                  As the most challenging room to decorate in the home, we took
                  the time to create a foolproof guide on matching your worktop
                  colour with other colours in the kitchen.
                  <br />
                  <br />
                  1:{" "}
                  <span className="gold_text_blog">
                    Remember to Keep it Simple
                  </span>
                  First things first, always remember to keep your kitchen
                  design simple. The kitchen is typically the most functional
                  part of the home. It is where you spend the most of your day.
                  Therefore, it is crucial to keep your colour scheme simple as
                  it will require a total revamp or a little makeover from time
                  to time.
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  Kitchen trends come up every year. Homeowners are always on
                  the lookout for these trends as it is a good way to enliven
                  the kitchen. A room that is used daily and subject to change
                  should be maintained with a simple aesthetic taste that can be
                  easily upgraded or remodeled.
                  <br />
                  Most homeowners will readily go for the traditional all-white
                  kitchen or white and black. However, kitchen trends for 2019
                  suggest you bring more hues to your kitchen. Hence, we would
                  advise you carefully select a colour scheme that is both
                  simple and unique to match your aesthetic style and taste
                  while being simple enough to easily change or upgrade in the
                  near future.
                  <br />
                  Experts advise you choose two dominant colours and one accent
                  colour to complement the bold colours.
                  <br />
                  <br />
                  2:
                  <span className="gold_text_blog">
                    Decide Your Worktop First
                  </span>
                  One common mistake most homeowners make is matching their
                  worktop to cabinets, floors, and walls instead of matching
                  cabinets, floors, and walls to the worktop. Okay, here is what
                  we mean.
                  <br />
                  Worktops should be the determinant factor of your colour
                  scheme. These luxurious stones come in different colours,
                  textures, and designs. It is pretty difficult to find one that
                  fits perfectly into your already existing colour scheme. But
                  it is so much easier to adjust or create your colour scheme to
                  match the design and colour of your worktop. Therefore, be
                  sure to choose the colour of your worktop first before making
                  your kitchen colour scheme.
                  <br />
                  <br />
                  3:{" "}
                  <span className="gold_text_blog">Make a Colour Scheme</span>
                  The next step after choosing your worktop is to make a colour
                  scheme that blends well with the design and colour of your
                  worktop. While creating your colour scheme, remember our first
                  rule – keep it simple. Bold colours should be reserved for
                  walls, kitchen accessories, and small appliances. To
                  complement these colours, you could use an accent on bigger
                  appliances and other parts of the kitchen. This will help give
                  it a contemporary feel while keeping it simple enough to
                  adjust in the near future.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ColourScheme;
