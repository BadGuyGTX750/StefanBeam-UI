import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import GetProductFamily from "../../components/utils/GetProductFamily";
import Textbox1 from "../../components/textbox/Textbox1";
import Selector from "../../components/selector/Selector";
import api_subc_getBottom from "../../api/subcategories/api_subc_getBottom";
import Button1 from "../../components/button/Button1";

export default function AddProductPage(props) {
    const [showErrorPN, setErrorPN] = useState(false)
    const [showErrorSD, setErrorSD] = useState(false)
    const [showErrorLD, setErrorLD] = useState(false)
    const [showErrorSubC, setErrorSubC] = useState(false)

    const [productName, setPN] = useState('')
    const [shortDescription, setSD] = useState('')
    const [longDescription, setLD] = useState('')
    const [subcategory, setsubC] = useState('')

    function HandleProductNameChange(value) {
      setPN(value);
      if (!(/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]+$/i.test(value))) {
        setErrorPN(true)
        return;
      }
      setErrorPN(false)
    }

    function HandleShortDescriptionChange(value) {
      setSD(value);
      if (!(/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]{0,25}$/i.test(value))) {
        setErrorSD(true)
        return;
      }
      setErrorSD(false)
    }

    function HandleLongDescriptionChange(value) {
      setLD(value);
      if (!(/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]{0,100}$/i.test(value))) {
        setErrorLD(true)
        return;
      }
      setErrorLD(false)
    }

    function SetSubcategory(value) {
      setsubC(value)
      if (value === '') {
        setErrorSubC(true)
        return
      }
      setErrorSubC(false)
    }

    const HandleAddProduct = () => {
      var isValidPN = (/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]+$/i.test(productName))
      var isValidSD = (/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]{0,25}$/i.test(shortDescription))
      var isValidLD = (/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]{0,100}$/i.test(longDescription))
      var isValidSubC = subcategory !== ''

      console.log(productName, shortDescription, longDescription, subcategory)

      if (!(isValidPN && isValidSD && isValidLD && isValidSubC)) {
        setErrorPN(!isValidPN)
        setErrorSD(!isValidSD)
        setErrorSD(!isValidLD)
        setErrorSubC(!isValidSubC)
        return;
      }
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
            {showErrorSD && (<div className="add-product-error"><p>please enter a valid short description - max 25 chars</p></div>)}
          </div>

          <div className="add-product-SD">
            <p>Long Description</p>
            <Textbox1 placeholderD="" method={HandleLongDescriptionChange}/>
            {showErrorLD && (<div className="add-product-error"><p>please enter a valid long description - max 100 chars</p></div>)}
          </div>

          <div className="add-product-SC">
            <p>Select the subcategory of the product:</p>
            <Selector method={SetSubcategory} ddItems={GetBottom()}/>
            {showErrorSubC && (<div className="add-product-error"><p>please select a subcategory</p></div>)}
          </div>

          <div className="add-product-submit" onClick={HandleAddProduct}>
            <Button1 text="ADD PRODUCT"/>
          </div>

        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
}
