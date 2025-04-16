import axios from "axios";

//handling api calls to backend
const API_BASE_URL = "http://localhost:8080"; // keep in mind this is on port 8082

//get endpoints
export const fetchCities = () => axios.get(`${API_BASE_URL}/city`);
export const fetchAirports = () => axios.get(`${API_BASE_URL}/airport`);
export const fetchAircraft = () => axios.get(`${API_BASE_URL}/aircraft`);
export const fetchPassengers = () => axios.get(`${API_BASE_URL}/passenger`);

//relationship endpoints
export const getAirportsInCity = (cityId) =>
  axios.get(`${API_BASE_URL}/city/${cityId}/airports`);

export const getAircraftByPassenger = (passengerId) =>
  axios.get(`${API_BASE_URL}/passenger/${passengerId}/aircraft`);

export const getAirportsByPassenger = (passengerId) =>
  axios.get(`${API_BASE_URL}/passenger/${passengerId}/airports`);

export const getAirportsByAircraft = (aircraftId) =>
  axios.get(`${API_BASE_URL}/aircraft/${aircraftId}/airports`);
