import React, { useState } from "react";
import "./Textbox2.css"

export default function Textbox2(props) {
  // this element performs autocorection on blur
  // it returns the default provided value 
  // if the changed the input does not match the regex

  const REGEXVERIFY = props.REGEXVERIFY
  const defaultV = props.default
  const typeD = props.type
  const [value, setValue] = useState(defaultV)

  const handleBlur = (event) => {
    var clientInput = event.target.value
    if (!REGEXVERIFY.test(clientInput)) {
      setValue(defaultV)
      //props.method(defaultV)
      return
    } 
    setValue(clientInput)
    //props.method(event.target.value)
  };

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return(
    <div>
      <div className="text-box-register-2">
        <input type={typeD} value={value} onChange={handleChange} onBlur={handleBlur}/>
      </div>
    </div>
  );
}
