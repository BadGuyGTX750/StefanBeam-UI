import React from "react";
import "./generic_dd.css"

export default function GenericDD(jsonFile){

  var pairs = []

  function dfs(file, level) {
    if (typeof file === 'string') {
      pairs.push([file, level/2])
      return
    }
    
    var data = Object.keys(file)

    for (var i = 0; i < data.length; i++) {
      if (data[i].length > 1)
        pairs.push([data[i], level/2])
      dfs(file[data[i]], level + 1)
    }
    console.log(pairs)
    return pairs
  }

  function BuildDropDownMenu() {
    pairs = []
    var menuList = dfs(jsonFile, 0);
    console.log(menuList)
    var divs = []
    menuList.forEach((item) => {
      divs.push(<div className={"gen-dd-item-" + item[1]}>{item[0]}</div>)
    })
    console.log(menuList)
    console.log(divs)
    return divs
  }

  return(
    <div className="gen-dd">
      <BuildDropDownMenu/>
    </div>
  );
}