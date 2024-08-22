import { CreateOfferDto } from './types';
import axios from 'axios';

export const createOffer = (data: CreateOfferDto) => {
  return axios.post('http://localhost:3000/api/offers');
};
