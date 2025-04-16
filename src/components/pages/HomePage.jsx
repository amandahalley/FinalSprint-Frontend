import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">
        Welcome, Final Sprint Flight Management
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
    </div>
  );
};

export default HomePage;
