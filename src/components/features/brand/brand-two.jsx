import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OwlCarousel from '../owl-carousel';

import { featureSlider2 } from '../settings';

// import Jsons
import _data from '../../../mock_data/data';

class BrandBoxTwo extends Component {
    render() {
        return(
            <OwlCarousel  adClass={ `${ this.props.adClass} brand-carousel`} carouselOptions = { featureSlider2  }>
                    { _data.brands.default.map((vari, i) => {
                        return (
                        <Link to={ import.meta.env.VITE_PUBLIC_URL + '/' + vari.url} className="brand"  key={ i} >
                            <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + vari.image} alt={ vari.name}/>
                        </Link>
                        )
                    })
                }
            </OwlCarousel>
        )
    }
}

export default BrandBoxTwo;