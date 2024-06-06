import React from "react";
import Navbar from "./navbar";
import Hero from "./heroimg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Homepage from "./homepage";
import Footer from "./footer";
import "./app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
