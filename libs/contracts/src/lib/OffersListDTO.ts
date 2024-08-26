import { type Offer } from '@prisma/client';

export type OffersListDto = Omit<Offer, 'id'>;
