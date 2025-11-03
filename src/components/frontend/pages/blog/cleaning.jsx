import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Cleaning extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/b1full.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>Expert Tips On Maintaining Your Work Surfaces</h3>
                <br />
                <p
                  className="about_text gold_text_blog"
                  style={{ textAlign: "left" }}
                >
                  After Care: Expert tips on how to clean stone surfaces{" "}
                </p>
                <p className="about_text">
                  It is no doubt that stone worktops add a finishing touch to
                  any space – whether an office space, kitchen, or wet room
                  vanities. However, having these luxurious stones comes with
                  some form of responsibility.
                  <br />
                  <br />
                  True, they are somewhat strong and likely to last for a long
                  time – even without care. Nonetheless, the care and
                  maintenance you give to your worktop have a role or two to
                  play in its longevity. With proper care, your worktop is sure
                  to maintain its texture and quality for as long as possible.
                  <br />
                  <br />
                  To help achieve this goal, we decided to compile a list of
                  some expert tips on how best to care for your worktops.
                  <br />
                  <br />
                  <br />
                  <br />
                  1:{" "}
                  <span className="gold_text_blog">
                    Clean off spills as soon as possible.{" "}
                  </span>
                  A little spill from foods or drinks could cause huge damage if
                  left unattended to. Even sealed worktops are not immune to
                  spills. Be sure to wipe spills off immediately.
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  <br />
                  2: Worktops such as
                  <span className="gold_text_blog">
                    granite worktops require sealing from time to time.
                  </span>
                  Be sure to reseal your worktop as and when due to prevent
                  damage to the worktop. Depending on the rate of usage, you
                  could seal just once or twice a year.
                  <br />
                  <br />
                  3:{" "}
                  <span className="gold_text_blog">
                    Avoid prolonged exposure to excessive heat.
                  </span>{" "}
                  It is crucial to protect your worktop from excessive heat.
                  Always place trivets or mats on top of the worktop before
                  placing a hot pot, plate, or pan on it. Prolonged exposure to
                  heat could cause the spot to crack, crystallize and eventually
                  discolour.
                  <br />
                  <br />
                  4:{" "}
                  <span className="gold_text_blog">
                    Pay close attention to the type of chemical you use on your
                    worktops.
                  </span>
                  These luxurious stones are easily damaged by hard chemicals
                  such as bleach. Make sure your worktop is not exposed to acid
                  or any other chemical.
                  <br />
                  <br />
                  5:{" "}
                  <span className="gold_text_blog">
                    Worktops, irrespective of the type, require daily cleaning
                    to maintain its shiny and radiant look.
                  </span>
                  Therefore, it is crucial to clean your worktop regularly.
                  Also, be mindful of the cleanser or detergent you use to clean
                  your worktop. Some cleansers contain harmful chemical or worse
                  – acid. Steer clear from cleansers such as your everyday
                  bathroom cleansers, lemon juice, bleach, vinegar and other
                  cleansers that contain harsh chemicals.
                  <br />
                  <br />
                  6: Make sure you
                  <span className="gold_text_blog">
                    employ soft, lint-free microfiber cloth when cleaning your
                    worktop rather than abrasive materials
                  </span>
                  that would leave scratches on the surface.
                  <br />
                  <br />
                  7: It is advisable to
                  <span className="gold_text_blog">
                    clean your worktop immediately after use.
                  </span>
                  Quickly spray a suitable cleanser [water does the magic
                  sometimes] on it and wipe gently with soft cloth.
                  <br />
                  <br />
                  8:{" "}
                  <span className="gold_text_blog">
                    Tough stains require more than water.
                  </span>
                  You will need to employ the help of a suitable cleanser. To
                  eliminate tough stains, it is advisable to spray your worktops
                  with a cleanser and leave to settle for a while. This is to
                  ensure that the bonds in the stain are entirely broken to
                  allow for an easy wash. Warm water also comes in handy in such
                  cases.
                  <br />
                  <br />
                  9:{" "}
                  <span className="gold_text_blog">
                    Avoid activities such as
                  </span>
                  chopping directly on the worktop or using hard substances to
                  clean the surface as these activities could leave scratches on
                  the surface.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cleaning;
