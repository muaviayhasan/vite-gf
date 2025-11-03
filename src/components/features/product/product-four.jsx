import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class ProductFour extends BaseProduct {
    
    render() {
        const { product } = this.props;
        return (
            product ?
            <div className="product product-3">
                <figure className="product-media">
                    { product.new ? <span className="product-label">New</span> : '' }
                    { product.top ? <span className="product-label">Top</span> : '' }
                    { product.discount ? <span className="product-label">Sale</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn() }
                        { this.showQuickViewBtn('btn-product-icon btn-quickview') }
                        { this.showToggleCompareBtn() }
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    <div className="product-action">
                        { this.showAddToCartBtn() }
                    </div>

                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice('', '') }
                </div>

                <div className="product-footer">
                    { this.showProductRating() }
                    { this.showProductVariants('model') }
                </div>
            </div>:''
        );
    }
}

export const mapStateToProps = ( state, ownprops ) => {
    return {
        wishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )(ProductFour);