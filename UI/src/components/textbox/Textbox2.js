import React from "react";
import "./Textbox2.css"

export default function Textbox2(props) {

  const placeholderD = props.placeholderD;
  const typeD = props.type;

  const handleChange = (event) => {
    props.method(event.target.value)
  };

  return(
    <div className="text-box-register-2">
      <input type={typeD} placeholder={placeholderD} onBlur={handleChange}/>
    </div>
  );
}
