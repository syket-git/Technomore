import React, { FC } from 'react';
import Input from '../../Forms/Input/Input';
import styles from './Signup.module.css';

const SubSignupPages: FC = () => {
  return (
    <div className={styles.signup__wrapper}>
      <h1 className="text-4xl text-secondary font-bold text-center">Signup</h1>
      <div className="mt-8 mb-16 text-center">
        <form className="space-y-5">
          <Input placeholder={'Full Name'} type={'text'} />
          <Input placeholder={'Username'} type={'text'} />
          <Input placeholder={'Email'} type={'email'} />
          <Input placeholder={'Password'} type={'password'} />
          <Input type={'file'} />
          <Input value={'Submit'} type={'submit'} />
        </form>
      </div>
    </div>
  );
};

export default SubSignupPages;
