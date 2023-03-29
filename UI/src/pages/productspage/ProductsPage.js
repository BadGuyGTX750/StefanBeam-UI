import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";

function ProductsPage(props) {

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

            </div>
        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
}

export default ProductsPage
