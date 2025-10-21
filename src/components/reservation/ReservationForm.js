import "./ReservationForm.css";

import { useState, useEffect } from "react";

const ReservationForm = ({ availableTimes, dispatchTimes, submitData }) => {
  const today = new Date().toLocaleDateString("en-CA").split("T")[0];

  // const [occasion, setOccasion] = useState("");
  // const [guests, setGuests] = useState(1);
  // const [date, setDate] = useState(today);
  // const [time, setTime] = useState("");
  // const [comment, setComment] = useState("");

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  // Use one single useState for all input data
  const [formData, setFormData] = useState({
    date: today,
    time: "",
    guests: 1,
    occasion: "",
    comment: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Also use one single useState for all input error
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "guests": {
        return parseInt(value) > 0
          ? parseInt(value) < 21
            ? ""
            : "Guests should be from 1 to 20"
          : "Guests should be from 1 to 20";
      }
      case "firstName": {
        if (value === "") {
          return "Please type your first name";
        } else if (value.length > 20) {
          return "Should be less than 20 chars";
        } else {
          return "";
        }
      }
      case "lastName": {
        if (value === "") {
          return "Please type your last name";
        } else if (value.length > 20) {
          return "Should be less than 20 chars";
        } else {
          return "";
        }
      }
      case "email": {
        if (value === "") {
          return "Please type your email";
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false) {
          return "Invalid email";
        }
        return "";
      }
      case "phone": {
        if (value === "") {
          return "Please type your phone number";
        }
        return "";
      }
      default:
        return "";
    }
  };

  const isValidated = () => {
    if (errors["time"] === undefined) return false;
    if (errors["guests"] !== "" && errors["guests"] !== undefined) return false;
    if (errors["firstName"] !== "") return false;
    if (errors["lastName"] !== "") return false;
    if (errors["email"] !== "") return false;
    if (errors["phone"] !== "") return false;
    return true;
  };

  // run once
  useEffect(() => {
    isValidated();
  }, []);

  const handleChange = (e) => {
    // remember to name your input same as formData useState
    let { name, value } = e.target;

    // fetch new availableTimes when date change
    if (name === "date") {
      const newDate = e.target.value;
      dispatchTimes({ type: "update_times", date: newDate });
    }

    if (name === "guests") {
      value = value.replace(/[^0-9]/g, "");
    }

    if (["comment", "firstName", "lastName", "email"].includes(name)) {
      value = value.replace(/[\[\]"<>;{}'`\/^]/g, "", "");
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ formData });
  };

  return (
    <form className="reservation-form" onSubmit={handleFormSubmit}>
      <h1 className="form-title">Reserve a Table</h1>
      <p className="form-subtitle">
        Please fill in and submit form to book your reservation at Little Lemon.
      </p>
      {/* Date form */}
      <section className="form-date">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          min={today}
          value={formData.date}
          onChange={handleChange}
        ></input>
        <span className="error-message">{errors["date"]}</span>
      </section>
      {/* Time form */}
      <section className="form-time">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          placeholder="Select a time"
          value={formData.time}
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Select your time
          </option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <span className="error-message">{errors["time"]}</span>
      </section>

      {/* Guest form */}
      <section className="form-guests">
        <label
          className={
            errors["guests"] !== undefined && errors["guests"] !== "" && "error"
          }
          htmlFor="guests"
        >
          Number of guests
        </label>
        <input
          className={
            errors["guests"] !== undefined && errors["guests"] !== "" && "error"
          }
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        ></input>
        <span className="error-message">{errors["guests"]}</span>
      </section>

      {/* Occasion form */}
      <section className="form-occasion">
        <label htmlFor="occasion">
          Occasion <em>(optional)</em>
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="" disabled selected hidden>
            Select an occasion
          </option>
          {["None", "Birthday", "Anniversary", "Engagement", "Other"].map(
            (t) => (
              <option key={t} value={t}>
                {t}
              </option>
            )
          )}
        </select>
        <span className="error-message">{errors["occasion"]}</span>
      </section>

      {/* Comment form */}
      <section className="form-comment">
        <label htmlFor="comment">
          Special instruction <em>(optional)</em>
        </label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Let us know if you have any special needs or preferences"
          maxLength={1000}
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
        <span className="error-message">{errors["comment"]}</span>
      </section>

      {/* First name form */}
      <section className="form-first-name">
        <label
          className={
            errors["firstName"] !== undefined &&
            errors["firstName"] !== "" &&
            "error"
          }
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          className={
            errors["firstName"] !== undefined &&
            errors["firstName"] !== "" &&
            "error"
          }
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Your first name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <span className="error-message">{errors["firstName"]}</span>
      </section>
      {/* Last name form */}
      <section className="form-last-name">
        <label
          className={
            errors["lastName"] !== undefined &&
            errors["lastName"] !== "" &&
            "error"
          }
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          className={
            errors["lastName"] !== undefined &&
            errors["lastName"] !== "" &&
            "error"
          }
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Your last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <span className="error-message">{errors["lastName"]}</span>
      </section>

      {/* Email form */}
      <section className="form-email">
        <label
          className={
            errors["email"] !== undefined && errors["email"] !== "" && "error"
          }
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={
            errors["email"] !== undefined && errors["email"] !== "" && "error"
          }
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error-message">{errors["email"]}</span>
      </section>

      {/* Phone form */}
      <section className="form-phone">
        <label
          className={
            errors["phone"] !== undefined && errors["phone"] !== "" && "error"
          }
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          className={
            errors["phone"] !== undefined && errors["phone"] !== "" && "error"
          }
          type="number"
          id="phone"
          name="phone"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <span className="error-message">{errors["phone"]}</span>
      </section>
      <button className="submit-button" type="submit" disabled={!isValidated()}>
        Save My Spot
      </button>
    </form>
  );
};

export default ReservationForm;
