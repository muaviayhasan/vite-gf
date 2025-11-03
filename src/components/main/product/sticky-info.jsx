import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";

// import Custom Components
import SingleProductComponent from './common/base';

import InnerOverlay from '../../common/overlay/inner-overlay';
import Breadcrumb from '../../common/breadcrumb';
import ProductDetailTwo from './common/detail-two';
import QuickView from '../../features/product/quickview';
import ErrorPage from '../../main/pages/404';

import { setStickyValues } from '../../../utils/utils';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';


class StickyInfo extends SingleProductComponent {

    componentDidMount() {
        setStickyValues();
        super.componentDidMount();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        const { product, addToCart, toggleWishlist, addToCompare } = this.props;

        if ( ! product ) {
            return (
                <ErrorPage />
            )
        }
        const bigImages = product.lgPictures ? product.lgPictures : product.pictures;

        return (
            <div className="main">
                <InnerOverlay />
                
                <Breadcrumb 
                    title="Sticky Info" 
                    slug="sticky" 
                    parent1={ ["Products","product"] } 
                    type="product" 
                    adClass="breadcrumb-nav border-0 mb-0" 
                    productId={ product.id }
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-gallery product-gallery-separated">
                                        { product.pictures.map((item, index)=>
                                            <figure className="product-separated-item" key={ index + product.name + product.id }>

                                                <Magnifier
                                                    imageSrc={ item}
                                                    imageAlt="Example"
                                                    largeImageSrc={ bigImages[parseInt(index)] } // Optional
                                                    dragToMove = {false}
                                                    mouseActivation = "hover"
                                                    cursorStyleActive = "crosshair"
                                                    id="product-zoom"
                                                />
                                                { parseInt(index) === 0 ?
                                                    <Link to="#" id="btn-product-gallery" className="btn-product-gallery" onClick={ this.openLightBox }>
                                                        <i className="icon-arrows"></i>
                                                    </Link> : ''
                                                }
                                                {
                                                    parseInt(index) ===0 && product.discount > 0 ? 
                                                        <span className ="product-label label-sale">Sale</span> : 
                                                    parseInt(index) ===0 && product.new ?
                                                        <span className ="product-label label-new">New</span> :
                                                    parseInt(index) ===0 && product.top > 0 ?
                                                        <span className ="product-label label-top">Top</span> : ''
                                                }
                                            </figure>
                                        ) }
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <ProductDetailTwo product= {product } 
                                        onAddToCartClick={ addToCart } 
                                        onToggleWishlistClick={ toggleWishlist } 
                                        onAddToCompareClick={ addToCompare }  
                                        type = "color">

                                        { this.productDetailAccordian() }
                                        
                                    </ProductDetailTwo>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-3 mb-5"/>

                    <h2 className="title text-center mb-4">You May Also Like</h2>

                    <div className="container">
                        { this.relatedProducts("rgb", "") }
                    </div>
                </div>
                    
                { this.lightbox() }

                <QuickView />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const product_id = props.match.params.id;
    
    return {
        product: state.data.products.filter(item => item.id.toString() === product_id)[0],
        products: state.data.products ? state.data.products : []
    }
}

export default connect (
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)(StickyInfo);