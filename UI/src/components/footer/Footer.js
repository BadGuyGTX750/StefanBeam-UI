import React from "react";

function Footer(props) {
  return(
    <div className="content">
      <div className="infos">
        <div className="info-section">
          <div className="info-section-general">
            <p>
              <a href="/">Contacts</a>
            </p>
            <p>
              <a href="/">Business terms and conditions</a>
            </p>
            <p>
              <a href="/">Privacy policy</a>
            </p>
            <p>
              <a href="/">Refund and Return Policies</a>
            </p>
            <p>
              <a href="/">Join Our Team</a>
            </p>
            <p>
              <a href="/">Wholesale</a>
            </p>
            <p>
              <a href="/">Frequently asked questions</a>
            </p>
          </div>
          <div className="info-section-follow-us">
            <p>Follow us:</p>
            <a href="/">
              <img src={require("../../images/follow-facebook-icon.png")} alt="follow-facebook" height="40"></img>
            </a>
            <a href="/">
              <img src={require("../../images/follow-instagram-icon.png")} alt="follow-instagram" height="40"></img>
            </a>
            <a href="/">
              <img src={require("../../images/follow-youtube-icon.png")} alt="follow-youtube" height="40"></img>
            </a>
            <a href="/">
              <img src={require("../../images/follow-tiktok-icon.png")} alt="follow-tiktok" height="40"></img>
            </a>
            <a href="/">
              <img src={require("../../images/follow-twitter-icon.png")} alt="follow-twitter" height="40"></img>
            </a>
          </div>
          <div className="info-section-quality-approved">
            <p>Quality approved:</p>
            <img src={require("../../images/quality-iso-icon.png")} alt="quality-iso" height="40"></img>
            <img src={require("../../images/quality-if-icon.png")} alt="quality-if" height="40"></img>
            <img src={require("../../images/quality-result-icon.png")} alt="quality-result" height="40"></img>
            <img src={require("../../images/quality-leaf-icon.png")} alt="quality-leaf" height="40"></img>
          </div>
          <div className="info-section-contacts">
            <p>Contact Information:</p>
            <br/>
            <p>StefanBeam SmbH</p>
            <p>Celmaree 23,</p>
            <p>110245 Bucharest, Romania</p>
            <br/>
            <p>+40 723 371 ***</p>
            <p>stefanstefan211@gmail.com</p>
          </div>
        </div>
        
      </div>
      
      <div className="divider-footer">
        <a href="/home" alt="gotohome">StefanBeam.com</a>
      </div>

      <div className="signature-footer">
        <div className="signature-footer-text">
          <p>&copy; 2014 - 2023 StefanBeam</p>
        </div>
      </div>
    </div>
  );
}

export default Footer