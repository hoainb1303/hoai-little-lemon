import "./Navbar.css";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavHashLink as NavLink } from "react-router-hash-link";

import logo from "../assets/logos/logo.png";
import navBurger from "../assets/icons/bars.svg";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const scrollOffset = (e) => {
    const navbar = document.querySelector(".navbar");
    console.log(navbar?.offsetHeight);
    const yOffset = -1 * navbar?.offsetHeight || 0;
    const y = e.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-container">
        <div className="responsive">
          <NavLink smooth to="/#action" scroll={scrollOffset}>
            <img className="nav-image" src={logo} alt="Little Lemon Logo" />
          </NavLink>

          <img
            className="nav-burger"
            src={navBurger}
            alt="navigator menu icon"
            onClick={toggleMenu}
          />
        </div>
        <ul className={`nav-menu ${menuToggle ? "nav-open" : "nav-close"}`}>
          <li>
            <NavLink smooth to="/#action" scroll={scrollOffset}>
              Home
            </NavLink>
          </li>
          <li>
            <Link smooth to="/#about-us" scroll={scrollOffset}>
              About
            </Link>
          </li>
          <li>
            <Link smooth to="/#specials" scroll={scrollOffset}>
              Menu
            </Link>
          </li>
          <li>
            <NavLink to="/reservation#reservation" scroll={scrollOffset}>
              Reservations
            </NavLink>
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
