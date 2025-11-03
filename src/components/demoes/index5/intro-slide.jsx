import React from "react";
import { Link } from "react-router-dom";

import { safeContent } from "../../../utils/utils";
import "./search-bar.css";

export default (props) => {
  const { image, subtitle, title, text, btnText, link } = props.slide;
  return (
    <div className="intro-slide" style={{ backgroundImage: `url(${image})` }}>
      <div className="container intro-content text-center ">
        <h3 className="intro-subtitle banner-title text-white">{subtitle}</h3>
        <h1
          className="intro-title banner-title text-white"
          dangerouslySetInnerHTML={safeContent(title)}
        ></h1>
        <div className="intro-text banner-title text-white"> {text} </div>

        <Link
          to={`${import.meta.env.VITE_PUBLIC_URL}/${link}`}
          className="btn btn-primary custom-banner-button"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};
