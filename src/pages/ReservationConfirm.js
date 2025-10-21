import { ReactComponent as CheckIcon } from "../assets/icons/badge-check.svg";

const ReservationConfirm = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        padding: "10rem 1rem",
        alignItems: "center",
        backgroundColor: "#495e57",
      }}
    >
      <CheckIcon
        style={{
          height: "5rem",
          color: "#f4ce14",
        }}
      />
      <h1
        style={{
          color: "white",
          margin: "0",
          fontSize: "1.3rem",
        }}
      >
        Your table has been reserved!
      </h1>
      <p
        style={{
          color: "white",
          margin: "0",
          fontSize: "0.8rem",
        }}
      >
        You'll receive a confirmation email with all the details.
      </p>
    </section>
  );
};

export default ReservationConfirm;
