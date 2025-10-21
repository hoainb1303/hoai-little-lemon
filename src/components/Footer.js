import { HashLink as Link } from "react-router-hash-link";

import "./Footer.css";
import FooterLogo from "../assets/logos/footer-logo.png";
import { ReactComponent as Facebook } from "../assets/icons/facebook-f.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Tiktok } from "../assets/icons/tiktok.svg";

const scrollOffset = (e) => {
  const navbar = document.querySelector(".navbar");
  console.log(navbar?.offsetHeight);
  const yOffset = -1 * navbar?.offsetHeight || 0;
  const y = e.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Little Lemon Footer Logo" />
        </div>
        <section className="footer-navigation">
          <h1>Navigation</h1>
          <Link smooth to={"/#action"} scroll={scrollOffset}>
            Home
          </Link>
          <Link smooth to={"/#about-us"} scroll={scrollOffset}>
            About
          </Link>
          <Link smooth to={"/#specials"} scroll={scrollOffset}>
            Menu
          </Link>
          <Link smooth to={"/reservation#reservation"} scroll={scrollOffset}>
            Reservations
          </Link>
        </section>
        <section className="footer-contacts">
          <h1>Contacts</h1>
          <p>+1(123)456-7890</p>
          <p>info@littlelemon.com</p>
          <p>123 Ford Blvd, Chicago, IL, 60618</p>
        </section>
        <section className="footer-socials">
          <h1>Socials</h1>
          <Link>
            <Facebook className="socials-icon" /> Facebook
          </Link>
          <Link>
            <Instagram className="socials-icon" /> Instagram
          </Link>
          <Link>
            <Tiktok className="socials-icon" /> Tiktok
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
