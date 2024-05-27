import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Branches</li>
          <li>Mobile-app</li>
          <li>Contact us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.profile_icon} alt="" />
        </div>
    </div> 
  )
}

export default Navbar