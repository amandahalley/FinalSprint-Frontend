import api from './api';

export const getAirports = () => api.get('/airports');
export const createAirport = (airport) => api.post('/airports', airport);

// should handle API communication using axios