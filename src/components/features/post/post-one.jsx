import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostOne extends Component {

    render() {
        const { post, bodyClass="text-center", btnText="Continue Reading", adClass="entry-display" } = this.props;

        if (post) {
            let date = new Date( post.date );
            let options = { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" };
            return (
                <article className={ `entry ${adClass}` }>
                    <figure className="entry-media">
                        <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}` }>
                            <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + post.image[0] } alt="desc" style={{height: 207}} />
                        </Link>
                    </figure>

                    <div className={ `entry-body ${ bodyClass }` }>
                        {/* <div className="entry-meta">
                            <Link to="#">{date.toLocaleDateString('en-US', options) }</Link>
                        </div> */}

                        <h3 className="entry-title">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}` }>{post.title}</Link>
                        </h3>

                        <div className="entry-content">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}`} className="read-more">{ btnText }</Link>
                        </div>
                    </div>
                </article>
            );
        } else
            return ('');
        }
}

export default PostOne;