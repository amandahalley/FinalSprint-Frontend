import React from "react";
import { Link } from "react-router-dom";
import takeOff from "../../assets/takeoff.png";
import map from "../../assets/map.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">
        Final Sprint - Flight Management System!
      </h1>
      <div className="nav">
        <Link to="/aircrafts" className="nav-button">
          View Aircrafts
        </Link>
        <Link to="/airports" className="nav-button">
          View Airports
        </Link>
        <Link to="/cities" className="nav-button">
          View Cities
        </Link>
        <Link to="/passengers" className="nav-button">
          View Passengers
        </Link>
      </div>
      <div className="image-row">
        <div>
          <img src={takeOff} alt="departure" className="homepage-img" />
        </div>
        <div>
          <img src={map} alt="Map" className="homepage-img" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
