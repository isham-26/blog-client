import React from 'react'
import  './Header.css'
import headerimg from "../../images/headerimg.jpg"
import Marquee from "react-fast-marquee"


const Header = () => {
  return (
    <div className='header'>
       <div className="headerTitles">
           <Marquee className='headerTitleSm' loop="infinite" gradient="true">Isham gupta first blog Lorem ipsum dolor sit, amet.</Marquee>
           <span className="headerTitleLg">Blog</span>
       </div>
       <img className="headerimg"src={headerimg} alt="img" />
    </div>
  )
}

export default Header