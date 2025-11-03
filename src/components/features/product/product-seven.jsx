import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class ProductSeven extends BaseProduct {
    render() {
        const { product } = this.props;
        
        return (
            product ?
                <div className="product product-6">
                    <figure className="product-media">
                        { product.new? <span className="product-label">New</span> : '' }
                        { product.top? <span className="product-label">Top</span> : '' }
                        { product.discount? <span className="product-label">Sale</span> : '' }
                        { (0 === product.stock) ? <span className="product-label">Out Of Stock</span> : '' }

                        { this.showProductImgSection() }

                        <div className="product-action-vertical">                            
                            { this.showToggleWishlistBtn() }
                        </div>
                    </figure>

                    <div className="product-body product-action-inner">
                        { this.showProductCatSection() }
                        { this.showProductName() }
                        { this.showProductPrice('', '') }
                        { this.showProductRating() }
                        { this.showProductVariants('rgb') }

                        <div className="product-action">
                            { this.showAddToCartBtn() }
                            { this.showQuickViewBtnWithIcon() }
                        </div>
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

export default connect( mapStateToProps )(ProductSeven);