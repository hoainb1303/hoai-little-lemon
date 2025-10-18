const ReservationForm = (props) => {
  return (
    <form className="reservation-form">
      <h1>Reserve a Table</h1>
      <p>
        Please fill in and submit form to book your reservation at Little Lemon.
      </p>
      <section>
        <label>First Name:</label>
        <input></input>
      </section>
      <section>
        <label>Last Name:</label>
        <input></input>
      </section>
    </form>
  );
};

export default ReservationForm;
