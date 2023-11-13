import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-left-text">
        <h2>Your Company</h2>
        <p>
          Our mission is to make gadjet purchase, accessible and affordable.
        </p>
      </div>
      <div className="footer-center-links">
        <div className="left-links">
          <h2>Helpful Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="right-links">
          <h2>Site Map</h2>
          <ul>
            <li>
              <a href="#">Our Mobile App</a>
            </li>
            <li>
              <a href="#">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#">Help Desk</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-right-contacts">
        <h2>Contact Us</h2>
        <div className="social">
          <a href="#" className="socialmedia">
            <img src="src/assets/FACEBOOK.svg" alt="" />
          </a>
          <a href="#" className="socialmedia">
            <img src="src/assets/TWITTER.svg" alt="" />
          </a>
          <a href="#" className="socialmedia">
            <img src="src/assets/INSTAGRAM.svg" alt="" />
          </a>{" "}
          <a href="#" className="socialmedia">
            <img src="src/assets/LINKEDIN.svg" alt="" />
          </a>
        </div>
        <p>hello@yourcompany.com</p>
      </div>
    </footer>
  );
}

export default Footer;
