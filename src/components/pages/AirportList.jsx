import React, { useEffect, useState } from "react";
import { fetchAirports } from "../../services/api";
import "./PageStyles.css";

function AirportList() {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchAirports().then((res) => setAirports(res.data));
  }, []);

  return (
    <div className="page-container">
      <h2 className="page-title">Airports</h2>

      <div className="list-container">
        {airports.map((airport) => (
          <div key={airport.id} className="list-card">
            <p>
              {airport.name} ({airport.code})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AirportList;
