import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import AircraftList from "./components/pages/AircraftList";
import AirportList from "./components/pages/AirportList";
import CityList from "./components/pages/CityList";
import PassengerList from "./components/pages/PassengerList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aircrafts" element={<AircraftList />} />
        <Route path="/airports" element={<AirportList />} />
        <Route path="/cities" element={<CityList />} />
        <Route path="/passengers" element={<PassengerList />} />
      </Routes>
    </Router>
  );
};

export default App;
