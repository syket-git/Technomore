import React, { FC } from 'react';
import RecentStories from '../../components/SubPages/Dashboard/RecentStories';
import Layout from '../../layouts';

const Dashboard: FC = () => {
  return (
    <Layout>
      <RecentStories />
    </Layout>
  );
};

export default Dashboard;
