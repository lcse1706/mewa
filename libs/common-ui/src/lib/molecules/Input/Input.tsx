import { forwardRef, type ComponentProps, type Ref } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { Label } from '../../atoms/Label';

type Props = ComponentProps<'input'> & {
  label: string;
};

export const Input = forwardRef(
  (
    { type, label, placeholder, className, value, onChange, ...rest }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = uuidv4();
    const classes = clsx(
      'block',
      'mb-4',
      'border',
      'border-gray-300',
      'rounded-md',
      className
    );

    return (
      <div>
        <Label id={id}>{label}</Label>
        <input
          id={id}
          type={type}
          ref={ref}
          placeholder={placeholder}
          className={classes}
          defaultValue={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    );
  }
);
