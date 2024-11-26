import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/ManageVehicles.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    name: '',
    type: '',
    price: '',
    description: '',
  });

  // Fetch vehicle data when the component mounts
  useEffect(() => {
    axios.get('/api/vehicles')
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error('Error fetching vehicles:', error));
  }, []);

  // Handle form input changes for adding a new vehicle
  const handleInputChange = (e) => {
    setNewVehicle({
      ...newVehicle,
      [e.target.name]: e.target.value,
    });
  };

  // Handle adding a new vehicle
  const handleAddVehicle = (e) => {
    e.preventDefault();
    axios.post('/api/vehicles', newVehicle)
      .then((response) => {
        setVehicles([...vehicles, response.data]);
        setNewVehicle({
          name: '',
          type: '',
          price: '',
          description: '',
        });
        alert('Vehicle added successfully');
      })
      .catch((error) => console.error('Error adding vehicle:', error));
  };

  // Handle deleting a vehicle
  const handleDeleteVehicle = (id) => {
    axios.delete(`/api/vehicles/${id}`)
      .then(() => {
        setVehicles(vehicles.filter(vehicle => vehicle._id !== id));
        alert('Vehicle deleted successfully');
      })
      .catch((error) => console.error('Error deleting vehicle:', error));
  };

  return (
    <div className="manage-vehicles-container">
      <h1>Manage Vehicles</h1>

      {/* Add Vehicle Form */}
      <div className="add-vehicle-form">
        <h2>Add New Vehicle</h2>
        <form onSubmit={handleAddVehicle}>
          <div className="form-group">
            <label>Vehicle Name</label>
            <input
              type="text"
              name="name"
              value={newVehicle.name}
              onChange={handleInputChange}
              placeholder="Enter vehicle name"
              required
            />
          </div>
          <div className="form-group">
            <label>Vehicle Type</label>
            <input
              type="text"
              name="type"
              value={newVehicle.type}
              onChange={handleInputChange}
              placeholder="Enter vehicle type"
              required
            />
          </div>
          <div className="form-group">
            <label>Price per Day</label>
            <input
              type="number"
              name="price"
              value={newVehicle.price}
              onChange={handleInputChange}
              placeholder="Enter vehicle price"
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={newVehicle.description}
              onChange={handleInputChange}
              placeholder="Enter vehicle description"
              required
            />
          </div>
          <button type="submit" className="add-button">Add Vehicle</button>
        </form>
      </div>

      {/* Vehicle List */}
      <div className="vehicle-list">
        <h2>Existing Vehicles</h2>
        {vehicles.length === 0 ? (
          <p>No vehicles available</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle._id}>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.price}</td>
                  <td>{vehicle.description}</td>
                  <td>
                    <button onClick={() => handleDeleteVehicle(vehicle._id)}>Delete</button>
                    <Link to={`/vehicles/edit/${vehicle._id}`} className="edit-link">Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageVehicles;
