import React from "react";
import "./Footer.css";
import { SiLeetcode } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        JB
      </a>

      <ul className="permalinks">
        <li>
          <a href="#Header">Header</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#TextArea">Search Query</a>
        </li>
        <li>
          <a href="#Result">Result</a>
        </li>
      </ul>

      <div className="footer__socials">
        {/* <a href='https://facebook.com'><FaFacebookF/></a> */}
        <a href="https://leetcode.com/Jayant_Batra/">
          <SiLeetcode />
        </a>
        <a href="https://twitter.com/Jayant_Batra025">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Made with <FaHeart />{" "}
        </small>
        <br />
        <small>&copy; Jayant Batra. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
