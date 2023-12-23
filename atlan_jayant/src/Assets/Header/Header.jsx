import React from "react";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <div id="Header" className="header-container">
      <h1 className="atlan-text">Atlan Assigment</h1>
      <p className="by-text">By Jayant Batra</p>
      <HeaderSocial />
    </div>
  );
};

export default Header;
