

import React, { useState } from "react";

function Signup({ onSignup }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newUser) => {
        //this is for storing it in the session 

        sessionStorage.setItem("currentUser", JSON.stringify(newUser));
        onSignup(newUser);
      })
      .catch((err) => {
        console.error("Signup failed:", err);
        alert("Signup failed. Please check your connection or try again later.");
      }) ;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
      <button type="submit">Create Account</button>
    </form>
  );
}

export default Signup;