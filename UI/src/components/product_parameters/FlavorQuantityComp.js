import React, { useState } from "react";
import Selector2 from "../selector/Selector2";
import Textbox2 from "../textbox/Textbox2";
import "./FlavorQuantityComp.css";

export default function FlavorQuantityComp(props) {

  const [renderedPairs, setRenderedPairs] = useState([])
  const [pairIndex, setPairIndex] = useState(0)
  const [pairs, setPairs] = useState([])

  const GetPairs = (prs) => {
    return props.method(prs)
  }

  const flavorsList = [
                      'banana milkshake',
                      'blue raspberry',
                      'chocolate',
                      'chocolate hazelnut',
                      'coconut cream',
                      'fruit punch',
                      'green apple',
                      'lemon cheesecake',
                      'lemon lime',
                      'mango maracuja',
                      'salted caramel',
                      'strawberry cream',
                      'strawberry kiwi',
                      'strawberry milkshake',
                      'unflavored',
                      'vanilla',
                      'vanilla ice cream',
                      'watermelon',
                      'white chocolate coconut',
                      'white chocolate raspberry',
                      'S',
                      'M',
                      'L',
                      'XL',
                      'XXL',
                    ]

  const flavorsListSize = flavorsList.length

  const HandleFlavorChange = (value) => {
    console.log(value)
  }

  const HandleNumberChange = (value) => {
    console.log(value)
  }

  const HandlePairChange = (event) => {
    var component = event.target.parentElement.parentElement.parentElement.parentElement
    var componentId = component.id
    var index = componentId.split('-')[2]

    // not the most orthodox way, cause selector component might suffer changes,
    // but certainly the fastest way
    var flavor = component.getElementsByTagName('div')[0].firstChild.firstChild.firstChild.value;
    if (!flavorsList.includes(flavor)) {
      flavor = 'WARNING: no flavor'
      console.log('Selector2.js changed, adjust FlavorQuantityComp.HandlePairChange() accordingly')
    }

    var quantity = component.getElementsByTagName('div')[3].firstChild.firstChild.firstChild.value
    if (!/^[0-9]{1,3}$/i.test(quantity)) {
      quantity = '100'
    }

    var tmp = pairs
    tmp[index] = {'flavor': flavor, 'quantity': quantity}
    setPairs(tmp)

    GetPairs(pairs)
  }

  // Don't modify the structure of this returned HTML, unless you modify HandlePairChange() accordingly
  const GetDefaultPair = (index) => {
    return(
      <div id={'flavor-quantity-' + index} key={'flavor-quantity-' + pairIndex}
            className="flavor-quantity-pair">

        <div className="flavor-quantity-pair-flavor">
          <Selector2 ddItems={ flavorsList } method={ HandleFlavorChange }/>
        </div>
        
        <div className="flavor-quantity-pair-quantity">
          <Textbox2 REGEXVERIFY={/^[0-9]{1,3}$/i} type="text" default="100" method={HandleNumberChange}/>                 
        </div>

        <div className="flavor-quantity-line-delimiter"/>

      </div>
    )
  }

  const AddPair = () => {
    if (renderedPairs.length >= flavorsListSize)
      return
    var tmp = pairs
    setPairs([...pairs, {flavor: flavorsList[0], quantity: '100'}])
    setRenderedPairs([...renderedPairs, GetDefaultPair(pairIndex)])
    if (pairIndex < flavorsListSize) {
      setPairIndex(pairIndex + 1)
    }
    GetPairs([...tmp, {flavor: flavorsList[0], quantity: '100'}])
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

  return(
    <div>
      <div onBlur={HandlePairChange}>
        { renderedPairs }
      </div>

      <div className="flavor-quantity-add-remove-pair">

      <div className="flavor-quantity-remove-pair">
        <img src={require("../../images/remove-pair-icon.png")} alt="remove-flavor-quantity-pair" height="30" 
            onClick={RemovePair}></img>
      </div>

      <div className="flavor-quantity-add-pair">
        <img src={require("../../images/add-pair-icon.png")} alt="add-flavor-quantity-pair" height="30" 
            onClick={AddPair}></img>
      </div>

      </div>

    </div>
  )
}