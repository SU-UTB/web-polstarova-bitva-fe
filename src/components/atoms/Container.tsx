import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Container = (props: Props) => (
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">{props.children}</div>
);
