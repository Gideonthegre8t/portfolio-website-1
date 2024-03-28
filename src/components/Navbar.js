import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setShowLinks(false); // Close the navbar after clicking a link
  };

  return (
    <div className="navigator">
      <nav className="navbar links" id={showLinks ? "hidden" : ""}>
        <a href="/#" onClick={(e) => handleClick (e, "home")}>
          HOME
        </a>
        <a href="/#" onClick={(e) => handleClick (e, "about")}>
          ABOUT
        </a>
        <a href="/#" onClick={(e) => handleClick (e, "professional")}>
          PROFESSIONAL
        </a>
        <a href="/#" onClick={(e) => handleClick (e, "services")}>
          SERVICES
        </a>
        <a href="/#" onClick={(e) => handleClick (e, "team")}>
         TEAM
        </a>
      </nav>
      <button onClick={() => setShowLinks(!showLinks)} className="nav-btn">
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
