import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navigator ">
      <nav className="navbar" ref={navRef}>
        <a href="/#">HOME</a>
        <a href="/#">CLIENTS</a>
        <a href="/#">PARTNERS</a>
        <a href="/#">SERVICES</a>
        <a href="/#">CONTACT</a>
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
