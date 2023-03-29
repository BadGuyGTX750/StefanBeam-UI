import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Textbox1 from "../../components/textbox/Textbox1";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import "../../components/textbox/Textbox1.css";
import Button1 from "../../components/button/Button1";
import validateEmail from "../../services/ValidateEmail";
import LoadingSpinner from "../../components/spinner/Spinner";
import api_login from "../../api/auth/api_login";
import GetProductFamily from "../../components/utils/GetProductFamily";

export default function LoginPage(props) {
    const [email, setE] = useState("");
    const [password, setP] = useState("");

    const [showErrorE, setErrorE] = useState(false);
    const [showErrorP, setErrorP] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const HandleEmailChange = (value) => {
      setE(value);
      if (!validateEmail(value)) {
        setErrorE(true);
        return;
      }
      setErrorE(false);
    };

    const HandlePasswordChange = (value) => {
      setP(value);
      if(!(/^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]+$/i.test(value))) {
        setErrorP(true);
        return;
      }
      setErrorP(false);
    };

    async function HandleLogin() {
      setIsLoading(true);

      var isValidE = validateEmail(email);
      var isValidP = /^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]+$/i.test(password);

      if (!(isValidE && isValidP)) {
        setErrorE(!isValidE);
        setErrorP(!isValidP);
        setIsLoading(false);
        return;
      }
      
      await api_login(email, password)
        .then(response => {
          setTimeout(() => setIsLoading(false), 1000);
          window.location.href = "/home";
        })
        .catch(error => {
          setTimeout(() => setIsLoading(false), 1000);
          setTimeout(() => setLoginFailed(true), 1000);
          setTimeout(() => setLoginFailed(false), 4000);
        });
    }

    return(
      <div className="content">

        { isLoading && <LoadingSpinner/> }

        <div className="navbar">
          <Navbar GetProductFamily={ GetProductFamily }/>
        </div>
        
        <div className="login-page-title">
            <h2>Customer Login</h2>
        </div>

        { loginFailed && <div className="login-page-login-failed"><p>Login Failed</p></div> }

        <div className="login-formular-section">
          <div className="lfs-left">
            <div className="lfs-top-title">
              <h2>New Customers</h2>
              <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
            </div>

            <div className="lfs-create-account">
              <a href="/customer/account/register/">
                <Button1 text="CREATE AN ACCOUNT"/>
              </a>
            </div>

            <div className="lfs-bot-title">
              <h2>Registered Customers</h2>
              <p>If you have an account, sign in with your email address.</p>
            </div>

            <div className="lfs-firstname">
              <p>Email *</p>
              <Textbox1 placeholderD="" method={HandleEmailChange}/>
              {showErrorE && (<div className="lfs-error"><p>please enter a valid email</p></div>)}
            </div>

            <div className="lfs-lastname">
              <p>Password *</p>
              <Textbox1 type="password" placeholderD="" method={HandlePasswordChange}/>
              {showErrorP && (<div className="lfs-error"><p>required field</p></div>)}
            </div>

            <div className="lfs-signin" onClick={HandleLogin}>
              <Button1 text="SIGN IN"/>
              <a href="/customer/account/forgotpassword/">
                <p>Forgot your Password?</p>
              </a>
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