import React, { FC } from 'react';
import Input from '../../Forms/Input/Input';
import styles from './Login.module.css';
import Link from 'next/link';
import { BsXCircleFill } from 'react-icons/bs';

const SubLoginPages: FC = () => {
  return (
    <div className={styles.signup__wrapper}>
      <div className="md:block hidden absolute top-5 right-5">
        <Link passHref href={'/'}>
          <BsXCircleFill className="text-[20px] cursor-pointer" />
        </Link>
      </div>
      <h1 className="text-4xl mt-5 text-secondary font-bold text-center">
        Login
      </h1>
      <div className="mt-8 mb-16 text-center">
        <form className="space-y-5">
          <Input placeholder={'Username'} type={'text'} />
          <Input placeholder={'Password'} type={'password'} />
          <Input value={'Submit'} type={'submit'} />
        </form>
        <p className="py-2">
          No Account?{' '}
          <Link passHref href="/signup">
            <span className="font-medium underline cursor-pointer">
              Create one
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SubLoginPages;
