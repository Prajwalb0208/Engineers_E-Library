import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets/assets';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href="#books-grid" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>All books</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact Us</a>
      </ul>
      <div className="navbar-right">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle id="dropdown-basic">
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
