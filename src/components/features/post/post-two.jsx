import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { safeContent } from '../../../utils/utils';

class PostTwo extends Component {

    render() {
        const { post, adClass="", bodyClass="", btnText="Read More" } = this.props;

        if (post) {
            let date = new Date( post.date );
            let options = { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" };
            
            return (
                <article className={ `entry ${ adClass }` }>
                    <figure className="entry-media">
                        <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}` }>
                            <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + post.image[0] } alt="desc" style={{height: 207}} />
                        </Link>
                    </figure>

                    <div className={ `entry-body ${bodyClass}` }>
                        {/* <div className="entry-meta">
                            <Link to="#">{date.toLocaleDateString('en-US',options) }</Link>, {post.comments} Comments
                        </div> */}

                        <h3 className="entry-title">
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}` }>{post.title}</Link>
                        </h3>

                        <div className="entry-content">
                            <p dangerouslySetInnerHTML={ safeContent(post.content)  }></p>
                            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/blog/${post.id}`} className="read-more">{btnText}</Link>
                        </div>
                    </div>
                </article>
            );
        } else
            return ('');
        }
}

export default PostTwo;