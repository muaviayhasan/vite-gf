import React, { Component } from "react";
import { Helmet } from "react-helmet";

class HowToChooseBlog extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/kitchen-panels-photos-printed-on-glass.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>
                  HOW TO CHOOSE THE RIGHT GLASS SPLASHBACK FOR YOUR KITCHEN?
                </h3>
                <br />

                <p className="about_text">
                  Splashbacks are very important pieces to have within the
                  kitchen, after all they protect your walls. So, you have
                  decided on a glass splashback on your kitchen but you do not
                  know what one to choose. This overview will provide you with
                  some information on how you can choose the best glass
                  splashback for your kitchen.
                  <br />
                  <br />
                  1: <span className="gold_text_blog">Toughening </span>
                  <br />
                  Usually, all of the glass splashbacks that we create we will
                  toughen them automatically, however this does not need to be
                  done all the time. Toughening can interfere with the style
                  slightly so if this is something that you are not keen on
                  happening, then you need to make sure you know the
                  measurements and whether or not we can install your splashback
                  this way.
                  <br />
                  <br />
                  Our requirements for glass splashbacks not being toughened
                  are:
                  <ul>
                    <li>Needs to be 200mm away from heat source</li>
                    <li>Pots cannot rest against glass splashback</li>
                    <li>
                      Cut outs for sockets/switches need to be 50mm from edges
                    </li>
                  </ul>
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  Furthermore, if you are unsure then you are able to send us
                  photos of your kitchen area and we will advise on what we
                  think is best upon viewing them. We can only give our best
                  advice on clear pictures and based on what we are able to see.
                  Toughening is more beneficial but it is not always needed.
                  <br />
                  We provide both modern and traditional glass splashbacks to
                  suit the overall appearance that you have in mind to help
                  create the kitchen or bathroom of your dreams. We are even
                  able to fully hide the glass splashbacks if this is something
                  that you would prefer – all you have to do is let us know your
                  requirements and we will work to meet them.
                  <br />
                  <br />
                  2: <span className="gold_text_blog">Bespoke </span>
                  If our range of glass splashbacks are not what you had in
                  mind, then we are able to create fully bespoke glass
                  splashbacks for your kitchen. All you have to do is have an
                  idea of what you would want or need and we will help you
                  create the splashback of your dreams that meets all the
                  practicality needs too.
                  <br />
                  <br />
                  3:{" "}
                  <span className="gold_text_blog">Consider Your Style </span>
                  All of our glass splashbacks are as practical as the next, so
                  regardless of what the style is they will all meet your
                  standards so picking out the style has never been easier. When
                  picking which style you would like, decide on whether you want
                  it to stand out as a focal point or blend in. Regardless of
                  either, we will create a glass splashback that will complement
                  the design of the kitchen. <br />
                  <br />
                  We offer a range of both traditional and contemporary glass
                  splashbacks, so it is all down to the vision you have in mind
                  for your kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HowToChooseBlog;
