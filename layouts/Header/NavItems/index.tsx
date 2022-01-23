import React, { FC, useState, useRef } from 'react';
import styles from './NavItems.module.css';
import Image from 'next/image';
import useOnClickOutside from '../../../components/OnClickOutSide';

const NavItems: FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const dropdownRef: any = useRef();
  useOnClickOutside(dropdownRef, () => setDropdown(false));

  return (
    <div ref={dropdownRef} className="flex items-center justify-center">
      <Image
        onClick={() => setDropdown(!dropdown)}
        className="object-cover w-full h-full rounded-full cursor-pointer"
        width={50}
        height={50}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXln_wu3DHmzzi11z3Lweq69IkczU1pXbZA&usqp=CAU"
        alt="Syket Bhattachergee"
      />

      {dropdown && (
        <div className={styles.navItems__dropdown}>
          <div className="flex items-center border-b border-[#05303e] cursor-pointer pb-5">
            <Image
              onClick={() => setDropdown(!dropdown)}
              className="object-cover w-full h-full rounded-full cursor-pointer"
              width={50}
              height={50}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXln_wu3DHmzzi11z3Lweq69IkczU1pXbZA&usqp=CAU"
              alt="Syket Bhattachergee"
            />
            <div className="ml-3">
              <p>Syket Bhattachergee</p>
              <p>@syketb</p>
            </div>
          </div>
          <div className="space-y-3 mt-5">
            <p className="cursor-pointer">Write a story</p>
            <p className="cursor-pointer">Your stories</p>
            <p className="cursor-pointer">Profile</p>
            <p className="cursor-pointer">Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItems;
