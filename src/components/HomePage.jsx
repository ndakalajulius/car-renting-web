import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Car Rentals</h1>
        <Link to="/vehicles">Explore Our Fleet</Link>
      </header>
      <section>
        <h2>Promotions</h2>
        <p>Get 20% off your first booking!</p>
      </section>
    </div>
  );
};

export default HomePage;
