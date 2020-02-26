import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/default.svg';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navBarContainer">
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <Router>
          <Link to="#">Home</Link>
          <Link to="#">Projects</Link>
          <Link to="#">About Me</Link>
        </Router>
      </div>
    </div>
  );
}

export default NavBar;
