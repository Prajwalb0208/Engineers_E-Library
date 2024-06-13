import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets/assets';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Branches</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>
      <div className="navbar-right">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img src={assets.profile_icon} alt="Profile" className='profile-icon'/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/my-account">My Account</Dropdown.Item>
            <Dropdown.Item href="#/my-downloads">My Downloads</Dropdown.Item>
            <Dropdown.Item href="#/read-later">Read Later</Dropdown.Item>
            <Dropdown.Item href="#/bookmarks">Bookmarks</Dropdown.Item>
            <Dropdown.Item href="#/my-cart">My Cart</Dropdown.Item>
            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
