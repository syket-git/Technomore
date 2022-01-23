import React, { FC } from 'react';
import Link from 'next/link';

const Logo: FC = () => {
  return (
    <div>
      <Link passHref href="/dashboard">
        <h1 className="text-4xl text-secondary-light font-bold cursor-pointer">
          Technomore
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
