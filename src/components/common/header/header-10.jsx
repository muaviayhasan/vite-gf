import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

// import Custom Components
import Logo from '../logo';
import MainMenu from './common/main-menus/menu-1';
import CartMenu from './common/cart-menus/menu-2';
import SearchToggle from './common/search-toggle';

import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderTen extends Component {

    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }
    
    render() {
        return (
            <header className="header">
                <div className="header-bottom sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <Logo logo="demos/demo-8/logo.png" width="82" height="20"/>
                        </div>

                        <div className="header-center">
                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <SearchToggle />
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`} className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">{ this.props.wishlist.length}</span>
                            </Link>
                            <CartMenu/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        wishlist: state.wishlist.list
    }
}
export default connect( mapStateToProps )( HeaderTen );