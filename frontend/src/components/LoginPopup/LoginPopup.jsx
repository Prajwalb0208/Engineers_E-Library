import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets'; // Assuming assets are correctly imported

const LoginPopup = ({ setShowLogin, categories }) => {
  const [currState, setCurrState] = useState("Login");
  const [interestedField, setInterestedField] = useState('');

  const handleInterestedFieldChange = (e) => {
    setInterestedField(e.target.value);
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : (
            <>
              <input type="text" placeholder='Your Name' required />
              <input type="email" placeholder='Your email' required />
              <input type="password" placeholder='Password' required />
            </>
          )}
          <select
            value={interestedField}
            onChange={handleInterestedFieldChange}
            disabled={currState === "Login"}
          >
            <option value="">Select Interested Field (Engineering categories)</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currState === "Login" ?
          <p>Create a new account?<span onClick={() => setCurrState("Sign Up")}>Click here</span></p> :
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
