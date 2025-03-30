import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Service from './service';
import Projects from './project';
import Contact from './contact';
import About from './About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> {/* Make sure case matches */}
        <Route path="/about" element={<About />} /> {/* Make sure case matches */}
      </Routes>
    </div>
  );
}

export default App;