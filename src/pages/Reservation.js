import { fetchAPI } from "../api";
import ReservationForm from "../components/reservation/ReservationForm";

const Reservation = () => {
  const date = fetchAPI(new Date());
  return (
    <section className="reservation">
      <section className="reservation-text">
        <h1>Experience the perfect balance of tradition and luxury.</h1>
        <p>
          At Little Lemon, we take great pride in providing our customers with
          the greatest luxurious experience with a touch of <em>tradition</em>.
        </p>
      </section>
      <ReservationForm />
    </section>
  );
};

export default Reservation;
