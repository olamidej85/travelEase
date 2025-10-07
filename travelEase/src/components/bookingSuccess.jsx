import React from "react";


function BookingSuccess() {
  return (
    <div className="PB-container mt-5 text-center">
      <h2 className="text-success">🎉 Booking Successful!</h2>
      <p>Your trip is all set. You will receive an email with your itinerary.</p>
      <p>If you have any questions, contact our support team.</p>

      <img src="images/dbail.jpg" alt="Booked Package" className="img-fluid mt-3 mb-4 rounded" style={{ maxWidth: "400px" }} />

      <div className="booking-card p-3 shadow">
        <h4>Package Summary</h4>
        <p><strong>Destination:</strong> Dubai</p>
        <p><strong>Departure:</strong> 15th Dec 2025</p>
        <p><strong>Return:</strong> 22nd Dec 2025</p>
        <p><strong>Passengers:</strong> 2 Adults</p>
        <p><strong>Total Paid:</strong> $1500</p>
      </div>
    </div>
  );
}

export default BookingSuccess;
