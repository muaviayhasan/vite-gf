import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OwlCarousel from '../owl-carousel';
import { featureSlider1 } from '../settings';

import _data from '../../../mock_data/data';

class BrandBoxThree extends Component {
    render() {
        const { adClass="mb-5 owl-simple", sliderOption = featureSlider1 } = this.props;

        return (
            <OwlCarousel  adClass={ `${adClass} brand-carousel`} carouselOptions = { sliderOption  }>
                { 
                    _data.brands.default.slice( 9, 16 ).map((vari, i) => 
                        <Link to="#" className="brand"  key={ i} >
                            <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + vari.image} alt={ vari.name}/>
                        </Link>
                    )
                }
            </OwlCarousel>
        )
    }
}

export default BrandBoxThree;