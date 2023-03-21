

export default function AuthMenu() {
  return (
    <div className="authmenuNLI-dropdown">
      <a href="/login">
        <div className="authmenuNLI-dropdown-login">
          <p>Login</p>
        </div>
      </a>
      <a href="/register">
        <div className="authmenuNLI-dropdown-register">
          <p>Register</p>
        </div>
      </a>
    </div>
  );
}