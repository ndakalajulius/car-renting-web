import React, { useState, useEffect } from 'react';
import '../styles/bookingListing.css'


const BookingListing = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings data (replace with actual API call)
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Replace with the real API endpoint
        const response = await fetch('http://localhost:5000/api/bookings');
        const data = await response.json();
        
        // Update the state with booking data
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="booking-listing-container">
      <h1>Booking Listings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="booking-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer Name</th>
              <th>Car Model</th>
              <th>Rental Dates</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.customerName}</td>
                <td>{booking.carModel}</td>
                <td>{`${booking.startDate} to ${booking.endDate}`}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingListing;
