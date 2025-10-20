import { useReducer } from "react";
import { fetchAPI } from "../api";
import "./Reservation.css";

import ReservationForm from "../components/reservation/ReservationForm";

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "update_times":
      // create a new date variable from date that provided
      const date = new Date(action.date);
      // send the date to API and API will provide the available times of that date
      const newTimes = fetchAPI(date);
      console.log({ newTimes });
      // return the new available times array
      return newTimes;
    default:
      return state;
  }
};

const Reservation = () => {
  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <section className="reservation">
      <div className="reservation-container">
        <section className="reservation-text">
          <h1>Experience the perfect balance of tradition and luxury.</h1>
          <p>
            At Little Lemon, we take great pride in providing our customers with
            the greatest luxurious experience with a touch of <em>tradition</em>
            .
          </p>
        </section>
        <ReservationForm
          availableTimes={availableTimes}
          dispatchTimes={dispatchTimes}
        />
      </div>
    </section>
  );
};

export default Reservation;
