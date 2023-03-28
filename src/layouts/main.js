import { Head, Navigation, Footer } from '@/components';

// pages/_app.js
import { Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

const Main = ({ children }) => {
  return (
    <div
      className={`bg-zinc-50 dark:bg-black h-screen w-screen ${inter.className}`}
    >
      <div className="container max-w-3xl w-full mx-auto p-3 ">
        <Head />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
