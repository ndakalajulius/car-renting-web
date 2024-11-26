import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VehicleCard from "../VehicleCard";
import "../../styles/VehicleListings.css";

const VehicleListings = () => {
  const { category } = useParams();
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch vehicles from API based on category
    fetch(`/api/vehicles?category=${category}`)
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error("Error fetching vehicles:", err));
  }, [category]);

  return (
    <div className="vehicle-listings">
      <h1>{category} Vehicles</h1>
      <div className="vehicle-grid">
        {vehicles.map((car) => (
          <VehicleCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default VehicleListings;
