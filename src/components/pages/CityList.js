import React, { useEffect, useState } from 'react';
import { fetchCities, getAirportsInCity } from '../services/api';

//displaying list of all cities,
function CityList() {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchCities().then(res => setCities(res.data));
  }, []);

  //allows you to see all airports in a specific city
  const showAirports = (id) => {
    setSelectedCityId(id);
    getAirportsInCity(id).then(res => setAirports(res.data));
  };

  return (
    <div>
      <h2>Cities</h2>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            {city.name}, {city.state}
            <button onClick={() => showAirports(city.id)}>View Airports</button>
          </li>
        ))}
      </ul>

      {selectedCityId && (
        <div>
          <h3>Airports in City #{selectedCityId}</h3>
          <ul>
            {airports.map(airport => (
              <li key={airport.id}>{airport.name} ({airport.code})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CityList;
