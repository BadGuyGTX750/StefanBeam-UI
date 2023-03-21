

export default function AuthMenu() {
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
      <a href="/logout">
        <div className="authmenuLI-dropdown-logout">
          <p>Log out</p>
        </div>
      </a>
    </div>
  );
}