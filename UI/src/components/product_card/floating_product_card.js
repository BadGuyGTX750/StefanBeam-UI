import React, { useState } from "react";
import "./floating_product_card.css"
import Selector3 from "../selector/Selector3";
import Selector4 from "../selector/Selector4";
import AddToCartButton from "../button/AddToCartButton";

export default function FloatingProductCard(props) {

  const [priceActual, setPriceActual] = useState(null)
  const closeMethod = props.closeMethod
  const photoSrc = props.photoSrc
  const title = props.title
  const weight_price = props.weight_price
  const weight = weight_price.map((item) => {return item.weight})
  if (priceActual == null)
    setPriceActual(weight_price[0].price)
  const flavor_quantity = props.flavor_quantity
  const flavor = flavor_quantity.map((item) => {return item.flavor})

  const HandlePackagingChange = (pkg) => {
    console.log(pkg)
    // eslint-disable-next-line 
    weight_price.map((item) => {
      if (item.weight === pkg)
        setPriceActual(item.price)
    })
  }

  const HandleFlavorChange = (flv) => {
    console.log(flv)
  }
  
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

        <div className="floating-product-card-price">
          { "$" + priceActual }
        </div>

        <div className="floating-product-card-packaging-flavor">
          <div className="floating-product-card-packaging">
            <p>Packaging *</p>
            <Selector3 method={HandlePackagingChange} ddItems={weight}/>
          </div>
          <div className="floating-product-card-flavor">
            <p>Flavor/Size *</p>
            <Selector4 method={HandleFlavorChange} ddItems={flavor}/>
          </div>
        </div>

        <div className="floating-product-card-add-to-cart">
          <AddToCartButton text="ADD TO CART"/>
        </div>

      </div>
    </div>
    
  )
}