import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class ProductTwo extends BaseProduct {
    render() {
        const { product } = this.props;
        return (
            product ?
            <div className="product">
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-sale">{ product.discount }% off</span> : '' }
                    { 0 === product.stock ? <span className="product-label label-out">Out Of Stock</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action action-icon-top">
                        { this.showAddToCartBtn() }
                        { this.showQuickViewBtnWithIcon() }
                        { this.showAddToCompareBtn() }
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    { this.showToggleWishlistBtn("btn-product btn-wishlist") }

                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice('', '') }
                    { this.showProductRating( "ratings ratings-primary" ) }
                    { this.showProductVariants('rgb') }
                </div>
            </div> : ''
        );
    }
}

export const mapStateToProps = ( state, ownprops ) => {
    return {
        wishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )(ProductTwo);