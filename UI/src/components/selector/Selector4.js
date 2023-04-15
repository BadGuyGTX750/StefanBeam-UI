import React, { useState } from "react";
import "./Selector4.css"

export default function Selector4(props) {

  const [options, setOptions] = useState(null);

  const ChangeSelection = (selectObject) => {
    props.method(selectObject.target.value)
  }

  async function GetOptions() {
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
      <div className="selector-box-4">
        <select defaultValue="" onChange={ChangeSelection}>
          {options}
        </select>
      </div>      
    </div>
  )
}