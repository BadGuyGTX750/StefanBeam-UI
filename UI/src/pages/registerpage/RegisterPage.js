import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Textbox1 from "../../components/textbox/Textbox1";
import "../../components/footer/Footer.css";
import "../../components/navbar/Navbar.css";
import "../../components/textbox/Textbox1.css";
import Button1 from "../../components/button/Button1";
import validateEmail from "../../services/ValidateEmail";
import api_register from "../../api/auth/api_register";
import LoadingSpinner from "../../components/spinner/Spinner";

export default function RegisterPage(props) {
    const [firstName, setFN] = useState("");
    const [lastName, setLN] = useState("");
    const [email, setE] = useState("");
    const [password, setP] = useState("");
    const [confirmedPassword, setCF] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showErrorFN, setErrorFN] = useState(false);
    const [showErrorLN, setErrorLN] = useState(false);
    const [showErrorE, setErrorE] = useState(false);
    const [showErrorP, setErrorP] = useState(false);
    const [showErrorCF, setErrorCF] = useState(false);

    const handleFirstNameChange = (value) => {
      setFN(value);
      if (!(/^([A-Za-z]{1,50})$/i.test(value))) {
        setErrorFN(true);
        return;
      }
      setErrorFN(false);
    };

    const handleLastNameChange = (value) => {
      setLN(value);
      if (!(/^([A-Za-z]{1,50})$/i.test(value))) {
        setErrorLN(true);
        return;
      }
      setErrorLN(false);
    };

    const handleEmailChange = (value) => {
      setE(value);
      if (!validateEmail(value)) {
        setErrorE(true);
        return;
      }
      setErrorE(false);
    };

    const handlePasswordChange = (value) => {
      if (value !== confirmedPassword) setErrorCF(true);
      else setErrorCF(false);
      setP(value);

      if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:'",.<>/?-]{8,50}$/i.test(value))) {
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

    async function registerUser() {
      setIsLoading(true);

      var isValidE = validateEmail(email);
      var isValidFN = /^([A-Za-z]{1,50})$/i.test(firstName);
      var isValidLN = /^([A-Za-z]{1,50})$/i.test(lastName);
      var isValidP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:'",.<>/?-]{8,50}$/i.test(password);
      var isValidCF = false;
      if (password === confirmedPassword)
        isValidCF = true;

      if (!(isValidE && isValidFN && isValidLN && isValidP && isValidCF)) {
        setErrorFN(true);
        setErrorLN(true);
        setErrorE(true);
        setErrorP(true);
        setErrorCF(true);
        setIsLoading(false);
        return;
      }

      await api_register(firstName, lastName, email, password)
        .then(response => {
          console.log(response);
          setTimeout(() => setIsLoading(false), 1000);
        })
        .catch(error => {
          console.log(error);
          setTimeout(() => setIsLoading(false), 1000);
        });
    }

    return(
      <div className="content">
        
        { isLoading && <LoadingSpinner/> }

        <div className="navbar">
          <Navbar/>
        </div>

        <div className="register-page-title">
            <h2>Create New Customer Account</h2>
        </div>

        <div className="register-formular-section">
          <div className="rfs-left">
            <div>
              <h2>Personal Information</h2>
            </div>

            <div className="rfs-firstname">
              <p>First Name *</p>
              <Textbox1 placeholderD="Eg: Stefan" method={handleFirstNameChange}/>
              {showErrorFN && (<div className="rfs-error"><p>required field - max 50 characters</p></div>)}
            </div>

            <div className="rfs-lastname">
              <p>Last Name *</p>
              <Textbox1 placeholderD="Eg: Stefan" method={handleLastNameChange}/>
              {showErrorLN && (<div className="rfs-error"><p>required field - max 50 chars</p></div>)}
            </div>
          </div>

          <div className="rfs-right">
            <div>
              <h2>Sign-in Information</h2>
            </div>

            <div className="rfs-email">
              <p>Email *</p>
              <Textbox1 placeholderD="Eg: stefan_stefan123@domain.com" method={handleEmailChange}/>
              {showErrorE && (<div className="rfs-error"><p>please enter a valid email</p></div>)}
            </div>

            <div className="rfs-password">
              <p>Password *</p>
              <Textbox1 type="password" placeholderD="Type a strong password" method={handlePasswordChange}/>
              {showErrorP && (<div className="rfs-error"><p>must contain upper/lowercase characters and numbers - between 8-50 characters</p></div>)}
            </div>

            <div className="rfs-confirmed-password">
              <p>Confirm Password *</p>
              <Textbox1 type="password" placeholderD="Repeat the password" method={handleConfirmedPasswordChange}/>
              {showErrorCF && (<div className="rfs-error"><p>passwords don't match</p></div>)}
            </div>

            <div className="rfs-submit" onClick={registerUser}>
              <Button1 type="submit" disabled={isLoading} text="CREATE AN ACCOUNT"/>
            </div>
          </div>

        </div>

        <div className="footer">
          <Footer/>
        </div>

      </div>
    )
}