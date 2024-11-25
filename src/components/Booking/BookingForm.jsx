import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [form, setForm] = useState({ vehicleId: '', startDate: '', endDate: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/bookings', form)
      .then(response => alert('Booking Successful!'))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vehicle ID:
        <input
          type="text"
          value={form.vehicleId}
          onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
        />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
