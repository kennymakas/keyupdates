// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        {/* Social Media Links */}
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-white">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
        {/* Footer Text */}
        <div className="mt-3">
          <p>&copy; 2024 KeyUpdates. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
