import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect }  from 'react-redux';

// import Custom Components
import CartMenu from './common/cart-menus/menu-1';

// import Services
import { getCartTotal } from '../../../services';
import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderTwentyThree extends Component {

    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }

    render() {
        return(
			<div className="header sticky-header">
                <div className="header-left">
                    <button className="mobile-menu-toggler">
                        <span className="sr-only">Toggle mobile menu</span>
                        <i className="icon-bars"></i>
                    </button>
                    
                    <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                        <form action="#" method="get">
                            <div className="header-search-wrapper search-wrapper-wide">
                                <label htmlFor="q" className="sr-only">Search</label>
                                <input type="search" className="form-control" name="q" id="q" placeholder="Search product..." required />
                                <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="header-center text-center">
                    <p>Free Delivery For Members</p>
                </div>

                <div className="header-right">
                    <div className="account">
                        <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/dashboard`} title="My account">
                            <i className="icon-user"></i>
                        </Link>
                    </div>

                    <div className="wishlist">
                        <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/shop/wishlist`} title="Wishlist">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count badge">{ this.props.wishlist.length}</span>
                        </Link>
                    </div>

                    <CartMenu/>

                    <p className="price">$ { this.props.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }</p>
                </div>
			</div>

        )
    }
}

export const mapStateToProps = (state) => ({
    wishlist: state.wishlist.list,
    total: getCartTotal(state.cartlist.cart)
})

export default connect(mapStateToProps) (HeaderTwentyThree);