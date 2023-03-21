import React from "react";
import "./Button1.css";

export default function Button1(props) {

  const buttonType = props.type;
  const buttonText = props.text;

  return(
    <div className="button1-orange">
      <button type={buttonType}>{buttonText}</button>
    </div>
  );
}