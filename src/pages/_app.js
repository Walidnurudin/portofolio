import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

import Main from '@/layouts/main';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}
