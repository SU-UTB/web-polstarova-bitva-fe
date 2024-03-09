import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Text = ({ children }: Props) => (
  <p className="mb-4 font-medium text-gray-900 last-of-type:mb-0 sm:text-lg sm:leading-[1.75] lg:mb-6 lg:text-xl lg:leading-[1.75]">
    {children}
  </p>
);
