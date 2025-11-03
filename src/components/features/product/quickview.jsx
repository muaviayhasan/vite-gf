import React, { Component } from 'react';
import Modal from 'react-modal';
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';

import OwlCarousel from '../../features/owl-carousel';

import { addToCart, toggleWishlist, addToCompare, closeQuickViewModal } from '../../../actions';
import { findIndex, quantityInputs, isIEBrowser, safeContent } from '../../../utils/utils';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(51,51,51,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement('#root');

class QuickView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
        this.openLightBox = this.openLightBox.bind(this);
    }

    openLightBox(e, index) {
        this.setState({isOpen: true, photoIndex: index});
        e.preventDefault();
    }

    afterOpenModal() {
        quantityInputs();
    }

    render() {
        const { showModal, productDetail, addToCart, toggleWishlist, addToCompare, closeQuickViewModal } = this.props;

        if ( ! productDetail || ! productDetail.name )
            return ( '' );

        let ratings = productDetail.ratings * 20;
        let images  = productDetail.lgPictures ? productDetail.lgPictures : productDetail.pictures;

        const { photoIndex, isOpen } = this.state;

        return (
            <Modal isOpen={ showModal }
                contentLabel="QuickView"
                onAfterOpen={ this.afterOpenModal}
                onRequestClose={ closeQuickViewModal}
                shouldFocusAfterRender={ false }
                style={ customStyles}
                className="container quickView-container" id="product-quickview">

                <div className="quickView-content" >
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className="row">

                                <div className="product-left" id="owl-dots">
                                    {
                                        productDetail.pictures.map((item, index) => (
                                            <button className={ `carousel-dot ${ 0===index ? 'active' : '' }`} key={ index }>
                                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + item } alt="dot"/>
                                            </button>
                                        ))
                                    }
                                </div>

                                <div className="product-right">
                                    <OwlCarousel adClass="owl-quickview owl-carousel owl-theme owl-nav-inside owl-light mb-0 owl-loaded owl-drag" carouselOptions="{dots: false,nav:false,dotsContainer: #owl-dots, responsive:{900:{nav:true,dots:true}} " id="owl_quickview">
                                    {
                                        productDetail.pictures.map((item, index) =>(
                                            <div className="intro-slide" key={ index }>
                                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + item } alt="Desc" />
                                                <Link to="popup/fullscreen.html" className="btn-fullscreen" onClick={ (e)=>this.openLightBox(e,parseInt(index))  }>
                                                    <i className="icon-arrows"></i>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                    </OwlCarousel>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">

                            <h2 className="product-title" dangerouslySetInnerHTML={ safeContent(productDetail.name) }></h2>

                            <h3 className="product-price">${productDetail.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</h3>

                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={ {width: ratings + '%'} }></div>
                                </div>
                                <span className="ratings-text">({productDetail.reviews} Reviews )</span>
                            </div>

                            <p className="product-txt">{productDetail.shortDesc}</p>

                            { productDetail.variants ?
                                ( productDetail.variants[0].image || productDetail.variants[0].model ) ?
                                <div className="details-filter-row product-nav product-nav-thumbs">
                                    { productDetail.variants.map((vari, i) => {
                                        return (
                                            <Link to="#" key={ i} className={ 0 === i?'active':'' }>
                                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + ( vari.image ? vari.image : vari.model ? vari.model : '' ) } alt="product desc" />
                                            </Link>)
                                    }) }
                                </div> : 

                                <div className="details-filter-row product-nav product-nav-dots">
                                    { productDetail.variants.map((vari, i) => 
                                        <Link to="#" key={ i} className={ 0 === i ? 'active' : ''}  style={ {backgroundColor: vari.rgb} }>
                                        </Link>
                                    ) }
                                </div> : ''
                            }

                            { productDetail.size ?
                                <div className="details-filter-row details-row-size">
                                    <label htmlFor="size">Size:</label>
                                    <div className="select-custom">
                                        <select name="size" id="size" className="form-control" defaultValue="#">
                                            <option value="#">Select a size</option>
                                            { productDetail.size.map( (item, index) => (
                                                <option value={ item } key={ index }> { item } </option>
                                            )) }
                                        </select>
                                    </div>
                                </div> : ''
                            }

                            
                            <div className="details-filter-row details-row-size">
                                <label htmlFor="qty">Qty:</label>
                                <div className="product-details-quantity">
                                    <input type="number" id="qty" className="form-control" defaultValue={ 0 === productDetail.stock ? 0 : 1 } min="1" max={ productDetail.stock } step="1" data-decimals="0" required/>
                                </div>
                            </div>

                            <div className="product-details-action">
                                <div className="details-action-wrapper">

                                    <button  className={ `btn-product btn-wishlist ${ this.props.wishlist ? 'added-to-wishlist':''}`} 
                                        onClick={ () => toggleWishlist(productDetail, this.props.wishlist) } 
                                        title={ this.props.wishlist ? "Remove from wishlist" : "Add to wishlist"}
                                        style={ { minHeight: isIEBrowser() ? '20px' : 'auto' }}
                                    >
                                        <span>{ this.props.wishlist ? "remove from wishlist" : "add to wishlist"}</span>
                                    </button>

                                    <button className="btn-product btn-compare" 
                                        title="Compare" 
                                        onClick={ () => addToCompare(productDetail) }
                                        style={ { minHeight: isIEBrowser() ? '20px' : 'auto' } } >
                                        <span>Add to Compare1</span>
                                    </button>
                                </div>
                                <button className="btn-product btn-cart" onClick={ () => addToCart(productDetail, document.querySelector("#qty").value) } style={ { minHeight: isIEBrowser() ? '44px' : 'auto'} }>
                                    <span>add to cart</span>
                                </button>
                            </div>

                            <div className="product-details-footer">
                                <div className="product-cat">
                                    <span>Category:</span>
                                    <Link to="#">{ productDetail.category }</Link>
                                </div>

                                <div className="social-icons social-icons-sm">
                                    <span className="social-label">Share:</span>
                                    <Link to="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                                    <Link to="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                                    <Link to="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                                    <Link to="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button title="Close (Esc)" type="button" className="mfp-close" onClick={ ()=>closeQuickViewModal() }><span>×</span></button>

                {isOpen && (
                    <Lightbox
                        mainSrc={ images[photoIndex] }
                        nextSrc={ images[( photoIndex + 1 ) % images.length] }
                        prevSrc={ images[( photoIndex + images.length - 1 ) % images.length] }
                        onCloseRequest={ () => this.setState({ isOpen: false }) }
                        onMovePrevRequest={ () =>
                            this.setState({
                                photoIndex: ( photoIndex + images.length - 1 ) % images.length,
                            })
                        }
                        onMoveNextRequest={ () =>
                            this.setState({
                                photoIndex: ( photoIndex + 1 ) % images.length,
                            })
                        }
                    />
                ) }
                
            </Modal>
        );
    }
}
const mapStateToProps = ( state, ownprops ) => {
    let wishlist = false;

    if ( findIndex( state.wishlist.list, item => item.id === state.data.productDetail.id ) !== -1 )
        wishlist = true;

    return {
        showModal: state.data.quickView,
        productDetail: state.data.productDetail,
        wishlist: wishlist
    };
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, closeQuickViewModal } )(QuickView);