import React from "react";
import "./AddToCartButton.css";

export default function AddToCartButton(props) {

  const buttonType = props.type;
  const buttonText = props.text;

  return(
    <div className="add-to-cart-button-orange">
      <button type={buttonType}>{buttonText}</button>
      <img src={require("../../images/shopping-cart-icon-inverted.png")} alt="add-to-cart-img" height="30px"></img>
    </div>
  );
}