import { Button, Input } from '@ems/common-ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createOfferSchema, CreateOfferDto } from './types';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  createOffer: (data: CreateOfferDto) => void;
};

export const CreateOffer = ({ createOffer }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CreateOfferDto>({
    resolver: zodResolver(createOfferSchema),
  });

  const submitHandler: SubmitHandler<CreateOfferDto> = async (data) => {
    console.log({ data });
    createOffer(data);
  };

  return (
    <div>
      <h3>Create Offer</h3>
      {isSubmitting && <p>Oh no ! Server error !</p>}
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input {...register('role')} label="Role" error={errors.role} />
        <Input
          {...register('description')}
          label="Description"
          error={errors.description}
        />
        <Input
          {...register('salary', { valueAsNumber: true })}
          label="Salary"
          type="number"
          error={errors.salary}
        />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
};
