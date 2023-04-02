import React from "react";
import "./product_card.css"

export default function ProductCard(props) {

  var productTitle = props.productTitle
  var price = props.price

  return (
    <div className="product-card">

      <div className="product-card-image">

      </div>

      <div className="product-card-title">
        <h3> { productTitle } </h3>
      </div>

      <div className="product-card-price">
        <h3> ${ price } </h3>
      </div>

    </div>
  );
}