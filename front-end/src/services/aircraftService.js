import api from './api';

export const getAircrafts = () => api.get('/aircrafts');
export const createAircraft = (aircraft) => api.post('/aircrafts', aircraft);

// should handle API communication using axios