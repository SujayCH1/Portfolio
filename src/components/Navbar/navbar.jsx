import React, { useState } from "react";
import "./navbar.css";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navb">
            <a href="/" className="btn">Portfolio</a>
            <div 
                className="menu-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                &#9776;
            </div>
            <ul className={`btnList ${isMenuOpen ? "show" : ""}`}>
                <li>
                    <a href="#about" className="btn" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(".aboutSec").scrollIntoView({behavior: "smooth"})
                    }}>About Me</a>
                </li>
                <li>
                    <a href="#skill" className="btn" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(".skillMain").scrollIntoView({behavior: "smooth"})
                    }}>Profile</a>
                </li>
                <li>
                    <a href="#project" className="btn" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(".projectList").scrollIntoView({behavior: "smooth"})
                    }}>Projects</a>
                </li>
                <li>
                    <a href="#skill" className="btn" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(".contact-section").scrollIntoView({behavior: "smooth"})
                    }}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};
