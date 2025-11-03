
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousels from '../../features/owl-carousel';
import { featureSlider4 } from '../settings';

import _data from '../../../mock_data/data';

export default class InstagramTwo extends Component {

    render() {
        
        const { adClass="", demo="demo16" } = this.props;

        return (
            <OwlCarousels adClass={ `owl-simple ${adClass}`}  carouselOptions={ featureSlider4  }>
                { _data[demo].instagram.map( ( item, index ) => 

                    <div key={ index} className="instagram-feed">
                        <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + item.img } alt="img" />

                        <div className="instagram-feed-content">
                            <Link to="#"><i className="icon-heart-o"></i>{ item.likes}</Link>
                            <Link to="#"><i className="icon-comments"></i>{ item.comments}</Link>
                        </div>
                    </div>
                    
                ) }
            </OwlCarousels>
        );
    }
}