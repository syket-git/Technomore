import type { NextPage } from 'next';
import SubYourStories from '../../components/SubPages/YourStories';
import Layout from '../../layouts';

const YourStories: NextPage = () => {
  return (
    <Layout>
      <SubYourStories />
    </Layout>
  );
};

export default YourStories;
