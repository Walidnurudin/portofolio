import { Head, Navigation, Footer } from '@/components';

const Main = ({ children }) => {
  return (
    <div className="container max-w-3xl w-full mx-auto">
      <Head />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
