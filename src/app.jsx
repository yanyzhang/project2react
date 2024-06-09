import React from "react";
import Navbar from "./navbarcomponent/navbar";
import Hero from "./herocomponent/heroimg";
import HeroButton from "./herocomponent/herobutton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./navbarcomponent/about";
import Contact from "./navbarcomponent/contact";
import Products from "./navbarcomponent/products";
import Consultation from "./herocomponent/consultation";
import Main from "./herocomponent/main";
import Footer from "./footercomponent/footer";
import "./app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<HeroButton />} />
      </Routes>
      <Hero />
      <Routes>
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
