import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SocialLink } from '../../features/social-link';

class FooterEight extends Component {
    render() {

        return (
            <footer className="footer footer-2">
                <div className="footer-middle">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <div className="widget widget-about">
                                    <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos/demo-7/logo-footer.png` } className="footer-logo" alt="Footer Logo" width="105" height="25"/>
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>
                                    
                                    <div className="widget-about-info">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <span className="widget-about-title">Got Question? Call us 24/7</span>
                                                <Link  to="tel:123456789">+0123 456 789</Link>
                                            </div>
                                            <div className="col-sm-6 col-md-8">
                                                <span className="widget-about-title">Payment Method</span>
                                                <figure className="footer-payments">
                                                    <img src={`${import.meta.env.VITE_PUBLIC_URL }/assets/images/payments.png`} alt="Payment methods" width="272" height="20"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Useful Links</h4>

                                    <ul className="widget-list">
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/about` }>About Glass and Fusion</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/about` }>How to shop on Glass and Fusion</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/contact` }> us</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/login` }>Log in</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>

                                    <ul className="widget-list">
                                        <li><Link  to="#">Payment Methods</Link></li>
                                        <li><Link  to="#">Money-back guarantee!</Link></li>
                                        <li><Link  to="#">Returns</Link></li>
                                        <li><Link  to="#">Shipping</Link></li>
                                        <li><Link  to="#">Terms and conditions</Link></li>
                                        <li><Link  to="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>

                                    <ul className="widget-list">
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/login` }>Log in</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/cart` }>View Cart</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist` }>My Wishlist</Link></li>
                                        <li><Link  to="#">Track My Order</Link></li>
                                        <li><Link  to="#">Help</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-2">
                                <div className="widget widget-newsletter">
                                    <h4 className="widget-title">Sign Up To Newsletter</h4>

                                    <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>
                                    
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required=""/>
                                            <div className="input-group-append">
                                                <button className="btn btn-dark" type="submit"><i className="icon-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container-fluid">
                        <p className="footer-copyright">Copyright © {(new Date()).getFullYear() } Glass and FusionStore. All Rights Reserved.</p>
                        <ul className="footer-menu">
                            <li><Link  to="#">Terms Of Use</Link></li>
                            <li><Link  to="#">Privacy Policy</Link></li>
                        </ul>

                        <SocialLink label={ true} />
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterEight;