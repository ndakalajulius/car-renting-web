import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // Importing CSS for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="main-title">Welcome to Car Rentals</h1>
        <p className="subheading">Your journey starts here!</p>
        <Link to="/vehicles" className="explore-button">
          Explore Our Fleet
        </Link>
      </header>
      <section className="promotion-section">
        <h2 className="promotion-title">Special Promotions</h2>
        <p className="promotion-text">Get 20% off your first booking!</p>
        <Link to="/booking" className="promotion-link">
          Book Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
