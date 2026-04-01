// import React from "react";
import "./Activity2.css";
export function Activity2({ tittle, image, description, oldPrice, newPrice }) {
  return (
    <div className="card">
      <h3>{tittle}</h3>
      <img className="image" src={image} alt="cardImage" />
      <ul>
        <p className="description">
          {description.map((desc) => (
            <li>desc</li>
          ))}
        </p>
      </ul>
      <div className="price">
        <p>{oldPrice}</p>
        <p>{newPrice}</p>
      </div>
    </div>
  );
}
