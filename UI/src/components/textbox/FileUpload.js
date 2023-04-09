import React from "react";
import "./FileUpload.css";

export default function FileUpload(props) {

  const handleChange = (event) => {
    // getting a hold of the file reference
    var file = event.target.files[0];
    console.log(file)
    if (file === null || file === undefined) {
      props.method(null, '')
      return
    }

    // setting up the reader
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');

    // here we tell the reader what to do when it's done reading...
    reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      props.method(content, file.name)
    }
  };

  return(
    <div className="file-upload-component">
      <input type="file" accept=".jpg,.jpeg,.png" onChange={handleChange}/>
    </div>
  );
}
