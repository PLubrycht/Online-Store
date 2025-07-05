import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  
  const closeMenu = () => {
    setIsOpen(false);
  };

  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">MyStore</h1>

      <button
        className="hamburger"
        onClick={toggleMenu}
        ref={hamburgerRef}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul
        className={`nav-links ${isOpen ? "open" : ""}`}
        ref={menuRef}
      >
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Produkty</Link></li>
        <li><Link to="/cart" onClick={closeMenu}>Koszyk</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
