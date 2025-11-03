import React, { Component } from "react";
import { Helmet } from "react-helmet";

class GlassSplashBacksBlog extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/shutterstock_56408032.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>
                  GLASS SPLASHBACKS IN NORTH, SOUTH, EAST & WEST LONDON – SUPPLY
                  & INSTALLATION
                </h3>
                <br />

                <p className="about_text">
                  Here at Glass and Fusion, we provide high standard glass
                  splashbacks to the whole of London. We are able to see the
                  process straight through from the supply to installation. In
                  addition to choosing from our range, we are also able to
                  create a bespoke splashback for your bathroom or kitchen
                  areas.
                  <br />
                  <br />
                  If you are interested in getting a FREE quote from us, then do
                  not hesitate to get in touch where one of our friendly team
                  will be able to assist you further.
                  <br />
                  <br />
                  1:{" "}
                  <span className="gold_text_blog">
                    Why Choose a Glass Splashback?{" "}
                  </span>
                  <br />
                  Glass splashbacks are perfect for both kitchen and bathroom
                  areas and will create one stunning feature for the room in
                  question. One of the bonuses of having a glass splashback is
                  that it is able to bounce and reflect light around the room,
                  creating the illusion of the room being much bigger than it
                  is.
                  <br />
                  For our glass splashbacks, we offer lengths of up to 3 metres.
                  But this can only be done if the height is no more than 1
                  metre. However, we do advise that sometimes the longer lengths
                  should be divided into 3 different panels to help the access
                  and installation process.
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  2: <span className="gold_text_blog">Why Choose Us? </span>
                  Glass and Fusion are one of the best services for glass
                  splashbacks in North, South, East & West London. We are able
                  to create glass splashbacks that will complement your existing
                  design and style which includes your flooring, cupboards,
                  worktops etc. Whatever your theme is, we will be able to offer
                  you the perfect accompaniment.
                  <br />
                  We provide both modern and traditional glass splashbacks to
                  suit the overall appearance that you have in mind to help
                  create the kitchen or bathroom of your dreams. We are even
                  able to fully hide the glass splashbacks if this is something
                  that you would prefer – all you have to do is let us know your
                  requirements and we will work to meet them.
                  <br />
                  <br />
                  3:{" "}
                  <span className="gold_text_blog">Style and Toughening </span>
                  When it comes to choosing the style of glass splashbacks, you
                  need to keep in mind where the heat sources are located. All
                  of our splashbacks are usually toughened but this can
                  interfere with the style, so we are more than happy to not
                  toughen the glass splashbacks if it is possible.
                  <br />
                  If your heat source is positioned right next to the splashback
                  then it would need to be toughened, for this not to happen we
                  would need the heat source to be 200mm away from the
                  splashback. However if any cut outs are needed for the sockets
                  or switches in the room and they are 50mm from the edge of the
                  glass or another socket, then we will not necessarily have to
                  toughen it. <br />
                  <br />
                  If you need any assistance in whether or not toughening is
                  needed, then we are more than happy for you to send us some
                  pictures and we will see for ourselves whether it is needed.
                  We will have a look at the photos and then offer you some
                  advice based on what we can see.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default GlassSplashBacksBlog;
