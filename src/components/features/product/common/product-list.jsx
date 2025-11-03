import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductEight from '../../../demoes/index1/product';
import InnerOverlay from '../../../common/overlay/inner-overlay';
import ProductNine from '../product-nine';
import QuickView from '../quickview';
import Pagination from '../../pagination';

import { innerLoading, addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort } from '../../../../actions';
import { getVisibleProducts } from '../../../../services';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            cols: this.props.column
        }
        this.changePos = this.changePos.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        if ( this.props.column !== nextProps.column ) {
            this.setState({ cols: nextProps.column });
        }
    }

    changePos(pos) {
        this.props.innerLoading();
        this.setState({ start: pos });
        window.scrollTo({
            top: 0
        });
    }

    changeGrid( grid ) {
        this.props.innerLoading();
        this.setState({cols: grid});
    }

    changeFilter(e) {
        this.props.filterSort(e.target.value);
        this.setState({start: 0});
    }

    render() {
        let { products, filters, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
        const grid = { "2cols": "col-6", "3cols": "col-6 col-md-4 col-lg-4", "4cols": "col-6 col-md-4 col-lg-4 col-xl-3" };
        const units = { "list": 6, "2cols": 6, "3cols": 9, "4cols": 12 };
        const itemsPerPage = units[ this.state.cols ];

        products = getVisibleProducts( products.slice( 0, 47 ), filters );

        return (
            <React.Fragment>
                <div className="toolbox">
                    <div className="toolbox-left">
                        <div className="toolbox-info">
                            Showing <span>{Math.min(itemsPerPage, products.length) } of {products.length}</span> Products
                        </div>
                    </div>
                    <div className="toolbox-right">
                        <div className="toolbox-sort">
                            <label htmlFor="sortby">Sort by:</label>
                            <div className="select-custom">
                                <select name="sortby" id="sortby" defaultValue={ filters.sortBy} className="form-control" onChange={ this.changeFilter }>
                                    <option value="popularity">Most Popular</option>
                                    <option value="rating">Most Rated</option>
                                    <option value="date">Date</option>
                                </select>
                            </div>
                        </div>
                        <div className="toolbox-layout">
                            <button className={ `btn-layout ${ 'list' === this.state.cols ? 'active' : '' }`} onClick={ () => this.changeGrid('list')  }>
                                <svg width="16" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="10" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="10" height="4"></rect>
                                </svg>
                            </button>

                            <button className={ `btn-layout ${ '2cols' === this.state.cols ? 'active' : '' }`} onClick={ () => this.changeGrid('2cols')  }>
                                <svg width="10" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="4" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="4" height="4"></rect>
                                </svg>
                            </button>

                            <button className={ `btn-layout ${ '3cols' === this.state.cols ? 'active' : '' }`} onClick={ () => this.changeGrid('3cols')  }>
                                <svg width="16" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="4" height="4"></rect>
                                    <rect x="12" y="0" width="4" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="4" height="4"></rect>
                                    <rect x="12" y="6" width="4" height="4"></rect>
                                </svg>
                            </button>

                            <button className={ `btn-layout ${ '4cols' === this.state.cols ? 'active' : '' }`} onClick={ () => this.changeGrid('4cols')  }>
                                <svg width="22" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="4" height="4"></rect>
                                    <rect x="12" y="0" width="4" height="4"></rect>
                                    <rect x="18" y="0" width="4" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="4" height="4"></rect>
                                    <rect x="12" y="6" width="4" height="4"></rect>
                                    <rect x="18" y="6" width="4" height="4"></rect>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className = "products mb-3" >
                    <InnerOverlay />
                    {'list' === this.state.cols ? 
                        products.slice(this.state.start, this.state.start + itemsPerPage).map((item, index) => 
                            <ProductNine product={ item }onAddToCartClick={ () => addToCart(item, 1) } onToggleWishlistClick={ () => toggleWishlist(item) } onAddToCompareClick={ () => addToCompare(item) }  showQuickViewModal={ () => showQuickViewModal(item.id) } key={ item.id}/>
                        ) : 
                        
                        <div className="row">
                            { products.slice(this.state.start, this.state.start + itemsPerPage).map((item, index) => 
                                <div className={ grid[this.state.cols] } key={ item.id }>
                                    <ProductEight adClass="text-center"
                                        product={ item }
                                        onAddToCartClick={ () => addToCart(item, 1) } 
                                        onToggleWishlistClick={ () => toggleWishlist(item) } 
                                        onAddToCompareClick={ () => addToCompare(item) }  
                                        showQuickViewModal={ () => showQuickViewModal(item.id) }/>
                                </div>
                            ) }
                        </div>
                    }
                    <QuickView />   
                </div>
                <Pagination aclsss={ `${'list' === this.props.cols ? '' : 'justify-content-center'}` } count={ products.length} unit={ itemsPerPage} onChange={ this.changePos}/>
            </React.Fragment>
        );
    }
}
export const mapStateToProps = (state)  => {
    return {
        filters:  state.filters,
        products: state.data.products ? state.data.products : []
    };
}
export default connect( mapStateToProps,  { innerLoading, addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort } )( ProductList );