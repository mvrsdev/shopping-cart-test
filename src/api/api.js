import axios from 'axios';

export const getFreeShippingCart = () => {
  return axios.get('/mocks/over10.json').then((response) => response.data);
};

export const getStandardCart = () => {
  return axios.get('/mocks/under10.json').then((response) => response.data);
};
