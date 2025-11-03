import React, { Component } from 'react';

class DashboardFooter extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
         <div className="sub-footer ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="footer-end">
                        <p>
                    <i className="fa fa-copyright" aria-hidden="true"></i> Copyright Glass & Fusion 2025 Powered by: {" "}
                    <a
                      href="https://www.isetech.co/"
                      target="_blank"
                      className="footer_href"
                    >
                      ISETech
                    </a>{" "}
                  </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="payment-card-bottom">
                            <ul>
                                <li>
                                    <a href="#" className="footer_href">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="footer_href">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="#" className="footer_href">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
         );
    }
}
 
export default DashboardFooter;