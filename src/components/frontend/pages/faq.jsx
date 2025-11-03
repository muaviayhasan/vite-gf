import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Faq extends Component {
  constructor(props) {
    super(props);
  }

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
              <div className="col-sm-12">
                <h2>Faq Content</h2>
                <br />
                <p className="about_text">
                  - What are the thicknesses we supply and its difference?
In granite &amp; marble we supply 20 mm and 30 mm thick worktops and various application. Quartz
comes 15mm, 20mm and 30 mm thick slabs, 20 mm gives sleek modern look while 30 mm is
most of clients go for. 15 mm thick quartz is recommended for splashback, wall decoration and
tiles. </p>
                <p className="about_text">Sintered stone known as porcelain/ceramic or compact surfaces such Dekton, Laminam,
Neolith,.. comes 4 to 30 mm and we recommend 15 mm for worktops.
In terms of prices: Thicker stone surfaces generally cost more.
We do also bespoke thicknesses for kitchen worktops and surfaces, ranging from 40 mm to 100
mm thick, while it give luxurious look it is labour intensive, ultimately cost more.
Glass splashbacks 6 mm thick, glass balustrade 8 to 12 mm thick.
                </p>

                <p className="about_text">
                  - What are the Slab sizes and worktop joint?
Worktop joint depends on slab sizes and kitchen layout. Granite &amp; Marble slabs have various
sizes and relatively no more than 3.2 by 2 meters. While quartz usually comes in standard size
3mx1.4m, however, there are Jumbo sizes vary from 3.2x1.6 m slab. Any island in size greater
than the slab size would have to joint, same apply on worktops that are more than 3 liner meter.
Skills and worktop distribution over slab size is managed by our team to minimise the joints
subject to the worktop layout.
Worktops joints together by coloured resin onsite by the fitters matching the worktop colour.
                </p>

                <p className="about_text">
                  - What are the differences between marble, granite and quartz worktops?
Marble unless treated is not recommended to kitchen worktop, instead it is perfect for vanities
and bathrooms wet-rooms ( cladding), marble is a porous product. Granite is less porous than
marble and its absorption rate vary from one colour to another. Granite is recommended to
kitchen worktop with attention of maintenance, nowadays, Glass &amp; Fusion can source treated
granite worksurfaces against staining with 10 years warranty. Quartz is highly recommended to
worksurfaces due to low maintenance requirements, almost non-porous, strong and hygienic.
There is ceramic worksurfaces that are most hard-wearing than all. </p>

                <p className="about_text">- Which of the material we supply is more durable and why?
All stone materials are durable subject to the application area. Quartz kitchen worktop durable
than granite and marble for kitchen use, however, for stairs and heavy foot fall areas marble or
granite are repairable comparing to quartz which will lose its shines quickly.
Most hard wearing material are compact ceramic/porcelain surfaces bare head, strong scratch
resistant and hygienic. While quartz have limited head resistant comparing to all other types,
hence, quartz worktops are best suited for residential worksurfaces due to its strength, scratch
resistant, strong on impacts, costs and its variety of colours &amp; designs.
Outdoor application areas the kings are Marble, granite and compact materials.
                </p>


                <p className="about_text">
                  - What is our turn around time and order processing?
Turnaround time is subject to stock of the material you have chosen for your project. Available
materials are processed into ONE week turnaround from the date of measuring. The order will

be fabricated in our factory within few days after material been available and we will liaise with
clients for delivery or fitting date. Order stages are: measuring, fabrication and fitting which
usually fall within one week turnaround time. Measuring, we will book site survey upon agreeing
the quote provided while your application area is ready for that purpose. In-house fabrication
using our worktop factory in Hayes London, while our fitting team visit the site usually within
one week from taking measurements. </p>

                <p className="about_text">- What are the materials and type of stones we can process?
We can cut and process: Sintered slabs ( compact surface, ceramic), Marble, Granite, Quartz,
Onyx, Slate, Limestone and sandstones.
                </p>
                <p className="about_text">- Can We match your existing worktop?
We can supply the same materials if you are extending your worksurface, however, matching
100% the existing will be impossible especially if it is natural colour and been fitted long time
ago. Even on quartz surfaces variation from one slab colour to another is possible, although both
slabs are from same supplier and same colour code.
                </p>
                <p className="about_text">- What can we supply left overs ( offcuts)?
Yes, many client which requires small stone worktops can visit our yard and choose from
leftovers at 50% to 100% discounts against RRP prices.
                </p>
                <p className="about_text">- What are the edge profiles we can process.
We can process any edge profile.
                </p>


              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Faq;
