import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";

// import Custom Components
import SingleProductComponent from './common/base';
import ProductDetailOne from './common/detail-one';

import InnerOverlay from '../../common/overlay/inner-overlay';
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/quickview';
import ErrorPage from '../../main/pages/404';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../../actions';
import { isIEBrowser } from '../../../utils/utils';


class ExtendedInfo extends SingleProductComponent {
    
    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render(){
        const { product, addToCart, toggleWishlist, addToCompare} = this.props;

        if( ! product ) {
            return (
                <ErrorPage />
            )
        }
        const bigImages = product.lgPictures ? product.lgPictures : product.pictures;
        const smallImages = product.smPictures ? product.smPictures : product.pictures;
        
        return(
            <div className="main">
                <InnerOverlay/>

                <Breadcrumb 
                    title="Extended Description" 
                    slug="extended" 
                    parent1={ ["Products","product"] } 
                    type="product" 
                    adClass="breadcrumb-nav border-0 mb-0"
                    productId={ product.id }
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-gallery">
                                        <figure className="product-main-image">
                                            {product.new? <span className="product-label label-new">New</span> : ''}

                                            {product.top? <span className="product-label label-top">Top</span> : ''}

                                            {product.discount? <span className="product-label label-sale">{product.discount}% off</span> : ''}

                                            {(0 === product.stock)? <span className="product-label label-out">Out of Stock</span> : ''}
                                            
                                            <Magnifier
                                            imageSrc={ product.pictures[0] }
                                            imageAlt="Example"
                                            largeImageSrc={ bigImages[0] } // Optional
                                            dragToMove = {false}
                                            mouseActivation = "hover"
                                            cursorStyleActive = "crosshair"
                                            id="product-zoom"
                                            />

                                            <Link to="#" id="btn-product-gallery" className="btn-product-gallery" onClick={ this.openLightBox }>
                                                <i className="icon-arrows"></i>
                                            </Link>
                                        </figure>

                                        <div id="product-zoom-gallery" className="product-image-gallery">
                                            {
                                                product.pictures.map((item, index) => 
                                                    <Link className={ `product-gallery-item ${ parseInt(index) === 0 ? 'active' : ''}`} to="#" data-image={ item }data-zoom-image={ bigImages[index] } key={ product.id+'-'+index }>
                                                        <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + smallImages[index] } alt="product back"/>
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <ProductDetailOne product={product} onAddToCartClick={ () => addToCart(product, document.querySelector("#qty").value) } onToggleWishlistClick={ () => toggleWishlist(product) } onAddToCompareClick={ () => addToCompare(product) }  showQuickViewModal={ () => showQuickViewModal(product.id) }/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Tabs selectedTabClassName="show" selectedTabPanelClassName="active">
                        <div className="product-details-tab product-details-extended">
                            <TabList className="nav nav-pills justify-content-center">
                                <Tab className="nav-item">
                                    <span className="nav-link"> Description</span>
                                </Tab>

                                <Tab className="nav-item">
                                    <span className="nav-link"> Additional information</span>
                                </Tab>

                                <Tab className="nav-item">
                                    <span className="nav-link">Shipping & Returns</span>
                                </Tab>

                                <Tab className="nav-item">
                                    <span className="nav-link">Reviews ({product.reviews})</span>
                                </Tab>
                            </TabList>

                            <div className="tab-content">
                                <TabPanel className="tab-pane">
                                    <div className="product-desc-content">
                                        <div className="product-desc-row bg-image"  style={ {backgroundImage: `url('assets/images/products/single/extended/bg-1.jpg')`} }>
                                            <div className="container">
                                                <div className="row justify-content-end">
                                                    <div className="col-sm-6 col-lg-4">
                                                        <h2>Product Information</h2>
                                                        <ul>
                                                            <li>Faux suede fabric upper</li>
                                                            <li>Tie strap buckle detail</li>
                                                            <li>Block heel</li>
                                                            <li>Open toe</li>
                                                            <li>Heel Height: 7cm / 2.5 inches</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-desc-row bg-image text-white"  style={ {backgroundImage: `url('assets/images/products/single/extended/bg-2.jpg')`} }>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h2>Design</h2>
                                                        <p>The perfect choice for the summer months. These wedges are perfect for holidays and home, with the thick cross-over strap design and heel strap with an adjustable buckle fastening. Featuring chunky soles with an espadrille and cork-style wedge. </p>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <h2>Fabric & care</h2>
                                                        <p>As part of our Forever Comfort collection, these wedges have ultimate cushioning with soft padding and flexi soles. Perfect for strolls into the old town on holiday or a casual wander into the village.</p>
                                                    </div>
                                                </div>

                                                <div className="mb-5"></div>

                                                <img src={ `${ import.meta.env.VITE_PUBLIC_URL }/assets/images/products/single/extended/sign.png` } alt="" className="ml-auto mr-auto"/>
                                            </div>
                                        </div>

                                        <div className="product-desc-row bg-image"  style={ {backgroundImage: `url('assets/images/products/single/extended/bg-3.jpg')`} }>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-5">
                                                        <blockquote>
                                                            <p>“ Everything is important - <br/>that success is in the details. ”</p>

                                                            <cite>– Steve Jobs</cite>
                                                        </blockquote>
                                                        <p>Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tab-pane">
                                    <div className="product-desc-content">
                                        <div className = "container">
                                            <h3>Information</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                            <h3>Fabric & care</h3>
                                            <ul>
                                                <li>Faux suede fabric</li>
                                                <li>Gold tone metal hoop handles.</li>
                                                <li>RI branding</li>
                                                <li>Snake print trim interior </li>
                                                <li>Adjustable cross body strap</li>
                                                <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                                            </ul>
                                            <h3>Size</h3>
                                            <p>one size</p>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tab-pane">
                                    <div className="product-desc-content">
                                        <div className="container">
                                            <h3>Delivery & returns</h3>
                                            <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <Link to="#">Delivery information</Link><br/>
                                            We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <Link to="#">Returns information</Link></p>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tab-pane">
                                    <div className="container">
                                        <div className="reviews">
                                            <h3>Reviews (2)</h3>
                                            <div className="review">
                                                <div className="row no-gutters" style={ isIEBrowser() ? {flexDirection: 'row'} : {} }>
                                                    <div className="col-auto">
                                                        <h4><Link to="#">Samanta J.</Link></h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val" style={ {width: "80%"} }></div>
                                                            </div>
                                                        </div>
                                                        <span className="review-date">6 days ago</span>
                                                    </div>
                                                    <div className="col">
                                                        <h4>Good, perfect size</h4>

                                                        <div className="review-content">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                                        </div>

                                                        <div className="review-action">
                                                            <Link to="#"><i className="icon-thumbs-up"></i>Helpful (2)</Link>
                                                            <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="review">
                                                <div className="row no-gutters" style={ isIEBrowser() ? {flexDirection: 'row'} : {} }>
                                                    <div className="col-auto">
                                                        <h4><Link to="#">John Doe</Link></h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val" style={ {width: "100%"} }></div>
                                                            </div>
                                                        </div>
                                                        <span className="review-date">5 days ago</span>
                                                    </div>
                                                    <div className="col">
                                                        <h4>Very good</h4>

                                                        <div className="review-content">
                                                            <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                                        </div>

                                                        <div className="review-action">
                                                            <Link to="#"><i className="icon-thumbs-up"></i>Helpful (0)</Link>
                                                            <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>
                    </Tabs>

                    <h2 className="title text-center mb-4">You May Also Like</h2>

                    <div className="container">
                        { this.relatedProducts("rgb", "") }
                    </div>

                </div>

                { this.lightbox() }
                <QuickView />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const product_id = props.match.params.id;
    return {
        products: state.data.products ? state.data.products : [],
        product: state.data.products.filter((item) => item.id.toString() === product_id)[0]
    }
}

export default connect (
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)(ExtendedInfo);