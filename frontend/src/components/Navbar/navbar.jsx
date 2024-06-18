import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets/assets';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import LoginPopup from '../LoginPopup/LoginPopup'; // Assuming you have a LoginPopup component

const Navbar = ({ isLoggedIn, setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  // const [isLoggedIn, setIsLoggedIn] = useState(true); // Set initial state to true for logged in


  const handleLogout = () => {
    // Implement logout logic here (clear session, update state, etc.)
    console.log("Logging out...");
  };

  const handleMyProfile = () => {
    // Navigate to My Profile component/page
    console.log("Navigating to My Profile...");
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#books-grid" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>All books</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact Us</a>
      </ul>
      <div className="navbar-right">
        {isLoggedIn ? (
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-basic">
              <img src={assets.profile_icon} alt="Profile" className='profile-icon' />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/my-account" onClick={handleMyProfile}>My Account</Dropdown.Item>
              <Dropdown.Item href="#/my-downloads">My Downloads</Dropdown.Item> {/* Directly open downloads in current device */}
              <Dropdown.Item href="#/read-later">Read Later</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <button className="login-button" onClick={() => setShowLogin(true)}>Login</button>
        )}
      </div>

      {/* {isLoggedIn ? null : <LoginPopup />}  */}
      {/* "Login page is made default Use correct logic" */}
    </div>
  );
};

export default Navbar;
