import { Header } from '@ems/common-ui';
import { OffersList } from '../features/offers/OffersList';
import { fetchOffers } from '../features/offers/offers.services';
import { useState, useEffect } from 'react';
import { OffersListDto } from '@ems/contracts';
import { Link } from 'react-router-dom';
import { ROUTE } from '../routes';

export const OffersPage = () => {
  const [data, setData] = useState<OffersListDto[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchOffers();
      // TODO: check if data
      setData(response.data);
    };
    loadData();
  }, []);

  return (
    <div>
      <Header>Employees</Header>
      <Link to={ROUTE.OFFERS_CREATE}>Create Offer</Link>
      <OffersList data={data} />
    </div>
  );
};
