import "./Sidebar.css"
import personalImg from "../../images/personalimg.jpg"
import facebook from "../../icons/facebook.png"
import instagram from "../../icons/instagram.png"
import twitter from "../../icons/twitter.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const Sidebar = () => {
  const [cats,setCats]=useState([])
  useEffect(()=>{
     const getCats= async()=>{
       const res= await axios.get("/categories")
       setCats(res.data)
     }
     getCats()
  },[])
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
              {
                cats.map((cat)=>(
                  <Link to={`/?cat=${cat.name}`} className="link"><li className="sidebarlistItem">{cat.name}</li></Link>
                
                ))
              }
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