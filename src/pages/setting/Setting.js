import { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Setting.css";
import { Context } from "../../context/Context";
import axios from "axios";

const Setting = () => {
  const {user,dispatch}=useContext(Context)
  // const path = location.pathname.split("/")[2];
  const [username,setUsername]=useState("")
  const [file,setFile]=useState(null)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [success,setSuccess]=useState(false)
  const PF = "http://localhost:8000/images/"
  const handleupdate=async(e)=>{
      e.preventDefault();
      dispatch({type:"UPDATE_START"})
      const updateUser = {
          userId:user._id,
          username,
          email,
          password,
      }
      if (file) {
        const data =  new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updateUser.profilePic = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {
          console.error(err);
        }
        console.log("i am here")
      }
      try {
        const res=await axios.put("/users/" + user._id, updateUser);
        setSuccess(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        window.location.reload();
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
  }
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your account</span>
          <span className="settingDeleteTitle">Delete account</span>
        </div>
        <form className="settingForm">
          <div className="settingPP">
            <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="img" className="profileImg" />
            {console.log(PF+user.profilePic)}
            <label htmlFor="fileinput">
              <div className="changeProfile">Change profile</div>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])} />
          </div>
          <label>Username</label>
          <input type="text" value={user.username} onChange={(e)=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" value={user.email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder="Enter Password Mandetary" onChange={(e)=>setPassword(e.target.value)}/>
          <button className="settingSubmit" onClick={handleupdate}>update</button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
