
import React, { useState } from "react";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/users=${formData.username}`)
      .then((res) => res.json())
      .then((users) => {
        const user = users[0];
        if (user && user.password === formData.password) {
          sessionStorage.setItem("currentUser", JSON.stringify(user));
          onLogin(user);
        } else {
          setError("Invalid username or password");
        }
      })
      .catch((err) => {
        console.error("Login failed:", err);
        setError("Login failed. Please check your connection or try again later.");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;