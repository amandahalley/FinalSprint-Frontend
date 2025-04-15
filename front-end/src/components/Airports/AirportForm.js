import React, { useState } from "react";
import { createAirport } from "../../services/airportService";

const AirportForm = () => {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAirport({ code });
    setCode("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Airport Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <button type="submit">Add Airport</button>
    </form>
  );
};

export default AirportForm;
