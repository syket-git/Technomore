import type { NextPage } from 'next';
import Button from '../components/Forms/Button';

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen -mt-16">
        <h1 className="font-bold mb-5 leading-tight text-6xl text-center ">
          <span className="underline text-[#caf0f8]">Technomore</span> is place
          to <br /> Write and Read
        </h1>
        <Button text={'Get Started'} url={`signup`} />
      </div>
    </div>
  );
};

export default Home;
