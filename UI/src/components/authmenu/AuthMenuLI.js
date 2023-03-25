import api_logout from "../../api/auth/api_logout";

export default function AuthMenu() {

  const HandleLogout = () => {
    api_logout();
  }

  return (
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
      <a href="/home">
        <div className="authmenuLI-dropdown-logout" onClick={HandleLogout}>
          <p>Log out</p>
        </div>
      </a>
    </div>
  );
}