import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCategoryThree extends Component {
    render() {
        const { image, category, count } = this.props;
        
        return (
            <div className="banner banner-cat">
                <Link to="#">
                    <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + image } alt="Banner"/>
                </Link>

                <div className="banner-content banner-content-static text-center">
                    <h3 className="banner-title">{ category }</h3>
                    <h4 className="banner-subtitle">{ count } Products</h4>
                    <Link to="#" className="banner-link">Shop Now</Link>
                </div>
            </div>
        );
    }
}

export default ProductCategoryThree;