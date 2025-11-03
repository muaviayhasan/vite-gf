import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import OwlCarousels from "../../features/owl-carousel";
import Testimonial from "../../features/testimonial/testimonial";
import { mainSlider5 } from "../settings";
// import Custom Components
import Breadcrumb from "../../common/breadcrumb";

class AboutUs extends Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>About Glass and Fusion</title>
          <meta
            name="description"
            content="Glass & Fusion has over 20 years experience in delivering highest quality bespoke kitchen worktops from granite, quartz, marble, compact worktops  and glass splashbacks for both residential and commercial properties."
          />
          <meta
            name="keywords"
            content="Kitchen design, kitchen manufacturing, stone kitchen worktop, Granite kitchen worktop, Marble kitchen worktop, Quartz kitchen worktop, Stone splashbacks, Ceramic kitchen worktop, marble stairs, stone fireplace,Bespoke tile,  Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops, London kitchen worktops."
          />
        </Helmet>

        <Breadcrumb title="About Us" adClass="border-0 mb-0" />

        <div className="">
          <div className="page-content pb-0" style={{ width: "100%" }}>
            <p
              className="col-md-12"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            />
            <div className="page-content">
              <div className="container">
                <figure className="entry-media">
                  <div className="owl-carousel owl-simple owl-light owl-nav-inside owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0.4s ease 0s",
                        }}
                      >
                        <div className="owl-item active">
                          <div className="lazy-overlay bg-3">
                            <img src="/assets/images/about/Top-Banner.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <article className="entry single-entry">
                      <div className="entry-body">
                        <div className="entry-content editor-content">
                          <div className="container">
                            <h2 className="entry-title entry-title-big">
                              About Glass & Fusion
                            </h2>
                            <p>
                              GLASS & FUSION proudly delivers the highest
                              quality material and best workmanship to the heart
                              of your home. We have over 20 years experience in
                              Templating, Installation and Fabrication to
                              deliver best quality bespoke kitchen worktops from
                              granite, quartz, marble, and glass splashbacks for
                              both residential and commercial properties. Our
                              products are not limited to stone kitchen worktops
                              but extend to marble stairs, dining tables,
                              fireplaces and bathrooms.
                            </p>
                          </div>
                        </div>
                        {/* <p
                          style={{
                            justifyContent: "center",
                            display: "flex",
                            marginTop: "3%",
                          }}
                        >
                          <img
                            alt="blog"
                            src="/assets/images/custom_pages/glass-splash-back/Bottom-banner2.jpg"
                          />
                        </p> */}
                        <div className="container" style={{ marginTop: "3%" }}>
                          <div className="row">
                            <div className="col-lg-6 mb-3 mb-lg-0">
                              <img
                                alt="blog"
                                src="/assets/images/about/Middle-image-2.jpg"
                              />
                              <h2 className="title" style={{ marginTop: "3%" }}>
                                Fabrication and Fitting
                              </h2>

                              <p>
                                Bespoke kitchen worktops from granite, quartz,
                                marble and ultra compact surfaces require great
                                deal of attention. We can help you to choose the
                                right colour and material for your needs. We are
                                specialised in fabrication and installation of
                                stone worktops along with glass splashbacks for
                                both trade and residential clients.
                              </p>
                            </div>
                            <div className="col-lg-6 mb-3 mb-lg-0">
                              <img
                                alt="blog"
                                src="/assets/images/about/middle-image.jpg"
                              />
                              <h2 className="title" style={{ marginTop: "3%" }}>
                                Quality Products & Services
                              </h2>

                              <p>
                                Here at G&F, we pride ourselves in offering top
                                quality kitchen worktops and splashbacks
                                constructed from the finest sourced materials.
                                That is why we offer 10-years warranty for our
                                products.
                              </p>
                            </div>
                          </div>
                          <div className="mb-5">&nbsp;</div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 mb-3 mb-lg-0">
                    <h2 className="title">Consultation Stage</h2>

                    <p className="mb-2">
                      Deciding on the material of your kitchen worktop is such
                      an important one as it will set the tone for your whole
                      kitchen. At Glass & Fusion we assist you with all the
                      details throughout the whole process of your kitchen
                      worktop renewal. Our main aim is to provide you with the
                      knowledge and details about our products, ensuring that
                      you are making the right kitchen worktop choice, bespoke
                      and tailored to your requirements. At the consultation
                      stage all options presented with accurate figures, time
                      scale and list of detailed requirements. Clear vision,
                      single point of contact and studying the project process
                      are the skeleton of Glass & Fusion’s success.
                    </p>
                    {/* <a
                      className="btn btn-sm btn-minwidth btn-outline-primary-2 _custom_pages_view_more"
                      href="/react/molla/demo-5/blog/classic"
                    >
                      <span>VIEW OUR NEWS</span>
                    </a> */}
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <div className="about-images">
                      <img
                        alt=""
                        className="about-img-front"
                        src="/assets/images/about/bottom-right-big-image.jpg"
                      />
                      <img
                        alt=""
                        className="about-img-back"
                        src="/assets/images/custom_pages/glass-splash-back/bottom-right-image2.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-testimonials bg-light-2 pt-6 pb-6">
              <div className="container">
                <h2 className="title text-center mb-3">
                  What Our Customers Say{" "}
                </h2>

                <OwlCarousels
                  adClass="owl-simple owl-testimonials-photo"
                  carouselOptions={mainSlider5}
                >
                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                Glass and Fusion were recommended to me by a friend who had used
                                them in the past for a splashback with great success. From my
                                original visit to their showroom, I was dealt with in a friendly yet
                                professional manner which inspired confidence. Their fitter came to
                                my property to template the job and found that the walls were not as
                                flat as they could be! Also, a water pipe ran up to the flat above
                                mine in the corner of my kitchen which proved to be another problem.
                                Despite this, the end result is simply fantastic. The installation
                                was carried out with precision and lack of mess and I would have no
                                hesitation in recommending them wholeheartedly. Many thanks to all
                                at Glass and fusion.
                                ”"
                    name="Terry Yeadon"
                    job="March 2019"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                Abdel Fliti of Glass & Fusion and his superb team were responsible
                                for what can only be described as my best contractor interaction on
                                what has been for me, an 11 month home redevelopment. Slick,
                                professional, creative and utter experts at what they do, they are
                                responsible for giving me a luxury worktop and splashback finish to
                                an otherwise standard kitchen I installed. Super caloborative with a
                                eye for design and finish, they deserve high praise and complete
                                recommendation. With a can-do attitude, skilled fitters and an
                                impressive selection of marble and quartz colours and finishes,
                                amongst other choice materials, they are an asset to any design
                                project you may be working on. Such is my confidence, they are
                                already contracted to work on my next two projects. Glass & Fusion -
                                I thank you!
                                ”"
                    name="Richard Garcia"
                    job=" December 2018"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                First class service, great product and professional installation. I
                                am over the moon with! Had friends and family comment on how good it
                                looks! Thanks!
                                ”"
                    name="David – Chelsea"
                    job=" Nov, 2017"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                               From the time I walked into the showroom right until the end this
                               company has been nothing but professional and has given exceptional
                               customer service. I would highly recommend them and will definitely
                               use them again. I am so pleased that amongst all the companies I had
                               to quote me I chose Glass & Fusion Ltd.
                                ”"
                    name="Asmira"
                    job="April 2018"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                Very professional and excellent service! Plus reasonable prices.
                                They answered my emails every time with patience and speed reply.
                                speedy service before Christmas! Luckily I found Glass& Fusion! They
                                did my worktop in a week! My kitchen was ready for Christmas! Thank
                                you! Top job!
                                ”"
                    name="Qi He"
                    job="Jan 2020"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                Fantastic service and beautiful workmanship. The measurements were
                                exact, and the fitting was done with care. Everyone associated with
                                the company is charming and courteous and they gave us excellent
                                advice A really good experience and we would recommend unreservedly.
                                ”"
                    name="Ed Clark"
                    job="June 2019"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                Fantastic quality, workmanship, service and price. I was recommended
                                Abdel, so glad I did. I visited their showroom in Hayes and the
                                choice was vast in terms of choice of materials and colours - I
                                ended up going for quartz for our kitchen and utility room. Abdel
                                was also very knowledgeable and made some good suggestions. Two guys
                                came to fit it, having previously come to measure and they were
                                equally brilliant. Saved me a lot of money over our contractors
                                suggestions.
                                ”"
                    name="James Howcroft"
                    job="FEB 2019"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                 I have been using Glass Fusion for several years now,
                                 supplying me made to measure worktops and bespoke items to my
                                 interior design clients. They gave us hands-on advice right from the
                                 consultation stage saving us struggles during designing & fitting
                                 process. Experienced staff and did fantastic job and everytime.
                                ”"
                    name="Amanda Mcknight"
                    job="Feb 2020"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                Excellent quality and value. Responsive customer service from Serena
                                and the one week turnaround on our order was excellent.
                                <br />
                                Very reasonable prices on the extras and everything beautifully
                                finished.
                                <br />
                                Highly recommended.
                                ”"
                    name=" Alistair Roberts"
                    job="May 2019"
                  />

                  <Testimonial
                    image="assets/images/testimonials/user-1.jpg"
                    content="“ 
                                 FABULOUS!!!!!
                                 <br />
                                 Serena THANK YOU So0Oo much !!
                                 <br />
                                 We’ve moved recently to our house and our kitchen worktop looks
                                 amazingggg.
                                 <br />
                                 To everyone who’s looking for high quality worktops with reasonable
                                 price please visit Glass &Fusion Ltd and meet the amazing Serena and
                                 her team.
                                ”"
                    name="Sadia"
                    job="Sep 2019"
                  />
                </OwlCarousels>
              </div>
            </div>

            <div className="mb-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
