import React from "react";
import "./explore.css";

function Explore(props) {
  return (
    <section className="explore-section">
      <p>{props.text}</p>
      <a href="#">Explore</a>
    </section>
  );
}

export default Explore;
