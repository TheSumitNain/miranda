import React from 'react'
import "./../css/header.css";
import Logo from "../assets/image/headerLogo.svg";

const Header = ({toggleDrawer}) => {
  return (
    <div className='header_wrapper'>
        <p className='header_left_para'>Amsterdam, NL</p>
        <div className='header_logo_div'>
            <img src={Logo} alt="logo" />
        </div>
        <div onClick={toggleDrawer} className='header_right_btn'>
            <p></p>
            <p></p>
        </div>
        </div>
  )
}

export default Header