import React, { useState } from "react";
import "./product_card.css";
import api_photo_getByProductName from "../../api/photo/api_photo_getByProductName";
import api_photo_download from "../../api/photo/api_photo_download";
import FloatingProductCard from "./floating_product_card";

export default function ProductCard(props) {
  const [downloadPSrc, setDownloadP] = useState(null)
  const [showFloat, setShowFloat] = useState(false)

  const productTitle = props.productTitle
  const title = productTitle.split('-').join(' ').split('&').join(' ')
  const price = props.price

  const showFloatingCard = () => {
    setShowFloat(!showFloat)
  }

  async function GetProductPhoto() {
    if (downloadPSrc != null)
      return
    const photoAtt = await api_photo_getByProductName(productTitle)
    const photo = await api_photo_download(photoAtt.name, photoAtt.ext.substring(1))
    const imageSRC = URL.createObjectURL(new Blob([photo], {type: "image/jpg"}))
    setDownloadP(imageSRC)
  }

  GetProductPhoto()

  return (
    <div className="product-card">

      <div className="product-card-image">
        <img src={ downloadPSrc } alt="product" height="220"></img>
        <div className="product-card-image-cart" onClick={showFloatingCard}>
          <img src={ require("../../images/shopping-cart-icon-inverted.png") } alt="product-add-to-cart" height="30"></img>
        </div>
      </div>

      <div className="product-card-title">
        <h3> { title + ' - StefanBeam' } </h3>
      </div>

      <div className="product-card-price">
        <h3> ${ price } </h3>
      </div>

      <div className="floating-PC">
        { showFloat && <FloatingProductCard
                          closeMethod={showFloatingCard}
                          photoSrc={downloadPSrc}
                          title={title}/> 
        }
      </div>

    </div>
  );
}