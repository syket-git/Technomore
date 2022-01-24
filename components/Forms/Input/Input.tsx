import React, { FC } from 'react';

const Input: FC<{
  value?: string;
  placeholder?: string;
  type: string;
  readOnly?: boolean;
}> = ({ placeholder, type, value, readOnly }) => {
  return (
    <input
      className={` ${
        type === 'submit'
          ? 'cursor-pointer hover:bg-secondary hover:text-primary'
          : null
      }  bg-transparent transition-all duration-150 font-medium w-3/4 border-2 text-secondary border-secondary py-2 px-3 focus:outline-none`}
      placeholder={placeholder}
      type={type}
      value={value}
      readOnly={readOnly}
    />
  );
};

export default Input;
