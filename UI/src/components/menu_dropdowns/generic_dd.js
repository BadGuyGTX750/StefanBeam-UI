import React from "react";
import "./generic_dd.css"

export default function GenericDD(jsonFile){

  function dfs(file) {
    console.log("\n\n")

    if (typeof file === 'string') {
      return(
        <div className="dd-category-item"><p>{ file }</p></div>
      )
    }
    
    var data = Object.keys(file)

    var divs = []

    for (var i = 0; i < data.length; i++) {
      //console.log(file[data[i]])
      if (data[i].length > 1)
        divs.push(<div className="dd-category"><p>{ data[i] }</p></div>)
      divs.push(dfs(file[data[i]]))
    }
    
    return(
      <div className="generic-dd">
        { divs }
      </div>
    )
  }

  return(
    <div>
      { dfs(jsonFile) }
    </div>
  );
}