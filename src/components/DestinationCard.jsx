import React, { useState } from "react";
import DestinationModal from "./DestinationModal";
import "./DestinationCard.css";

function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star"></i>
        ))}
      {halfStar === 1 && <i className="fas fa-star-half-alt"></i>}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star"></i>
        ))}
    </>
  );
}

const DestinationCard = ({ destination }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleViewDetails = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="destination-card">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-img"
        />
        <div className="destination-info">
          <h3>{destination.name}</h3>
          <p className="location">
            {destination.country}, {destination.continent}
          </p>
          <div className="rating">{getStarRating(destination.rating)}</div>
          <p className="description">{destination.description}</p>
          <button className="view-btn" onClick={handleViewDetails}>
            View Details
          </button>
        </div>
      </div>
      <DestinationModal
        destination={destination}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default DestinationCard;
