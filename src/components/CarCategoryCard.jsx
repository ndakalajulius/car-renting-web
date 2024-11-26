import React from "react";
import { Link } from "react-router-dom";
import "../../styles/CarCategoryCard.css";

const CarCategoryCard = ({ category, image }) => {
  return (
    <div className="category-card">
      <img src={image} alt={`${category} cars`} />
      <h2>{category}</h2>
      <Link to={`/vehicles/${category.toLowerCase()}`} className="explore-link">
        Explore {category}
      </Link>
    </div>
  );
};

export default CarCategoryCard;
