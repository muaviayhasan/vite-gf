import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostThree from '../../features/post/post-three';
import Pagination from '../../features/pagination';
import BlogSidebar from '../../features/sidebar/blog-sidebar';

class Listing extends Component {
    render() {
        const { posts } = this.props;
        return(
            <div className="main">
                <PageHeader title="Blog Listing" subTitle="Blog"/>
                <Breadcrumb title="Listing" parent1={ ["Blog", "blog/classic"] } adClass="mb-3"/>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <PostThree post = {posts[3] }  imageSize = {5}/>
                                <PostThree post = {posts[4] }  imageSize = {5}/>
                                <PostThree post = {posts[17] } imageSize = {5}/>
                                <PostThree post = {posts[18] } imageSize = {5}/>
                                <PostThree post = {posts[19] } imageSize = {5}/>
                                <PostThree post = {posts[20] } imageSize = {5}/>

                                <Pagination />
                            </div>

                            <div className="col-lg-3">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
	posts: state.posts.items
})

export default connect(
	mapStateToProps
)(Listing);