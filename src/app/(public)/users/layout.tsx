import {ReactNode} from 'react';
import { Metadata } from 'next';
import MenuComponent from "@/app/components/menu/MenuComponent";

export const metadata: Metadata = {
  title: 'UsersLayout'
};

type Props = { children: ReactNode };
const UsersLayout = ({ children }: Props) => {
  return (
    <div>
      <MenuComponent/>
      {children}
    </div>
  );
};

export default UsersLayout;