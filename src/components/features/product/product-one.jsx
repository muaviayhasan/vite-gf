import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BaseProduct from '../../features/product/common/base-product';

import { findIndex } from '../../../utils/utils';

class ProductOne extends BaseProduct {
    render() {
        const { product } = this.props;

        return (
            product ?
            <div className="product text-center">
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-sale">{product.discount}% off</span> : '' }
                    { (0 === product.stock) ? <span className="product-label label-out">Out of Stock</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action">
                        { this.showAddToCartBtn() }
                        { this.showQuickViewBtnWithIcon() }
                        { this.showAddToCompareBtn() }
                    </div>
                </figure>

                <div className="product-body">
                    { this.showProductCatSection() }
                    { this.showProductName() }                    
                    { this.showProductPrice('', '') }

                    { product.size ? 
                        <div className="product-size">{
                            product.size.map((vari, i) => {
                                return (
                                    <Link to="#" className={ "0" === product.sizeStock[i]?'disabled':''} title={ vari} key={ i }>{vari}</Link>
                                );
                            }) }
                        </div> : ''
                    }

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

export default connect( mapStateToProps )(ProductOne);