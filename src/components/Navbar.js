import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarStyles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="app-title">VerifyInfluencers</h2>
      </div>
      <div className="navbar-right">
        <Link to="/">Leaderboard</Link>
        <Link to="/research">Research</Link>
      </div>
    </nav>
  );
}

export default Navbar;
