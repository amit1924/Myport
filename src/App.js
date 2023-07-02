import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import VV from'./vv.mp4'

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
   
      <video className="video-background" autoPlay loop muted>
        <source src={VV} type="video/mp4" />
      </video>
    
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
