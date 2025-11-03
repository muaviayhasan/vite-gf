import React from 'react';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";

// import Custom Components
import SingleProductComponent from './common/base';
import ProductDetailFour from './common/detail-four';

import InnerOverlay from '../../common/overlay/inner-overlay';
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/quickview';
import OwlCarousel from '../../features/owl-carousel';
import { mainSlider9 } from '../settings';
import ErrorPage from '../../main/pages/404';

import { quantityInputs } from '../../../utils/utils';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';


class GalleryProduct extends SingleProductComponent {

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

    render(){
        const { product, addToCart, toggleWishlist, addToCompare } = this.props;
        if( ! product ) {
            return (
                <ErrorPage />
            )
        }
        const bigImages = product.lgPictures ? product.lgPictures : product.pictures;

        return(
            <div className="main">
                <InnerOverlay/>
                
                <div className="page-content">
                    <div className="product-details-top">
                        <div className="bg-light pb-5 mb-4">
                            <Breadcrumb 
                                title="Gallery" 
                                slug="gallery" 
                                parent1={ ["Products","product"] } 
                                type="product" 
                                adClass="breadcrumb-nav border-0 mb-0" 
                                productId={ product.id }
                            />

                            <div className="container">
                                <OwlCarousel adClass="product-gallery-carousel owl-full owl-nav-dark 123"  carouselOptions={ mainSlider9  }>
                                    { product.pictures.map((item, index) => 
                                        <Magnifier
                                            imageSrc={ product.pictures[index] }
                                            imageAlt="Example"
                                            largeImageSrc={ bigImages[index] } // Optional
                                            dragToMove = {false}
                                            mouseActivation = "hover"
                                            cursorStyleActive = "crosshair"
                                            className="product-gallery-image"
                                            key={ product.id+'-'+index}
                                            />
                                    ) }   
                                </OwlCarousel>
                            </div>
                        </div>

                        <ProductDetailFour
                            product={product}
                            onAddToCartClick={ () => addToCart(product, document.querySelector("#qty").value) } 
                            onToggleWishlistClick={ () => toggleWishlist(product) } 
                            onAddToCompareClick={ () => addToCompare(product) } />

                    </div>

                    <div className="container">
                        { this.productDetailTab() }
                    </div>
                    
                    <div className="container">
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

    return {
        product: state.data.products.filter(item => item.id.toString() === product_id)[0],
        products: state.data.products ? state.data.products : []
    }
}

export default connect (
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)(GalleryProduct);