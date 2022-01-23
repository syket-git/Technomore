import React, { FC } from 'react';
import SecondaryCard from '../../../Card/SecondaryCard';

const RecentStories: FC = () => {
  return (
    <div className="container">
      <div className="pt-5">
        <p>Your recent stories</p>
      </div>

      <div className="divide-y">
        <SecondaryCard
          title={'How to be a master in React JS'}
          author={'Syket Bhattachergee'}
          date={'23 Jun 2022'}
          description={
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto totam vel deleniti eius, sed necessitatibus laudantium odit voluptate harum ex laboriosam delectus laborum tempora esse quidem voluptatibus nam. Hic, explicabo.'
          }
        />
        <SecondaryCard
          title={'Node JS for beginners'}
          author={'Syket Bhattachergee'}
          date={'23 Jun 2022'}
          description={
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto totam vel deleniti eius, sed necessitatibus laudantium odit voluptate harum ex laboriosam delectus laborum tempora esse quidem voluptatibus nam. Hic, explicabo.'
          }
        />
        <SecondaryCard
          title={'Typescript beginners Tutorial'}
          author={'Syket Bhattachergee'}
          date={'23 Jun 2022'}
          description={
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto totam vel deleniti eius, sed necessitatibus laudantium odit voluptate harum ex laboriosam delectus laborum tempora esse quidem voluptatibus nam. Hic, explicabo.'
          }
        />
      </div>
    </div>
  );
};

export default RecentStories;
