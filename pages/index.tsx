import type { NextPage } from 'next';
import Button from '../components/Forms/Button';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen -mt-16">
        <h1 className={styles.hero__text}>
          <span className="underline text-[#caf0f8]">Technomore</span> is place
          to <br className="md:block hidden" /> Write and Read
        </h1>
        <Button text={'Get Started'} url={`signup`} />
      </div>
    </div>
  );
};

export default Home;
