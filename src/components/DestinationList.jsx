import React from "react";
import "./DestinationList.css";
import DestinationCard from "./DestinationCard";

const DestinationList = ({ destinations }) => {
  if (destinations.length === 0) {
    return (
      <p className="no-results">
        No destinations found. Try a different search.
      </p>
    );
  }

  return (
    <section className="destinations-grid" id="destinations-container">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </section>
  );
};

export default DestinationList;
