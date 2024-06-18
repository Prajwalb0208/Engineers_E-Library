import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/assets';

const Footer = () => {
  return (
      <div className='footer' id='footer'>
        <hr/>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti maiores ad aliquam autem! Corporis odio maiores pariatur sint dolorum magnam, fuga, maxime dolorem corrupti exercitationem accusamus, facere tenetur quam rerum.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9876536789</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024  Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer