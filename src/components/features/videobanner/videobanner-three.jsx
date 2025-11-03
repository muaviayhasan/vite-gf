import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showModal } from '../../../actions';

class VideoBannerThree extends Component {
    constructor(props) {
        super(props);
        this.openVideoModal = this.openVideoModal.bind(this);
    }

    openVideoModal( e ) {
        this.props.showModal('video');
        e.preventDefault();
    } 

    render() {
        const { title, image, background } = this.props;

        return(
            <div className="video-banner bg-image text-center pt-8 pb-8" style={ { backgroundImage: "url("+background+")" } }>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                            <div className="video-poster">
                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + image } alt="poster"/>

                                <div className="video-poster-content">
                                    <h3 className="h4 video-poster-title text-white">{ title }</h3>
                                    <a href="https://www.youtube.com/watch?v=vBPgmASQ1A0" className="btn-video btn-iframe" onClick={ this.openVideoModal } ><i className="icon-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { showModal } )( VideoBannerThree );