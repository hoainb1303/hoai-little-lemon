import { render, screen, fireEvent } from "@testing-library/react";

//import { initializeTimes, updateTimes } from "./pages/Reservation";

import ReservationForm from "./components/reservation/ReservationForm";

// test("Checking initialize available times function return correctly", () => {
//   const times = initializeTimes();

//   // Check array
//   expect(Array.isArray(times)).toBe(true);

//   // Check not empty
//   expect(times.length).toBeGreaterThan(0);

//   // Check each element matches "HH:MM"
//   times.forEach((time) => {
//     expect(time).toMatch(/^\d{2}:\d{2}$/);
//   });
// });

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const dispatch = jest.fn();
const submit = jest.fn();

test("Renders the BookingForm heading", () => {
  render(
    <ReservationForm
      availableTimes={availableTimes}
      dispatchTimes={dispatch}
      submitData={submit}
    />
  );
  const headingElement = screen.getByText("Save My Spot");
  expect(headingElement).toBeInTheDocument();
});

// describe("test updateTimes reducer function", () => {
//   test("return same state when an unknown action type", () => {
//     const initialState = initializeTimes(); // Get the initial available times
//     const action = { type: "UNKNOWN_ACTION", date: "2025-02-25" }; // Unknown action

//     const result = updateTimes(initialState, action);

//     expect(result).toEqual(initialState); // Ensure state remains unchanged
//   });

//   test("should return the initialized times when UPDATE_TIMES action is dispatched", () => {
//     const mockTimes = ["17:00", "17:30", "19:30", "21:00", "21:30"];
//     const initialState = initializeTimes();
//     const action = { type: "UPDATE_TIMES", date: "2025-03-03" }; // Simulated date change

//     const result = updateTimes(initialState, action);

//     expect(result).toEqual(mockTimes); // Expect the same initialized times
//   });
// });

describe("Form Validation", () => {
  test("HTML5 Form validation ", () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatchTimes={dispatch}
        submitData={submit}
      />
    );
    const date = screen.getByLabelText(/Date/i);
    const guests = screen.getByLabelText(/Number of guests/i);

    //expect(date).toBeRequired();
    expect(date).toHaveAttribute("type", "date");
    //expect(time).toBeRequired();
    //expect(guests).toBeRequired();
    expect(guests).toHaveAttribute("type", "number");
    // expect(submitButton).toBeDisabled()
  });

  test("shows error messages with invalid data", () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatchTimes={dispatch}
        submitData={submit}
      />
    );

    const guests = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guests, { target: { value: "21" } });
    expect(
      screen.getByText("Guests must be between 1 and 20")
    ).toBeInTheDocument();
  });

  test("Check if submitData function with valid data and button is enabled after validation", async () => {
    const submitData = jest.fn();

    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatchTimes={dispatch}
        submitData={submit}
      />
    );

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-11-11" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "23:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: 3 },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "Hoai" },
    });

    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Nguyen" },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "hoai@gmail.com" },
    });

    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234567890" },
    });

    const submitButton = screen.getByText("Save My Spot");
    fireEvent.click(submitButton);

    expect(submitButton).toBeEnabled();
  });
});
