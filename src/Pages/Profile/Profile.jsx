import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profileImage, setProfileImage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      {/* Top Main Card */}
      <div className="profile-top-card">
        <label htmlFor="profile-upload" className="profile-avatar-circle" title="Click to upload image">
          {profileImage ? (
            <img src={profileImage} alt="Profile" />
          ) : (
            <span>Profile<br/>Bitmoji</span>
          )}
        </label>
        <input 
          type="file" 
          id="profile-upload" 
          accept="image/*"
          onChange={handleImageUpload} 
          style={{ display: 'none' }} 
        />
        
        <div className="profile-info">
          <h2>Ruhani (Dev Intern)</h2>
          <p>📧 ruhani@codeconnect.com</p>
        </div>
      </div>

      {/* Grid Cards for Details */}
      <div className="profile-grid">
        <div className="profile-card">
          <h3>🎓 Education</h3>
          <p>BCA Student</p>
          <p>Mohali Tech Institute</p>
        </div>
        <div className="profile-card">
          <h3>💼 Experience</h3>
          <p>45 Days Frontend Internship</p>
          <p>Specializing in React & UI/UX</p>
        </div>
        <div className="profile-card">
          <h3>💻 Currently Working On</h3>
          <p>code.connect - The Developer Social Hub</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;