import { Head, Navigation, Footer } from '@/components';

const Main = ({ children }) => {
  return (
    <div className="bg-zinc-50 dark:bg-black h-screen w-screen">
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
