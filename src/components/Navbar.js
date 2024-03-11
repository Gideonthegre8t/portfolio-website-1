import React, { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
  };

  // Add the 'responsive_nav' class by default
  useEffect(() => {
    navRef.current.classList.add("responsive_nav");
  }, []);

  return (
    <div className="navigator">
      <nav className="navbar" ref={navRef}>
        <a href="/#" onClick={handleClick}>
          HOME
        </a>
        <a href="/#" onClick={handleClick}>
          CLIENTS
        </a>
        <a href="/#" onClick={handleClick}>
          PARTNERS
        </a>
        <a href="/#" onClick={handleClick}>
          SERVICES
        </a>
        <a href="/#" onClick={handleClick}>
          CONTACT
        </a>

        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>

        <button className="nav-btn" onClick={toggleNavbar}>
          <FaBars />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
