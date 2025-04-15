import React, { useEffect, useState } from 'react';
import { fetchAirports } from '../services/api';


//displays list of all airports
function AirportList() {
  const [airports, setAirports] = useState([]);

//fetch all airports
  useEffect(() => {
    fetchAirports().then(res => setAirports(res.data));
  }, []);

//shows all information stored of each airport
  return (
    <div>
      <h2>Airports</h2>
      <ul>
        {airports.map(airport => (
          <li key={airport.id}>
            {airport.name} ({airport.code})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AirportList;
