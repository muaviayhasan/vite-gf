import React from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

import BaseProduct from '../../features/product/common/base-product';
import { rendererOne } from '../../common/countdown/renderer';

import { findIndex } from '../../../utils/utils';


class ProductThree extends BaseProduct {
    render() {
        const { product } = this.props;
        return (
            product ?
            <div className="product product-2">
                <figure className="product-media">
                    { product.new? <span className="product-label label-circle label-new">New</span> : '' }
                    { product.top? <span className="product-label label-circle label-top">Top</span> : '' }
                    { product.discount? <span className="product-label label-circle label-sale">Sale</span> : '' }

                    { this.showProductImgSection() }

                    { 0 < product.discount ? <div className="product-countdown"><Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } /></div> : '' }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn() }
                    </div>

                    <div className="product-action product-action-dark">
                        { this.showAddToCartBtn() }
                        { this.showQuickViewBtnWithIcon() }
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice('', '') }
                    { this.showProductRating() }
                    { this.showProductVariants('model') }
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

export default connect( mapStateToProps )(ProductThree);