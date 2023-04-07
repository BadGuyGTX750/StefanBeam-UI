import React, { useState } from "react";
import Selector2 from "../selector/Selector2";
import Textbox2 from "../textbox/Textbox2";
import "./FlavorQuantityComp.css";

export default function FlavorQuantityComp(props) {

  const [isValid, setIsValid] = useState(true)
  const [renderedPairs, setRenderedPairs] = useState([])

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
                    ]

  var pairs = []

  const HandleFlavorChange = (value) => {
    console.log(value)
  }

  const HandleNumberChange = (value) => {

    console.log(value)
  }

  const GetDefaultPair = () => {
    return(
      <div key='flavor-quantity' className="flavor-quantity-pair">

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
    var pairs = renderedPairs
    pairs.push(GetDefaultPair())
    console.log(pairs)
    setRenderedPairs(pairs)
  }

  var pair = GetDefaultPair()

  return(
    <div>

      { pair }

      <div className="flavor-quantity-add-pair">
        <img src={require("../../images/add-pair-icon.png")} alt="add-flavor-quantity-pair" height="30" 
            onClick={AddPair}></img>
      </div>

    </div>
  )
}