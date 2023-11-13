import React from "react";
import "./subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe-section">
      <h1>Subscribe to Our Newsletter</h1>
      <p>Don't miss out on our top deals! Dont worry we will not spam you.</p>
      <div className="sub-input-section">
        <input type="email" placeholder="Enter your Email Here " />
        <button className="subscribeBtn">Subscribe</button>
      </div>
    </section>
  );
}

export default Subscribe;
