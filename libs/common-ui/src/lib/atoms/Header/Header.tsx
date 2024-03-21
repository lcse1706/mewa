import type { ComponentProps } from 'react';

type Props = {
  children: string | undefined;
};

export const Header = ({ children }: ComponentProps<'h1'> & Props) => {
  return (
    // <header className="text-3xl font-bold dark:text-white">{children}</header>
    <h1 className="text-3xl font-bold">{children}</h1>
  );
};
