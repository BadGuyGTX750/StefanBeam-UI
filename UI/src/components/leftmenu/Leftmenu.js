import React, { useState } from "react";
import appsettings from "../../appsettings.json";
import "./Leftmenu.css";
import GetProductFamily from "../utils/GetProductFamily";

const menuData = appsettings.categories;

const arrowStyleUp = {
  transform: "rotate(180deg)"
}
const arrowStyleDown = {
  transform: "rotate(0deg)"
}

function Menu({ items, level , apartananceList}) {
  const [displayChildren, setDisplayChildren] = useState({});
  const [arrowStyleStatus, setArrowStyle] = useState({});
  return(
    <ul>
      {items.map(item => {
        return(
        <li key={item.title}>
          <p 
            className={"sub-menu-item-"+level}
            onClick={(event) => {
              var goTo = event.target.textContent
              GetProductFamily(goTo)
            }}
          >{item.title} 
          </p>
          {
            item.children && (
              <img 
                src={require("../../images/down-arrow-icon.png")} 
                alt="drop-down-arrow" height="11" style={arrowStyleStatus[item.title]? arrowStyleUp: arrowStyleDown}
                onClick={() => {
                  setArrowStyle({
                    ...arrowStyleStatus,
                    [item.title]: !arrowStyleStatus[item.title]
                  })
                  setDisplayChildren({
                    ...displayChildren,
                    [item.title]: !displayChildren[item.title]
                  });
                }}
              >
              </img>
            )
          }
          {displayChildren[item.title] && item.children && <Menu items={item.children} level={level+1} apartananceList={apartananceList}/>}
        </li>
      )})}
    </ul>
  )
}

var apartSet = new Set()

function GetApartanenceList(subcategory, categs) {
  if (typeof categs !== 'object') {
    if (categs === subcategory) {
      apartSet.add(categs)
      return true
    }
    return false
  }

  for (var i = 0; i < categs.length; i++) {
    if (categs[i].title === subcategory) {
      apartSet.add(categs[i].title)
      return true
    }
    if (GetApartanenceList(subcategory, categs[i].children)) {
      apartSet.add(categs[i].title)
      return true
    }
  }
}

export default function LeftMenu(props) {
  var subcategory = props.subcategory.split('-').join(' ')
  GetApartanenceList(subcategory, menuData)
  return (
    <div className="left-menu">
      <Menu items={menuData} level={0} apartananceList={apartSet}/>
    </div>
  )
}