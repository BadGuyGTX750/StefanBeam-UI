import React, { useState } from "react";
import "./Selector.css"

export default function Selector(props) {

  const [options, setOptions] = useState(null);

  async function GetOptions() {
    console.log(props.ddItems)
    if (options != null)
      return
    var ddItems = await props.ddItems
    if (ddItems == null) {
      setOptions(null)
      return
    }
    const returnable = ddItems.map(item => (
      <option key={item} value={item}>{item}</option>
    ))
    setOptions(returnable)
  }

  GetOptions()

  return(
    <div>
      <div className="selector-box">
        <select>
          {options}
        </select>
      </div>      
    </div>
  )
}