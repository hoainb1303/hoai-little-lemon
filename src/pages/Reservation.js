import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";
import "./Reservation.css";

import ReservationForm from "../components/reservation/ReservationForm";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
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
  const navigate = useNavigate();

  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate("/reservation-confirm");
      window.scrollTo(0, 0);
    }
  };

  return (
    <section id="reservation" className="reservation">
      <div className="reservation-container">
        <section className="reservation-text">
          <h1>Experience the perfect balance of tradition and luxury.</h1>
          <p>
            At Little Lemon, we take great pride in providing our customers with
            the greatest luxurious experience with a touch of tradition.
          </p>
        </section>
        <ReservationForm
          availableTimes={availableTimes}
          dispatchTimes={dispatchTimes}
          submitData={submitData}
        />
      </div>
    </section>
  );
};

export default Reservation;
