import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dev-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="footer-logo">&lt;code.connect/&gt;</h2>
          <p className="footer-tagline">
            The developer homepage millions of engineers open every morning to stay current, without the social media noise.
          </p>
        </div>
        <div className="footer-extensions">
          <button className="ext-btn chrome-btn">Add to Chrome</button>
          <button className="ext-btn edge-btn">Add to Edge</button>
        </div>
      </div>

      <div className="footer-links-grid">
        <div className="link-column">
          <h4>Product</h4>
          <ul>
            <li>Chrome <span className="badge">POPULAR</span></li>
            <li>Edge</li>
            <li>iOS</li>
            <li>Android</li>
            <li>All apps</li>
            <li>Status</li>
          </ul>
        </div>

        <div className="link-column">
          <h4>Community</h4>
          <ul>
            <li>Docs</li>
            <li>Open source</li>
            <li>Events</li>
            <li>Swag</li>
            <li>Wall of Love</li>
            <li>Changelog</li>
          </ul>
        </div>

        <div className="link-column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Brand</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="link-column">
          <h4>Business</h4>
          <ul>
            <li>For Advertisers</li>
            <li>For Recruiters</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;