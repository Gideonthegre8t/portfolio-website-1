import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
  };

  return (
    <div className="navigator">
      <nav className="navbar links" id={showLinks ? "hidden" : ""}>
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
      </nav>
      <button onClick={() => setShowLinks(!showLinks)} className="nav-btn">
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
