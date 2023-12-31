import React from "react";
import "./Card.css";

function Card(props) {
  const { image, cardPrice, cardDesc, cardId, isFavorited } = props;

  return (
    <div className="card-section">
      <div className="card">
        <div className="card-head">
          <h2>-59%</h2>
          <button className={`button-69 ${isFavorited}`} role="button">
            Urek
          </button>
        </div>
        <div className="card-body">
          <img src={image} alt="" />
          <div className="card-body-bottom">
            <button className="audio-button">Audio Devices</button>
            <p>{cardPrice} $</p>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-text">
            <p>{cardDesc}</p>
          </div>
          <div className="card-footer-buttons">
            <button className="addBtn">Add to Cart</button>
            <button className="buyBtn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
