import React, { useEffect, useState } from "react";
import {
  fetchPassengers,
  getAircraftByPassenger,
  getAirportsByPassenger,
} from "../../services/api";
import "./PageStyles.css";

function PassengerList() {
  const [passengers, setPassengers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [aircrafts, setAircrafts] = useState([]);
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchPassengers().then((res) => setPassengers(res.data));
  }, []);

  const showDetails = (id) => {
    setSelectedId(id);
    getAircraftByPassenger(id).then((res) => setAircrafts(res.data));
    getAirportsByPassenger(id).then((res) => setAirports(res.data));
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Passengers</h2>

      <div className="list-container">
        {passengers.map((p) => (
          <div key={p.id} className="list-card">
            <p>
              {p.firstName} {p.lastName} ({p.phoneNumber})
            </p>
            <button className="nav-button" onClick={() => showDetails(p.id)}>
              Details
            </button>
          </div>
        ))}
      </div>

      {selectedId && (
        <div className="list-container">
          <div className="list-card">
            <h3 className="page-subtitle">
              Aircraft used by Passenger #{selectedId}
            </h3>
            {aircrafts.length > 0 ? (
              aircrafts.map((a) => (
                <p key={a.id}>
                  {a.type} - {a.airlineName}
                </p>
              ))
            ) : (
              <p>No aircraft data available.</p>
            )}
          </div>

          <div className="list-card">
            <h3 className="page-subtitle">
              Airports used by Passenger #{selectedId}
            </h3>
            {airports.length > 0 ? (
              airports.map((ap) => (
                <p key={ap.id}>
                  {ap.name} ({ap.code})
                </p>
              ))
            ) : (
              <p>No airport data available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PassengerList;
