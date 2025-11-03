import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './common/main-menus/menu-1';
import CartMenu from './common/cart-menus/menu-1';
import CompareMenu from './common/compare-menus/menu-1';
import CategoryMenuTwo from './common/category-menus/menu-2';

import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderSix extends Component {

    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }
    
    render() {
        return (
            <header className="header header-10">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <ul className="top-menu">
                                <li>
                                    <Link to="#">Links</Link>
                                    <ul>
                                        <li><Link to="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="header-right">
                            <ul className="top-menu top-link-menu">
                                <li>
                                    <Link to="#">Links</Link>
                                    <ul>
                                        <li><Link to="#signin-modal" data-toggle="modal"><i className="icon-user"></i>Login</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="header-dropdown">
                                <Link to="#">USD</Link>
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
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                            <Link  to={ `${import.meta.env.VITE_PUBLIC_URL}/`} className="logo">
                                <img src={ `${import.meta.env.VITE_PUBLIC_URL}/assets/images/demos/demo-13/logo.png` } alt="Molla Logo" width="110" height="25"/>
                            </Link>
                        </div>
                        <div className="header-right">
                            <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                                <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper search-wrapper-wide">
                                        <div className="select-custom">
                                            <select id="cat" name="cat">
                                                <option value="">All Departments</option>
                                                <option value="1">Fashion</option>
                                                <option value="2">- Women</option>
                                                <option value="3">- Men</option>
                                                <option value="4">- Jewellery</option>
                                                <option value="5">- Kids Fashion</option>
                                                <option value="6">Electronics</option>
                                                <option value="7">- Smart TVs</option>
                                                <option value="8">- Cameras</option>
                                                <option value="9">- Games</option>
                                                <option value="10">Home &amp; Garden</option>
                                                <option value="11">Motors</option>
                                                <option value="12">- Cars and Trucks</option>
                                                <option value="15">- Boats</option>
                                                <option value="16">- Auto Tools &amp; Supplies</option>
                                            </select>
                                        </div>
                                        <label htmlFor="q" className="sr-only">Search</label>
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required/>
                                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <CompareMenu />
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`} className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">{ this.props.wishlist.length }</span>
                            </Link>
                            <CartMenu/>
                        </div>
                    </div>
                </div>
                <div className="header-bottom sticky-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <CategoryMenuTwo />
                            </div>

                            <div className="col-lg-9">
                                <MainMenu />
                            </div>
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
export default connect( mapStateToProps )( HeaderSix );