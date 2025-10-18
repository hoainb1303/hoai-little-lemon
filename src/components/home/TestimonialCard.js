import "./TestimonialCard.css";
import { ReactComponent as SolidStar } from "../../assets/icons/star-solid.svg";
import { ReactComponent as RegularStar } from "../../assets/icons/star.svg";

const TestimonialCard = ({ name, stars, comment }) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars">
        {Array.from({ length: stars }).map((_, i) => (
          <SolidStar className="star-solid" key={i} />
        ))}
        {Array.from({ length: 5 - stars }).map((_, i) => (
          <RegularStar className="star-regular" key={i} />
        ))}
      </div>
      <p className="testimonial-comment">{comment}</p>
      <h1 className="testimonial-name">{name}</h1>
    </article>
  );
};

export default TestimonialCard;
