import React, { FC } from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import NavItems from './NavItems';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className="container flex items-center justify-between">
        <Logo />
        <NavItems />
      </div>
    </div>
  );
};

export default Header;
