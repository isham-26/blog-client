import React from 'react'
import  './Header.css'
import headerimg from "../../images/headerimg.jpg"
import Marquee from "react-fast-marquee"


const Header = () => {
  return (
    <div className='header'>
       <div className="headerTitles">
           <span><Marquee className='headerTitleSm' loop="infinite" gradient="true">Isham gupta first blog website</Marquee></span>
           <span className="headerTitleLg"><Marquee loop="infinite" speed={35}> Blogs</Marquee></span>
       </div>
       <img className="headerimg"src={headerimg} alt="img" />
    </div>
  )
}

export default Header