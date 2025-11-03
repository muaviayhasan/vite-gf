import React, { Component } from 'react';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ElementList from '../../features/element-list';
import VideoBannerOne from '../../features/videobanner/videobanner-one';
import VideoBannerTwo from '../../features/videobanner/videobanner-two';
import VideoBannerThree from '../../features/videobanner/videobanner-three';
import VideoBannerFour from '../../features/videobanner/videobanner-four';
import VideoModal from '../../features/video-modal';

class VideoBanners extends Component {
    render() {
        return (
            <div className="main">

                <PageHeader title="Video Banners" subTitle="Elements"/>
                <Breadcrumb title="Video Banners" parent1={ ["Elements","elements/list"] } />

                <div className="page-content">
                    <div className="container">
                        <h2 className="title mb-3 text-center">Fullwidth Banner</h2>
                    </div>
                    <VideoBannerOne content='<span>New Video</span><strong>Womens New Arrivals</strong>' image = "assets/images/video/bg-1.jpg"/>

                    <div className="container">
                        <hr className="mt-5 mb-4" />
                        <h2 className="title mb-3 text-center">Video Banner with Description</h2>
                    </div>

                    <VideoBannerTwo title = "Womens New Arrivals" subTitle = "New Video" content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper ..." image = "assets/images/video/poster-1.jpg" />

                    <div className="container">
                        <hr className="mt-5 mb-4" />
                        <h2 className="title mb-3 text-center">Video Banner with Background</h2>
                    </div>

                    <VideoBannerThree title = "Womens New Arrivals" image = "assets/images/video/poster-2.jpg" background = "assets/images/video/bg-2.jpg" />

                    <div className="container">
                        <hr className="mt-5 mb-4" />
                        <h2 className="title mb-3 text-center">Deal Video Banner</h2>
                    </div>

                    <VideoBannerFour title = "Deal Banner" subTitle = "New Video" content = "Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis." image =  "assets/images/video/poster-3.jpg"/>
                </div>
                
                <ElementList />
                <VideoModal />
            </div>
        );
    }
}

export default VideoBanners;