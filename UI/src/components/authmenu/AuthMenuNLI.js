

export default function AuthMenu() {
  return (
    <div className="authmenuNLI-dropdown">
      <a href="/customer/account/login/">
        <div className="authmenuNLI-dropdown-login">
          <p>Login</p>
        </div>
      </a>
      <a href="/customer/account/register/">
        <div className="authmenuNLI-dropdown-register">
          <p>Register</p>
        </div>
      </a>
    </div>
  );
}