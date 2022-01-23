import React, { FC } from 'react';

type Props = {
  title: string;
  description: string;
  author: string;
  date: string;
};

const SecondaryCard: FC<Props> = ({ title, description, author, date }) => {
  return (
    <div className="space-y-2 py-5">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">
          {date} . {author}
        </p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SecondaryCard;
