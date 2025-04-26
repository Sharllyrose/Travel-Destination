
import React from 'react';
import './Header.css';

const Header = ({ user, onLoginClick, onSignupClick, onLogout }) => {
  return (
    <header>
      <div className="container">
        <h1>Travel Destination Finder</h1>
        <p>Discover your next adventure</p>
        <nav>
          {user ? (
            <div className="user-menu">
              <span>Welcome, {user.email}</span>
              <button onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button onClick={onLoginClick}>Login</button>
              <button onClick={onSignupClick}>Sign Up</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;