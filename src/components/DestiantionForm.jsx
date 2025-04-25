import React, { useState } from "react";
import "./DestinationForm.css";

const DestinationForm = ({ onAddDestination }) => {
  const [destination, setDestination] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination.name && destination.description) {
      onAddDestination(destination);
      setDestination({ name: "", description: "" }); // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Destination Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={destination.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          value={destination.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="destination-country">Destination country</label>
        <input
            type="text"
            name="Destination country"
            value={destination.country}
            onChange={handleChange}
            required 
        />
      </div>
      <div>
        <label htmlFor="destination-continent">Destination continent</label>
        <input
            type="text"
            name="Destination continent"
            value={destination.continent}
            onChange={handleChange}
            required 
        />
      </div>
      <div>
        <label htmlFor="destination-rating">Destination Rating</label>
        <input
            type="text"
            name="Destination Rating"
            value={destination.rating}
            onChange={handleChange}
            min={0} max={5}
            required 
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={destination.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Destination</button>
    </form>
  );
};

export default DestinationForm;
