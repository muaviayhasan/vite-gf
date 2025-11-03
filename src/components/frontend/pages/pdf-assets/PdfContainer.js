import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => {
    document.getElementById("pdf-section").classList.remove("pdf-section");
    // document.querySelector(".noprint").style.display = "none";
    var PrintOnly = document.querySelectorAll(".print-only"),
      u;
    for (u = 0; u < PrintOnly; u++) {
      PrintOnly[u].style.display = "none";
    }

    var ChangeSelectColor = document.querySelectorAll(".changeColor"),
      s;
    for (s = 0; s < ChangeSelectColor.length; s++) {
      ChangeSelectColor[s].style.backgroundColor = "white";
    }
    var buttonsHide = document.querySelectorAll(".noprint"),
      i;
    for (i = 0; i < buttonsHide.length; ++i) {
      buttonsHide[i].style.display = "none";
    }
    var borderHide = document.querySelectorAll(".noborder"),
      i;
    for (i = 0; i < borderHide.length; ++i) {
      borderHide[i].style.border = "0px";
    }
    var LabelsWide = document.querySelectorAll(".pdfLabel"),
      j;
    for (j = 0; j < LabelsWide.lenght; j++) {
      LabelsWide[j].style.fontSize = "7px";
    }
    props.createPdf(bodyRef.current);
    setTimeout(
      function() {
        var PrintOnly = document.querySelectorAll(".print-only"),
          u;
        for (u = 0; u < PrintOnly; u++) {
          PrintOnly[u].style.display = "block";
        }
        var ChangeSelectColor = document.querySelectorAll(".changeColor"),
          s;
        for (s = 0; s < ChangeSelectColor.length; s++) {
          ChangeSelectColor[s].style.backgroundColor = (0, 0, 98);
        }
        var borderHide = document.querySelectorAll(".noborder"),
          i;
        for (i = 0; i < borderHide.length; ++i) {
          borderHide[i].style.border = "1px solid #ced4da";
        }
        var buttonsHide = document.querySelectorAll(".noprint"),
          i;
        for (i = 0; i < buttonsHide.length; ++i) {
          buttonsHide[i].style.display = "inline";
        }
        document.getElementById("pdf-section").classList.add("pdf-section");
      }.bind(this),
      1000
    );
  };

  const header = (
    <div className="">
      <div className="Image-div">
        <img
          src="/assets/images/email-temp/pdf-logo.png"
          className="img-fluid"
          alt="glass n fusion"
        />
      </div>
      <div className="side-Info">
        <p className="para">
          <span className="para">Glass & Fusion</span>
        </p>
        <p className="para">
          <span className="para">5 Dawley Road, Hayes, </span>
        </p>
        <p className="para">
          <span className="para">London, UB3 1LS</span>
        </p>
      </div>
      <br />
      <div>
        <br />
        <p>
          <strong>Attention:</strong> Mr.Customer
        </p>
      </div>
    </div>
  );

  const variable = (
    <div className="container pdf-section" id="pdf-section">
      {/* <div className="Image-div">
        <img
          src="/assets/images/email-temp/pdf-logo.png"
          className="img-fluid"
          alt="glass n fusion"
        />
      </div>
      <div className="side-Info">
        <p className="para">
          <span className="para">Glass & Fusion</span>
        </p>
        <p className="para">
          <span className="para">5 Dawley Road, Hayes, </span>
        </p>
        <p className="para">
          <span className="para">London, UB3 1LS</span>
        </p>
      </div> */}
      {/* <br />
      <div>
        <br />
        <p>
          <strong>Attention:</strong> Mr.Customer
        </p>
      </div>
      <span className="custom-span">
        Measurements & Price Estimator (Quartz, Marble, Granite, Compact
        Worktops)
      </span>
      <div className="row">
        <div
          className="col-md-6 custome_table_get_a_quote"
          style={{ borderRight: "0px" }}
        >
          Worktop Dimensions
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Item</label>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label className="custome_lable">Width(mm)</label>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label className="custome_lable">Length(mm)</label>
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                <label className="custome_lable">Area(m²)</label>
              </div>
            </div>
          </div>
          Splashback Dimensions
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Item</label>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label className="custome_lable">Width(mm)</label>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label className="custome_lable">Length(mm)</label>
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                <label className="custome_lable">Area(m²)</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 custome_table_get_a_quote">
          Edge Details
          <br />
          Fabrication
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Item</label>
              </div>
            </div>
            <div className="col-md-4 cust-marg-get-a-quote">
              <div className="form-group">
                <label className="custome_lable">Quantity</label>
              </div>
            </div>
            <div className="col-md-4 cust-marg-get-a-quote">
              <div className="form-group">
                <label className="custome_lable">Price</label>
              </div>
            </div>
          </div>
          ExtraServices
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Service Name</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Unit Price</label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label className="custome_lable">Quantity</label>
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                <label className="custome_lable">Price</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="custom-span">
        Measurements & Bespoke Glass Price Estimator
      </span>
      <div className="container" style={{ border: "1px solid" }}>
        <div className="row para-margins">
          <div className="col-md-12">
            <ol>
              <li> 1. Make sure you put all the sizes in millimetres</li>
              <br />
              <li>
                2. Glass panels over 2950 x 1350 mm are charged as oversized
                panels- please call us for a quotation.
              </li>
              <li>
                3. If you need Socket Cutouts or holes on your panels, make sure
                you put how many of them you need on each panel in the CUTOUT
                field
              </li>
              <li>
                4. If your glass is <strong>SHAPED</strong> or not should be
                completed according to the image below:
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 cusdiv">
            <span className="cust-center">
              <strong>Shaped Glass</strong>
            </span>
            <img
              src="/assets/images/Shaped-Glass_461x164.png"
              className="img-fluid "
              alt="Marble"
              style={{ width: "461px", height: "164px" }}
            />
          </div>
          <div className="col-md-6 cusdiv">
            <div className="cust-centers">
              <strong>Not a Shaped Glass</strong>
            </div>
            <img
              src="/assets/images/not-shaped-glass_371x121.png"
              className="img-fluid "
              alt="Marble"
              style={{ width: "377px", height: "121px" }}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div
            className="col-md-6 custome_table_get_a_quote"
            style={{ borderRight: "0px" }}
          >
            Choose your Design
          </div>
          <div className="col-md-6 custome_table_get_a_quote">
            <div className="row">
              <div className="col-md-6"> Sparkle Add-on: No/Yes</div>
              <div className="col-md-6">Survey & Fit Options:</div>
            </div>
            Cutouts
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Item</label>
                </div>
              </div>
              <div className="col-md-4 cust-marg-get-a-quote">
                <div className="form-group">
                  <label className="custome_lable">Quantity</label>
                </div>
              </div>
              <div className="col-md-4 cust-marg-get-a-quote">
                <div className="form-group">
                  <label className="custome_lable">Price</label>
                </div>
              </div>
            </div>
            ExtraServices
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Service Name</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label className="custome_lable">Unit Price</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="custome_lable">Quantity</label>
                </div>
              </div>
              <div className="col-md-1 cust-marg-get-a-quote">
                <div className="form-group">
                  <label className="custome_lable">Price</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <div className="row">
        <div className="col-12">
          <table className="table table-image">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Material and Product</th>
                <th scope="col">Material</th>
                <th scope="col">Image</th>
                <th scope="col">Thickness</th>
                <th scope="col">Price £/m²</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Red delicate pattern</td>
                <td>Quartz</td>
                <td className="w-25">
                  {/* <img
                    src="/assets/images/henry-co--odUkx8C2gg-unsplash.jpg"
                     className="img-fluid img-thumbnails"
                     alt="Quartz"
                    /> */}
                </td>

                <td>30mm</td>
                <td>200.00</td>
              </tr>
              <br />
              <br />
              <tr>
                <th scope="row">2</th>

                <td>Black pattern</td>
                <td>Marble</td>
                <td className="w-25">
                  {/* <img
                                  src="/assets/images/henry-co--odUkx8C2gg-unsplash.jpg"
                                  className="img-fluid img-thumbnails"
                                  alt="Marble"
                                /> */}
                </td>

                <td>25mm</td>
                <td>300.00</td>
              </tr>
              <br />
              <br />
              <tr>
                <th scope="row">3</th>

                <td>Blue pattern</td>
                <td>Marble</td>
                <td className="w-25">
                  {/* <img
                                  src="/assets/images/henry-co--odUkx8C2gg-unsplash.jpg"
                                  className="img-fluid img-thumbnails"
                                  alt="Marble"
                                /> */}
                </td>

                <td>25mm</td>
                <td>200.00</td>
              </tr>
              <br />
              <br />
              <tr>
                <th scope="row">4</th>

                <td>Green pattern</td>
                <td>Glass</td>
                <td className="w-25">
                  {/* <img */}
                  {/* src="/assets/images/henry-co--odUkx8C2gg-unsplash.jpg" */}
                  {/* className="img-fluid img-thumbnails" */}
                  {/* alt="Glass" */}
                  {/* /> */}
                </td>

                <td>30mm</td>
                <td>200.00</td>
              </tr>
            </tbody>
          </table>
          <div className="pdf-footer" style={{ border: "1px solid" }}>
            <div className="TextC">
              <p className="pdf-footer-text">
                <span className="pdf-footer-text">Note: </span>
              </p>
              <p className="pdf-footer-text">
                <span className="pdf-footer-text">Terms and Conditions: </span>
              </p>
            </div>
            {/* <div className="pdf-footer2" style={{ border: "1px solid" }}>
              <p style={{ font: "11px" }}>
                <span>
                  info@glassfusionltd.co.uk | 07823345500 02039359199 |
                  www.glassfusionltd.co.uk
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
        <button className="btn btc" onClick={createPdf}>
          Email me the quote
        </button>
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {header}
        <br />
        {props.children}
        {variable}
      </section>
    </section>
  );
};
