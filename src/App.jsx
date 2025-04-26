

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DestinationGrid from "./components/DestinationGrid";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";


                        

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  
  useEffect(() => {
    // Check if user is stored in session storage on component mount
    const saved = sessionStorage.getItem("currentUser");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (userData) => {
    // Save user data to session storage and update state
    sessionStorage.setItem("currentUser", JSON.stringify(userData));
    setUser(userData);
    setShowLogin(false);
  };

  const handleSignup = (userData) => {
    // After successful signup, automatically log in
    sessionStorage.setItem("currentUser", JSON.stringify(userData));
    setUser(userData);
    setShowSignup(false);
  };

  const handleLogout = () => {
    // Clear user data from session storage and state
    sessionStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <>
      <Header 
        user={user} 
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
        onLogout={handleLogout}
      />
      
      {/* Conditionally render login/signup forms */}
      {showLogin && (
        <Login 
          onLogin={handleLogin} 
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}
      
      {showSignup && (
        <Signup 
          onSignup={handleSignup} 
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
      
      <DestinationGrid />
      <Footer />
    </>
  );
}

export default App;