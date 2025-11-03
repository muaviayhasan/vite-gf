import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OwlCarousels from '../owl-carousel';
import { featureSlider1 } from '../settings';

import _data from '../../../mock_data/data.json';

class BrandBoxOne extends Component {
    render() {
        const { adClass="mt-5 mb-5 owl-simple", count=6, start=0, sliderOption=featureSlider1 } = this.props;

        return(
            <OwlCarousels  adClass={ `${adClass} brand-carousel`} carouselOptions = { sliderOption  }>
                { _data.brands.default.slice(start, start + count).map((vari, i) => {
                    return (
                        <Link to="#" className="brand"  key={ i} >
                            <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + vari.image} alt={ vari.name}/>
                        </Link>
                        )
                    })
                }
            </OwlCarousels>
        )
    }
}

export default BrandBoxOne;