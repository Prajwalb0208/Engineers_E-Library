import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import { signup, login } from '../../../../backend/config/firebase';

const LoginPopUp = ({ setShowLogin, setIsLoggedIn }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up") {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        await signup(formData.name, formData.dob, formData.phone, formData.email, formData.password);
      } else {
        await login(formData.email, formData.password);
      }
      setIsLoggedIn(true);
      setShowLogin(false);
    } catch (error) {
      console.error(`${currState} error:`, error);
      alert(`Error during ${currState.toLowerCase()}. Please try again.`);
    }
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
            <>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="dob"
                placeholder="Your date of birth"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {currState === "Sign Up" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
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
