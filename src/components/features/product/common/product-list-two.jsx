import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductEight from '../product-eight';
import QuickView from '../quickview';
import InnerOverlay from '../../../common/overlay/inner-overlay';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort, innerLoading } from '../../../../actions';
import { getVisibleProducts } from '../../../../services';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedCount: 8,
            hasMore: true,
            loading: false
        }

        this.changeFilter = this.changeFilter.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidUpdate() {
        if ( ! this.state.hasMore || 'outer' === this.props.overlayType ) {
            this.props.innerLoading();
        }
    }

    showSideBar(){
        document.querySelector('body').classList.add('sidebar-filter-active');
    }

    changeFilter(e) {
        this.props.filterSort(e.target.value);
    }

    loadMore(products) {
        // fake async api. products should be fetched from backend
        if ( this.state.loadedCount < products.length ) {
            this.setState((state) => {
                return { loading: true } ;
            })

            this.timer = setTimeout(() => {
                this.setState((state) => {
                    return { loadedCount: state.loadedCount + 4, loading: false }
                });

                if ( this.state.loadedCount >= products.length ) {
                    this.setState((state) => {
                        return { hasMore: false }
                    });
                }
            }, 2000);
        } else {
            this.timer = setTimeout(() => {
                this.setState((state) => {
                    return { hasMore: false }
                });
            }, 500);
        }
    }

    componentWillUnmount() {
        if ( this.timer ) clearTimeout( this.timer );
    }

    render() {
        let { type, products, filters, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props
        const classList = { "boxed": "col-6 col-md-4 col-lg-4 col-xl-3", "fullwidth": "col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2" };

        products = getVisibleProducts( products.slice( 0, 50 ), filters );    
            
        return (
            <React.Fragment>
                <div className="toolbox">
                    <div className="toolbox-left">
                        <button className="sidebar-toggler" onClick = {() => this.showSideBar() } style = {{padding: "0"} }><i className="icon-bars"></i>Filters</button>
                    </div>
                    
                    <div className = "toolbox-center">
                        <div className="toolbox-info">
                            Showing <span>{Math.min(this.state.loadedCount, products.length) } of {products.length}</span> Products
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
                    </div>
                </div>

                <div className="products mb-3">
                    <InnerOverlay />
                    <div className="row">
                        { products.slice(0, this.state.loadedCount).map((item, index) => 
                            <div className={ classList[type] } key={ item.id }>
                                <ProductEight product={ item }colorType = "rgb" onAddToCartClick={ () => addToCart(item, 1) } onToggleWishlistClick={ () => toggleWishlist(item) } onAddToCompareClick={ () => addToCompare(item) }  showQuickViewModal={ () => showQuickViewModal(item.id) }/>
                            </div>
                        ) }
                    </div>
                    <QuickView />   
                </div>

                <div className="load-more-container text-center">
                    {
                        this.state.hasMore ?
                            <button className="btn btn-outline-darker btn-load-more" onClick = { () => this.loadMore(products)  }><span>More Products </span>
                                { this.state.loading ?
                                    <i className="icon-refresh load-more-rotating"></i> : 
                                    <i className="icon-refresh"></i>
                                }
                            </button>
                        : ''
                    }
                </div>
            </React.Fragment>
        );
    }
}

export const mapStateToProps = (state)  => {
    return {
        products: state.data.products ? state.data.products : [],
        filters: state.filters,
        overlayType: state.overlay.type
    }
}

export default connect( 
    mapStateToProps, { 
        addToCart, innerLoading, toggleWishlist, addToCompare, showQuickViewModal, filterSort 
    } 
)(ProductList);