import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ElementList from '../../features/element-list';
import PostThree from '../../features/post/post-three';
import PostFour from '../../features/post/post-four';
import PostFive from '../../features/post/post-five';

class BlogPosts extends Component {

    render() {

		const { posts } = this.props;

        return (
            <div className="main">
                <PageHeader title="Blog Posts" subTitle="Elements"/>
                <Breadcrumb title="Blog Posts" parent1={ ["Elements","elements/list"] } />

                <div className="page-content">
					<div className="container">

						<h2 className="title text-center mb-2">Classic</h2>

						<PostThree post = {posts[3] }/>
						<PostThree post = {posts[4] } type="video"/>

						<hr className="mb-5"/>

						<h2 className="title text-center mb-2">Grid 2 Columns</h2>
						
						<div className="row max-col-2">
							<div className="col-md-6">
								<PostFour post={ posts[5] } author={ true}/>
							</div>
							
							<div className="col-md-6">
								<PostFour post={ posts[6] } author={ true}/>
							</div>
						</div>

						<hr className="mb-5"/>

						<h2 className="title text-center mb-2">Grid 3 Columns</h2>
						
						<div className="row justify-content-center">
							<div className="col-sm-6 col-md-4">
								<PostFour post={ posts[7] }/>
							</div>
							
							<div className="col-sm-6 col-md-4">
								<PostFour post={ posts[8] }/>
							</div>

							<div className="col-sm-6 col-md-4">
								<PostFour post={ posts[9] }/>
							</div>

						</div>

						<hr className="mb-5"/>

						<h2 className="title text-center mb-2">Grid 4 Columns</h2>
						
						<div className="row justify-content-center">
							<div className="col-sm-6 col-lg-3">
								<PostFour post={ posts[10] }/>
							</div>
							<div className="col-sm-6 col-lg-3">
								<PostFour post={ posts[11] }/>
							</div>
							<div className="col-sm-6 col-lg-3">
								<PostFour post={ posts[12] }/>
							</div>
							<div className="col-sm-6 col-lg-3">
								<PostFour post={ posts[13] }/>
							</div>

						</div>

						<hr className="mb-5"/>

						<h2 className="title text-center mb-2">Grid 3 Columns <span className="title-separator">/</span> Mask</h2>
						
						<div className="row justify-content-center">
							<div className="col-sm-6 col-md-4">
								<PostFive post={ posts[14] }/>
							</div>
							<div className="col-sm-6 col-md-4">
								<PostFive post={ posts[15] } type="video"/>
							</div>
							<div className="col-sm-6 col-md-4">
								<PostFive post={ posts[16] } type="gallery"/>
							</div>
						</div>
					</div>
                </div>

                <ElementList />
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
	posts: state.posts.items ? state.posts.items : []
})

export default connect(
	mapStateToProps
)(BlogPosts);