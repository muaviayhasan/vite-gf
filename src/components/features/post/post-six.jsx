import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "../owl-carousel";

class PostSix extends Component {
  render() {
    const { post } = this.props;
    if (post) {
      // let date = new Date(post.date);
      // let options = {
      //   year: "numeric",
      //   month: "short",
      //   day: "2-digit",
      //   timeZone: "UTC",
      // };

      return (
        <article className="entry">
          {"video" === post.type ? (
            <figure className="entry-media entry-video">
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}`}>
                <img
                  src={import.meta.env.VITE_PUBLIC_URL + "/" + post.image[0]}
                  alt="desc"
                  style={{ height: 562 }}
                />
              </Link>
            </figure>
          ) : Array.isArray(post.image) && "gallery" === post.type ? (
            <figure className="entry-media">
              <OwlCarousel adClass="owl-simple owl-light owl-nav-inside owl-loaded owl-drag">
                {post.image.map((item, index) => (
                  <Link
                    to={`${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}`}
                    key={`${index}_blog`}
                  >
                    <img
                      src={import.meta.env.VITE_PUBLIC_URL + "/" + item}
                      style={{ height: 562 }}
                      alt="desc"
                    />
                  </Link>
                ))}
              </OwlCarousel>
            </figure>
          ) : (
            <figure className="entry-media">
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}`}>
                <img
                  src={import.meta.env.VITE_PUBLIC_URL + "/" + post.image[0]}
                  style={{ height: 562 }}
                  alt="desc"
                />
              </Link>
            </figure>
          )}
          <div className="entry-body">
            <h2 className="entry-title">
              <Link to={`${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}`}>
                {post.title}
              </Link>
            </h2>

            <div className="entry-content">
              <p>{post.content}</p>
              <Link
                to={`${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}`}
                className="read-more"
              >
                Continue Reading
              </Link>
            </div>
          </div>
        </article>
      );
    } else return "";
  }
}

export default PostSix;
