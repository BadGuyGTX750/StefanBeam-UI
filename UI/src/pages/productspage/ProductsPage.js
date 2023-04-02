import React from "react";
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

function ProductsPage(props) {

    var prodFam = props.productFamily

    var subCs = []
    var prods = []

    async function GetBottomSubcategories(prodFamName) {
      var subCsTmp = await api_subc_getByParentName(prodFamName)
      if (subCsTmp == null)
        return
      for (var i = 0; i < subCsTmp.length; i++) {
        if (subCsTmp[i].isBottom === true) {
          subCs.push(subCsTmp[i].name)
          continue
        } 
        GetBottomSubcategories(subCsTmp[i].name)
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
            console.log(pdcts[j].name)
            var weightPrices = await api_product_getWeightPricesByProductName(pdcts[j].name)
            var flavorQuantities = await api_product_getFlavorQuantitiesByProductName(pdcts[j].name)
            pdcts[j].weight_price = weightPrices
            pdcts[j].flavor_quantity = flavorQuantities
            prods.push(pdcts[j])
          }
        }
      }
    }

    GetThemAllProds()

    console.log(prods)

    return(
      <div className="content">
        <div className="navbar">
          <Navbar GetProductFamily={GetProductFamily}/>
        </div>

        <div className="pp-products-section">
            <div className="pp-left-menu">

            </div>

            <div className="pp-right-products-section">

              <div className="pp-product-family">
                <h2> { prodFam.split('-').join(' ') } </h2>
              </div>

              <div className="pp-right-products-prods">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
              </div>
              
            </div>
        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
}

export default ProductsPage
