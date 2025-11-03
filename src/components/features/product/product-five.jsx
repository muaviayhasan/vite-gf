import React from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

import BaseProduct from '../../features/product/common/base-product';
import { rendererTwo } from '../../common/countdown/renderer';

import { findIndex } from '../../../utils/utils';

class ProductFive extends BaseProduct {
    
    render() {
        const {product } = this.props;
        return (
            product ?
            <div className={ `product product-4 text-center ${0 === product.stock?'product-disabled':''}` }>
                <figure className="product-media">
                    {product.new ? <span className="product-label label-circle label-new">New</span> : ''}
                    {product.top ? <span className="product-label label-circle label-top">Top</span> : ''}
                    {product.discount ? <span className="product-label label-circle label-sale">Sale</span> : ''}

                    { this.showProductImgSection() }

                    {
                        0 < product.discount?
                        <div className="product-countdown-container">
                            <span className="product-contdown-title">offer ends in:</span>
                            <div className="product-countdown countdown-compact">
                                <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererTwo } />
                            </div>
                        </div> : ''
                    }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn() }
                    </div>

                    <div className="product-action">
                        { this.showAddToCartBtn() }
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    { this.showProductName() }
                    { this.showProductPrice('', '') }

                    { 0 === product.stock ? <div className="product-label-text">Out Of Stock</div> : '' }
                    
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

export default connect( mapStateToProps )(ProductFive);