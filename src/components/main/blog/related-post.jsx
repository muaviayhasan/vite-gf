import React, { Component } from 'react';

import PostNine from '../../features/post/post-nine';
import OwlCarousels from '../../features/owl-carousel';

export default class RelatedPost extends Component {
    render() {
        const { posts, slider } = this.props;
        return (
            <div className="related-posts">
                <h3 className="title">Related Posts</h3>
                <OwlCarousels  adClass="owl-simple" carouselOptions={ slider  }>
                    {
                        posts.map((post, index) =>
                            <PostNine post={ post} isContent={ false} key={ index}/>
                        )
                    }
                </OwlCarousels>
            </div>
        )
    }
}