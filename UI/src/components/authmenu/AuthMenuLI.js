import React, { useState } from "react";
import api_logout from "../../api/auth/api_logout";
import LoadingSpinner from "../spinner/Spinner";

export default function AuthMenu() {
  const [isLoading, setIsLoading] = useState(false);

  async function HandleLogout() {
    setIsLoading(true);
    await api_logout()
    .then(response => {
      setTimeout(() => setIsLoading(false), 1000);
      setTimeout(() => window.location.href = "/", 1000);
    })
    .catch(error => {
      setTimeout(() => setIsLoading(false), 1000);
    });
}

  return (
    <div className="content">
      <div className="logout-spinner">
        { isLoading && <LoadingSpinner/> }
      </div>
      <div className="authmenuLI-dropdown">
      <a href="/myaccount">
        <div className="authmenuLI-dropdown-myaccount">
          <p>My Account</p>
        </div>
      </a>
      <a href="/myorders">
        <div className="authmenuLI-dropdown-myorders">
          <p>My Orders</p>
        </div>
      </a>
        <div className="authmenuLI-dropdown-logout" onClick={HandleLogout}>
          <p>Log out</p>
        </div>
      </div>

    </div>
  );
}