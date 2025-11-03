import React, { Component } from "react";
import { Helmet } from "react-helmet";

class StoneKitchenBlog extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Stone-Kitchen-Worktops-vs-Glass-Worktops.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>STONE KITCHEN WORKTOPS VS GLASS WORKTOPS</h3>
                <br />

                <p className="about_text">
                  Deciding on the material of your kitchen worktop is such an
                  important one as it will set the tone for your whole kitchen.
                  When making the decision it comes from a variety factors such
                  as cost, how you will be using the worktop and how much time
                  and money you can allow for care and maintaining it.
                  <br />
                  <br />
                  The cost of the kitchen worktop will vary hugely depending on
                  the exact material of your choice. Stone worktops are not
                  necessarily cheaper because there are so many different stones
                  that you can choose from, ranging from budget-friendly to
                  expensive.
                  <br />
                  <br />
                  Two of the most common worktop materials are stone and glass;
                  this overview will talk briefly about both to help you decide
                  which one would be better for your home. They both have very
                  different advantages and disadvantages, so this will help
                  clear that up, so you can consider both sides before
                  purchasing.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  1:{" "}
                  <span className="gold_text_blog">
                    Glass Kitchen Worktops{" "}
                  </span>
                  Glass has been traditionally used for kitchen splashbacks,
                  however it is now being used as a very popular material for
                  kitchen worktops as well. Glass is ideal for being used as a
                  worktop in modern homes and will come available in a range of
                  colours; glass comes in almost all colours you can think of,
                  so you shouldn’t be disappointed.
                  <br />
                  <br />
                  Additionally, glass can withstand up to 400 degrees, so it
                  makes the perfect cooking surface as you will no doubt be
                  placing hot pots and pans onto the worktop surface. However,
                  we do recommend that you still use heat pads where necessary
                  to help your glass worktop last a lifetime.
                  <br />
                  <br />
                  Glass kitchen worktops can be quite expensive, depending on
                  the quality, however so are some stones depending on which
                  stone you are looking at. So over all the price of glass may
                  not come up as the most expensive option and can often be
                  cheaper!
                  <br />
                  <br />
                  2:
                  <span className="gold_text_blog">Stone Kitchen Worktops</span>
                  There are three commonly used stones for stone kitchen
                  worktops and these are: Granite, Quartz and Marble. Granite is
                  most probably the most popular because it is hard and offers
                  so many benefits such as being heat, stain and scratch
                  resistant. However, Quartz offers almost every benefit that
                  Granite does so it is a close contender.
                  <br />
                  <br />
                  Marble is also very popular however its price tag means that
                  not everyone can buy it. Marble comes in a variety of
                  beautiful colours and shades but is a porous material, unlike
                  Granite and Quartz. This means that Marble will hold onto any
                  spillages and will likely stain. So, you need to be far more
                  careful as well as having to spend out for the long-term
                  maintenance fees of re-sealing every year. However, Marble is
                  perfect for those who bake a lot, especially pastry, as it can
                  handle heat well and will prevent the dough from sticking to
                  the surface.
                  <br />
                  <br />
                  Hopefully this guide to stone kitchen worktops and glass
                  worktops have given you some of the information that you need
                  in order to make a decision on which would be better for you
                  and your home.
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

export default StoneKitchenBlog;
