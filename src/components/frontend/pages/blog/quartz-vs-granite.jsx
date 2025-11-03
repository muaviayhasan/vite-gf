import React, { Component } from "react";
import { Helmet } from "react-helmet";

class QuartzvsGranite extends Component {
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
                  src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/b4full.jpg`}
                  className="img-fluid blog-image-custome"
                  alt=""
                  style={{ width: "100%;" }}
                />
              </div>

              <div className="col-xl-7 col-lg-7 col-md-12">
                <h3>Worktops Face-Off: Granite Vs Quartz, Which is Better?</h3>
                <br />

                <p className="about_text">
                  Choosing the best worktop or countertop is pretty challenging.
                  There are a lot of materials in the market with varying
                  designs, textures, and colours. It is no wonder most clients
                  spend a good number of hours – if not days – deciding on the
                  best worktop to opt for. Each material comes with several
                  benefits as well as disadvantages, therefore, it is crucial to
                  weigh the pros and cons relative to the intended usage before
                  making a choice. While granite is touted as the ‘boss’ of them
                  all because of its unique features, it is porous and a bit
                  difficult to maintain compared to quartz.
                  <br />
                  <br />
                  Thus, granite may not be your best bet if maintenance is a
                  deal breaker. However, granite offers lots of advantages over
                  quartz, especially in terms of outdoor use, uniqueness, and
                  longevity. So, basically, every material is a winner. It,
                  however, depends on the features you are looking out for. That
                  said, here is a quick comparison of both materials, taking
                  into account their various advantages and disadvantages. I’m
                  positive this will help to expedite the decision making
                  process. Enjoy!
                  <br />
                </p>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <p className="about_text">
                  <br />
                  <br />
                  1: <span className="gold_text_blog">Durability</span>
                  <br />
                  <br />
                  <span className="gold_text_blog">Granite:</span>
                  <br /> Granite material is fairly resistant to heat, damages,
                  and other environmental factors. If maintained properly,
                  granite worktops and countertops could last up to a hundred
                  years. Compared to quartz, it may take the second lead as it
                  is porous, as such, more vulnerable to stains, spills,
                  moisture, and damages.
                  <br />
                  <br />
                  <span className="gold_text_blog">Quartz:</span>
                  <br /> Quartz, on the other hand, is way stronger and more
                  resistant to moisture, heat, spills, stains, and other
                  damages. These features make it better adapted at withstanding
                  damages, thus, requiring less maintenance and lasting longer
                  than granite.
                  <br />
                  <br />
                  2: <span className="gold_text_blog">Appearance</span>
                  <br />
                  <br />
                  <span className="gold_text_blog">Granite:</span>
                  <br /> When it comes to unique designs and styles, granite is,
                  undoubtedly, your best bet. They come in a wide range of
                  designs yet, no two granite contain the same pattern. This
                  makes it the go-to choice for clients who want something out
                  of the crowd.
                  <br />
                  <br />
                  <span className="gold_text_blog">Quartz:</span>
                  <br /> As an engineered stone, quartz tends to offer a wider
                  range of options to homeowners compared to granite. Although
                  the patterns are not unique as seen in granite, they are
                  specially engineered in different styles and contemporary
                  designs to meet the taste of the average homeowner out there.
                  <br />
                  <br />
                  3: <span className="gold_text_blog">Maintenance</span>
                  <br />
                  <br />
                  <span className="gold_text_blog">Granite:</span> Granite
                  worktop requires more care compared to quartz. You will have
                  to clean it regularly to avoid build up and stains. Also, it
                  requires sealing from time to time – say once or twice every
                  year – depending on the how often you use your worktop and
                  what you use it for.
                  <br />
                  <br />
                  <span className="gold_text_blog">Quartz:</span> True, you get
                  to clean quartz worktops regularly, however, it does not
                  require as much maintenance as granite does. For starters, you
                  do not have to reseal every year. For ease of maintenance, I’m
                  positive quartz is the smart choice here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default QuartzvsGranite;
