import api from './api';

export const getCities = () => api.get('/cities');
export const createCity = (city) => api.post('/cities', city);

// should handle API communication using axios