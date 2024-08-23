import { CreateOfferDto } from './types';
import { api } from '../../config/api';

export const createOffer = (data: CreateOfferDto) => {
  return api.post('offers', data);
};
