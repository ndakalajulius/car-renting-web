import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.error(error));
    axios.get('/api/admin/vehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vehicle</th>
            <th>Customer</th>
            <th>Dates</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.vehicleName}</td>
              <td>{booking.customerName}</td>
              <td>{booking.startDate} - {booking.endDate}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.name} - ${vehicle.price}/day
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
