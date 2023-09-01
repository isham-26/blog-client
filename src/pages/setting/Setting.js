import Sidebar from "../../components/sidebar/Sidebar";
import "./Setting.css";
import profileimg from "../../images/profile.jpg";
const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your account</span>
          <span className="settingDeleteTitle">Delete account</span>
        </div>
        <form className="settingForm">
          <div className="settingPP">
            <img src={profileimg} alt="img" className="profileImg" />
            <label htmlFor="fileinput">
              <div className="changeProfile">Change profile</div>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sakak" />
          <label>Email</label>
          <input type="email" placeholder="sakak@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="....." />
          <button className="settingSubmit">update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
