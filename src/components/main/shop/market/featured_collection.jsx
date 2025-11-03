import React, { Component } from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../../../features/owl-carousel';
import ProductTen from '../../../features/product/product-ten';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../../actions';
import { mainSlider12 } from '../../settings';

class FeaturedCollection extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
        let products = this.props.products.slice(69, 74);
        if ( !products ) return "";

        return (
            <OwlCarousel  adClass="owl-simple owl-nav-top carousel-equal-height carousel-with-shadow" carouselOptions={ mainSlider12  }>
                {
                    products.map(( item, index ) =>   
                        <ProductTen 
                            product={ item } 
                            key={ index }
                            onAddToCartClick={ addToCart } 
                            onToggleWishlistClick={ toggleWishlist } 
                            onAddToCompareClick={ addToCompare }  
                            showQuickViewModal={ showQuickViewModal }
                            />
                ) }
            </OwlCarousel>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( 
    mapStateToProps, { 
        addToCart, toggleWishlist, addToCompare, showQuickViewModal 
    } 
)( FeaturedCollection );