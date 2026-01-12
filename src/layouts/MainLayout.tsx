import { useEffect, useRef, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { Footer } from './Footer';
import { Header } from './Header';

export default function MainLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  const routeKey = `${location.pathname}${location.search}`;
  const hasMountedRef = useRef(false);
  const pendingOutletRef = useRef(outlet);
  pendingOutletRef.current = outlet;

  const [renderedOutlet, setRenderedOutlet] = useState(outlet);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    setIsFadingOut(true);
    const timeoutId = window.setTimeout(() => {
      setRenderedOutlet(pendingOutletRef.current);
      setIsFadingOut(false);
    }, 180);

    return () => window.clearTimeout(timeoutId);
  }, [routeKey]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timeoutId = window.setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
      return () => window.clearTimeout(timeoutId);
    }
  }, [location]);

  return (
    <main className="min-h-screen text-white">
      <StarsBackground
        className="min-h-screen"
        starColor="var(--color-primary)"
        factor={0.07}
        speed={100}
      >
        <Header />
        <div
          className={`transition-opacity duration-200 ease-out ${
            isFadingOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {renderedOutlet}
        </div>
        <Footer />
      </StarsBackground>
    </main>
  );
}
