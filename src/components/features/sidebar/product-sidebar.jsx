import React, { Component } from 'react';
import { Link } from 'react-router-dom';
  
class ProductSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
        };

        this.resizeHandle = this.resizeHandle.bind(this);
    }

    componentDidMount() {
        window.addEventListener( "resize", this.resizeHandle );
        this.resizeHandle();
    }

    componentWillUnmount() {
        window.removeEventListener( "resize", this.resizeHandle );
    }

    resizeHandle() {
        if ( document.querySelector("body").offsetWidth < 992 ) {
            this.setState({toggle: true});
        } else {
            this.setState({toggle: false});
        }
    }

    hideSideBar() {
        if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
            document.querySelector('body').classList.remove('sidebar-filter-active');
        }
    }

    toggleSideBar() {
        if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
            document.querySelector('body').classList.remove('sidebar-filter-active');
        } else {
            document.querySelector('body').classList.add('sidebar-filter-active');
        }
    }

    closeSideBar() {
        if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
            document.querySelector('body').classList.remove('sidebar-filter-active');
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={ `${ this.state.toggle ? 'sidebar-filter right' : 'sidebar'} sidebar-product` }>
                    <div className={ this.state.toggle ? 'sidebar-filter-wrapper product-sidebar-wrapper' : ''  }>
                        <button onClick = { this.closeSideBar} className = "btn-product btn-close" style = {{marginLeft: 'auto', marginRight: '5px'} }>
                            <i className="icon-close"></i>
                        </button>
                        <div className="widget widget-products">
                            <h4 className="widget-title">Related Product</h4>

                            <div className="products">
                                <div className="product product-sm">
                                    <figure className="product-media">
                                        <a href={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>
                                            <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/products/single/sidebar/1.jpg` } alt="Product" className="product-image"/>
                                        </a>
                                    </figure>

                                    <div className="product-body">
                                        <h5 className="product-title"><a href={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>Light brown studded Wide fit wedges</a></h5>
                                        <div className="product-price">
                                            <span className="new-price">$50.00</span>
                                            <span className="old-price">$110.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-sm">
                                    <figure className="product-media">
                                        <a href={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>
                                            <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/products/single/sidebar/2.jpg` } alt="Product" className="product-image"/>
                                        </a>
                                    </figure>

                                    <div className="product-body">
                                        <h5 className="product-title"><a href={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>Yellow button front tea top</a></h5>
                                        <div className="product-price">
                                            $56.00
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-sm">
                                    <figure className="product-media">
                                        <a href={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>
                                            <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/products/single/sidebar/3.jpg` } alt="Product" className="product-image"/>
                                        </a>
                                    </figure>

                                    <div className="product-body">
                                        <h5 className="product-title"><a href={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>Beige metal hoop tote bag</a></h5>
                                        <div className="product-price">
                                            $50.00
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-sm">
                                    <figure className="product-media">
                                        <a href={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>
                                            <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/products/single/sidebar/4.jpg` } alt="Product" className="product-image"/>
                                        </a>
                                    </figure>

                                    <div className="product-body">
                                        <h5 className="product-title"><a href={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>Black soft RI weekend travel bag</a></h5>
                                        <div className="product-price">
                                            $75.00
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list`} className="btn btn-outline-dark-3"><span>View More Products</span><i className="icon-long-arrow-right"></i></Link>
                        </div>

                        <div className="widget widget-banner-sidebar">
                            <div className="banner-sidebar-title">ad box 280 x 280</div>
                            
                            <div className="banner-sidebar banner-overlay">
                                <Link to="#">
                                    <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/blog/sidebar/banner.jpg` } alt="banner"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                { this.state.toggle ?
                    <button className="sidebar-fixed-toggler right" onClick={ this.toggleSideBar }><i className="icon-cog"></i></button> :
                    ''
                }
                <div className="sidebar-filter-overlay" onClick={ this.hideSideBar }></div>
            </React.Fragment>
        );
    }
}

export default ProductSidebar;