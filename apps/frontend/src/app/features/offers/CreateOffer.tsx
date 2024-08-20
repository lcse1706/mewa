import { Button, Input } from '@ems/common-ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createOfferSchema, CreateReviewDto } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
export const CreateOffer = () => {
  // const [isError, setIsError] = useState(false);
  // const { push, refresh } = useRouter();
  // const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CreateReviewDto>({
    resolver: zodResolver(createOfferSchema),
  });

  const submitHandler: SubmitHandler<CreateReviewDto> = async (data) => {
    console.log({ data });
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
