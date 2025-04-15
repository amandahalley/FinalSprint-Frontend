import React, { useState } from "react";
import { createPassenger } from "../../services/passengerService";

const PassengerForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPassenger({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Passenger Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Passenger</button>
    </form>
  );
};

export default PassengerForm;
