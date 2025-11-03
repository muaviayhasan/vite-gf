import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel  from '../owl-carousel';
class PostNine extends Component {
     
    render() {
        const { post, isContent = true } = this.props;
        if (post) {
            let date = new Date(post.date);
            let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

            return(
                <article className="entry entry-grid">
                    {   "video" === post.type ?
                        <figure className="entry-media entry-video">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}` }>
                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + post.image[0] } alt="desc"/>
                            </Link>
                        </figure> :

                        Array.isArray(post.image) && "gallery" === post.type ?
                        <figure className="entry-media">
                            <OwlCarousel  adClass="owl-simple owl-light owl-nav-inside">
                                {post.image.map((item, index) => 
                                <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}`} key = {index }>
                                    <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + item }alt="desc"/>
                                </Link>) }
                            </OwlCarousel>
                        </figure> :

                        <figure className="entry-media">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}` }>
                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + post.image[0] } alt="desc"/>
                            </Link>
                        </figure>
                    }

                    <div className="entry-body">
                        <div className="entry-meta">
                            { isContent ?
                                <span className="entry-author">
                                    by <Link to="#">{post.author}</Link>
                                </span> : ''
                            }
                            { isContent ?
                                <span className="meta-separator">|</span> : ''
                            }
                            <Link to="#">{date.toLocaleDateString('en-US', options) }</Link>
                            <span className="meta-separator">|</span>
                            <Link to="#">{post.comments} Comments</Link>
                        </div>

                        <h2 className="entry-title">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}` }>{post.title}</Link>
                        </h2>

                        <div className="entry-cats">
                            in&nbsp;
                            {post.category.map((cat, index)=> (
                                <span key={ index }>
                                    <Link to="#">{cat}</Link>
                                    {index < post.category.length - 1 ? ', ' : ''}
                                </span>
                            )) }
                        </div>

                        {isContent ?
                        <div className="entry-content">
                            <p>{post.content}</p>
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}`} className="read-more">Continue Reading</Link>
                        </div> : ''}
                    </div>
            </article>
            );
        } else
            return ('');
        }
}

export default PostNine;