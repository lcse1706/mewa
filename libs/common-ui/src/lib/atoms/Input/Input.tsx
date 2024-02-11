import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  label: string;
};

export const Input = ({
  type,
  label,
  placeholder,
  className,
  ...rest
}: ComponentProps<'input'> & Props) => {
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
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={classes}
        {...rest}
      />
    </div>
  );
};
