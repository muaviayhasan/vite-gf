import React, { Component } from 'react';
import {Link} from 'react-router-dom'
function FooterLogo(props) {

    return <Link to={`${import.meta.env.VITE_PUBLIC_URL}/home`} >
                <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/new-logo.png`} alt="" className="img-fluid main-logo" />
            </Link>;
}

export default FooterLogo;