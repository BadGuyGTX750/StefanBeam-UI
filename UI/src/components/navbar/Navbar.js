import React, { useRef, useState } from "react";
import AuthMenuNLI from "../authmenu/AuthMenuNLI";
import "../authmenu/AuthMenuNLI.css"
import AuthMenuLI from "../authmenu/AuthMenuLI";
import "../authmenu/AuthMenuLI.css"

function Navbar(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isDroppedDown, setIsDroppedDown] = useState(false)
    const timeoutRef = useRef(null);
    
    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current);
      setIsDroppedDown(true);
    }

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsDroppedDown(false);
      }, 1000)
      
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
            <div className="auth" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={require("../../images/profile-icon.png")} alt="authentication" height="30"></img>
              <div className="auth-dropdown">
                {!isLoggedIn && isDroppedDown && <AuthMenuNLI/>}
                {isLoggedIn && isDroppedDown && <AuthMenuLI/>}
              </div>
            </div>
            <a className="cart" href="/cart">
              <img src={require("../../images/shopping-cart-icon.png")} alt="cart" height="35"></img>
            </a>
          </div>
        </div>

        <div className="categories">
          <ul>
            <li>
              <a href="/sportsnutrition">SPORTS NUTRITION</a>
            </li>
            <li>
              <a href="/healthyfoods">HEALTHY FOODS</a>
            </li>
            <li>
              <a href="/clothing">CLOTHING</a>
            </li>
            <li>
              <a href="/workoutaccessories">WORKOUT ACCESSORIES</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar