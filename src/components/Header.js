import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Keyupdates</div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#new">New</a></li>
          <li><a href="#markets">Markets</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
