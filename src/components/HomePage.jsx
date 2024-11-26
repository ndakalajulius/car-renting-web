import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const categories = [
    { id: 1, name: "SUVs", image: "/images/suv.jpg", description: "Spacious and powerful for your adventures." },
    { id: 2, name: "Sedans", image: "/images/sedan.jpg", description: "Comfort and efficiency for city drives." },
    { id: 3, name: "Trucks", image: "/images/truck.jpg", description: "Heavy-duty vehicles for your needs." },
    { id: 4, name: "Luxury", image: "/images/luxury.jpg", description: "Premium vehicles for special occasions." },
  ];

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to Car Rentals</h1>
        <p>Find your perfect ride today!</p>
        <Link to="/vehicles" className="explore-button">Explore Our Fleet</Link>
      </header>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Link to={`/vehicles/${category.name.toLowerCase()}`} className="view-button">
                View {category.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
