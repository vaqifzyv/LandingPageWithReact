import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="left-header">
        <div className="left-header-text">
          <p>WE’RE STILL</p>
          <h1>Filling up the spaces.</h1>
        </div>
        <div className="left-header-buttons">
          <button className="exploreBtn">Explore Marketplace</button>
          <button className="detailsbtn">See Top Deals</button>
        </div>
      </div>
      <div className="right-header">
        <img src="src/assets/header-photo.jpg" alt="" />
      </div>
    </header>
  );
}

export default Header;
