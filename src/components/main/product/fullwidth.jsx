import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Magnifier } from "react-image-magnifiers";

// import Custom Components
import SingleProductComponent from './common/base';
import ProductDetailOne  from './common/detail-one';

import InnerOverlay from '../../common/overlay/inner-overlay';
import OuterOverlay from '../../common/overlay/outer-overlay';
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/quickview';
import ProductSidebar from '../../features/sidebar/product-sidebar';
import HeaderOne from '../../common/header/header-1';
import FooterFour from '../../common/footer/footer-four';
import MobileMenu from '../../common/header/common/mobile-menus/menu-1';
import ErrorPage from '../../main/pages/404';
import Layout from '../../app';

// import Utils
import { 
    quantityInputs,
    productGallery, 
    initSettings
} from '../../../utils/utils';

// import Actions
import {
    outerLoading,
    addToCart, 
    toggleWishlist, 
    addToCompare, 
    showQuickViewModal 
} from '../../../actions';



class FullwidthProduct extends SingleProductComponent {

    componentDidMount() {
        super.componentDidMount();
        this.props.outerLoading();
        initSettings();
        productGallery();
        quantityInputs();
    }

    componentDidUpdate(prevProps) {
        super.componentDidUpdate(prevProps);
        productGallery();
        quantityInputs();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        const { product, addToCart, toggleWishlist, addToCompare } = this.props;

        if( ! product ) {
            return (
                <Layout>
                    <ErrorPage />
                </Layout>
            )
        }
        const bigImages = product.lgPictures ? product.lgPictures : product.pictures;
        const smallImages = product.smPictures ? product.smPictures : product.pictures;
        
        return(
            <React.Fragment>
                <OuterOverlay/>
                <div className="page-wrapper">
                    <HeaderOne container="container-fluid"/>

                    <div className="main">
                        <InnerOverlay/>

                        <Breadcrumb 
                            title="Fullwidth" 
                            slug="fullwidth" 
                            parent1={ ["Products","product"] } 
                            type="product" 
                            container="container-fluid" 
                            adClass="breadcrumb-nav border-0 mb-0" 
                            productId={ product.id }
                        />

                        <div className="page-content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-10">
                                        <div className="product-details-top">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-7">
                                                    <div className="product-gallery">
                                                        <figure className="product-main-image" index="0">
                                                            {product.new ? <span className="product-label label-new">New</span> : ''}

                                                            {product.top ? <span className="product-label label-top">Top</span> : ''}

                                                            {product.discount ? <span className="product-label label-sale">Sale</span> : ''}
                                                            
                                                            {(0 === product.stock) ? <span className="product-label label-out">Out of Stock</span> : ''}

                                                            <Magnifier
                                                                imageSrc={ product.pictures[0] }
                                                                imageAlt="Example"
                                                                largeImageSrc={ bigImages[0] } // Optional
                                                                dragToMove = {false}
                                                                mouseActivation = "hover"
                                                                cursorStyleActive = "crosshair"
                                                                className="magnifier"
                                                                id="product-zoom"
                                                            />

                                                            <Link to="#" id="btn-product-gallery" className="btn-product-gallery" onClick={ this.openLightBox }>
                                                                <i className="icon-arrows"></i>
                                                            </Link>
                                                        </figure>

                                                        <div id="product-zoom-gallery" className="product-image-gallery max-col-6">
                                                            {
                                                                product.pictures.map((item, index) => 
                                                                    <Link className={ `product-gallery-item ${0 ===  index ? 'active' : ''}`} to="#" data-image={ item }data-zoom-image={ bigImages[index] } key={ product.id+'-'+index }>
                                                                        <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + smallImages[index] } alt="product back"/>
                                                                    </Link>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-lg-5">
                                                    <ProductDetailOne type="fullwidth"
                                                        product={product} 
                                                        adClass="details-fullwidth"
                                                        onAddToCartClick={ () => addToCart(product, document.querySelector("#qty").value) } 
                                                        onToggleWishlistClick={ () => toggleWishlist(product) } 
                                                        onAddToCompareClick={ () => addToCompare(product) } >

                                                        { this.productDetailAccordian() }

                                                    </ProductDetailOne>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="col-xl-2 d-md-none d-xl-block">
                                        <ProductSidebar />
                                    </div>
                                </div>
                            </div>
                        </div>

                        { this.lightbox() }
                        
                        <QuickView />
                    </div>

                    <FooterFour />
                    <ToastContainer autoClose={ 3000 } className="toast-container" />
                </div>

                <MobileMenu />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    const product_id = props.match.params.id;
    return {
        products: state.data.products ? state.data.products : [],
        product: state.data.products.filter((item) => item.id.toString() === product_id)[0]
    }
}

export default connect(
    mapStateToProps, { outerLoading, addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)(FullwidthProduct);