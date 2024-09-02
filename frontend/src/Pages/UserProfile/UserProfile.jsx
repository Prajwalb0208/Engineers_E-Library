import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoriteContext } from '../../context/FavoriteContext';
import './UserProfile.css'

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

const Favourites = () => {
  const { favoriteBooks, removeFromFavorites } = useContext(FavoriteContext);
  return (
    <div>
      <h1>My Favourites</h1>
      {favoriteBooks.length > 0 ? (
        <ul>
          {favoriteBooks.map(book => (
            <li key={book._id}>
              {book.name}
              <button onClick={() => removeFromFavorites(book._id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourites yet!</p>
      )}
    </div>
  );
};

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

const UserProfile = ({ isLoggedIn, setIsLoggedIn }) => {
  const [activePage, setActivePage] = useState('Profile');
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

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
    <div className="user-profile">
      <div className="sidebar">
        <h2>User Profile</h2>
        <ul>
          <li onClick={() => setActivePage('Profile')}>Profile</li>
          <li onClick={() => setActivePage('Favourites')}>Favourites</li>
          <li onClick={() => setActivePage('Orders')}>Orders</li>
          <li onClick={() => setActivePage('Books')}>Books</li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;
