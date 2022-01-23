import React, { ReactChildren, FC, ReactElement } from 'react';
import Header from './Header';

const Layout: FC<{ children: ReactChildren | ReactElement }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
