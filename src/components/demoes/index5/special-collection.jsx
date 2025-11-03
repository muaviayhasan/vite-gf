import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';
import Product from './product';
import { featuredSlider } from './settings';

import { getSaleProducts, getTopRatingProducts, getFeaturedProducts, getProductsByDemo } from '../../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';

class SpecialCollection extends Component {

    UNSAFE_componentWillMount() {
        window.addEventListener("resize", this.handleReisze())
    }

    handleReisze() {
        this.forceUpdate();
    }


    render() {
        const { addToCart, addToCompare, toggleWishlist, showQuickViewModal } = this.props;

        let products = getFeaturedProducts( getProductsByDemo( this.props.products, "demo3" ) );
        
        return (
            <Tabs selectedTabClassName="show">
                <TabList className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3">
                    <Tab className="nav-item">
                        <span className="nav-link">Featured</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">On Sale</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Top Rated</span>
                    </Tab>
                </TabList>

                <TabPanel>
                    <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ featuredSlider } >
                        { products.map((item, index) => 
                            <Product 
                                key={ item.name + index}
                                product={ item }
                                colorType = "rgb" 
                                onAddToCartClick={ addToCart } 
                                onToggleWishlistClick={ toggleWishlist} 
                                onAddToCompareClick={ addToCompare}  
                                showQuickViewModal={ showQuickViewModal}
                            />
                        ) }
                    </OwlCarousel>
                </TabPanel>

                <TabPanel>
                    <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ featuredSlider } >
                        { getSaleProducts( products ).map((item, index) => 
                            <Product 
                                key = {index}
                                product={ item }
                                colorType = "rgb" 
                                onAddToCartClick={ addToCart } 
                                onToggleWishlistClick={ toggleWishlist} 
                                onAddToCompareClick={ addToCompare}  
                                showQuickViewModal={ showQuickViewModal}
                            />
                        ) }
                    </OwlCarousel>
                </TabPanel>

                <TabPanel>
                    <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ featuredSlider } >
                        { getTopRatingProducts( products ).map((item, index) => 
                            <Product 
                                key = {index}
                                product={ item }
                                colorType = "rgb" 
                                onAddToCartClick={ addToCart } 
                                onToggleWishlistClick={ toggleWishlist} 
                                onAddToCompareClick={ addToCompare}  
                                showQuickViewModal={ showQuickViewModal}
                            />
                        ) }
                    </OwlCarousel>
                </TabPanel>
            </Tabs>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, addToCompare, showQuickViewModal, toggleWishlist } )( SpecialCollection );