import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Moon, Sun, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ toggleTheme, currentTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">&lt;code.connect/&gt;</Link>
        
        <div className="nav-links">
          <Link to="/explore" className="nav-item">
            Explore <ChevronDown size={16} />
          </Link>
          <Link to="/" className="nav-item">
            Feed <ChevronDown size={16} />
          </Link>
          <Link to="/create" className="nav-item">
            Create Post <ChevronDown size={16} />
          </Link>
        </div>
      </div>

      <div className="nav-center">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search code, posts..." />
        </div>
      </div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Link to="/login" className="btn-login">Log In</Link>
        <Link to="/signup" className="btn-signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;