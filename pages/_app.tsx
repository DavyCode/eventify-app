import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';

import NotificationContext from '../store/notification-context';
import useNotification from '../hooks/useNotification';

import Layout from '../components/layout/Layout';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const contextNotification = useNotification();

  return (
    <NotificationContext.Provider value={contextNotification}>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name='description' content='NextJS Events' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>

        
        <Component {...pageProps} />
      </Layout>
    </NotificationContext.Provider>
  );
}

export default MyApp
