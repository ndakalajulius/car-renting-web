import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/vehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Available Vehicles</h1>
      {vehicles.map(vehicle => (
        <div key={vehicle.id}>
          <h3>{vehicle.name}</h3>
          <p>{vehicle.description}</p>
          <p>Price: ${vehicle.price}/day</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
