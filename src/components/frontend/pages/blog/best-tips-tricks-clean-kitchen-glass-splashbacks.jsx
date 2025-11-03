import React, { Component } from "react";
import { Helmet } from "react-helmet";

class BestTipsBlog extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Best-Tips-and-Tricks-to-Clean-Kitchen-Glass-Splashbacks-1.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>BEST TIPS AND TRICKS TO CLEAN KITCHEN GLASS SPLASHBACKS</h3>
                <br />

                <p className="about_text">
                  Here at Glass Fusion we can supply and fit glass splashbacks
                  that are completely bespoke to your specification, colour,
                  finish and shape. You tell us what you want, and we will
                  create it!
                  <br />
                  <br />
                  Through years of experience, our specialist fitters can meet
                  any requirements that our clients have. Our team will also
                  match your glass splashback with any fixtures and fittings
                  that you have.
                  <br />
                  <br />
                  We know that you will be happy with your glass splashbacks, so
                  we have put together some tips and tricks for cleaning and
                  keeping them well maintained.
                  <br />
                  <br />
                  <br />
                  1:{" "}
                  <span className="gold_text_blog">
                    Choose Your Cleaning Products{" "}
                  </span>
                  Before you start cleaning, you should have a look on the
                  market for glass-cleaning products as these will be the best
                  ones out there to help keep your glass free of smudges. There
                  are some great products out there, but you may already have
                  your favourite one!
                  <br />
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  2:
                  <span className="gold_text_blog">
                    Removing Stubborn Stains
                  </span>
                  If you have stubborn stains on your glass splashbacks then you
                  may be tempted to use something more abrasive than usual,
                  however we advise that you do not do this as it can scratch or
                  damage the glass. For those stubborn stains, simply spray with
                  a glass cleaner of your choice and leave to soak for a few
                  minutes; the stain should then wipe away easily. If not,
                  repeat as necessary.
                  <br />
                  <br />
                  3:
                  <span className="gold_text_blog">Clean as You Go</span>
                  Cleaning your glass splashbacks regularly or daily can help
                  make the job a lot easier when you do your thorough cleaning.
                  Wiping away food splatters and grease as and when they appear
                  is what we advise, as very often a quick clean after every use
                  it all that is needed to help keep it looking fresh. If you
                  leave on the spillages and splatters from the food, then this
                  is when you will create those stubborn stains we were talking
                  about before. Deal with the mess immediately and then your
                  regular clean will be much easier by focusing on just getting
                  that shine back.
                  <br />
                  <br />
                  4:
                  <span className="gold_text_blog">Regular Cleaning</span>
                  Even though we recommend to clean as you go along, you should
                  also be cleaning your glass splashback around once every two
                  weeks. This will make sure that the splashback is well
                  maintained and looked after, to ensure it lasts many years. If
                  your glass splashback is not cleaned regularly then it will
                  lose that shine and will end up looking dull.
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

export default BestTipsBlog;
