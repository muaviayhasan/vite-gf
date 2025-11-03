import React, { Component } from 'react';
import { connect } from 'react-redux';

import InnerOverlay from '../../../common/overlay/inner-overlay';
import ProductTen from '../product-ten';
import Pagination from '../../pagination';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort, innerLoading } from '../../../../actions';
import { getVisibleProducts } from '../../../../services';

class ProductListThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: 0
        }
        this.changePos = this.changePos.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }

    componentDidUpdate() {
        this.props.innerLoading();
    }

    changePos(pos) {
        this.setState({start: pos});
    }

    changeFilter(e) {
        this.props.filterSort(e.target.value);
    }

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props

        let products = getVisibleProducts( this.props.products.slice(0, 74), this.props.filters );
        let count = products.length;

        const maxCount = 8;

        return (
            products ?
                <React.Fragment>
                    <div className="toolbox">
                        <div className="toolbox-left">
                            <div className="toolbox-info">
                                { this.props.count } Products found
                            </div>
                        </div>

                        <div className="toolbox-right">
                            <div className="toolbox-sort">
                                <label htmlFor="sortby">Sort by:</label>
                                <div className="select-custom">
                                    <select name="sortby"  
                                        id="sortby" 
                                        defaultValue={ this.props.filters.sortBy } 
                                        className="form-control" 
                                        onChange={ this.changeFilter }
                                    >
                                        <option value="popularity">Most Popular</option>
                                        <option value="rating">Most Rated</option>
                                        <option value="date">Date</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products mb-3">
                        <InnerOverlay/>
                        <div className="row">
                            { products.slice(this.state.start, this.state.start + maxCount).map((item, index) => 
                                <div className="col-6 col-md-4 col-xl-3" key={ item.id + '-' + item.name  }>    
                                    <ProductTen product={ item } 
                                        onAddToCartClick={ addToCart } 
                                        onToggleWishlistClick={ toggleWishlist } 
                                        onAddToCompareClick={ addToCompare } 
                                        showQuickViewModal={ showQuickViewModal }
                                    />
                                </div>
                            ) }
                        </div>
                    </div>
                    <Pagination count={ count } unit={ maxCount } onChange={ this.changePos }/>
                </React.Fragment> : ''
        );
    }
}
export const mapStateToProps = (state)  => {
    return {
        filters: state.filters,
        products: state.data.products ? state.data.products : [],
    };
}
export default connect( mapStateToProps,  { addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort, innerLoading } )( ProductListThree );
