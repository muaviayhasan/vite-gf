import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioTwo extends Component {
    render(){
        const { image, title="Vestibulum auctor dapibus", category } = this.props;
        return(
            <div className="portfolio">
                <figure className="portfolio-media">
                    <Link to="#">
                        <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + image } alt="item"/>
                    </Link>
                </figure>
                <div className="portfolio-content">
                    <h3 className="portfolio-title"><Link to="#">{title}</Link></h3>
                    <div className="portfolio-tags">
                        <Link to="#">{category}</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioTwo;