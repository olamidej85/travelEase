import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/bookingSuccess");
  };

  return (
    <div className="PB-container mt-5">
      <h2>Payment</h2>
      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label>Payment Method</label>
          <select className="form-control">
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Card Number</label>
          <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="row">
          <div className="col">
            <label>Expiry Date</label>
            <input type="text" className="form-control" placeholder="MM/YY" />
          </div>
          <div className="col">
            <label>CVV</label>
            <input type="text" className="form-control" placeholder="123" />
          </div>
        </div>
        <div className="mb-3 mt-3">
          <label>Cardholder Name</label>
          <input type="text" className="form-control" placeholder="John Doe" />
        </div>
        <button type="submit" className="btn-PB btn-success w-100">
          Make Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
