import React, { useState } from "react";
import appsettings from "../../appsettings.json";
import "./Leftmenu.css";

const menuData = appsettings.categories;


function Menu({ items }) {
  return(
    <ul>
      {Object.entries(items).map(([key, value]) => (
        <li>
          {key}
        </li>
      ))}
    </ul>
  )
  
}

export default function LeftMenu() {
  return (
    <Menu items={menuData}/>
  )
}