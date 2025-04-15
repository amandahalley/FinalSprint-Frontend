import api from './api';

export const getPassengers = () => api.get('/passengers');
export const createPassenger = (passenger) => api.post('/passengers', passenger);


// should handle API communication using axios