import "./SpecialsCard.css";
import { Link } from "react-router-dom";
import { ReactComponent as DeliveryIcon } from "../../assets/icons/moped.svg";

const SpecialsCard = ({ image, name, price, description }) => {
  return (
    <article className="specials-card">
      <img className="card-img" src={image} />
      <section className="card-info">
        <h1>{name}</h1>
        <h3>${price}</h3>
        <p>{description}</p>
        <Link>
          Order for Delievery <DeliveryIcon height="1rem" />
        </Link>
      </section>
    </article>
  );
};

export default SpecialsCard;
