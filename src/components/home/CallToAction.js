import "./CallToAction.css";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero.jpg";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <article className="hero">
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="subsection">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <Link className="action-button" to="/reservations">
            Reserve a table
          </Link>
        </section>
        <section className="hero-image">
          <img src={heroImage} alt="Little Lemon restaurant cuisine"></img>
        </section>
      </article>
    </div>
  );
};

export default CallToAction;
