import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/vehicleDetails.css';

const VehicleDetails = () => {
  const { vehicleId } = useParams(); // Get vehicleId from URL
  const [vehicle, setVehicle] = useState(null);

  // Fetch vehicle details based on vehicleId
  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch(`http://localhost:5000/api/vehicles/${vehicleId}`);
        const data = await response.json();
        
        // Update state with fetched vehicle data
        setVehicle(data);
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
      }
    };

    fetchVehicleDetails();
  }, [vehicleId]);

  // Check if vehicle data is loaded
  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vehicle-details-container">
      <h1>Vehicle Details</h1>
      <div className="vehicle-info">
        <img src={vehicle.imageUrl} alt={vehicle.make} className="vehicle-image" />
        <div className="vehicle-details">
          <h2>{vehicle.make} {vehicle.model} ({vehicle.year})</h2>
          <p><strong>Price per day:</strong> ${vehicle.pricePerDay}</p>
          <p><strong>Status:</strong> {vehicle.isAvailable ? 'Available' : 'Not Available'}</p>
          <p><strong>Description:</strong> {vehicle.description}</p>
        </div>
      </div>
      <button className="btn-rent">Rent Now</button>
    </div>
  );
};

export default VehicleDetails;
