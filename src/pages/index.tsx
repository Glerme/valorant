import { GetServerSideProps, NextPage } from 'next';

import { Greetings } from '../components/Greetings';

const Home: NextPage = () => {
  return <Greetings />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
