import { Header } from '@ems/common-ui';
import { CreateOffer } from '../features/offers/CreateOffer';
import { createOffer } from '../features/offers/offers.services';

export const CreateOfferPage = () => {
  return (
    <div>
      <Header>Employees</Header>
      <CreateOffer createOffer={createOffer} />
    </div>
  );
};
