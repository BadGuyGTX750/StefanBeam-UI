import React from "react";
import "./floating_product_card.css"

export default function FloatingProductCard(props) {

  const closeMethod = props.closeMethod
  const photoSrc = props.photoSrc
  const title = props.title
  
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

      </div>
    </div>
    
  )
}