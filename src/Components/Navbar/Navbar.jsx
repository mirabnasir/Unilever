import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logoImage from '../../assets/logo.png'; // Adjust the path for your logo

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            {/* Navbar Content */}
            <div className="navbar-content">
                {/* Logo */}
                <img src={logoImage} alt="Logo" className="logo" />

                {/* Top actions for large screens */}
                <div className="navbar-side">
                    <div className="top-actions">
                        <span>Unilever Pakistan</span>
                        {/* Search Icon (only for large screens) */}
                        <a href="#search" className="search-icon desktop-search">
                            <span className="search-span">Search Site</span><FaSearch />
                        </a>
                    </div>

                    {/* Links for large screens */}
                    <ul className="navbar-links">
                        <li><a href="#company">Our company</a></li>
                        <li><a href="#brands">Our brands</a></li>
                        <li><a href="#sustainability">Sustainability</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#investor">Investor Relations</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#theme">Theme</a></li>
                    </ul>
                </div>

                {/* Mobile Icons */}
                <div className="mobile-icons">
                    {/* Search Icon (only for mobile screens) */}
                    <a href="#search" className="search-icon">
                        <FaSearch />
                    </a>
                    <button className="menu-button" onClick={toggleMenu}>
                        {isMenuOpen ? 
                        <>
                        <FaTimes size={20} /> 
                        <span>Close</span>
                        
                        </>
                        : 
                        <>
                        <FaBars size={20} />
                        <span>Menu</span>
                        </>}
                    </button>
                </div>
            </div>

            {/* Navbar Links for Mobile */}
            <ul className={`navbar-mobile-links ${isMenuOpen ? "open" : ""}`}>
                <li><a href="#company">Our company</a></li>
                <li><a href="#brands">Our brands</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#investor">Investor Relations</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#theme">Theme</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
