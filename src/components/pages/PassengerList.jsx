import React, { useEffect, useState } from "react";
import {
  fetchPassengers,
  getAircraftByPassenger,
  getAirportsByPassenger,
} from "../../services/api";

//display all passengers
function PassengerList() {
  const [passengers, setPassengers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [aircrafts, setAircrafts] = useState([]);
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchPassengers().then((res) => setPassengers(res.data));
  }, []);

  //shows aircraft used by passenger and airports they've been to
  const showDetails = (id) => {
    setSelectedId(id);
    getAircraftByPassenger(id).then((res) => setAircrafts(res.data));
    getAirportsByPassenger(id).then((res) => setAirports(res.data));
  };

  return (
    <div>
      <h2>Passengers</h2>
      <ul>
        {passengers.map((p) => (
          <li key={p.id}>
            {p.firstName} {p.lastName} ({p.phoneNumber})
            <button onClick={() => showDetails(p.id)}>Details</button>
          </li>
        ))}
      </ul>

      {selectedId && (
        <div>
          <h3>Aircraft used by Passenger #{selectedId}</h3>
          <ul>
            {aircrafts.map((a) => (
              <li key={a.id}>
                {a.type} - {a.airlineName}
              </li>
            ))}
          </ul>

          <h3>Airports used by Passenger #{selectedId}</h3>
          <ul>
            {airports.map((ap) => (
              <li key={ap.id}>
                {ap.name} ({ap.code})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PassengerList;
