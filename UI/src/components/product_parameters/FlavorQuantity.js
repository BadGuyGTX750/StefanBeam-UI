import React from "react";
import Selector from "../selector/Selector";
import Textbox2 from "../textbox/Textbox2";
import "./FlavorQuantity.css";

export default function FlavorQuantity(props) {
  var pairs = []

  const HandleFlavorChange = (value) => {
    console.log(value)
  }

  const HandleNumberChange = (value) => {
    console.log(value)
  }

  const GetDefaultPair = () => {
    pairs.push(
      <div key='flavor-quantity' className="flavor-quantity-pair">
        <div className="flavor-quantity-pair-flavor">
          <Selector ddItems={['banana milkshake',
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
                            ]} method={ HandleFlavorChange }/>
        </div>
        
        <div className="flavor-quantity-pair-quantity">
          <Textbox2 placeholderD="Number of products with flavor X" method={HandleNumberChange}/>                 
        </div>

      </div>
    )
  }

  const AddPair = () => {

  }

  GetDefaultPair()

  return(
    <div>
      { pairs }
    </div>
  )
}