import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class ProductTen extends BaseProduct {
    render(){
        const { product, colorType = "rgb", adClass } = this.props;
        return(
            product ?   
                <div className={ `product ${adClass}` }>
                    <figure className="product-media">
                        { product.new ? <span className="product-label label-new">New</span> : '' }
                        { product.stock === 0 ? <span className="product-label label-out">Out of Stock</span> : '' }
                        { product.top ? <span className="product-label label-top">Top</span> : '' }
                        { product.discount > 0 ? <span className="product-label label-sale">Sale</span> : '' }

                        { this.showProductImgSection() }

                        <div className="product-action-vertical">
                            { this.showToggleWishlistBtn() }
                            { this.showQuickViewBtn('btn-product-icon btn-quickview') }
                            { this.showToggleCompareBtn() }
                        </div>

                        <div className="product-action">
                            { this.showAddToCartBtn() }
                        </div>
                    </figure>

                    <div className="product-body">
                        { this.showProductCatSection() }
                        { this.showProductName() }
                        { this.showProductPrice('', 'Was') }
                        { this.showProductRating() }
                        { this.showProductVariants(colorType) }
                    </div>
                </div> : ''           
        )
    }
}

export const mapStateToProps = ( state, ownprops ) => {
    return {
        wishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )(ProductTen);