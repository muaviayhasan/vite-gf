import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioOne extends Component {
    render(){
        const{ image, title="Vestibulum auctor dapibus", category, type="bottom" } = this.props;
        
        if (type === "bottom")
            return(
                <div className="portfolio portfolio-overlay">
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

        if (type === "center")
            return(
                <div className="portfolio portfolio-overlay">
                    <figure className="portfolio-media">
                        <Link to="#">
                            <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + image } alt="item"/>
                        </Link>
                    </figure>
                    <div className="portfolio-content portfolio-content-center">
                        <h3 className="portfolio-title"><Link to="#">{title}</Link></h3>
                        <div className="portfolio-tags">
                            <Link to="#">{category}</Link>
                        </div>
                    </div>
                </div>
            );      
    }
}

export default PortfolioOne;