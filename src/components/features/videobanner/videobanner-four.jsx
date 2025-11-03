import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { showModal } from '../../../actions';

class VideoBannerFour extends Component {

    constructor(props) {
        super(props);
        this.openVideoModal = this.openVideoModal.bind(this);
    }

    openVideoModal( e ) {
        this.props.showModal('video');
        e.preventDefault();
    } 

    render() {
        const { title, subTitle, content, image, btn, btn_link } = this.props;

        return (
            <div className="video-banner bg-light pt-5 pb-5">
                <div className="container align-items-center">
                    <div className="video-banner-box bg-white">
                        <div className="row align-items-center">

                            <div className="col-md-6 mb-3 mb-md-0">
                                <div className="video-box-content">
                                    <h3 className="video-banner-title h1"><span className="text-primary">{subTitle}</span><strong>{title}</strong></h3>
                                    <p>{content}</p>
                                    <Link to={ btn_link ? btn_link : "#"} className="btn btn-outline-primary"><span>{btn?btn:'Click Here'}</span><i className="icon-long-arrow-right"></i></Link>
                                </div>   
                            </div>

                            <div className="col-md-6">
                                <div className="video-poster">
                                    <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + image } alt="poster" />

                                    <div className="video-poster-content">
                                        <a href="https://www.youtube.com/watch?v=vBPgmASQ1A0" className="btn-video btn-iframe" onClick={ this.openVideoModal  }><i className="icon-play"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { showModal } )( VideoBannerFour );