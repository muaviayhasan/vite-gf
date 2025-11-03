import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostFour extends Component{

    render(){
        const{ post, author = false } = this.props;

        if (post) {
            let date = new Date(post.date);
            let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

            return(
                <article className="entry entry-grid">
                    <figure className="entry-media">
                        <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}` }>
                            <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + post.image[0] } alt="desc"/>
                        </Link>
                    </figure>

                    <div className="entry-body text-center">
                        {author ?                   
                            <div className="entry-meta">
                                by <Link to="#">{post.author}</Link>, <Link to="#">{date.toLocaleDateString('en-US', options) }</Link>, {post.comments} Comments
                            </div> :
                            <div className="entry-meta">
                                <Link to="#">{date.toLocaleDateString('en-US', options) }</Link>, {post.comments} Comments
                            </div>
                        }

                        <h2 className="entry-title">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}` }>
                            {post.title}
                            </Link>
                        </h2>

                        <div className="entry-content">
                            <p>{post.content}</p>

                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/single/${post.id}`} className="read-more">
                            Read More
                            </Link>
                        </div>
                    </div>
                </article>
            );
        } else
            return ('');
        }
}

export default PostFour;