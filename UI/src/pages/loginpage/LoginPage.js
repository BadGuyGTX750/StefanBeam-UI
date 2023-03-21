import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Textbox1 from "../../components/textbox/Textbox1";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import "../../components/textbox/Textbox1.css";
import Button1 from "../../components/button/Button1";

export default function LoginPage(props) {
    var email = null;
    var password = null

    const handleEmailChange = (value) => {
      email = value;
    };

    const handlePasswordChange = (value) => {
      password = value;
    };

    return(
      <div className="content">

        <div className="navbar">
          <Navbar/>
        </div>
        
        <div className="login-page-title">
            <h2>Customer Login</h2>
        </div>

        <div className="login-formular-section">
          <div className="lfs-left">
            <div className="lfs-top-title">
              <h2>New Customers</h2>
              <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
            </div>

            <div className="lfs-create-account">
              <a href="/register">
                <Button1 text="CREATE AN ACCOUNT"/>
              </a>
            </div>

            <div className="lfs-bot-title">
              <h2>Registered Customers</h2>
              <p>If you have an account, sign in with your email address.</p>
            </div>

            <div className="lfs-firstname">
              <p>Email *</p>
              <Textbox1 placeholderD="" method={handleEmailChange}/>
            </div>

            <div className="lfs-lastname">
              <p>Password *</p>
              <Textbox1 type="password" placeholderD="" method={handlePasswordChange}/>
            </div>

            <div className="lfs-signin">
              <Button1 text="SIGN IN"/>
            </div>
          </div>

          <div className="lfs-right">
            
          </div>

        </div>

        <div className="footer">
          <Footer/>
        </div>

      </div>
    )
}