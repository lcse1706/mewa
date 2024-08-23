import { CreateOfferDto } from './types';
import axios from 'axios';

//TODO save in env variables
const API_KEY = import.meta.env.VITE_API_KEY;

export const createOffer = (data: CreateOfferDto) => {
  return axios.post('http://localhost:3000/api/offers', data, {
    headers: {
      Authorization: API_KEY,
    },
  });
};
