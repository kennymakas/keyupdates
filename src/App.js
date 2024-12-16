// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CampusNews from './pages/CampusNews';
import About from './pages/About';
import Contact from './pages/Contact';
<<<<<<< HEAD
=======
import Newscomponent from './pages/Newscomponent'
>>>>>>> 255e76c54f28f13c8d7aa25f83c08586e2037130

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campus-news" element={<CampusNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
