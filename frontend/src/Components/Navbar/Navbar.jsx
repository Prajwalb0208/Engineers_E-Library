import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin, isLoggedIn }) => {

  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => handleLinkClick("home")}>Home</Link>
        <li onClick={() => handleLinkClick('all-books')}>All Books</li>
        <li onClick={() => handleLinkClick('contact-us')}>Contact Us</li>
        <Link to='/cart' onClick={() => handleLinkClick('check-out')}>Check Out</Link>
      </ul>
      <div className="navbar-right">
        {isLoggedIn ? (
          <Link to='/UserProfile'>
            <img src={assets.profile_icon} alt="Profile" className="profile-icon" />
          </Link>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
