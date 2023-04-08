import React, { useState } from "react";
import Textbox2 from "../textbox/Textbox2";
import "./WeightPriceComp.css";

export default function WeightPriceComp() {
  const [renderedPairs, setRenderedPairs] = useState([])
  const [pairIndex, setPairIndex] = useState(0)

  const HandleNumberChange = (value) => {
    console.log(value)
  }

  const AddPair = () => {
    console.log('AddPair')
    setRenderedPairs(GetDefaultPair())
  }

  const RemovePair = () => {
    console.log('RemovePair')
  }


  const GetDefaultPair = (index) => {
    return(
      <div id={'weight-price-' + index} key={'weight-price-' + index}
            className="weight-price-pair">

        <div className="weight-price-pair-weight">
          <Textbox2 REGEXVERIFY={/^[0-9]{1,4}$/i} type="text" default="980" method={HandleNumberChange}/>
        </div>
        
        <div className="weight-price-pair-price">
          <Textbox2 REGEXVERIFY={/^[0-9]{1,4}$/i} type="text" default="20" method={HandleNumberChange}/>                 
        </div>

        <div className="weight-price-line-delimiter"/>

      </div>
    )
  }

  return(
    <div>

      { renderedPairs }

      <div className="weight-price-add-remove-pair">

      <div className="weight-price-remove-pair">
        <img src={require("../../images/remove-pair-icon.png")} alt="remove-weight-price-pair" height="30" 
            onClick={RemovePair}></img>
      </div>

      <div className="weight-price-add-pair">
        <img src={require("../../images/add-pair-icon.png")} alt="add-weight-price-pair" height="30" 
            onClick={AddPair}></img>
      </div>

      </div>

    </div>
  )
}