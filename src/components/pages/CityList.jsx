import React, { useEffect, useState } from "react";
import { fetchCities, getAirportsInCity } from "../../services/api";
import "./PageStyles.css";

function CityList() {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchCities().then((res) => setCities(res.data));
  }, []);

  const showAirports = (id) => {
    setSelectedCityId(id);
    getAirportsInCity(id).then((res) => setAirports(res.data));
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Cities</h2>

      <div className="list-container">
        {cities.map((city) => (
          <div key={city.id} className="list-card">
            <p>
              {city.name}, {city.state}
            </p>
            <button
              className="nav-button"
              onClick={() => showAirports(city.id)}
            >
              View Airports
            </button>
          </div>
        ))}
      </div>

      {selectedCityId && (
        <div className="list-container">
          <h3 className="page-subtitle">Airports in City #{selectedCityId}</h3>
          {airports.map((airport) => (
            <div key={airport.id} className="list-card">
              <p>
                {airport.name} ({airport.code})
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CityList;
