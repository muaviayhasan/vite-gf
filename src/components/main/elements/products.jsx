import React, { Component } from 'react';
import {connect} from "react-redux";

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ElementList from '../../features/element-list';
import ProductOne from '../../features/product/product-one';
import ProductTwo from '../../features/product/product-two';
import ProductThree from '../../features/product/product-three';
import ProductFour from '../../features/product/product-four';
import ProductFive from '../../features/product/product-five';
import ProductSix from '../../features/product/product-six';
import ProductSeven from '../../features/product/product-seven';
import QuickView from '../../features/product/quickview';
import OwlCarousel from '../../features/owl-carousel';

// import utils
import { hoverIntent } from '../../../utils/utils';
import { mainSlider2, mainSlider4 } from '../settings';
// import actions
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';

class Products extends Component {
    componentDidMount() {
        hoverIntent();
    }

    render() {
        const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = this.props;
        let products = this.props.products;

        return (
            <div className="main no-span">
                <PageHeader title="Products" subTitle="Elements"/>
                <Breadcrumb title="Products" parent1={ ["Elements","elements/list"] } />

                <div className="page-content">
                    <div className="container">
                        <h2 className="title text-center mb-3">3 Columns Large</h2>
                        
                        <div className="row">
                            { products.slice(0, 3).map((item,index) =>
                                <div className="col-6 col-md-4 col-lg-4"  key={ `one_${index}` }>
                                    <ProductOne 
                                        product={ item } 
                                        onAddToCartClick = { addToCart } 
                                        onAddToCompareClick = { addToCompare } 
                                        showQuickViewModal = { showQuickViewModal } 
                                    />
                                </div>                        
                            ) }
                        </div>

                        <hr className="mt-1 mb-5" />

                        <h2 className="title text-center mb-3">4 Columns Carousel</h2>

                        <OwlCarousel  adClass = "owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ mainSlider2  }>
                            { products.slice(0, 4).map((product, index) =>
                                <ProductTwo 
                                    product={ product } 
                                    key = { index } 
                                    onAddToCartClick = { addToCart }
                                    onToggleWishlistClick = { toggleWishlist }
                                    onAddToCompareClick = { addToCompare }
                                    showQuickViewModal = { showQuickViewModal }
                                />
                            ) }
                        </OwlCarousel>

                        <hr className="mt-3 mb-5" />

                	    <h2 className="title text-center mb-3">4 Columns Carousel 2</h2>
                        
                        <OwlCarousel  adClass = "owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ mainSlider2  }>
                            { products.slice(0, 4).map((product, index) =>
                                <ProductThree 
                                    product={ product }
                                    key = { index }
                                    onAddToCartClick = { addToCart }
                                    onToggleWishlistClick = { toggleWishlist }
                                    onAddToCompareClick = { addToCompare }
                                    showQuickViewModal = { showQuickViewModal }
                                />
                            ) }
                        </OwlCarousel>

                        <hr className="mt-3 mb-5" />
                        <h2 className="title text-center mb-3">4 Columns Simple</h2>
                        
                        <div className="row">
                            {products.slice(0, 4).map((product, index) =>
                                <div className="col-6 col-md-4 col-lg-3"  key={ index }><ProductFour product={ product}  onAddToCartClick={ () => addToCart(product, 1) } onToggleWishlistClick={ () => toggleWishlist(product) } onAddToCompareClick={ () => addToCompare(product) }  showQuickViewModal={ () => showQuickViewModal(product.id) }/></div>
                            ) }
                        </div>

                        <hr className="mt-2 mb-5" />
                        <h2 className="title text-center mb-3">5 Columns Simple</h2>

                        <OwlCarousel  adClass = "owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ mainSlider4  }>
                            {products.slice(0, 5).map((product, index) =>
                                <ProductFive 
                                    product={ product } 
                                    onAddToCartClick = { addToCart } 
                                    onToggleWishlistClick = { toggleWishlist } 
                                    onAddToCompareClick = { addToCompare }
                                    key = { `five_${index}` }
                                />
                            ) }
                        </OwlCarousel>
                        <hr className="mt-0 mb-5" />
                    </div>

                    <div className="container-fluid">
                        <h2 className="title text-center mb-3">Fullwidth</h2>

                        <div className="row">
                            {products.slice(0, 6).map((product, index) =>
                                <div className="col-6 col-md-4 col-lg-3 col-xl-2"  key={ index }>
                                    <ProductSix 
                                        product={ product }
                                        onAddToCartClick = { addToCart }
                                        onToggleWishlistClick = { toggleWishlist }
                                        onAddToCompareClick = { addToCompare }
                                        showQuickViewModal = { showQuickViewModal }
                                    />
                                </div>
                            ) }
                        </div>
                    </div>

                    <div className="container">
                        <hr className="mt-2 mb-5" />
                        <h2 className="title text-center mb-3">4 Columns Without Space</h2>

                        <div className="row no-gutters">
                            {products.slice(0, 4).map((product, index) =>
                                <div className="col-6 col-md-4 col-lg-3"  key={ index }>
                                    <ProductSeven 
                                        product={ product }  
                                        onAddToCartClick = { addToCart } 
                                        onToggleWishlistClick = { toggleWishlist } 
                                        onAddToCompareClick = { addToCompare } 
                                        showQuickViewModal = { showQuickViewModal }
                                    />
                                </div>
                            ) }
                        </div>
                    </div>
                </div>

                <ElementList />
                <QuickView />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.data.products ? state.data.products : []
})

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)(Products)