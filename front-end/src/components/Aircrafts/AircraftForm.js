import React, { useState } from "react";
import { createAircraft } from "../../services/aircraftService";

const AircraftForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAircraft({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Aircraft Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Aircraft</button>
    </form>
  );
};

export default AircraftForm;
