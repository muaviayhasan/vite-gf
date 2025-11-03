import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SocialLink } from '../../features/social-link';

class FooterTen extends Component {
    render() {
        const { adClass = "footer-2" } = this.props;
        return (
            <footer className={ `footer ${adClass}` }>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © { (new Date()).getFullYear() } Molla Store. All Rights Reserved.</p>
                        <ul className="footer-menu">
                            <li><Link to="#">Terms Of Use</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                        </ul>

                        <SocialLink label={ false } />
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterTen;