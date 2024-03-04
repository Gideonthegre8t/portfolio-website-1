import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
  };

  return (
    <div className="navigator ">
      <nav className="navbar" ref={navRef}>
        <a href="/#" onClick={handleClick}>HOME</a>
        <a href="/#" onClick={handleClick}>CLIENTS</a>
        <a href="/#" onClick={handleClick}>PARTNERS</a>
        <a href="/#" onClick={handleClick}>SERVICES</a>
        <a href="/#" onClick={handleClick}>CONTACT</a>
        {isNavOpen ? (
          <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
            <FaTimes />
          </button>
        ) : (
          <button className="nav-btn" onClick={toggleNavbar}>
            <FaBars />
          </button>
        )}
      </nav>
    </div>
  );
}
export default Navbar;
