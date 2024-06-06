import React from "react";
import Navbar from "./navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Homepage from "./homepage";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
        </Router>
    );
}

export default App;