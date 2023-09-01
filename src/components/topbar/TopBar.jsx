import React from "react";
import "./TopBar.css";
import facebook from "../../icons/facebook.png";
import instagram from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";
import search from "../../icons/search.png";
import pinterest from "../../icons/pinterest.png";
import topimg from "../../images/topbar-img.jpg";
import { Link } from "react-router-dom";
const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <img src={facebook} alt="img" />
        <img src={twitter} alt="img" />
        <img src={pinterest} alt="img" />
        <img src={instagram} alt="img" />
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="toplistItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="toplistItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="toplistItem">
            <Link to="/" className="link">
              CONTNACT
            </Link>
          </li>
          <li className="toplistItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="toplistItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topimg" src={topimg} alt="img" />
        ) : (
          <ul className="toplist">
            <li className="toplistItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="toplistItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <img className="searchicon" src={search} alt="img" />
      </div>
    </div>
  );
};

export default TopBar;
