import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Venky Deals</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
        </div>
        <div className="nav-icons">
          <p className="nav-item">Login</p>
          <i className="icon cart"></i>
        </div>
      </div>
      <div className="nav-links">
        <p className="nav-item">MEN</p>
        <p className="nav-item">WOMEN</p>
        <p className="nav-item">KIDS</p>
        <p className="nav-item">BEAUTY</p>
        <p className="nav-item">WATCHES</p>
        <p className="nav-item">GIFTS</p>
        <p className="nav-item">BRANDS</p>
        <p className="nav-item">HOMESTOP</p>
        <p className="nav-item">STYLE HUB</p>
        <p className="nav-item highlight-red">BARGA%NS</p>
        <p className="nav-item highlight-gold">LUXE</p>
      </div>
    </nav>
  );
};

export default Navbar;
