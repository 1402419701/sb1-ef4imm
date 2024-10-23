import { useEffect, useState } from 'react';
import { Home } from '@/pages/home';
import { Products } from '@/pages/products';
import { Manufacturers } from '@/pages/manufacturers';

export function Routes() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  switch (currentPath) {
    case '/':
      return <Home />;
    case '/products':
      return <Products />;
    case '/manufacturers':
      return <Manufacturers />;
    default:
      return <Home />;
  }
}