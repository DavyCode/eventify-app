import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';

import NotificationContext from '../store/notification-context';
import useNotification from '../hooks/useNotification';
import AuthContext from '../store/auth-context';
import useAuth from '../hooks/useAuth';
import Layout from '../components/layout/layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const contextNotification = useNotification();
  const contextAuth = useAuth();

  return (
    <AuthContext.Provider value={contextAuth}>
      <NotificationContext.Provider value={contextNotification}>
          <Layout>
            <Head>
              <title>Eventify App</title>
              <meta name='description' content='NextJS Events' />
              <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
              />
            </Head>
            
            <Component {...pageProps} />
          </Layout>
      </NotificationContext.Provider>
    </AuthContext.Provider>
  );
}

export default MyApp
