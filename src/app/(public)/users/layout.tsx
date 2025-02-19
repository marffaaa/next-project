import {ReactNode} from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UsersLayout'
};

type Props = { children: ReactNode };
const UsersLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default UsersLayout;