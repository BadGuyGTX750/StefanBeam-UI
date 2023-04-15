import React from "react";
import "./floating_product_card.css"
import Selector3 from "../selector/Selector3";
import Selector4 from "../selector/Selector4";
import AddToCartButton from "../button/AddToCartButton";

export default function FloatingProductCard(props) {

  const closeMethod = props.closeMethod
  const photoSrc = props.photoSrc
  const title = props.title
  const weight_price = props.weight_price
  const weight = weight_price.map((item) => {return item.weight})
  const flavor_quantity = props.flavor_quantity
  const flavor = flavor_quantity.map((item) => {return item.flavor})
  console.log(flavor)
  
  return(
    <div className="floating-product-card-background">
      <div className="floating-product-card">

        <div className="floating-product-card-close">
          <img onClick={closeMethod} src={ require("../../images/close-cross-icon.png") } alt="product-add-to-cart" height="17"></img>
        </div>

        <div className="floating-product-card-image">
          <img src={ photoSrc } alt="productImage" height="220"></img>
        </div>

        <div className="floating-product-card-title">
          <h3> { title + ' - StefanBeam' } </h3>
        </div>

        <div className="floating-product-card-price-packaging">
          <div className="floating-product-card-price">
            <p>Packaging *</p>
            <Selector3 ddItems={weight}/>
          </div>
          <div className="floating-product-card-packaging">
            <p>Flavor/Size *</p>
            <Selector4 ddItems={flavor}/>
          </div>
        </div>

        <div className="floating-product-card-flavor">
          
        </div>

        <div className="floating-product-card-add-to-cart">
          <AddToCartButton text="ADD TO CART"/>
        </div>

      </div>
    </div>
    
  )
}