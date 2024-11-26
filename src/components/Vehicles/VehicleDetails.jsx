import React from "react";
import BookingForm from '../BookingForm';
// import "../styles/VehicleDetails.css"; // Optional for additional styling

const VehicleDetails = ({ vehicle }) => {
  return (
    <div className="vehicle-details-container">
      <h1>{vehicle.name}</h1>
      <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
      <p>Price per day: ${vehicle.pricePerDay}</p>
      <p>{vehicle.description}</p>
      <BookingForm vehicle={vehicle} />
    </div>
  );
};

export default VehicleDetails;
