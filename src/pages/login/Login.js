import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="formDiv">
      <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email or username</label>
          <input type="email" placeholder=" Enter username or email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button className="loginSubmit">Login</button>
        </form>
        <Link className="link" to="/register"><p>Register now</p></Link>
      </div>
      
    </div>
  );
};

export default Login;
