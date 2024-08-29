import { React , useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin, isLoggedIn }) => {

  const [menu, setMenu] = useState("home");


  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")}>Home</Link>
        <a href= '#books-grid' onClick={()=>setMenu("books-grid")} >All Books</a>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
        <Link to='/cart' onClick={() => handleLinkClick('check-out')}>My Cart</Link>
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
