import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { trendingSlider } from './settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import _data from '../../../mock_data/data.json';
import { getProductsByCategory, getTrendyProducts, getProductsByDemo } from '../../../services';

class TrendyCollection extends Component {

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;

        let products = getTrendyProducts(getProductsByDemo(this.props.products, "demo5"));

        return (
            <div className="container">
                <Tabs defaultIndex={ 0 } selectedTabClassName="show">
                    <div className="heading heading-center mb-3">
                        <h2 className="title">Trendy Products</h2>

                        <TabList className="nav nav-pills justify-content-center" role="tablist">
                            { _data.demo5.trendyCategories.map((cat, index)=>
                                <Tab className="nav-item" key={ `trendy_tab_${index}` }>
                                    <span className="nav-link">{cat}</span>
                                </Tab>
                            ) }
                        </TabList>
                    </div>

                    <div className="tab-content tab-content-carousel">
                        { _data.demo5.trendyCategories.map((cat, index1)=>
                            <TabPanel key={ `trend_tabpanel_${index1}` }>
                                <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ trendingSlider } >
                                    { getProductsByCategory(products, cat).map((item, index) => 
                                        <Product 
                                            product={ item }
                                            key = {index + item.name} 
                                            onAddToCartClick = {addToCart} 
                                            onToggleWishlistClick = { toggleWishlist } 
                                            onAddToCompareClick = { addToCompare }  
                                            showQuickViewModal = { showQuickViewModal } 
                                        />
                                    ) }
                                </OwlCarousel>
                            </TabPanel>
                        ) }
                    </div>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );