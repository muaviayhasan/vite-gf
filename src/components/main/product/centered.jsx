import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";

import SingleProductComponent from './common/base'
import ProductDetailThree from './common/detail-three';

import Breadcrumb from '../../common/breadcrumb';
import InnerOverlay from '../../common/overlay/inner-overlay';
import QuickView from '../../features/product/quickview';
import ErrorPage from '../../main/pages/404';

import { quantityInputs } from '../../../utils/utils';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';

class CenteredProduct extends SingleProductComponent {

    componentDidMount() {
        super.componentDidMount();
        quantityInputs();
    }

    componentDidUpdate(prevProps) {
        super.componentDidUpdate(prevProps);
        quantityInputs();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        
        const { product, addToCart, toggleWishlist, addToCompare } = this.props;

        if( ! product ) {
            return (
                <ErrorPage />
            )
        }
        const bigImages = product.lgPictures ? product.lgPictures : product.pictures;
        const smallImages = product.smPictures ? product.smPictures : product.pictures;
        
        return(
            <div className="main">
                <InnerOverlay/>
                <Breadcrumb 
                    title="Centered" 
                    parent1={ ["Products","product"] } 
                    slug="centered" 
                    type="product" 
                    adClass="breadcrumb-nav border-0 mb-0" 
                    productId={ product.id}
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-gallery product-gallery-vertical">
                                        <div className="row">
                                            <figure className="product-main-image" index="0">
                                                { product.new? <span className="product-label label-new">New</span> : ''}

                                                { product.top? <span className="product-label label-top">Top</span> : ''}

                                                { product.discount? <span className="product-label label-sale">{product.discount}% off</span> : ''}

                                                { ( 0 === product.stock )? <span className="product-label label-out">Out of Stock</span> : ''}
                                                
                                                <Magnifier
                                                imageSrc={ product.pictures[0] }
                                                imageAlt="Example"
                                                largeImageSrc={ bigImages[0] } // Optional
                                                dragToMove = {false}
                                                mouseActivation = "hover"
                                                cursorStyleActive = "crosshair"
                                                id="product-zoom"
                                                />

                                                <Link to="#" id="btn-product-gallery" className="btn-product-gallery" onClick={ this.openLightBox }>
                                                    <i className="icon-arrows"></i>
                                                </Link>
                                            </figure>

                                            <div id="product-zoom-gallery" className="product-image-gallery">
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
                                </div>

                                <div className="col-md-6">
                                    <ProductDetailThree 
                                        product={product} 
                                        onAddToCartClick={ addToCart} 
                                        onToggleWishlistClick={ toggleWishlist} 
                                        onAddToCompareClick={ addToCompare}  
                                    />
                                </div>
                            </div>
                        </div>

                        
                        { this.productDetailTab() }

                        <h2 className="title text-center mb-4">You May Also Like</h2>

                        { this.relatedProducts("rgb") }

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
    return{
        products: state.data.products ? state.data.products : [],
        product: state.data.products.filter((item) => item.id.toString() === product_id)[0]
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)(CenteredProduct);