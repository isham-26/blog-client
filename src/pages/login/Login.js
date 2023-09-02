import { Link } from "react-router-dom";
import "./Login.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch,isFetching} = useContext(Context)

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    //console.log("i am here")
    dispatch({type:"LOGIN_START"})
    try{
       const res = await axios.post("/auth/login",{
        
        username:userRef.current.value,
        password:passwordRef.current.value
       })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  };
  return (
    <div className="login">
      <div className="formDiv">
        <span className="loginTitle">Login</span>
        <form className="loginForm" >
          <label>Username</label>
          <input type="email" placeholder=" Enter your username" ref={userRef} />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
          />
          <button className="loginSubmit" onClick={handleSubmit} disabled={isFetching}>
            Login
          </button>     
        </form>
        <Link className="link" to="/register">
          <p>Register now</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
