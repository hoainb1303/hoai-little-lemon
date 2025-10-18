import { Link } from "react-router-dom";

import "./Footer.css";
import FooterLogo from "../assets/logos/footer-logo.png";
import { ReactComponent as Facebook } from "../assets/icons/facebook-f.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Tiktok } from "../assets/icons/tiktok.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Little Lemon Footer Logo" />
        </div>
        <section className="footer-navigation">
          <h1>Navigation</h1>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Menu</Link>
          <Link>Reservations</Link>
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
