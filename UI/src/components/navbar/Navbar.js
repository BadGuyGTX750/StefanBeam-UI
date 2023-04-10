import React, { useRef, useState } from "react";
import AuthMenuNLI from "../authmenu/AuthMenuNLI";
import AuthMenuLI from "../authmenu/AuthMenuLI";
import appsettings from "../../appsettings.json"
import GenericDD from "../menu_dropdowns/generic_dd";
import "../authmenu/AuthMenuNLI.css"
import "../authmenu/AuthMenuLI.css"

export default function Navbar(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDroppedDown, setIsDroppedDown] = useState(false);
    const timeoutRef = useRef(null);


    // Sports Nutrition Dropdown Setup
    const jsonFileSN = appsettings.categories["SPORTS NUTRITION"];
    const [isDroppedDownSN, setIsDroppedDownSN] = useState(false)

    const HandleMouseEnterSN = () => {
      setIsDroppedDownSN(true);
    }
    const HandleMouseLeaveSN = () => {
      setIsDroppedDownSN(false);
    }

    // Healthy Foods Dropdown Setup
    const jsonFileHF = appsettings.categories["HEALTHY FOODS"];
    const [isDroppedDownHF, setIsDroppedDownHF] = useState(false);

    const HandleMouseEnterHF = () => {
      setIsDroppedDownHF(true);
    }
    const HandleMouseLeaveHF = () => {
      setIsDroppedDownHF(false);
    }

    // Clothing Dropdown Setup
    const jsonFileC = appsettings.categories["CLOTHING"];
    const [isDroppedDownC, setIsDroppedDownC] = useState(false);

    const HandleMouseEnterC = () => {
      setIsDroppedDownC(true);
    }
    const HandleMouseLeaveC = () => {
      setIsDroppedDownC(false);
    }

    // Workout Accessories Dropdown Setup
    const jsonFileWA = appsettings.categories["WORKOUT ACCESSORIES"];
    const [isDroppedDownWA, setIsDroppedDownWA] = useState(false);

    const HandleMouseEnterWA = () => {
      setIsDroppedDownWA(true);
    }
    const HandleMouseLeaveWA = () => {
      setIsDroppedDownWA(false);
    }

    const HandleMouseEnterAuth = () => {
      clearTimeout(timeoutRef.current);
      IsCookiePresent();
      setIsDroppedDown(true);
    }

    const HandleMouseLeaveAuth = () => {
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
            <div className="auth" onMouseEnter={HandleMouseEnterAuth} onMouseLeave={HandleMouseLeaveAuth}>
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
            <div className="categories-item" onMouseEnter={HandleMouseEnterSN} onMouseLeave={HandleMouseLeaveSN}>
              <a href="/SPORTS-NUTRITION">SPORTS NUTRITION</a>
              <div className="sports-nutrition-dropdown">
                { isDroppedDownSN && <GenericDD jsonFile={jsonFileSN} GetProductFamily={props.GetProductFamily}/> }
              </div>
            </div>
            <div className="categories-item" onMouseEnter={HandleMouseEnterHF} onMouseLeave={HandleMouseLeaveHF}>
              <a href="/HEALTHY-FOODS">HEALTHY FOODS</a>
              <div className="healthy-foods-dropdown">
                { isDroppedDownHF && <GenericDD jsonFile={jsonFileHF} GetProductFamily={props.GetProductFamily}/> }
              </div>
            </div>
            <div className="categories-item" onMouseEnter={HandleMouseEnterC} onMouseLeave={HandleMouseLeaveC}>
              <a href="/CLOTHING">CLOTHING</a>
              <div className="clothing-dropdown">
                { isDroppedDownC && <GenericDD jsonFile={jsonFileC} GetProductFamily={props.GetProductFamily}/> }
              </div>
            </div>
            <div className="categories-item" onMouseEnter={HandleMouseEnterWA} onMouseLeave={HandleMouseLeaveWA}>
              <a href="/WORKOUT-ACCESSORIES">WORKOUT ACCESSORIES</a>
              <div className="workout-accessories-dropdown">
                { isDroppedDownWA && <GenericDD jsonFile={jsonFileWA} GetProductFamily={props.GetProductFamily}/> }
              </div>
            </div>
        </div>
      </div>
    );
}