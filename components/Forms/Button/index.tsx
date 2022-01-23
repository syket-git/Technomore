import React, { FC } from 'react';
import Link from 'next/link';
const Button: FC<{ text: string; url: string }> = ({ text, url }) => {
  return (
    <Link passHref href={`/${url}`}>
      <button
        className="border-2 border-secondary text-secondary py-3 
    px-8 text-xl rounded-full transition-all divide-fuchsia-100 hover:bg-secondary hover:text-primary font-medium"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
