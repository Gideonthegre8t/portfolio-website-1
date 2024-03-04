import { useRef, useState } from "react";

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
    <div className="navigator">
      <nav className="navbar" ref={navRef}>
        <a href="/#" onClick={handleClick}>HOME</a>
        <a href="/#" onClick={handleClick}>CLIENTS</a>
        <a href="/#" onClick={handleClick}>PARTNERS</a>
        <a href="/#" onClick={handleClick}>SERVICES</a>
        <a href="/#" onClick={handleClick}>CONTACT</a>
        {isNavOpen ? (
          <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        ) : (
          <button className="nav-btn" onClick={toggleNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
