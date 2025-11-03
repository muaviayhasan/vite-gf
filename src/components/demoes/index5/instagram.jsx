import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const { img } = props.insta;
  // Handle both absolute and relative paths
  const imgSrc = img.startsWith('/') ? img : `/${img}`;
  return (
    <div className="feed-col">
      <div className="instagram-feed">
        <img
          src={imgSrc}
          alt="img"
          width="218"
          height="218"
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
};
