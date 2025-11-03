import React, { Component } from "react";
import { Helmet } from "react-helmet";

class ProsConsBlog extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/Pros-Cons-for-Printed-Glass-Splashbacks-1.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>PROS & CONS FOR PRINTED GLASS SPLASHBACKS</h3>
                <br />

                <p className="about_text">
                  The days of having a splashback that is simply just there to
                  offer practicality are gone. You are now able to have printed
                  glass splashbacks that can add pattern, colour and texture to
                  the bathroom or kitchen. So while the splashback is protecting
                  your walls, it is also a piece of art in its own right that
                  you almost forget what its job is.
                  <br />
                  <br />
                  But, is a printed glass splashback for you? While they have
                  their list of benefits, they are not without their downfalls.
                  <br />
                  <br />
                  1:{" "}
                  <span className="gold_text_blog">
                    Pros of Printed Glass Splashbacks{" "}
                  </span>
                  <br />
                  A printed glass splashback is able to complement the design of
                  your bathroom or kitchen even more than an ordinary glass
                  splashback. Instead of having a simple glass splashback, why
                  not use it as an opportunity to create a beautiful piece of
                  art?
                  <br />
                  Glass splashbacks are stunning and sleek pieces as they are
                  able to be installed in large panels, instead of lots of
                  smaller ones. This adds to the overall finished look as they
                  blend in with each other far more and adds consistency.
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  So that your new splashbacks are less likely to scratch or get
                  damaged, you are able to request them to be toughened, which
                  leaves you with strong and durable splashbacks that you never
                  have to really worry about.
                  <br />
                  Printed glass splashbacks are so easy to keep clean so it is
                  ideal for both bathrooms and kitchens as they are both areas
                  where you are needing an easy cleaning routine to maintain.
                  All you have to do is use a mild detergent and wipe with a
                  cloth – job done!
                  <br />
                  Lastly, glass splashbacks are extremely easy to install so it
                  minimizes the fuss. They can be installed by either being
                  screwed or glued into place and once they have been installed,
                  there is no chance of them coming loose.
                  <br />
                  <br />
                  2:{" "}
                  <span className="gold_text_blog">
                    Cons of Printed Glass Splashbacks{" "}
                  </span>
                  While printed glass splashbacks certainly do have their
                  benefits, they are not without their pitfalls either. Printed
                  glass splashbacks are far more likely to clash against a
                  design if you choose to redesign the room, so you need to
                  think about the print you are choosing in case you decide to
                  change the theme. Having to be restricted to picking a neutral
                  print may not be what you had in mind, after all it has the
                  opportunity to be a piece of art.
                  <br />
                  As printed glass splashbacks can clash quite easily, you need
                  to consider your existing design a bit more as you need to
                  ensure that the print does match with your current accessories
                  and colour theme.
                  <br />
                  Lastly, you need to make sure that you will be happy with the
                  print for a long time to come. Your taste for prints will tire
                  far quicker than a colour and while it is not impossible to
                  change the glass splashback, it is not an easy task.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProsConsBlog;
