import React, { Component } from "react";
import { connect } from "react-redux";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";
import PostSix from "../../features/post/post-six";
import Pagination from "../../features/pagination";
import BlogSidebar from "../../features/sidebar/blog-sidebar";

class Classic extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="main">
        <PageHeader title="Blogs" subTitle="" />
        <Breadcrumb title="Blogs" adClass="mb-3" />

        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                {posts.slice(0, 12).map((post, index) => (
                  <PostSix post={post} key={index} />
                ))}
                {/* <Pagination /> */}
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

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps)(Classic);
