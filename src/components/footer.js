import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="contact-footer">
        <p className='follow'>Follow us on:</p>
        <div className="social-media-links">
          <i className="fab fa-facebook-square fa-2x"></i>
          <i className="fab fa-twitter-square fa-2x"></i>
          <i className="fab fa-google-plus-g fa-2x"></i>
          <i className="fab fa-instagram fa-2x"></i>
        </div>
      </div>
      <p className="copyright-info">&copy; 2019 Copyright Team Use My Tools</p>
    </footer>
  );
};

export default Footer;
