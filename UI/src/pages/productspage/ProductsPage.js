import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/product_card/product_card";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import api_subc_getByName from "../../api/subcategories/api_subc_getByName";
import GetProductFamily from "../../components/utils/GetProductFamily";
import api_subc_getByParentName from "../../api/subcategories/api_subc_getByParentName";
import api_product_getByCategoryName from "../../api/product/api_product_getByCategoryName";
import api_product_getFlavorQuantitiesByProductName from "../../api/product/api_product_getFlavorQuantitiesByProductName";
import api_product_getWeightPricesByProductName from "../../api/product/api_product_getWeightPricesByProductName";
import LeftMenu from "../../components/leftmenu/Leftmenu";

export default function ProductsPage(props) {

    const [prodsHtml, setProdsHtml] = useState(null);

    var prodFam = props.productFamily
    var subCs = []
    var prods = []

    async function GetBottomSubcategories(prodFamName) {
      var subCsTmp = await api_subc_getByParentName(prodFamName)
      if (subCsTmp == null) {
        return
      }
      for (var i = 0; i < subCsTmp.length; i++) {
        if (subCsTmp[i].isBottom === true) {
          subCs.push(subCsTmp[i].name)
          continue
        }
        await GetBottomSubcategories(subCsTmp[i].name)
      }
    }

    async function GetInitialProdFamily(prodFamName) {
      var prodF = await api_subc_getByName(prodFamName)
      if (prodF.isBottom === true) {
        subCs.push(prodF.name)
        return true
      }
      return false
    }

    async function GetThemAllSubcs() {
      if (!await GetInitialProdFamily(prodFam)) {
        await GetBottomSubcategories(prodFam)
      }
    }

    async function GetThemAllProds() {
      await GetThemAllSubcs()
      for (var i = 0; i < subCs.length; i++) {
        var pdcts = await api_product_getByCategoryName(subCs[i])
        if (pdcts != null) {
          for (var j = 0; j < pdcts.length; j++) {
            var weightPrices = await api_product_getWeightPricesByProductName(pdcts[j].name)
            var flavorQuantities = await api_product_getFlavorQuantitiesByProductName(pdcts[j].name)
            pdcts[j].weight_price = weightPrices
            pdcts[j].flavor_quantity = flavorQuantities
            prods.push(pdcts[j])
          }
        }
      }
    }

    async function GetProductCards() {
      if (prodsHtml != null)
        return
      await GetThemAllProds()
      const returnable = prods.map((item) => (
        <div key={item.name}> <ProductCard productTitle={item.name}
                                          price={item.weight_price[0].price}
                                          weight_price={item.weight_price}
                                          flavor_quantity={item.flavor_quantity}/>
        </div>
      ))
      setProdsHtml(returnable)
    }

    GetProductCards()

    return(
      <div className="content">
        <div className="navbar">
          <Navbar GetProductFamily={GetProductFamily}/>
        </div>

        <div className="pp-products-section">
            <div className="pp-left-menu">
              <LeftMenu subcategory={prodFam}/>
            </div>

            <div className="pp-right-products-section">

              <div className="pp-product-family">
                <h2> { prodFam.split('-').join(' ') } </h2>
              </div>

              <div className="pp-right-products-prods">
                { prodsHtml }
              </div>
              
            </div>
        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
}
