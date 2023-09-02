import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios"
const Register = () => {
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[err,setErr]=useState(false)

  const handleSubmit = async (e)=>{
      e.preventDefault();
      setErr(false)
      try{
        const res = await axios.post('/auth/register',{
          username,
          email,
          password
        })
        res.data && window.location.replace("/login")
      }catch(err){
         setErr(true)
      }
  }
  return (
    <div className="register">
      <div className="registerDiv">
      <span className="registerTitle">Register</span>
      {err &&(<span className="warnning">Already registerd</span>)}
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" placeholder=" Enter username" onChange={(e)=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder=" Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          <label> Create Password</label>
          <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
          <button className="registerSubmit" type="submit">Register</button>
        </form>
        <Link className="link" to="/login"><p>Login</p></Link>
      </div>
    </div>
  );
};

export default Register;
