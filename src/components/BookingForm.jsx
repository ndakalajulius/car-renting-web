import React, { useState } from "react";
import axios from "axios";
import "../styles/BookingForm.css";

const BookingForm = ({ vehicle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { ...formData, vehicleId: vehicle.id };

    axios
      .post("/api/bookings", bookingData)
      .then(() => {
        setSuccessMessage("Booking successful!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          startDate: "",
          endDate: "",
        });
      })
      .catch((error) => {
        console.error("Booking failed:", error);
        alert("An error occurred while processing your booking.");
      });
  };

  return (
    <div className="booking-form-container">
      <h2>Book {vehicle.name}</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="booking-button">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
