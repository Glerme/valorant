import { GetServerSideProps, NextPage } from 'next';

import { IndexView } from 'views/Home';

const Home: NextPage = () => {
  return <IndexView />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
