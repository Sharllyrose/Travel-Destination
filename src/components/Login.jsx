
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch all users and filter by email
      const response = await fetch(`http://localhost:3000/users?email=${email}`);
      const users = await response.json();

      if (users.length === 0) {
        alert('Invalid email or password!');
        return;
      }

      // Check if password matches (not secure, see note below)
      const user = users[0];
      if (user.password === password) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Invalid email or password!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;