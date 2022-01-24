import type { NextPage } from 'next';
import SubProfilePage from '../../components/SubPages/Profile';
import Layout from '../../layouts';

const Profile: NextPage = () => {
  return (
    <Layout>
      <SubProfilePage />
    </Layout>
  );
};

export default Profile;
