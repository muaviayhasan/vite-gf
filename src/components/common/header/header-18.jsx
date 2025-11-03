import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './common/main-menus/menu-2';
import CartMenu from './common/cart-menus/menu-1';
import SearchForm from './common/search-form';

import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderEighteen extends Component {

    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }

    render() {
        return (
            <header className="header header-11">
                <div className="header-middle sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <MainMenu />

                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                        </div>

                        <div className="header-center">
                            <Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/`} className="logo">
                                <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos/demo-18/logo.png` } alt="Molla Logo" width="82" height="25"/>
                            </Link>
                        </div>

                        <div className="header-right">
                            <SearchForm adClass="header-search-extended header-search-visible" wrapper_adClass=""/>
                            
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`} className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">{ this.props.wishlist.length}</span>
                            </Link>
                            <CartMenu/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        wishlist: state.wishlist.list
    }
}
export default connect( mapStateToProps )( HeaderEighteen );