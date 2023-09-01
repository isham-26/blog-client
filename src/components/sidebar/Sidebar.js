import "./Sidebar.css"
import personalImg from "../../images/personalimg.jpg"
import facebook from "../../icons/facebook.png"
import instagram from "../../icons/instagram.png"
import twitter from "../../icons/twitter.png"
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="personalImg"src={personalImg} alt="img" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eveniet facilis aperiam ex, eaque obcaecati odit rem vel dolorum impedit.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarlistItem">Life</li>
                <li className="sidebarlistItem">Music</li>
                <li className="sidebarlistItem">Style</li>
                <li className="sidebarlistItem">Sport</li>
                <li className="sidebarlistItem">Tech</li>
                <li className="sidebarlistItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              <img src={facebook} alt="img" />
              <img src={twitter} alt="img" />
              <img src={instagram} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Sidebar