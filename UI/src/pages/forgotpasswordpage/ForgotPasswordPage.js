import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Textbox1 from "../../components/textbox/Textbox1";
import Button1 from "../../components/button/Button1";
import validateEmail from "../../services/ValidateEmail";
import LoadingSpinner from "../../components/spinner/Spinner";
import api_resetPassword from "../../api/auth/api_resetPasswordRequest";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import "../../components/textbox/Textbox1.css";

export default function LoginPage(props) {
    const [email, setE] = useState("");
    const [password, setP] = useState("");
    const [confirmedPassword, setCF] = useState("");

    const [showErrorE, setErrorE] = useState(false);
    const [showErrorP, setErrorP] = useState(false);
    const [showErrorCF, setErrorCF] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleConfirmedPasswordChange = (value) => {
      setCF(value);
      if(value !== password) {
        setErrorCF(true);
        return;
      }
      setErrorCF(false);
    };

    async function HandleResetPasswordRequest() {
      setIsLoading(true);

      var isValidE = validateEmail(email);
      var isValidP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]{8,50}$/i.test(password);
      var isValidCF = false;
      if (password === confirmedPassword)
        isValidCF = true;
      
      console.log(isValidE, isValidP, isValidCF)

      if (!(isValidE && isValidP && isValidCF)) {
        setErrorE(!isValidE);
        setErrorP(!isValidP);
        setErrorCF(!isValidCF);
        setIsLoading(false);
        return;
      }

      await api_resetPassword(email, password)
        .then(response => {
          setTimeout(() => setIsLoading(false), 1000);
          window.location.href = "/home";
        })
        .catch(error => {
          setTimeout(() => setIsLoading(false), 1000);
        });
    }

    return(
      <div className="content">

        { isLoading && <LoadingSpinner/> }

        <div className="navbar">
          <Navbar/>
        </div>

        <div className="fpp">

          <div className="fpp-page-title">
            <h1>Forgot Your Password?</h1>
          </div>

          <div className="fpp-top-text">
            <p>Please enter your email address and a new password below to receive a password reset link.</p>
          </div>

          <div className="fpp-formular-section">

            <div className="fpp-email">
              <p>Email *</p>
              <Textbox1 placeholderD="stefan_stefan123@domain.com" method={HandleEmailChange}/>
              {showErrorE && (<div className="fpp-error"><p>please enter a valid email</p></div>)}
            </div>

            <div className="fpp-new-password">
              <p>New Password *</p>
              <Textbox1 type="password" placeholderD="Type a strong password" method={HandlePasswordChange}/>
              {showErrorP && (<div className="fpp-error"><p>must contain upper/lowercase characters and numbers - between 8-50 characters</p></div>)}
            </div>

            <div className="fpp-confirm-password">
              <p>Confirm Password *</p>
              <Textbox1 type="password" placeholderD="Repeat the password" method={handleConfirmedPasswordChange}/>
              {showErrorCF && (<div className="fpp-error"><p>passwords don't match</p></div>)}
            </div>

          </div>
          
          <div className="fpp-signin" onClick={HandleResetPasswordRequest}>
            <Button1 text="RESET MY PASSWORD"/>
          </div>

        </div>
        

        <div className="footer">
          <Footer/>
        </div>

      </div>
    )
}