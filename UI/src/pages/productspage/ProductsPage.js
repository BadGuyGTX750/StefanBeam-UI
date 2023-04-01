import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/product_card/product_card";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";

function ProductsPage(props) {

    var prodsFam = props.productFamily

    // Get product family from the dropdowns
    function GetProductFamily(value) {
      value = value.split(' ').join('-')
      console.log(value)
      window.location.href = "/" + value
    }

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
                <h2> { prodsFam.split('-').join(' ') } </h2>
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
