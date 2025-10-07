import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function BookFlight() {
  const location = useLocation();
  const { arrival = "", price = 500 } = location.state || {};

  const [passengers, setPassengers] = useState(1);
  const [names, setNames] = useState([""]);

const navigate = useNavigate();

  const handleConfirmBooking = () => {
    navigate("/paymentPage");
  };

  useEffect(() => {
    setNames(Array(passengers).fill(""));
  }, [passengers]);

  const handleNameChange = (index, value) => {
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!");
  };

  return (
    <div className="booking-page">
      <h1>Book Your Flight</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Departure:
          <input type="text" placeholder="Enter departure city/airport" required />
        </label>

        <label>
          Arrival:
          <input type="text" value={arrival} readOnly />
        </label>

        <label>
          Departure Date:
          <input type="date" required />
        </label>

        <label>
          Return Date:
          <input type="date" />
        </label>

        <label>
          Passengers:
          <input
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            required
          />
        </label>

        {names.map((name, index) => (
          <label key={index}>
            Passenger {index + 1} Name:
            <input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder="Enter full name"
              required
            />
          </label>
        ))}

        <label>
          Email:
          <input type="email" placeholder="Enter email" required />
        </label>

        <label>
          Phone Number:
          <input type="tel" placeholder="Enter phone number" required />
        </label>

        <label>
          Price per passenger: <strong>${price}</strong>
        </label>

        <label>
          Total Amount: <strong>${price * passengers}</strong>
        </label>

        <button type="button" className="btn btn-primary" onClick={handleConfirmBooking}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
