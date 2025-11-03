import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { scrollToElement } from '../../../../../utils/utils';

class LandingMobileMenu extends Component {

    render() {
        const { adClass } = this.props;

        return(
            <div className={ `mobile-menu-container ${adClass}` }>
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>
                    
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li>
                                <Link to="#" className="goto-demos" data-target=".section-demos" onClick={ scrollToElement }>Demos</Link>
                            </li>
                            <li>
                                <Link to="#" className="goto-features" data-target=".section-features" onClick={ scrollToElement }>Features</Link>
                            </li>
                            <li>
                                <Link to="#" className="goto-elements" data-target=".section-elements" onClick={ scrollToElement }>Elements</Link>
                            </li>
                            <li>
                                <Link to="#" className="goto-support" data-target=".section-support" onClick={ scrollToElement }>Support</Link>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className="d-flex justify-content-center social-icons">
                        <Link to="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></Link>
                        <Link to="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></Link>
                        <Link to="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></Link>
                        <Link to="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingMobileMenu;