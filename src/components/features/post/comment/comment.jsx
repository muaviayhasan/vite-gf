import React, { Component } from 'react';
import { safeContent } from '../../../../utils/utils';
import { Link } from 'react-router-dom';

class Comment extends Component {
    render() {
        const { image, name, date, content } = this.props;
        return(
            <div className="comment">
                <figure className="comment-media">
                    <Link to="#">
                        <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + image } alt="User name"/>
                    </Link>
                </figure>

                <div className="comment-body">
                    <Link to="#" className="comment-reply">Reply</Link>
                    <div className="comment-user">
                        <h4><Link to="#">{name}</Link></h4>
                        <span className="comment-date">{date}</span>
                    </div>

                    <div className="comment-content">
                        <p dangerouslySetInnerHTML = { safeContent(content)  }></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;