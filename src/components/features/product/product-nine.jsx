import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class ProductNine extends BaseProduct {

    render(){
        const { product, adClass } = this.props;
        let btnClass = product.stock === 0 ? 'disabled' : '';
        btnClass = btnClass + ' btn-product btn-cart';
        
        return(
            product ? 
                <div className={ `product product-list ${adClass}` }>
                    <div className="row">
                        <div className="col-6 col-sm-3 col-md-4 col-lg-3">
                            <figure className="product-media">
                                { product.new ? <span className="product-label label-new">New</span> : '' }
                                { product.stock === 0 ? <span className="product-label label-out">Out of Stock</span> : '' }
                                { product.top ? <span className="product-label label-top">Top</span> : '' }

                                { this.showProductImgSection() }
                            </figure>
                        </div>   

                        <div className="col-6 col-sm-4 col-lg-3 order-lg-last">
                            <div className="product-list-action">
                                { this.showProductPrice('', '') }
                                { this.showProductRating() }

                                <div className="product-action">
                                    { this.showQuickViewBtnWithIcon() }
                                    { this.showAddToCompareBtn() }
                                </div>
                                
                                <a href="#cart" className={ btnClass}  onClick={  this.addToCart  }>
                                    <span>add to cart</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-5 col-md-4 col-lg-6">
                            <div className="product-body product-action-inner">
                                { this.showToggleWishlistBtn('btn-product btn-wishlist') }
                            </div>

                            { this.showProductCatSection() }
                            { this.showProductName() }

                            <div className="product-content">
                                <p>{product.shortDesc}</p>
                            </div>

                            { this.showProductVariants('model') }
                        </div>
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

export default connect( mapStateToProps )(ProductNine);