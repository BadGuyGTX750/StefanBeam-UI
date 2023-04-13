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

function Menu({ items, level }) {
  const [displayChildren, setDisplayChildren] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});
  return(
    <ul>
      {items.map(item => (
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
                alt="drop-down-arrow" height="11" style={arrowStyle[item.title]? arrowStyleUp: arrowStyleDown}
                onClick={() => {
                  setArrowStyle({
                    ...arrowStyle,
                    [item.title]: !arrowStyle[item.title]
                  })
                  setDisplayChildren({
                    ...displayChildren,
                    [item.title]: !displayChildren[item.title],
                  });
                }}
              >
              </img>
            )
          }
          {displayChildren[item.title] && item.children && <Menu items={item.children} level={level+1}/>}
        </li>
      ))}
    </ul>
  )
  
}

export default function LeftMenu() {
  return (
    <div className="left-menu">
      <Menu items={menuData} level={0}/>
    </div>
  )
}