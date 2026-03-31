import React from "react";
import "./Product.css";

function Product({ tittle, price, features }) {
  return (
    <div className="Product">
      <h3>Product List: {tittle}</h3>
      <h5>Product Price: {price}</h5>
      <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
    </div>
  );
}

export default Product;
