import { CreateOfferDto } from './types';
import axios from 'axios';

//TODO save in env variables
const API_KEY = '1234';

export const createOffer = (data: CreateOfferDto) => {
  return axios.post('http://localhost:3000/api/offers', data, {
    headers: {
      Authorization: API_KEY,
    },
  });
};
