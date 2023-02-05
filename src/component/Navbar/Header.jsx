import React from 'react'
import { useState } from 'react'
import './Header.css'
function Header() {
  const[mobile,setMobile]=useState(false);
  return (
    <div className='header'>
     <div className="header-container">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="navlinks">
      <ul className={mobile ? "nav-links-mobile" : "link f_flex uppercase"} >
          <li><a href="#home">home</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        <button className='toggle' onClick={()=>setMobile(!mobile)}>
          {mobile? <i className='fa fa-close close home-btn'></i> :
          <i className='fa fa-bars open home-btn'></i>}
        </button>
      </div>
     </div>
    </div>
  )
}

export default Header