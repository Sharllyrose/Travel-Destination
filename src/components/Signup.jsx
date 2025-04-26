
import React, { useState } from 'react';
import './signup.css';

function Signup({ onSignup, onClose, onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const user = await response.json();
      onSignup(user); // Call onSignup prop to handle user data
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup error:', error.message);
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <button type="button" className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{' '}
          <a href="#" onClick={onSwitchToLogin}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signup;