import React from "react";
import "./generic_dd.css"

export default class GenericDD extends React.Component{

  constructor(props) {
    super(props)
    this.jsonFile = props.jsonFile
    this.GetProductFamily = props.GetProductFamily
    this.pairs = []
    this.implemented = false
    this.returnable = null
  }

  dfs(file, level) {
    if (typeof file !== 'object') {
      return
    }
    // eslint-disable-next-line
    file.map((item) => {
      this.pairs.push([item.title, level])
      this.dfs(item.children, level + 1)
    })

    return this.pairs
  }

  BuildDropDownMenu() {
    this.pairs = []
    const menuList = this.dfs(this.jsonFile, 0);
    console.log(menuList)
    const returnable = menuList.map((item) => (
        <div key={item[0]} className={"gen-dd-item-" + item[1]}>{item[0]}</div>
    ))
    // No more double call of this method on hover
    this.returnable = returnable;
    this.implemented = true;
    return returnable
  }


  // set up the drop-down menus to have click listeners
  ConfigureDropDownMenu() {
    for (var i = 0; i < 5; i++) {
      const gen_dd_item = document.getElementsByClassName("gen-dd-item-"+i)
      //console.log(gen_dd_item.length)
      if (gen_dd_item.length > 0) {
        //console.log(gen_dd_item.length)
        for (var j = 0; j < gen_dd_item.length; j++) {
          gen_dd_item[j].addEventListener('click', e => {
            this.GetProductFamily(e.target.textContent)
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
        { this.implemented && this.returnable }
        { !this.implemented && this.BuildDropDownMenu() }
      </div>
    );
  }
}