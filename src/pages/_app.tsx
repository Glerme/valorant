import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { ErrorBoundary } from 'components/ErrorBoundary';

import 'styles/global.scss';
import { DefaultLayout } from 'layouts/DefaultLayout';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Valorant</title>
      </Head>

      <DefaultLayout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </DefaultLayout>
    </>
  );
};

export default MyApp;
