import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _data from '../../../mock_data/data';

export default class InstagramThree extends Component {
    render() {
        
        const { demo="demo24", adClass="row" } = this.props;

        return (
            <div className={ adClass }> 
                { _data[demo].instagram.map( ( item, index ) => 

                    <div key={ index} className="col-xl-5col col-md-3 col-6 instagram-feed">
                        <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + item.img } alt="img" />

                        <div className="instagram-feed-content">
                            <Link to="#"><i className="icon-heart-o"></i>{ item.likes}</Link>
                            <Link to="#"><i className="icon-comments"></i>{ item.comments}</Link>
                        </div>
                    </div>
                    
                ) }
            </div>
        );
    }
}