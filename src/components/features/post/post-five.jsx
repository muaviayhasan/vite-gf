import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostFive extends Component{

    render(){
        const { post } = this.props;

        if (post) {
            let date = new Date(post.date);
            let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

            return(
                <article className="entry entry-mask">
                    {post.type === "image" ?
                        <figure className="entry-media">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}` }>
                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + post.image[0] } alt="desc"/>
                            </Link>
                        </figure> :

                    post.type === "video" ?
                        <figure className="entry-media entry-video">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}` }>
                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + post.image[0] } alt="desc"/>
                            </Link>
                        </figure> :

                    post.type === "gallery" ?
                        <figure className="entry-media entry-gallery">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}` }>
                                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + post.image[0] } alt="desc"/>
                            </Link>
                        </figure> : ''
                    }

                    <div className="entry-body">
                        <div className="entry-meta">
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
                    </div>
                </article>
            );
        } else
            return ('');
        }
}

export default PostFive;