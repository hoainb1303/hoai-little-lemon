import "./Testimonials.css";
import testimonialsData from "../../data/testimonials.json";

import TestimonialsCard from "./TestimonialCard";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <article className="testimonials-container">
        <h1 className="testimonials-title">Testimonials</h1>
        <section className="testimonials-list">
          {testimonialsData.map((testimonial, i) => (
            <TestimonialsCard
              key={i}
              name={testimonial.name}
              stars={testimonial.stars}
              comment={testimonial.comment}
            ></TestimonialsCard>
          ))}
        </section>
      </article>
    </div>
  );
};

export default Testimonials;
