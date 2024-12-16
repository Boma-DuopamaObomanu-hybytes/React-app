import React from 'react'
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className="Navbar">
    <div>
      <p className="Navbar-text">INANCE</p>
    </div>
    <div className="Navbar-sidebar">
      <ul className="Navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>{" "}
        {/* Updated here */}
      </ul>
    </div>
  </div>

  )
}
