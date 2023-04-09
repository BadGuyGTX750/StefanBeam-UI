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
import FlavorQuantityComp from "../../components/product_parameters/FlavorQuantityComp";
import WeightPriceComp from "../../components/product_parameters/WeightPriceComp";
import FileUpload from "../../components/textbox/FileUpload";
import api_product_add from "../../api/product/api_product_add";
import api_photo_upload from "../../api/photo/api_photo_upload";

export default function AddProductPage(props) {
    const [showErrorPN, setErrorPN] = useState(false)
    const [showErrorSD, setErrorSD] = useState(false)
    const [showErrorLD, setErrorLD] = useState(false)
    const [showErrorSubC, setErrorSubC] = useState(false)
    const [showErrorContent, setErrorContent] = useState(false)

    const [productName, setPN] = useState('')
    const [shortDescription, setSD] = useState('')
    const [longDescription, setLD] = useState('')
    const [subcategory, setsubC] = useState('')
    const [content, setContent] = useState(null)
    const [fileName, setFileName] = useState('')
    const [flavorQuantities, setFQ] = useState([])
    const [weightPrices, setWP] = useState([])

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

    function HandleFlavorQuantityChange(pairs) {
      setFQ(pairs)
    }

    function HandleWeightPriceChange(pairs) {
      setWP(pairs)
    }

    function HandlePhotoChooser(content, fileNm) {
      setContent(content)
      setFileName(fileNm)
      if (content == null && !(/^[a-zA-Z0-9_]+\.(jpg|jpeg|png|gif)$/i.test(fileNm))) {
        setErrorContent(true)
        return
      }
      setErrorContent(false)
    }

    function SetSubcategory(value) {
      setsubC(value)
      if (value === '') {
        setErrorSubC(true)
        return
      }
      setErrorSubC(false)
    }

    const HandleAddProduct = async () => {
      var isValidPN = (/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]+$/i.test(productName))
      var isValidSD = (/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]{0,25}$/i.test(shortDescription))
      var isValidLD = (/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]{0,100}$/i.test(longDescription))
      var isValidSubC = subcategory !== ''
      var isValidContent = content !== null
      var isValidFileName = fileName !== null

      //console.log(productName, shortDescription, longDescription, subcategory, content, flavorQuantities, weightPrices)

      if (!(isValidPN && isValidSD && isValidLD && isValidSubC && isValidContent && isValidFileName)) {
        setErrorPN(!isValidPN)
        setErrorSD(!isValidSD)
        setErrorSD(!isValidLD)
        setErrorSubC(!isValidSubC)
        setErrorContent(!(isValidContent && isValidFileName))
        return;
      }

      var productJson = {
        "name": productName,
        "shortDescr": shortDescription,
        "longDescr": longDescription,
        "categoryName": subcategory,
        "weight_price": weightPrices,
        "flavor_quantity": flavorQuantities
      }

      var photoJson = {
        "name": fileName.split('.')[0],
        "productName": productName,
        "content": content
      }

      await api_product_add(productJson)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        });

      setTimeout(() => {}, 1000);
      
      await api_photo_upload(photoJson)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        });
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


          <div className="add-product-form-left">

          <div>
            <h2>Add a product</h2>
          </div>

          <div className="add-product-PN">
            <p>Product Name *</p>
            <Textbox1 placeholderD="" method={HandleProductNameChange}/>
            {showErrorPN && (<div className="add-product-error"><p>please enter a valid product name</p></div>)}
          </div>

          <div className="add-product-SD">
            <p>Short Description (Optional)</p>
            <Textbox1 placeholderD="" method={HandleShortDescriptionChange}/>
            {showErrorSD && (<div className="add-product-error"><p>please enter a valid short description - max 25 chars</p></div>)}
          </div>

          <div className="add-product-SD">
            <p>Long Description (Optional)</p>
            <Textbox1 placeholderD="" method={HandleLongDescriptionChange}/>
            {showErrorLD && (<div className="add-product-error"><p>please enter a valid long description - max 100 chars</p></div>)}
          </div>

          <div className="add-product-SC">
            <p>Select the subcategory of the product: **</p>
            <Selector method={SetSubcategory} ddItems={GetBottom()}/>
            {showErrorSubC && (<div className="add-product-error"><p>please select a subcategory</p></div>)}
          </div>

          <div className="add-product-photo">
            <p>Upload an image to be associated with the product ***</p>
            <FileUpload method={ HandlePhotoChooser }/>
            {showErrorContent && (<div className="add-product-error"><p>please choose a valid image - .png .jpg .jpeg</p></div>)}
          </div>

          <div className="add-product-FQ">
            <p>Add flavor and quantity pairs (T-Shirt size / quantity): (Optional)</p>
            <FlavorQuantityComp method={ HandleFlavorQuantityChange }/>
          </div>

          <div className="add-product-WP">
            <p>Add weight and price pairs (T-Shirt color / price): (Optional)</p>
            <WeightPriceComp method={ HandleWeightPriceChange }/>
          </div>

          <div className="add-product-submit" onClick={HandleAddProduct}>
            <Button1 text="ADD PRODUCT"/>
          </div>

          </div>


          <div className="add-product-form-right">

          </div>

        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
}
