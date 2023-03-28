
import { render } from "@testing-library/react";
import React from "react";
import "./generic_dd.css"

export default class GenericDD extends React.Component{

  constructor(jsonFile) {
    super()
    this.jsonFile = jsonFile
    var pairs = []
  }

  

  dfs(file, level) {
    if (typeof file === 'string') {
      this.pairs.push([file, level/2])
      return
    }
    
    var data = Object.keys(file)

    for (var i = 0; i < data.length; i++) {
      if (data[i].length > 1)
        this.pairs.push([data[i], level/2])
      this.dfs(file[data[i]], level + 1)
    }

    return this.pairs
  }

  BuildDropDownMenu() {
    this.pairs = []
    var menuList = this.dfs(this.jsonFile, 0);

    var divs = []

    var returnable = menuList.map((item) => {
      return(
        <div key={Math.random()} className={"gen-dd-item-" + item[1]}>{item[0]}</div>
      )
    })

    // <div key={Math.random()} className={"gen-dd-item-" + item[1]}>{item[0]}</div>

    return returnable
  }

  // set up the drop-down menus
  ConfigureDropDownMenu() {
    for (var i = 0; i < 5; i++) {
      var gen_dd_item = document.getElementsByClassName("gen-dd-item-"+i)
      //console.log(gen_dd_item.length)
      if (gen_dd_item.length > 0) {
        //console.log(gen_dd_item.length)
        for (var j = 0; j < gen_dd_item.length; j++) {
          gen_dd_item[j].addEventListener('click', e => {
            console.log(e.target.textContent)
          })
        }
      }
    }
  }

  componentDidMount() {
    this.ConfigureDropDownMenu()
  }

  render() {
    return(
      <div className="gen-dd">
        { this.BuildDropDownMenu() }
      </div>
    );
  }
}