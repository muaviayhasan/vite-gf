import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterEighteen extends Component {
    render() {
        return(
            <footer className="footer">
                <section className="subscribe">
                    <div className="heading">
                        <h3 className="heading-title">Newsletter</h3>
                        <p className="heading-cat">Subscribe to our newsletter for latest deals and special offers</p>
                    </div>
                    <form action="#">
                        <div className="input-group">
                            <input type="email" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                            <div className="input-group-append">
                                <button className="btn btn-subscribe" type="submit"><span>Subscribe</span></button>
                            </div>
                        </div>
                    </form>
                </section>

                <section className="footer-bottom">
                    <div className="col-xl-8-3col col-md-12">
                        <div className="widget widget-about">

                            <h4 className="widget-title">About us</h4>

                            <p>Praesent dapibus, neque id cursus ucibus, tortor  neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.</p>
                            
                            <div className="widget-about-info">
                                <div className="payment">
                                    <span className="widget-about-title">Payment Method</span>
                                    <figure className="footer-payments">
                                        <img src={`${import.meta.env.VITE_PUBLIC_URL }/assets/images/payments.png`} alt="Payment methods" width="272" height="20" />
                                    </figure>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8-2col col-sm-4 col-md-4">
                        <div className="widget">
                            <h4 className="widget-title">Information</h4>

                            <ul className="widget-list">
                                <li><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/about` }>About Molla</Link></li>
                                <li><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/about` }>How to shop on Molla</Link></li>
                                <li><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                <li><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/contact` }>Contact us</Link></li>
                                <li><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/login` }>Log in</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-8-2col col-sm-4 col-md-4">
                        <div className="widget">
                            <h4 className="widget-title">Customer Service</h4>

                            <ul className="widget-list">
                                <li><Link to="#">Payment Methods</Link></li>
                                <li><Link to="#">Money-back guarantee!</Link></li>
                                <li><Link to="#">Returns</Link></li>
                                <li><Link to="#">Shipping</Link></li>
                                <li><Link to="#">Terms and conditions</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-8-1col col-sm-4 col-md-4">
                        <div className="widget">
                            <h4 className="widget-title">My Account</h4>

                            <ul className="widget-list">
                                <li><Link to="#">Sign In</Link></li>
                                <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/cart` }>View Cart</Link></li>
                                <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist` }>My Wishlist</Link></li>
                                <li><Link to="#">Track My Order</Link></li>
                                <li><Link to="#">Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>            
        )
    }
}

export default FooterEighteen;