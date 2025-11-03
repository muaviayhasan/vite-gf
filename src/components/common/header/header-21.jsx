import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './common/main-menus/menu-1';
import CartMenu from './common/cart-menus/menu-1';
import SearchToggle from './common/search-toggle';

import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderTwentyOne extends Component {

    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }
    
    render() {
        const { wishlist } = this.props;    

        return (
            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <div className="header-dropdown">
                                <Link to="#">Usd</Link>
                                <div className="header-menu">
                                    <ul>
                                        <li><Link to="#">Eur</Link></li>
                                        <li><Link to="#">Usd</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-dropdown">
                                <Link to="#">Eng</Link>
                                <div className="header-menu">
                                    <ul>
                                        <li><Link to="#">English</Link></li>
                                        <li><Link to="#">French</Link></li>
                                        <li><Link to="#">Spanish</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <ul className="top-menu">
                                <li>
                                    <Link to="#">Links</Link>
                                    <ul>
                                        <li><Link to="tel: "><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                        <li><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/about` }>About Us</Link></li>
                                        <li><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/contact` }>Contact Us</Link></li>
                                        <li><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/login`} data-toggle="modal"><i className="icon-user"></i>Login</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="header-middle sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                            
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/`} className="logo">
                                <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos/demo-21/logo.png` } alt="Molla Logo" width="100" height="25"/>
                            </Link>

                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <SearchToggle />

                            <div className="wishlist">
                                <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`} title="Wishlist">
                                    <i className="icon-heart-o"></i>
                                    <span className="wishlist-count">{wishlist.length}</span>
                                </Link>
                            </div>

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
export default connect( mapStateToProps )( HeaderTwentyOne );