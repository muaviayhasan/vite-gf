import React from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

import BaseProduct from '../../features/product/common/base-product';
import { rendererOne } from '../../common/countdown/renderer';

import { findIndex } from '../../../utils/utils';

class ProductSix extends BaseProduct {
    render() {
        const {product } = this.props;
        return (
            product ?
            <div className={ `product product-5 text-center ${0 === product.stock ? 'product-disabled' : ''}` }>
                <figure className="product-media">
                    { product.new? <span className="product-label label-new">New</span> : '' }
                    { product.top? <span className="product-label label-top">Top</span> : '' }
                    { product.discount? <span className="product-label label-sale">Sale</span> : '' }
                    { (0 === product.stock)? <span className="product-label label-out">Out Of Stock</span> : '' }

                    { this.showProductImgSection() }

                    { 0 < product.discount ? <div className="product-countdown  countdown-primary"><Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } /></div> : '' }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn() }
                        { this.showQuickViewBtn('btn-product-icon btn-quickview') }
                        { this.showToggleCompareBtn() }
                    </div>

                    <div className="product-action">
                        { this.showAddToCartBtn() }
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    { this.showProductName() }
                    { this.showProductPrice('', '') }
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

export default connect( mapStateToProps )(ProductSix);