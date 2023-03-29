import React, { useRef, useState, Component } from "react";
import AuthMenuNLI from "../authmenu/AuthMenuNLI";
import AuthMenuLI from "../authmenu/AuthMenuLI";
import "../authmenu/AuthMenuNLI.css"
import "../authmenu/AuthMenuLI.css"
import SportsNutritionDD from "../menu_dropdowns/sports_nutrition_dd";
import appsettings from "../../appsettings.json"
import GenericDD from "../menu_dropdowns/generic_dd";

export default function Navbar(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isDroppedDown, setIsDroppedDown] = useState(false)
    const timeoutRef = useRef(null);

    const jsonFile = appsettings.categories["SPORTS NUTRITION"];

    // set up the drop-down menus
    function ConfigureDropDownMenu() {
      for (var i = 0; i < 5; i++) {
        var gen_dd_item = document.getElementsByClassName("gen-dd-item-"+i)
        console.log(gen_dd_item.length)
        if (gen_dd_item.length > 0) {
          //console.log(gen_dd_item.length)
          for (var j = 0; j < gen_dd_item.length; j++) {
            //console.log(gen_dd_item[j])
          }
        }
      }
    }

    const HandleMouseEnter = () => {
      clearTimeout(timeoutRef.current);
      IsCookiePresent();
      setIsDroppedDown(true);
    }

    const HandleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsDroppedDown(false);
      }, 500)
    }

    const IsCookiePresent = () => {
      var localCookies = document.cookie.split("; ");

      var isTrue = false;
      localCookies.forEach(ck => {
        var parts = ck.split("=")
        if (parts[0] === "RestApp-Token" && parts[1] !== "") {
          isTrue = true;
          return;
        }
      })
      setIsLoggedIn(isTrue);
    }

    return (
      <div className="content">
        <div className="divider">
        
        </div>
        <div className="photo-auth-cart">
          <div className="site-logo">
            <a href="/home">
              <img src={require("../../images/stefanbeam-logo.png")} alt="site-logo" height="70"></img>
            </a>
          </div>
          <div className="auth-cart">
            <div className="auth" onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}>
              <img src={require("../../images/profile-icon.png")} alt="authentication" height="30"></img>
              <div className="auth-dropdown">
                {!isLoggedIn && isDroppedDown && <AuthMenuNLI/>}
                {isLoggedIn && isDroppedDown && <AuthMenuLI/>}
              </div>
            </div>
            <a className="cart" href="/checkout/cart/">
              <img src={require("../../images/shopping-cart-icon.png")} alt="cart" height="35"></img>
            </a>
          </div>
        </div>

        <div className="categories">
            <div className="categories-item" href="/sports-nutrition">
              <p>SPORTS NUTRITION</p>
              <div className="sports-nutrition-dropdown">
                <GenericDD jsonFile={jsonFile}/>
              </div>
            </div>
            <div className="categories-item" href="/healthy-foods">
              <p>HEALTHY FOODS</p>
            </div>
            <div className="categories-item" href="/clothing">
              <p>CLOTHING</p>
            </div>
            <div className="categories-item" href="/workout-accessories">
              <p>WORKOUT ACCESSORIES</p>
            </div>
        </div>
      </div>
    );
}