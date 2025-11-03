import React from 'react';
import {Link} from 'react-router-dom'

function LogoImage(props) {

    return <Link to={`${import.meta.env.VITE_PUBLIC_URL}/home`} >
                <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/Logo-glass-fusion.png`} alt="" className="img-fluid main-logo" />
            </Link>;
}

export default LogoImage;