import React from "react";
import "./AddToCartButton.css";

export default function AddToCartButton(props) {

  const buttonType = props.type;
  const buttonText = props.text;

  return(
    <div className="add-to-cart-button-orange">
      <button type={buttonType}>{buttonText}</button>
    </div>
  );
}