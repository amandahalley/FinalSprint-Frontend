import React, { useEffect, useState } from "react";
import { fetchAircraft, getAirportsByAircraft } from "../../services/api";
import "./PageStyles.css";

function AircraftList() {
  const [aircrafts, setAircrafts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchAircraft().then((res) => setAircrafts(res.data));
  }, []);

  const showAirports = (id) => {
    setSelectedId(id);
    getAirportsByAircraft(id).then((res) => setAirports(res.data));
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Aircraft</h2>

      <div className="list-container">
        {aircrafts.map((ac) => (
          <div key={ac.id} className="list-card">
            <p>
              <strong>{ac.type}</strong> ({ac.numberOfPassengers} seats) -{" "}
              {ac.airlineName}
            </p>
            <button className="nav-button" onClick={() => showAirports(ac.id)}>
              Show Airports
            </button>
          </div>
        ))}
      </div>

      {selectedId && (
        <div className="list-container">
          <h3 className="page-subtitle">Airports for Aircraft #{selectedId}</h3>
          {airports.map((ap) => (
            <div key={ap.id} className="list-card">
              <p>
                {ap.name} ({ap.code})
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AircraftList;
