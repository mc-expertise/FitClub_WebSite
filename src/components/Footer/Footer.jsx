import React from "react";
import "./Footer.css";
import GitHub from "../../assets/github.png";
import Insta from "../../assets/instagram.png";
import Link from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <img src={GitHub} alt="" />
          <img src={Insta} alt="" />
          <img src={Link} alt="" />
        </div>
        <img src={Logo} alt="" /> 
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
