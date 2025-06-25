import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">MyStore</h1>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produkty</Link></li>
        <li><Link to="/cart">Koszyk</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
