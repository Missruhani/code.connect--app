import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <div className="explore-container">
      <div className="explore-header">
        <h2>🌍 Explore</h2>
        <p>Discover trending code snippets, developers, and projects.</p>
      </div>
      
      <div className="explore-grid">
        {/* Placeholder cards for the Explore UI */}
        <div className="explore-card">
          <h3>#React19</h3>
          <p>See what developers are building with the latest hooks.</p>
          <button className="explore-btn">View Topic</button>
        </div>
        
        <div className="explore-card">
          <h3>#TailwindCSS</h3>
          <p>Top UI components and styling tricks this week.</p>
          <button className="explore-btn">View Topic</button>
        </div>

        <div className="explore-card">
          <h3>Trending Snippets</h3>
          <p>The most copied utility functions in the last 24 hours.</p>
          <button className="explore-btn">View Topic</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;