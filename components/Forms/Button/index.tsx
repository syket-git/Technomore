import React, { FC } from 'react';
import Link from 'next/link';
const Button: FC<{ text: string; url: string }> = ({ text, url }) => {
  return (
    <Link passHref href={`/${url}`}>
      <button
        className="border-2 border-secondary text-secondary py-2 md:py-3 
    px-6 md:px-8 text-lg md:text-xl rounded-full transition-all divide-fuchsia-100 hover:bg-secondary hover:text-primary font-medium"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
