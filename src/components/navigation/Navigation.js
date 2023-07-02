import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li>
          <Link to="/experience" className="navbar-link">Experience</Link>
        </li>
        <li>
          <Link to="/project" className="navbar-link">Project</Link>
        </li>
        <li>
          <Link to="/skills" className="navbar-link">Skills</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
