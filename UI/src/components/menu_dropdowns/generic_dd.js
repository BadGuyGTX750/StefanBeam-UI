import React from "react";

export default function GenericDD(jsonFile){

  var divs = []

  function dfs(file, level) {
    if (typeof file === 'string') {
      divs.push([file, level/2])
      return
    }
    
    var data = Object.keys(file)

    for (var i = 0; i < data.length; i++) {
      if (data[i].length > 1)
        divs.push([data[i], level/2])
      dfs(file[data[i]], level + 1)
    }

    console.log(divs)
    return divs
  }

  return(
    dfs(jsonFile, 0)
  );
}