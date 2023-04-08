import React, { useState } from "react";
import Textbox2 from "../textbox/Textbox2";
import "./WeightPriceComp.css";

export default function WeightPriceComp(props) {
  const [renderedPairs, setRenderedPairs] = useState([])
  const [pairIndex, setPairIndex] = useState(0)
  const [pairs, setPairs] = useState([])
  const maxListSize = 10

  const GetPairs = (prs) => {
    return props.method(prs)
  }

  const HandlePairChange = (event) => {
    var component = event.target.parentElement.parentElement.parentElement.parentElement
    var componentId = component.id
    var index = componentId.split('-')[2]
    console.log(componentId, index)

    // not the most orthodox way, cause selector component might suffer changes,
    // but certainly the fastest way
    var weight = component.getElementsByTagName('div')[0].firstChild.firstChild.firstChild.value;
    if (!/^[0-9]{1,4}$/i.test(weight)) {
      weight = '20'
    }

    var price = component.getElementsByTagName('div')[3].firstChild.firstChild.firstChild.value
    if (!/^[0-9]{1,4}$/i.test(price)) {
      price = '20'
    }

    var tmp = pairs
    tmp[index] = {'weight': weight, 'price': price}
    setPairs(tmp)

    GetPairs(tmp)
  }

  const HandleNumberChange = (value) => {
    console.log(value)
  }

  const AddPair = () => {
    if (renderedPairs.length >= maxListSize)
      return
    var tmp = pairs
    setPairs([...pairs, {weight: '980', price: '20'}])
    setRenderedPairs([...renderedPairs, GetDefaultPair(pairIndex)])
    if (pairIndex < maxListSize) {
      setPairIndex(pairIndex + 1)
    }
    GetPairs([...tmp, {weight: '980', price: '20'}])
  }

  const RemovePair = () => {
    var tmp = renderedPairs
    tmp.pop()
    setRenderedPairs([...tmp])

    var tmp2 = pairs
    tmp2.pop()
    setPairs([...tmp2])

    if (pairIndex > 0) {
      setPairIndex(pairIndex - 1)
    }
    GetPairs([...tmp2])
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
      <div onBlur={HandlePairChange}>
        { renderedPairs }
      </div>

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