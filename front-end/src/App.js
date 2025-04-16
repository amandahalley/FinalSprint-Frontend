import React from 'react';
import CityList from './components/CityList';
import AirportList from './components/AirportList';
import PassengerList from './components/PassengerList';
import AircraftList from './components/AircraftList';

//main application rendering all entitys (city, airport, passenger, aircraft
function App() {
  return (
    <div className="App">
      <h1>Flight Management Dashboard</h1>
      <CityList />
      <AirportList />
      <PassengerList />
      <AircraftList />
    </div>
  );
}

export default App;
