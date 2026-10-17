import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // In a real app, you would send this to a database.
    // For now, we will just redirect to the login page after "signing up".
    if (username && password) {
      alert(`Account created for ${username}! Please log in.`);
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Join &lt;code.connect/&gt;</h2>
        <p className="signup-subtitle">Create your developer account.</p>
        
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="e.g., dev_ruhani" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-submit-btn">Sign Up</button>
        </form>
        
        <p className="login-prompt">
          Already have an account? <Link to="/login" className="highlight">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;