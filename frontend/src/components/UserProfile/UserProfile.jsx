import React, { useState } from 'react';
import './UserProfile.css';
import { assets } from '../../assets/assets';

const MyProfile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: '', // Optionally manage password changes
    profileImage: user.profileImage || assets.defaultProfileImage // Assuming default profile image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImage: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., update user profile)
    console.log(formData);
    // Simulate update action or call API to update user profile
    // setShowProfile(false); // Optionally close profile after update
  };

  const handleDeleteAccount = () => {
    // Handle delete account action
    console.log('Deleting account...');
    // Show confirmation modal or perform deletion directly
  };

  return (
    <div className="my-profile">
      <h2>My Profile</h2>
      <div className="profile-container">
        <div className="profile-picture">
          <img src={formData.profileImage} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!editing}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editing}
              required
            />
          </div>
          {/* Optionally include password field */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              disabled={!editing}
              required
            />
          </div>
          <div className="button-group">
            {!editing ? (
              <>
                <button type="button" onClick={() => setEditing(true)}>
                  Edit Profile
                </button>
                <button type="button" onClick={handleDeleteAccount} className="delete-button">
                  Delete Account
                </button>
              </>
            ) : (
              <>
                <button type="submit">Save Changes</button>
                <button type="button" onClick={() => setEditing(false)}>Cancel</button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
