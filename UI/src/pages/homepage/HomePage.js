import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";

function HomePage(props) {
    return(
      <div className="content">
        <div className="navbar">
          <Navbar/>
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

export default HomePage
