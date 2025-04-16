import React, { useEffect, useState } from "react";
import { fetchAircraft, getAirportsByAircraft } from "../../services/api";

//display all aircrafts
function AircraftList() {
  const [aircrafts, setAircrafts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetchAircraft().then((res) => setAircrafts(res.data));
  }, []);

  //shows airports specific aircraft has been to(landed or taken off)
  const showAirports = (id) => {
    setSelectedId(id);
    getAirportsByAircraft(id).then((res) => setAirports(res.data));
  };

  return (
    <div>
      <h2>Aircraft</h2>
      <ul>
        {aircrafts.map((ac) => (
          <li key={ac.id}>
            {ac.type} - {ac.airlineName} ({ac.numberOfPassengers} seats)
            <button onClick={() => showAirports(ac.id)}>Show Airports</button>
          </li>
        ))}
      </ul>

      {selectedId && (
        <div>
          <h3>Airports for Aircraft #{selectedId}</h3>
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

export default AircraftList;
