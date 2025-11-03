import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import Logo from '../logo';
import MainMenu from './common/main-menus/menu-1';
import CartMenu from './common/cart-menus/menu-4';
import CategoryMenu from './common/category-menus/menu-1';
import SearchForm from './common/search-form';
import LoginModal from '../../features/login-modal';

import { showModal } from '../../../actions';
import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderTwo extends Component {

    constructor(props) {
        super(props);
        this.openLoginModal = this.openLoginModal.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }

    openLoginModal(e) {
        this.props.showModal('login');
        e.preventDefault();
    }
    
    render() {
        const { wishlist } = this.props;
        return (
            <header className="header header-2 header-intro-clearance">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <p>Special collection already available.</p><Link to="#">&nbsp;Read more ...</Link>
                        </div>

                        <div className="header-right">

                            <ul className="top-menu">
                                <li>
                                    <Link to="#">Links</Link>
                                    <ul>
                                        <li>
                                            <div className="header-dropdown">
                                                <Link to="#">USD</Link>
                                                <div className="header-menu">
                                                    <ul>
                                                        <li><Link to="#">Eur</Link></li>
                                                        <li><Link to="#">Usd</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="header-dropdown">
                                                <Link to="#">English</Link>
                                                <div className="header-menu">
                                                    <ul>
                                                        <li><Link to="#">English</Link></li>
                                                        <li><Link to="#">French</Link></li>
                                                        <li><Link to="#">Spanish</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link to="#signin-modal" data-toggle="modal" onClick={ this.openLoginModal  }>Sign in / Sign up</Link></li>
                                    </ul>
                                </li>
                            </ul>
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
                            
                            <Logo logo="demos/demo-2/logo.png"/>
                        </div>

                        <div className="header-center">
                            <SearchForm />
                        </div>

                        <div className="header-right">
                            <div className="account">
                                <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/pages/dashboard`} title="My account">
                                    <div className="icon">
                                        <i className="icon-user"></i>
                                    </div>
                                    <p>Account</p>
                                </Link>
                            </div>

                            <div className="wishlist">
                                <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`} title="Wishlist">
                                    <div className="icon">
                                        <i className="icon-heart-o"></i>
                                        <span className="wishlist-count badge">{wishlist.length}</span>
                                    </div>
                                    <p>Wishlist</p>
                                </Link>
                            </div>
                            <CartMenu />
                        </div>
                    </div>
                </div>

                <div className="header-bottom sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <CategoryMenu />
                        </div>

                        <div className="header-center">
                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <i className="la la-lightbulb-o"></i><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
                        </div>
                    </div>
                </div>
                <LoginModal />
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        wishlist: state.wishlist.list
    }
}
export default connect( mapStateToProps, { showModal } )( HeaderTwo );