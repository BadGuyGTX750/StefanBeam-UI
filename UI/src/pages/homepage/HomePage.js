import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import GetProductFamily from "../../components/utils/GetProductFamily";

export default function HomePage(props) {

    return(
      <div className="content">
        <div className="navbar">
          <Navbar GetProductFamily={ GetProductFamily }/>
        </div>
          
        <div className="spotlight">
          
        </div>

        <div className="products-section">

        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
}