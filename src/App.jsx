import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DestinationGrid from "./components/DestinationGrid";
import DestinationForm from "./components/DestinationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DestinationGrid />} />
        <Route path="/add-destination" element={<DestinationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
