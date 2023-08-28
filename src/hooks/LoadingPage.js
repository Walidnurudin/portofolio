import { Router } from 'next/router';
import { useEffect, useState } from 'react';

const LoadingPage = (value) => {
  const [loading, setLoading] = useState(value);

  const handleRouteChangeStart = () => setLoading(true);
  const handleRouteChangeComplete = () => setLoading(false);
  const handleRouteChangeError = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeStart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Router.events]);

  return loading;
};

export default LoadingPage;
