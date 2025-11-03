import React, { Component } from "react";
import { Helmet } from "react-helmet";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import OwlCarousels from "../../features/owl-carousel";
import Testimonial from "../../features/testimonial/testimonial";
import { mainSlider5 } from "../settings";

class Testimonials extends Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>GNF - Testimonials</title>
        </Helmet>

        <Breadcrumb title="Testimonials" adClass="border-0 mb-0" />

        <div className="">
          <div className="container">
            <br />
            <div className="about-testimonials bg-light-2 pt-6 pb-6">
              <div className="container">
                <h2 className="title text-center mb-3">
                  What Customer Say About Us
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
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
