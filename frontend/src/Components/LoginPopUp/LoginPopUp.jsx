import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
const LoginPopUp = ({ setShowLogin, setIsLoggedIn }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [image, setImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming login/signup is successful
    setIsLoggedIn(true);
    setShowLogin(false);
  };
  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        {currState === "Sign Up" && (
          <div className="login-popup-image">
            {image && <img src={image} alt="Uploaded" />}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        )}
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          {currState === "Sign Up" && (
            <input type="password" placeholder="Confirm Password" required />
          )}
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        {currState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
        <p>
          {currState === "Sign Up"
            ? "Already have an account? "
            : "Create a new account? "}
          <span onClick={() => setCurrState(currState === "Sign Up" ? "Login" : "Sign Up")}>
            {currState === "Sign Up" ? "Login here" : "Sign Up here"}
          </span>
        </p>
      </form>
    </div>
  );
};
export default LoginPopUp;