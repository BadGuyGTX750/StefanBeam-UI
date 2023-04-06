import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import GetProductFamily from "../../components/utils/GetProductFamily";
import Textbox1 from "../../components/textbox/Textbox1";
import Selector from "../../components/selector/Selector";
import api_subc_getBottom from "../../api/subcategories/api_subc_getBottom";

export default function AddProductPage(props) {
    const [showErrorPN, setShowErrorPN] = useState(false)
    const [showErrorSD, setShowErrorSD] = useState(false)
    const [showErrorLD, setShowErrorLD] = useState(false)

    function HandleProductNameChange(value) {
      setShowErrorPN(true)
    }

    function HandleShortDescriptionChange(value) {
      setShowErrorSD(true)
    }

    function HandleLongDescriptionChange(value) {
      setShowErrorLD(true)
    }

    async function GetBottom() {  
      const tmp = await api_subc_getBottom()
      if (tmp == null) {
        return null;
      }
      const subcs = tmp.map(item => (
        item.name
      ))    
      return subcs
    }

    return(
      <div className="content">
        <div className="navbar">
          <Navbar GetProductFamily={ GetProductFamily }/>
        </div>

        <div className="add-product-form">

          <div className="add-product-PN">
            <p>Product Name *</p>
            <Textbox1 placeholderD="" method={HandleProductNameChange}/>
            {showErrorPN && (<div className="add-product-error"><p>please enter a valid product name</p></div>)}
          </div>

          <div className="add-product-SD">
            <p>Short Description</p>
            <Textbox1 placeholderD="" method={HandleShortDescriptionChange}/>
            {showErrorSD && (<div className="add-product-error"><p>please enter a valid short description</p></div>)}
          </div>

          <div className="add-product-SD">
            <p>Long Description</p>
            <Textbox1 placeholderD="" method={HandleLongDescriptionChange}/>
            {showErrorLD && (<div className="add-product-error"><p>please enter a valid long description</p></div>)}
          </div>

          <div className="add-product-SC">
            <p>Select the subcategory of the product:</p>
            <Selector ddItems={GetBottom()}/>
            {showErrorLD && (<div className="add-product-error"><p>please enter a valid long description</p></div>)}
          </div>

        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
}
