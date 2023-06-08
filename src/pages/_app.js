import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

import Main from '@/layouts/main';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Walid Nurudin</title>
      </Head>

      <Main>
        <Component {...pageProps} />
        <ToastContainer />
      </Main>
    </ThemeProvider>
  );
}
