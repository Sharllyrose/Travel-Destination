import React from "react";
import "./DestinationForm.css";

const DestinationForm = () => {
  return (
    <div className="destination-form">
      <h2>Add a New Destination</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Country:
          <input type="text" name="country" required />
        </label>
        <label>
          Continent:
          <select name="continent" required>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="north-america">North America</option>
            <option value="south-america">South America</option>
            <option value="australia">Australia/Oceania</option>
            <option value="antarctica">Antarctica</option>
          </select>
        </label>
        <label>
          Description:
          <textarea name="description" required></textarea>
        </label>
        <label>
          Image URL:
          <input type="url" name="image" required />
        </label>
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
};

export default DestinationForm;
