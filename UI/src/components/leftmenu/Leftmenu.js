import React, { useState } from "react";
import appsettings from "../../appsettings.json";
import "./Leftmenu.css";

const menuData = appsettings.categories;

function MenuItem({ name, submenuData }) {
  const [submenuVisibility, setSubmenuVisibility] = useState(new Array(Object.keys(submenuData).length).fill(true));

  function toggleSubmenu(index) {
    var tmp = submenuVisibility
    tmp[index] = !tmp[index]
    setSubmenuVisibility(tmp);
  }
  
  function createSubmenu(data, lvl) {
    const keys = Object.keys(data);
    if (keys.length === 0) {
      return null;
    }
    var index = -1
    return (
      <ul>
        {keys.map((key) => {
          console.log(submenuVisibility[index])
          index++
          const value = data[key];
          if (key in ['0','1','2','3','4','5','6','7','8','9','10'] && typeof value === 'object') {
            return(createSubmenu(value, lvl))
          }

          if (typeof value === "object") {
            return (
              <li
                key={key}
                onClick={toggleSubmenu}
              >
                <div className={"has-submenu level" + lvl}> {key} </div>
                
                {submenuVisibility[index] && createSubmenu(value, lvl + 1)}
              </li>
            );
          } else {
            return (
              <li key={value} className={"has-submenu level" + lvl} onClick={() => console.log(value)}>
                {value}
              </li>
            );
          }
        })}
      </ul>
    );
  }

  return (
    <div>
      <li onClick={toggleSubmenu}>
      <div className="has-submenu level0"> {name} </div>
        {createSubmenu(submenuData, 1)}
      </li>
    </div>
  );
}

export default function LeftMenu() {
  return (
    <div className="leftmenu">
      <ul>
      {Object.entries(menuData).map(([name, submenuData]) => (
        <MenuItem key={name} name={name} submenuData={submenuData} />
      ))}
      </ul>
    </div> 
  );
}