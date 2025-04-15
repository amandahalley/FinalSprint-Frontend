import React from "react";

import AircraftForm from "./components/Aircrafts/AircraftForm";
import AircraftList from "./components/Aircrafts/AircraftList";
import AirportForm from "./components/Airports/AirportForm";
import AirportList from "./components/Airports/AirportList";
import CityForm from "./components/City/CityForm";
import CityList from "./components/City/CityList";
import PassengerForm from "./components/Passenger/PassengerForm";
import PassengerList from "./components/Passenger/PassengerList";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Final Sprint Flight Dashboard</h1>

      <h2>Aircrafts</h2>
      <AircraftForm />
      <AircraftList />

      <h2>Airports</h2>
      <AirportForm />
      <AirportList />

      <h2>Cities</h2>
      <CityForm />
      <CityList />

      <h2>Passengers</h2>
      <PassengerForm />
      <PassengerList />
    </div>
  );
};

export default App;
