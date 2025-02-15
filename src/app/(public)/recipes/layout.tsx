import React from 'react';
import { Metadata } from 'next';
import MenuComponent from "@/app/components/menu/MenuComponent";

export const metadata: Metadata = {
  title: 'RecipeLayout'
};

type Props = { children: React.ReactNode };
const RecipeLayout = ({ children }: Props) => {
  return (
    <div>
      <MenuComponent/>
      {children}
    </div>
  );
};

export default RecipeLayout;