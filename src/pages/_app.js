import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

import Main from '@/layouts/main';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

import { LoadingPage } from '@/hooks';
import { LoadingScreen } from '@/components';

export default function App({ Component, pageProps }) {
  const loading = LoadingPage();

  if (loading) return <LoadingScreen />;
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Walid Nurudin</title>

        <link rel="icon" href="/src/assets/favicon.ico" />
      </Head>

      <Main>
        <Component {...pageProps} />
        <ToastContainer />
      </Main>
    </ThemeProvider>
  );
}
