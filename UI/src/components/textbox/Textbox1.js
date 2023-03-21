import React from "react";

export default function Textbox1(props) {

  const placeholderD = props.placeholderD

  const handleChange = (event) => {
    props.method(event.target.value)
  };

  return(
    <div className="text-box-register">
      <input type="text" placeholder={placeholderD} onBlur={handleChange}/>
    </div>
  );
}
