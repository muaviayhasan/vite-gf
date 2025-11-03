import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCategoryFour extends Component {
    render() {
        const { image, category, count, type } = this.props;

        return (
            <div className="banner banner-cat banner-link-anim">
                <Link to="#">
                    <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + image } alt="Banner"/>
                </Link>
                
                <div className={ `banner-content ${ type }` }>
                    <h3 className="banner-title">{ category }</h3>
                    <h4 className="banner-subtitle">{ count } Products</h4>
                    <Link to="#" className="banner-link">Shop Now</Link>
                </div>
            </div>
        );
    }
}

export default ProductCategoryFour;