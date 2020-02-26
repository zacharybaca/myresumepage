import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navBarContainer">
      <div id="logo">
        <h1>Zachary Baca</h1>
        <div className="navbar">
          <Router>
            <Link to="#">Home</Link>
            <Link to="#">Projects</Link>
            <Link to="#">About Me</Link>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
