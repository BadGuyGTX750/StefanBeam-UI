import React from "react";
import "./FileUpload.css";

export default function FileUpload(props) {

  const handleChange = (event) => {
    //props.method(event.target.value)
  };

  return(
    <div className="file-upload-component">
      <input type="file" onBlur={handleChange}/>
    </div>
  );
}
