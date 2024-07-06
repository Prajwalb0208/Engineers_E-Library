import React, { useState } from 'react';
import './UserProfile.css';

const Profile = () => (
  <div className="profile-container">
    <div className="profile-header">
      <h1>My Profile</h1>
      <img src="https://via.placeholder.com/150" alt="Profile" className="profile-photo" />
    </div>
    <div className="profile-content">
      <div className="profile-field">
        <label>Name:</label>
        <input type="text" defaultValue="John Doe" />
      </div>
      <div className="profile-field">
        <label>Date of Birth:</label>
        <input type="date" defaultValue="1990-01-01" />
      </div>
      <div className="profile-field">
        <label>Phone Number:</label>
        <input type="tel" defaultValue="+1234567890" />
      </div>
      <div className="profile-field">
        <label>Email ID:</label>
        <input type="email" defaultValue="john.doe@example.com" />
      </div>
      <div className="profile-field">
        <label>Password:</label>
        <input type="password" defaultValue="password" />
      </div>
      <button className="save-button">Save Changes</button>
    </div>
  </div>
);

const Favourites = () => (
  <div>
    <h1>My Favourites</h1>
    <p>Favourites content goes here</p>
  </div>
);

const Orders = () => (
  <div>
    <h1>My Orders</h1>
    <p>Orders content goes here</p>
  </div>
);

const Books = () => (
  <div>
    <h1>My Books</h1>
    <p>Books content goes here</p>
  </div>
);

const UserProfile = () => {
  const [activePage, setActivePage] = useState('Profile');

  const renderContent = () => {
    switch (activePage) {
      case 'Profile':
        return <Profile />;
      case 'Favourites':
        return <Favourites />;
      case 'Orders':
        return <Orders />;
      case 'Books':
        return <Books />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h3>My Dashboard</h3>
        <ul>
          <li onClick={() => setActivePage('Profile')}>My Profile</li>
          <li onClick={() => setActivePage('Favourites')}>My Favourites</li>
          <li onClick={() => setActivePage('Orders')}>My Orders</li>
          <li onClick={() => setActivePage('Books')}>My Books</li>
        </ul>
        <button className="logout-button">Logout</button>
      </div>
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;
