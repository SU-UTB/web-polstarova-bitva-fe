import type { ReactNode } from 'react';
import { classNames } from 'src/utils';

type Props = {
  children: ReactNode;
  color?: 'dark' | 'primary';
  centered?: boolean;
};

export const H2 = ({ children, color = 'dark', centered = false }: Props) => (
  <h2
    className={classNames(
      'mb-4 text-3xl font-bold leading-snug  sm:text-4xl md:mb-6 md:text-5xl lg:mb-8 lg:text-6xl',
      color === 'dark' && 'text-gray-950',
      color === 'primary' && 'text-primary-600',
      centered && 'mx-auto w-fit',
    )}
  >
    {children}
  </h2>
);
