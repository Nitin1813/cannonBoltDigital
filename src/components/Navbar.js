// client/src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../Images/logo1.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger style change when scrolling 50px down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
    <div className="navbar-title">
      Cannonbolt Digital
    </div>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Cannonbolt Digital Logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="offers" smooth={true} duration={500}>Offers</ScrollLink></li>
        <li><ScrollLink to="OurServices" smooth={true} duration={500}>Services</ScrollLink></li>
        <li><ScrollLink to="ContactUS" smooth={true} duration={500}>Contact</ScrollLink></li>
        <li><RouterLink to="/admin">Admin</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
