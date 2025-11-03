import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

// import Custom Components
import HeaderSix from '../../../common/header/header-6';
import OuterOverlay  from '../../../common/overlay/outer-overlay';
import MobileMenu from '../../../common/header/common/mobile-menus/menu-2';
import FooterSix from '../../../common/footer/footer-six';
import Breadcrumb from '../../../common/breadcrumb';
import OwlCarousel from '../../../features/owl-carousel';
import QuickView from '../../../features/product/quickview';
import ProductListThree from '../../../features/product/common/product-list-three';
import Brand from '../../../features/brand/brand-one';
import ServiceTwo from '../../../features/service-list/service-two';
import ShopMarketSidebar from '../../../features/sidebar/shop-market-sidebar';

import FeaturedCollection from './featured_collection';

import { mainSlider10, mainSlider11 } from '../../settings';

// import store
import store from '../../../../store';
import { initSettings } from '../../../../utils/utils';
import { outerLoading } from '../../../../actions';
import style from '../../../demoes/index13/style.scss';


class ShopMarket extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        initSettings();
        store.dispatch(outerLoading());
    }

    componentWillUnmount() {
    }
    
    render() {
        return (
            <React.Fragment>
                <OuterOverlay/>
                <div className ="page-wrapper">
                    <HeaderSix/>

                    <div className="main">
                        <Breadcrumb title="Electronics" parent1={ ["Shop","shop/sidebar/list"] } adClass="mb-3"/>

                        <div className="page-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 col-xl-4-5col">
                                        <OwlCarousel  adClass="category-banners-slider owl-simple owl-nav-inside" carouselOptions={ mainSlider10  }>
                                            <div className="banner banner-poster">
                                                
                                                <Link to="#">
                                                    <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/banners/banner-7.jpg` } alt="Banner"/>
                                                </Link>

                                                <div className="banner-content banner-content-right">
                                                    <h3 className="banner-subtitle"><Link to="#">Amazing Value</Link></h3>
                                                    <h2 className="banner-title"><Link to="#">High Performance 4K TVs</Link></h2>
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></Link>
                                                </div>
                                            </div>

                                            <div className="banner banner-poster">
                                                <Link to="#">
                                                    <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/banners/banner-8.jpg` } alt="Banner"/>
                                                </Link>

                                                <div className="banner-content">
                                                    <h3 className="banner-subtitle"><Link to="#">Weekend Deal</Link></h3>
                                                    <h2 className="banner-title"><Link to="#">Apple & Accessories</Link></h2>
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </OwlCarousel>

                                        <div className="mb-3"></div>

                                        <Brand count = {7} sliderOption = {mainSlider11} adClass = "owl-carousel owl-simple owl-nav-align" />

                                        <div className="mb-3 mb-lg-5"></div>

                                        <div className="cat-blocks-container">
                                            <div className="row">
                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="cat-block">
                                                        <figure>
                                                            <span>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/cats/cat-page/1.jpg` } alt="Category"/>
                                                            </span>
                                                        </figure>

                                                        <h3 className="cat-block-title">Desktop Computers</h3>
                                                    </Link>
                                                </div>

                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="cat-block">
                                                        <figure>
                                                            <span>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/cats/cat-page/2.jpg` } alt="Category"/>
                                                            </span>
                                                        </figure>

                                                        <h3 className="cat-block-title">Monitors</h3>
                                                    </Link>
                                                </div>

                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="cat-block">
                                                        <figure>
                                                            <span>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/cats/cat-page/3.jpg` } alt="Category"/>
                                                            </span>
                                                        </figure>

                                                        <h3 className="cat-block-title">Laptops</h3>
                                                    </Link>
                                                </div>

                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="cat-block">
                                                        <figure>
                                                            <span>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/cats/cat-page/4.jpg` } alt="Category"/>
                                                            </span>
                                                        </figure>

                                                        <h3 className="cat-block-title">iPads & Tablets</h3>
                                                    </Link>
                                                </div>

                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="cat-block">
                                                        <figure>
                                                            <span>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/cats/cat-page/5.jpg` } alt="Category"/>
                                                            </span>
                                                        </figure>

                                                        <h3 className="cat-block-title">Hard Drives & Storage</h3>
                                                    </Link>
                                                </div>

                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="cat-block">
                                                        <figure>
                                                            <span>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/cats/cat-page/6.jpg` } alt="Category"/>
                                                            </span>
                                                        </figure>

                                                        <h3 className="cat-block-title">Printers & Supplies</h3>
                                                    </Link>
                                                </div>

                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="cat-block">
                                                        <figure>
                                                            <span>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/demos/demo-13/cats/cat-page/7.jpg` } alt="Category"/>
                                                            </span>
                                                        </figure>

                                                        <h3 className="cat-block-title">Computer Accessories</h3>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-2"></div>

                                        <h2 className="title title-border">Featured Items</h2>
                                        
                                        <FeaturedCollection />
                                        
                                        <div className="mb-4"></div>

                                        <ProductListThree />
                                    </div>
                                    <div className="col-lg-3 col-xl-5col order-lg-first">
                                        <ShopMarketSidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cta cta-horizontal cta-horizontal-box bg-primary">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <h3 className="cta-title text-white">Join Our Newsletter</h3>
                                        <p className="cta-desc text-white">Subcribe to get information about products and coupons</p>
                                    </div>
                                    
                                    <div className="col-lg-7">
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-white-2" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </div>

                    <FooterSix>
                        <ServiceTwo />
                    </FooterSix>
                    
                    <QuickView />
                    <ToastContainer autoClose={ 3000 } className="toast-container" />
                </div>

                <MobileMenu />
            </React.Fragment>
        );
    }
}

export default ShopMarket;