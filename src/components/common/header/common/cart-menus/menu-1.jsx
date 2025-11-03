import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCartCount } from "../../../../../services";
import { removeFromCart } from "../../../../../actions";
import { safeContent } from "../../../../../utils/utils";

class CartMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        quantity:
          localStorage.getItem("sku") &&
          JSON.parse(localStorage.getItem("sku")).length,
        wishlist:
          localStorage.getItem("wishlist") &&
          JSON.parse(localStorage.getItem("wishlist")).length,
      });
    }, 500);
  }

  render() {
    const { cartlist, removeFromCart } = this.props;
    return (
      // no-label
      <div
        className="dropdown cart-dropdown"
        style={{ width: "300%", marginRight: "14px" }}
      >
        <button
          className="search-toggle-mobile mr-4"
          style={{ color: "#fff", fontSize: "24px", marginTop: "0.5rem" }}
        >
          <i className="icon-search"></i>
        </button>
        <Link
          to={`${import.meta.env.VITE_PUBLIC_URL}/get-a-quote`}
          className="dropdown-toggle ch111"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          {window.location.href.indexOf("home") !== -1 &&
          window.location.href.indexOf("book-home-visit") === -1 ? (
            <img
              className="mobile-quote-toogle"
              src="/assets/images/gnf/cart_icon.png"
              style={{ marginLeft: "-71%", height: 23, width: 25 }}
            />
          ) : (
            <img
              className="mobile-quote-toogle"
              src="/assets/images/gnf/cart_icon.png"
              style={{ marginLeft: "-71%", height: 23, width: 25 }}
            />
          )}

          <span className="cart-count">
            {" "}
            {localStorage.getItem("sku") ? this.state.quantity : 0}
          </span>
        </Link>

        <Link
          to={`${import.meta.env.VITE_PUBLIC_URL}/wishlist`}
          className="dropdown-toggle mobile-wishlist-toogle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
          style={{ marginLeft: "40%" }}
        >
          {window.location.href.indexOf("home") !== -1 &&
          window.location.href.indexOf("book-home-visit") === -1 ? (
            <span
              className="btn-wishlist"
              style={{ fontSize: 23, width: 12, color: "white" }}
            >
              <i className="icon-heart-empty"></i>
            </span>
          ) : (
            <span
              className="btn-wishlist"
              style={{ fontSize: 23, width: 12, color: "white" }}
            >
              <i className="icon-heart-empty"></i>
            </span>
          )}

          <span className="cart-count">
            {" "}
            {localStorage.getItem("wishlist") ? this.state.wishlist : 0}
          </span>
        </Link>

        {/* <div className={ `dropdown-menu dropdown-menu-right ${ cartlist.length === 0 ? 'text-center' : '' }` } style = { cartlist.length === 0 ? {width: '200px'} : {} }>
                    <div className="dropdown-cart-products">
                        { cartlist.map((item, index) => (
                            <div className="product" key={ index }>
                                <div className="product-cart-details">
                                    <h4 className="product-title">
                                        <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` } dangerouslySetInnerHTML={ safeContent(item.name) }></Link>
                                    </h4>

                                    <span className="cart-product-info">
                                        <span className="cart-product-qty">{ item.qty}</span>
                                        x ${ item.discount ? item.salePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}):item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }
                                    </span>
                                </div>

                                <figure className="product-image-container">
                                    <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/product/default/27` } className="product-image">
                                        <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + item.pictures[0] } data-oi={ import.meta.env.VITE_PUBLIC_URL + '/' + item.pictures[0] } alt="product" />
                                    </Link>
                                </figure>
                                <button className="btn-remove" title="Remove Product" onClick={ () => removeFromCart(item.id) }><i className="icon-close"></i></button>
                            </div>
                        )) }
                    </div>

                    { localStorage.getItem("sku") ?
                         '' : <p>Your Cart is Empty</p>
                    }
                    
                </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartlist: state.cartlist.cart ? state.cartlist.cart : [],
  };
}

export default connect(mapStateToProps, { removeFromCart })(CartMenu);
