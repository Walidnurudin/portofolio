import { Head, Navigation, Footer } from '@/components';

// pages/_app.js
import { Inconsolata } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const font = Inconsolata({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin']
});

const Main = ({ children }) => {
  return (
    <div className={`bg-zinc-50 dark:bg-black h-screen w-screen`}>
      <div className="container max-w-6xl w-full mx-auto p-3">
        <Head />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
