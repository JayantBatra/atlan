import React from "react";
import { BsPersonCircle, BsGithub } from "react-icons/bs";
import "./HeaderSocial.css"; // Import the CSS file for these specific styles

const HeaderSocial = () => {
  return (
    <div className="social-icons">
      <span>
        <a
          href="https://www.linkedin.com/in/jayant-batra-933104219"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsPersonCircle />
        </a>
      </span>
      <span>
        <a
          href="https://github.com/JayantBatra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </span>
    </div>
  );
};

export default HeaderSocial;
