import React from "react";
import "./product_card.css";
import api_photo_getByProductName from "../../api/photo/api_photo_getByProductName";

export default function ProductCard(props) {

  var productTitle = props.productTitle
  var title = productTitle.split('-').join(' ').split('&').join(' ')

  var price = props.price

  //var photoAtt = api_photo_getByProductName(productTitle)
  //console.log(photoAtt)

  return (
    <div className="product-card">

      <div className="product-card-image">

      </div>

      <div className="product-card-title">
        <h3> { title } </h3>
      </div>

      <div className="product-card-price">
        <h3> ${ price } </h3>
      </div>

    </div>
  );
}