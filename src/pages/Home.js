import "./Home.css";

import CallToAction from "../components/home/CallToAction";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";
import AboutUs from "../components/home/AboutUs";

const Home = () => {
  return (
    <div className="home">
      <CallToAction />
      <Specials />
      <Testimonials />
      <AboutUs />
    </div>
  );
};

export default Home;
