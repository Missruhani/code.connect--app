import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to &lt;code.connect/&gt;</h2>
        <p className="login-subtitle">The developer social hub.</p>
        
        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="dev@example.com" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <button type="button" className="login-btn">Log In</button>
        </form>
        
        <p className="signup-prompt">
          Don't have an account? <span className="highlight">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;