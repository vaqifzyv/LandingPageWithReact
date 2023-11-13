import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <p className="logo-name">YOUR LOGO</p>
      <div className="links">
        <ul>
          <li>
            <a href="#">Market Place</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <img src="src/assets/buy.svg" alt="" className="buySvg" />
        <img src="src/assets/girl-img.png" alt="" className="girlImg" />
      </div>
    </nav>
  );
}

export default Navbar;
