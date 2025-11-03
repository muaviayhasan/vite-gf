import React, { Component } from "react";
import { Helmet } from "react-helmet";

class TenThingsKnowBlog extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/newblog/10-Things-You-Should-Know-About-Kitchen-Glass-Splashbacks-1024x768.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>
                  10 THINGS YOU SHOULD KNOW ABOUT KITCHEN GLASS SPLASHBACKS
                </h3>
                <br />

                <p className="about_text">
                  You are considering installing a glass splashback in your
                  kitchen but is it right for you? A kitchen splashback is so
                  important as it will be protecting your walls whilst you are
                  cooking.
                  <br />
                  <br />
                  This overview will provide you with some of the things that
                  you need to know about kitchen glass splashbacks before you
                  purchase.
                  <br />
                  <br />
                  <br />
                  1: <span className="gold_text_blog">Modern </span>
                  If you have a traditional home, then a glass splashback may
                  not be the right decision for your home as they are usually
                  placed within modern kitchens and homes.
                  <br />
                  However, depending on your kitchen design it may still work
                  for you regardless. You just need to make sure that a glass
                  splashback will fit in.
                  <br />
                  <br />
                  <br />
                  2:
                  <span className="gold_text_blog">
                    &nbsp;Colours and Patterns
                  </span>
                  You may not realise but when creating a glass splashback, you
                  will have a huge range of colours and patterns to choose from,
                  rather than just plain glass or a plain colour. If you would
                  like,
                  <br />
                  <br />
                  <br />
                </p>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  you can think about having a photo effect put on it or even
                  having it personalised; with glass splashbacks you can do so
                  much more with the overall design of your kitchen or even
                  create a focal point from it.
                  <br />
                  <br />
                  3:
                  <span className="gold_text_blog"> Expensive</span>
                  Your budget will be a big decider over which material you have
                  for your splashback, so glass being expensive may rule it out
                  for you. However, it may be expensive, but you will be getting
                  a high quality splashback that can last you for years.
                  <br />
                  <br />
                  4:
                  <span className="gold_text_blog"> Easy to Clean</span>
                  Glass has an amazing feature where it can make your kitchen
                  feel and look much bigger than it actually is. You can use the
                  glass in your kitchen design to help bring more light in to
                  create the illusion that your smaller kitchen is rather large
                  and roomy.
                  <br />
                  <br />
                  5:
                  <span className="gold_text_blog"> Light Reflecting</span>
                  Glass has an amazing feature where it can make your kitchen
                  feel and look much bigger than it actually is. You can use the
                  glass in your kitchen design to help bring more light in to
                  create the illusion that your smaller kitchen is rather large
                  and roomy.
                  <br />
                  <br />
                  6:
                  <span className="gold_text_blog">
                    &nbsp;Long Installation Process
                  </span>
                  When your supplier and fitter arrives to install your glass
                  splashback it will be after they have already made several
                  trips to your home. Your supplier will need to have a lot of
                  information such as ensuring that they have scoped and
                  measured your kitchen area correctly so that the splashback
                  installation goes smoothly. After they have all the
                  measurements they need, they will then be able to fit your
                  splashback during the next appointment.
                  <br />
                  <br />
                  7:
                  <span className="gold_text_blog"> Welcoming</span>
                  As we mentioned above, having a glass splashback can help make
                  your kitchen feel so much bigger, but it can also make it look
                  lighter. Bringing in the light to your kitchen can make it
                  feel much more welcoming, especially in family homes.
                  <br />
                  <br />
                  8:
                  <span className="gold_text_blog">
                    &nbsp;No Windows? No Problem!
                  </span>
                  If your kitchen has no windows or very few, then glass
                  splashbacks will also help the design of your kitchen. Your
                  glass splashback will help to reflect light around the kitchen
                  from other rooms to make your kitchen feel much more open than
                  it actually is; whereas a stone splashback cannot offer you
                  this and may make your kitchen feel closed off.
                  <br />
                  <br />
                  9:
                  <span className="gold_text_blog"> Easily Scratch</span>
                  One of the biggest downfalls of a glass splashback is that it
                  can scratch easily, so you need to be careful what you use
                  when cleaning. However, it generally should not be a problem
                  as splashbacks do not tend to make contact with abrasive or
                  sharp objects by accident, it will usually be a decision you
                  make.
                  <br />
                  <br />
                  10:
                  <span className="gold_text_blog"> DIY</span>
                  Unlike stone splashbacks, it is possible for you to install
                  your glass splashback yourself. However, you still need to
                  know what you are doing to ensure that it has been fitted
                  correctly and will therefore last years. But it is much easier
                  to install than stone splashbacks, which you absolutely should
                  not attempt yourself unless you are a professional.
                  <br />
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

export default TenThingsKnowBlog;
