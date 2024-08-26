import { OffersListDto } from '@ems/contracts';

type Props = {
  data: OffersListDto[];
};

export const OffersList = ({ data }: Props) => {
  return (
    <ul>
      {data.map((elem) => (
        <li key={elem.public_id}>
          {elem.role} | {elem.description} | {elem.salary} $
        </li>
      ))}
    </ul>
  );
};
