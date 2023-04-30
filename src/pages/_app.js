import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

import Main from '@/layouts/main';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Main>
        <Component {...pageProps} />
        <ToastContainer />
      </Main>
    </ThemeProvider>
  );
}
