import React, { FC } from 'react';
import Input from '../../Forms/Input/Input';
import styles from './Signup.module.css';
import Link from 'next/link';

const SubSignupPages: FC = () => {
  return (
    <div className={styles.signup__wrapper}>
      <h1 className="text-4xl mt-5 text-secondary font-bold text-center">
        Signup
      </h1>
      <div className="mt-8 mb-16 text-center">
        <form className="space-y-5">
          <Input placeholder={'Full Name'} type={'text'} />
          <Input placeholder={'Username'} type={'text'} />
          <Input placeholder={'Email'} type={'email'} />
          <Input placeholder={'Password'} type={'password'} />
          <Input type={'file'} />
          <Input value={'Submit'} type={'submit'} />
        </form>
        <p className="py-2">
          Already have an account?{' '}
          <Link passHref href="/login">
            <span className="font-medium underline cursor-pointer">
              Sign in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SubSignupPages;
