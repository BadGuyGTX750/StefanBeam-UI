import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import GetProductFamily from "../../components/utils/GetProductFamily";
import ProductCard from "../../components/product_card/product_card";
import api_product_getAll from "../../api/product/api_product_getAll";
import api_product_getWeightPricesByProductName from "../../api/product/api_product_getWeightPricesByProductName";
import api_product_getFlavorQuantitiesByProductName from "../../api/product/api_product_getFlavorQuantitiesByProductName";

export default function HomePage(props) {

  const [prodsHtml, setProdsHtml] = useState(null)
  var prods = []

  async function GetProductCards() {
    if (prodsHtml != null)
      return
    var pdcts = await api_product_getAll()
    if (pdcts != null && pdcts.length >= 8) {
      var shuffled = [...pdcts].sort(() => 0.5 - Math.random());
      pdcts = shuffled.slice(0, 8)
      for (var j = 0; j < pdcts.length; j++) {
        var weightPrices = await api_product_getWeightPricesByProductName(pdcts[j].name)
        var flavorQuantities = await api_product_getFlavorQuantitiesByProductName(pdcts[j].name)
        pdcts[j].weight_price = weightPrices
        pdcts[j].flavor_quantity = flavorQuantities
        prods.push(pdcts[j])
      }
      const returnable = prods.map((item) => (
        <div key={item.name}> <ProductCard productTitle={item.name} price={item.weight_price[0].price}/> </div>
      ))
      setProdsHtml(returnable)
    }
  }

  GetProductCards()

  return(
    <div className="content">
      <div className="navbar">
        <Navbar GetProductFamily={ GetProductFamily }/>
      </div>
          
      <div className="spotlight">
        <img src={require("../../images/spotlight-1.png")} alt="site-logo" height="600"></img>
      </div>

      <div className="products-section">
        { prodsHtml }
      </div>

      <div className="footer">
        <Footer/>
      </div>
    </div>
    )
}