import React from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
  const menuItems = [
    { name: "User Profile", path: "/profile" },
    { name: "Current Topics", path: "/topics" },
    { name: "Public signals", path: "/p/public-signals" },
    { name: "New squad", path: "/p/new-squad" },
    { name: "Discover", path: "/p/discover" },
    { name: "Community", path: "/p/community" },
    { name: "Tags", path: "/p/tags" },
    { name: "Sources", path: "/p/sources" },
    { name: "Leader board", path: "/p/leaderboard" },
    { name: "Settings", path: "/settings" }
  ];

  return (
    <aside className="dashboard-sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DashboardSidebar;