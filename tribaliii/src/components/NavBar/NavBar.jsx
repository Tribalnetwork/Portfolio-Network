import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

import logo from '../../images/triballogo.png'

const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false)
  
  return (
    <nav className="navbar">
      <Link to='/'><img className="logo" src={logo} alt='Tribaliii' /></Link>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to='/' className="home">
          <li>Home</li>
        </Link>
        <Link to='/about' className="about">
          <li>About the Community</li>
        </Link>
        <Link to='/projects' className="projects">
          <li>Community Projects</li>
        </Link>
        <Link to='/login' className="login">
          <li>Login</li>
        </Link>
        <Link to='/create' className="create">
          <li>Create Account</li>
        </Link>
      </ul>
      <button className="mobile-btn" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default NavBar;

