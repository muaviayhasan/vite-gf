import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils/utils';

export default (props) => {
    const { img, height, subtitle, title, btnText, adClass, link } = props.banner;
    return (
        <div className={ `banner ${adClass}` }>
            <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/${link}` }>
                <img src={ import.meta.env.VITE_PUBLIC_URL + '/' + img } alt="Banner" width="574" height={ height}/>
            </Link>

            <div className="banner-content">
                <h4 className="banner-subtitle d-lg-none d-xl-block"><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/${link}` }>{subtitle}</Link></h4>
                <h3 className="banner-title"><Link to={ `${import.meta.env.VITE_PUBLIC_URL}/${link}` }><span dangerouslySetInnerHTML = { safeContent(title) }></span></Link></h3>
                <Link to={ `${import.meta.env.VITE_PUBLIC_URL}/${link}`} className="btn btn-outline-primary-2 banner-link">{btnText}<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}