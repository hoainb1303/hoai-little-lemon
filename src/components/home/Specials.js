import { HashLink as Link } from "react-router-hash-link";
import "./Specials.css";
import SpecialsCard from "./SpecialsCard";
import GreekSalad from "../../assets/images/greek-salad.jpg";
import Bruschetta from "../../assets/images/bruschetta.jpg";
import LemonDessert from "../../assets/images/lemon-dessert.jpg";

const Specials = () => {
  return (
    <div id="specials" className="specials">
      <article className="specials-container">
        <section className="specials-top">
          <h1>This weeks specials!</h1>
          <Link smooth className="button-online-menu" to="/#specials">
            Online Menu
          </Link>
        </section>
        <section className="specials-list">
          <SpecialsCard
            image={GreekSalad}
            name="Greek Salad"
            price="16.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          />
          <SpecialsCard
            image={Bruschetta}
            name="Bruschetta"
            price="5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          />
          <SpecialsCard
            image={LemonDessert}
            name="Lemon Dessert"
            price="5.00"
            description="This comes straight from grandma's recipt book, every last ingredient has been sourced and is as authentic as can be imagined."
          />
        </section>
      </article>
    </div>
  );
};

export default Specials;
