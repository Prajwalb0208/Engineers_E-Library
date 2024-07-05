import React, { useState } from 'react';
import './UserProfile.css';

const Profile = () => (
  <div>
    <h1>My Profile</h1>
    <p>Profile content goes here...</p>
  </div>
);

const Favourites = () => (
  <div>
    <h1>My Favourites</h1>
    <p>Favourites content goes here...</p>
  </div>
);

const Orders = () => (
  <div>
    <h1>My Orders</h1>
    <p>Orders content goes here...</p>
  </div>
);

const Books = () => (
  <div>
    <h1>My Books</h1>
    <p>Books content goes here...</p>
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
        <h2>My Dashboard</h2>
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
