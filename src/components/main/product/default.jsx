import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";

import SingleProductComponent from './common/base';
import ProductDetailOne from './common/detail-one';

import InnerOverlay from '../../common/overlay/inner-overlay';
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/quickview';
import ErrorPage from '../../main/pages/404';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';

class SingleProduct extends SingleProductComponent {
    
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
        const smallImages = product.smPictures ? product.smPictures : product.pictures;

        return(
            <div className="main">
                <InnerOverlay />

                <Breadcrumb 
                    title="Default" 
                    type="product" 
                    slug="default" 
                    adClass="breadcrumb-nav border-0 mb-0" 
                    productId={ product.id } 
                    parent1={ ["Products","product"] } 
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-gallery product-gallery-vertical">
                                        <div className="row">
                                            <figure className="product-main-image" index="0">
                                                { product.new ? <span className="product-label label-new">New</span> : '' }

                                                { product.top ? <span className="product-label label-top">Top</span> : '' }

                                                { product.discount ? <span className="product-label label-sale">{product.discount}% off</span> : '' }

                                                { (0 === product.stock) ? <span className="product-label label-out">Out of Stock</span> : '' }

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
                                    <ProductDetailOne product={product} 
                                        onAddToCartClick={ () => addToCart(product, document.querySelector("#qty").value) } 
                                        onToggleWishlistClick={ () => toggleWishlist(product) } 
                                        onAddToCompareClick={ () => addToCompare(product) } />
                                </div>
                            </div>
                        </div>

                        { this.productDetailTab() }


                        <h2 className="title text-center mb-4">You May Also Like</h2>

                        { this.relatedProducts() }

                    </div>
                </div>

                <div className="sticky-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <figure className="product-media">
                                    <Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>
                                        <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + product.pictures[0] } alt="Product"/>
                                    </Link>
                                </figure>
                                <h4 className="product-title"><Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` }>{product.name}</Link></h4>
                            </div>

                            <div className="col-6 justify-content-end">
                                <div className="product-price">
                                    ${product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }
                                </div>
                                <div className="product-details-quantity">
                                    <input type="number" id="sticky-cart-qty" className="form-control" defaultValue="1" min="1" max={ product.stock} step="1" data-decimals="0" required/>
                                </div>

                                <div className="product-details-action">    
                                    <button className="btn-product btn-cart" onClick={ ()=>addToCart(product, document.querySelector("#sticky-cart-qty").value) }><span>add to cart</span></button>
                                    <button className="btn-product btn-wishlist pr-0 pl-0" title="Wishlist" onClick={ ()=>toggleWishlist(product) }><span>Add to Wishlist</span></button>
                                </div>
                            </div>
                        </div>
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
        products: state.data.products ? state.data.products : [],
        product: state.data.products.filter(item => item.id.toString() === product_id)[0]
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)( SingleProduct );