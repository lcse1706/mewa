import { type AxiosResponse } from 'axios';

import { CreateOfferDto } from './types';

import { api } from '../../config/api';
import { OffersListDto } from '@ems/contracts';

export const createOffer = (data: CreateOfferDto) => {
  return api.post('offers', data);
};

export const fetchOffers = (): Promise<AxiosResponse<OffersListDto[]>> => {
  return api.get('offers');
};
