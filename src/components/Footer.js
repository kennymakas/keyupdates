import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Keyupdates. All rights reserved.</p>
        <div className="social-links">
          <a href="#facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
