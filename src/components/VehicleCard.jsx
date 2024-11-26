import React from "react";
import { Link } from "react-router-dom";
import "../../styles/VehicleCard.css";

const VehicleCard = ({ car }) => {
  return (
    <div className="vehicle-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>Price per day: ${car.pricePerDay}</p>
      <Link to={`/vehicles/details/${car.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default VehicleCard;
