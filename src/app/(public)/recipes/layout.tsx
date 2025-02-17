import React, { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RecipeLayout'
};

type Props = { children: ReactNode };
const RecipeLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default RecipeLayout;