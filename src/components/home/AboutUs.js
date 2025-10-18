import "./AboutUs.css";

import AboutImageB from "../../assets/images/about-a.jpg";
import AboutImageA from "../../assets/images/about-b.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <article className="about-container">
        <section className="about-info">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </section>
        <section className="about-images">
          <img src={AboutImageA} alt="About Image 1" />
          <img src={AboutImageB} alt="About Image 2" />
        </section>
      </article>
    </div>
  );
};

export default AboutUs;
