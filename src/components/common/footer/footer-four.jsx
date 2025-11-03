import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FooterFour extends Component {
    render() {
        const { logo = "assets/images/logo.png" } =this.props;
        return (
            <footer className="footer footer-2">
                <div className="footer-middle">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <div className="widget widget-about">
                                    <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + logo } className="footer-logo" alt="Footer Logo" width="105" height="25"/>
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
                                                    <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/payments.png` } alt="Payment methods" width="272" height="20"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Information</h4>

                                    <ul className="widget-list">
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/about` }>About Molla</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/about` }>How to shop on Molla</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                        <li><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/contact` }>Contact us</Link></li>
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
                                    <h4 className="widget-title">Newsletter</h4>

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
                        <p className="footer-copyright">Copyright © { (new Date()).getFullYear() } Molla Store. All Rights Reserved.</p>
                        <ul className="footer-menu">
                            <li><Link  to="#">Terms Of Use</Link></li>
                            <li><Link  to="#">Privacy Policy</Link></li>
                        </ul>
                        <div className="social-icons social-icons-color">
                            <span className="social-label">Social Icons</span>
                            <Link  to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                            <Link  to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                            <Link  to="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                            <Link  to="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>
                            <Link  to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterFour;