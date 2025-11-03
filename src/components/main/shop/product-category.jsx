import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import HeaderOne from '../../common/header/header-1';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import OuterOverlay from '../../common/overlay/outer-overlay';
import InnerOverlay from '../../common/overlay/inner-overlay';
import FooterOne from '../../common/footer/footer-one';
import FooterFour from '../../common/footer/footer-four';
import CategoryFilter from '../../features/sidebar/category-filter';
import LayOut from '../../app';
import ErrorPage from '../../main/pages/404';

import { initSettings } from '../../../utils/utils';
import _data from '../../../mock_data/data';
import { getCountByCategory } from '../../../services';
import { outerLoading, innerLoading } from '../../../actions';

class ProductCategory extends Component{

    componentDidMount() {
        initSettings();
        this.props.outerLoading();
    }

    componentDidUpdate() {
        this.props.innerLoading();
    }

    componentWillUnmount() {
        this.props.outerLoading();
    }

    showSideBar(){
        document.querySelector('body').classList.add('sidebar-filter-active');
    }
    
    render(){
        const { products } = this.props;
        if ( ! products) return '';

        const type = this.props.match.params.type;
        if (type !== 'boxed' && type !== 'fullwidth') {
            return (
                <LayOut>
                    <ErrorPage />
                </LayOut>
            )
        }

        const title = { "boxed": "Product Category Boxed", "fullwidth": "Product Category Fullwidth" }
        const breadcrumbs = { "boxed": "Boxed", "fullwidth": "Fullwidth" };
        let counts = [];

        _data.categories.wears.map(( item, index ) => {
            counts.push( getCountByCategory(products, item.name) );
            return null;
        });

        return(
            <React.Fragment>
                <OuterOverlay/>
                <div className ="page-wrapper">
                    <HeaderOne container={ type === 'boxed' ? 'container' : 'container-fluid'}/>

                    <div className="main">
                        <InnerOverlay/>
                        <div className="page-header text-center" style={ {backgroundImage: `url('assets/images/page-header-bg.jpg')`} }>
                            <div className={ type === 'boxed' ? 'container' : 'container-fluid'  }>
                                <h1 className="page-title">{ title[type] }<span>Shop</span></h1>
                            </div>
                        </div>

                        <nav aria-label="breadcrumb" className="breadcrumb-nav breadcrumb-with-filter">
                            <div className={ type === 'boxed'? 'container' : 'container-fluid'  }>
                                <button className="sidebar-toggler" onClick = {() => this.showSideBar() } style = {{padding: "0"} }><i className="icon-bars"></i>Filters</button>

                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/` }>Home</Link></li>
                                    <li className="breadcrumb-item"><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>Shop</Link></li>
                                    <li className="breadcrumb-item"><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>Product Category</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{ breadcrumbs[type] }</li>
                                </ol>
                            </div>
                        </nav>

                        <div className="page-content">
                            <div className="categories-page" key={ type }>
                                { type === "boxed" ? 
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="banner banner-cat banner-badge">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/boxed/banner-1.jpg` } alt="Banner" />
                                                    </Link>

                                                    <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <h3 className="banner-title">Dresses</h3>
                                                        <h4 className="banner-subtitle">{counts[0] } Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </Link>
                                                </div>

                                                <div className="banner banner-cat banner-badge">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/boxed/banner-2.jpg` } alt="Banner" />
                                                    </Link>

                                                    <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <h3 className="banner-title">Jackets</h3>
                                                        <h4 className="banner-subtitle">{counts[3] } Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/boxed/banner-3.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">T-shirts</h3>
                                                                <h4 className="banner-subtitle">{counts[1] } Products</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/boxed/banner-4.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">Jeans</h3>
                                                                <h4 className="banner-subtitle">{counts[6] } Products</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="banner banner-cat banner-badge">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/boxed/banner-5.jpg` } alt="Banner" />
                                                    </Link>

                                                    <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <h3 className="banner-title">Bags</h3>
                                                        <h4 className="banner-subtitle">{counts[2] } Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-3">
                                                <div className="banner banner-cat banner-badge">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/boxed/banner-6.jpg` } alt="Banner" />
                                                    </Link>

                                                    <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <h3 className="banner-title">Sportwear</h3>
                                                        <h4 className="banner-subtitle">{counts[7] } Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-3 order-md-last">
                                                <div className="banner banner-cat banner-badge">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/boxed/banner-8.jpg` } alt="Banner" />
                                                    </Link>

                                                    <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <h3 className="banner-title">Jumpers</h3>
                                                        <h4 className="banner-subtitle">{counts[5] } Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="banner banner-cat banner-badge">
                                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/boxed/banner-7.jpg` } alt="Banner" />
                                                    </Link>

                                                    <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                        <h3 className="banner-title">Shoes</h3>
                                                        <h4 className="banner-subtitle">{counts[4] } Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                type === "fullwidth" ?
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/fullwidth-page/banner-1.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">Jackets</h3>
                                                                <h4 className="banner-subtitle">{counts[3] } Products</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4">
                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/fullwidth-page/banner-2.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">Jeans</h3>
                                                                <h4 className="banner-subtitle">{counts[6] } Product</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4">
                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/fullwidth-page/banner-3.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">Sportwear</h3>
                                                                <h4 className="banner-subtitle">{counts[7] } Product</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-8">
                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/fullwidth-page/banner-4.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">Bags</h3>
                                                                <h4 className="banner-subtitle">{counts[2] } Products</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/fullwidth-page/banner-5.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">Dresses</h3>
                                                                <h4 className="banner-subtitle">{counts[0] } Products</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>

                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/fullwidth-page/banner-6.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">Shoes</h3>
                                                                <h4 className="banner-subtitle">{counts[4] } Products</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4">
                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/fullwidth-page/banner-7.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">T-shirts</h3>
                                                                <h4 className="banner-subtitle">{counts[1] } Products</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>

                                                        <div className="banner banner-cat banner-badge">
                                                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/category/fullwidth-page/banner-8.jpg` } alt="Banner" />
                                                            </Link>

                                                            <Link className="banner-link" to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/sidebar/list` }>
                                                                <h3 className="banner-title">Jumpers</h3>
                                                                <h4 className="banner-subtitle">{counts[5] } Product</h4>
                                                                <span className="banner-link-text">Shop Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                            </div>                
                        </div>
                    </div>
                    
                    <CategoryFilter />

                    { type === "boxed" ?
                        <FooterOne /> :
                    type === "fullwidth" ?
                        <FooterFour /> : ''
                    }
                    <ToastContainer autoClose={ false} className="toast-container" />
                </div>

                <MobileMenu />
            </React.Fragment>
        )
    }
}

export const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(mapStateToProps, { outerLoading, innerLoading })(ProductCategory);