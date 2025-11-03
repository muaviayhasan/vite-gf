import React from "react";

export const SocialLink = (props) => (
  <div className="social-icons social-icons-color">
    {props.label ? <span className="social-label">Social Media</span> : ""}
    <a
      href="https://www.facebook.com/glassandfusion/"
      className="social-icon social-facebook"
      rel="noopener noreferrer"
      title="Facebook"
      target="_blank"
    >
      <i className="icon-facebook-f"></i>
    </a>

    <a
      href="https://www.instagram.com/glassandfusion/"
      className="social-icon social-instagram"
      rel="noopener noreferrer"
      title="Instagram"
      target="_blank"
    >
      <i className="icon-instagram"></i>
    </a>
    <a
      href="https://www.houzz.co.uk/photos/users/glassandfusionltd/"
      className="social-icon social-youtube"
      rel="noopener noreferrer"
      title="Houzz"
      target="_blank"
    >
      <i className="icon-houzz"></i>
    </a>
    <a
      href="https://www.pinterest.co.uk/glassandfusion/"
      className="social-icon social-pinterest"
      rel="noopener noreferrer"
      title="Pinterest"
      target="_blank"
    >
      <i className="icon-pinterest"></i>
    </a>

    <a
      href="https://twitter.com/glassandfusion"
      className="social-icon social-twitter"
      rel="noopener noreferrer"
      title="Twitter"
      target="_blank"
    >
      <i className="icon-twitter"></i>
    </a>
  </div>
);
