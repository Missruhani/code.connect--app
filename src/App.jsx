import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Dashboardsidebar from './components/sidebar/Dashboardsidebar'; 
import Footer from './components/Footer/Footer';

// Pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import CreatePost from './Pages/CreatePost/CreatePost';
import Profile from './Pages/Profile/Profile';
import Explore from './Pages/Explore/Explore';
import Settings from './Pages/Settings/Settings';
import CurrentTopics from './Pages/CurrentTopics/CurrentTopics';
import GenericPage from './Pages/GenericPage/GenericPage';

// Global Styles
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="app-container">
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        
        <div className="main-layout">
          {/* Dashboard Sidebar is rendered here on the left */}
          <Dashboardsidebar /> 
          
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/topics" element={<CurrentTopics />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> 
              <Route path="/p/:id" element={<GenericPage />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;