import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="registerDiv">
      <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input type="text" placeholder=" Enter username" />
          <label>Email</label>
          <input type="email" placeholder=" Enter email" />
          <label> Create Password</label>
          <input type="password" placeholder="Enter password" />
          <button className="registerSubmit">Register</button>
        </form>
        <Link className="link" to="/login"><p>Login</p></Link>
      </div>
    </div>
  );
};

export default Register;
