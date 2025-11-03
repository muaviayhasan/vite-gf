import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Fabrication extends Component {
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
                <h2>Fabrication:</h2>
                <br />

                <p><h5>
                  In house fabrication using automated and semi-automated machineries, skilled stonemasons fabricate
                  and shape stone worktops and other product to perfection. The factory & its showroom over 3500 SFT
                  with three production lines for granites and marbles worktops, quartz worktops and sintered stone
                  surfaces. Consistency and quality control are maintained through quality check procedures for each and
                  every product we supply meeting and exceeding UK standard.
                  <br />

                  Production is not limited to commercial projects, we also fabricate for residentials, builders and kitchen
                  showrooms. <br /><b>Products are (not limited to):</b>
                  <br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Granite kitchen worktop.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Marble kitchen worktop.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Quartz Kitchen worktop.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bespoke Marble tiles.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Fireplaces.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Marble, Granite and Quartz vanity tops.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Stone & sintered stone countertops.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Made to measure stone stairs.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Stone splashbacks.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Glass Splashbacks.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Compact surfaces facades.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Sintered stone worktops.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Porcelain and Ceramic decorative panels.<br />

                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- All type of stone worksurfaces including cladding, bath surrounds and bespoke marble wet-
                  rooms.<br /><br />

                  Over 20 years of experience with extensive sourcing links, Glass & Fusion have managed quality,
                  consistency and prices crafting beautiful worksurfaces at affordable prices. <b>Our main services but not
                  limited to:</b><br /><br />

                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <b>Supply only:</b> Fabrication based on client measurements with sourcing materials and stone slabs.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <b>Supply and Fit:</b> Measure, supply and fit.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <b>Replace worktops:</b> Replacing existing worksurface with option of dismantle existing worktop
                  and reconnect appliances to the newly fabricated  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;worktop.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <b>Showrooms assistance:</b> We fabricate and source materials for showrooms for display purpose
                  with 75% to 100% OFF.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <b>Contracts:</b> Contractors can enjoy the benefit of our interior design consultant while Glass &
                  Fusion source, fabricate and deliver projects on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time. Projects are managed by dedicated team
                  controlling cost, schedule, fabrication and delivery time.<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <b>Designing:</b> At Glass & Fusion we can help sourcing the right material fit to purpose worksurface
                  with colour scheme & cost in mind, including &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fitting lit countertops and worksurfaces.<br /><br />

                  <b>Materials:</b> We process Marble, Granite, Quartz, Sintered stone (porcelain & ceramic), Onyx, Slate,
Limestone, Basalt, Sandstone, Semi-Precious stone, quartzite and Glass.
                </h5></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Fabrication;
