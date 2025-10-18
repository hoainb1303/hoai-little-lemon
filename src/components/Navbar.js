import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logos/logo.png";
import navBurger from "../assets/icons/bars.svg";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="responsive">
          <img className="nav-image" src={logo} alt="Little Lemon Logo" />
          <img
            className="nav-burger"
            src={navBurger}
            alt="navigator menu icon"
            onClick={toggleMenu}
          />
        </div>
        <ul className={`nav-menu ${menuToggle ? "nav-open" : "nav-close"}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
