import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useOutlet } from 'react-router-dom';

import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { Logo } from '@/shared/components/logo';
import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';

function Header() {
  const linkClass =
    'rounded-full px-3 py-2 text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]';

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="mt-6 flex h-[70px] items-center justify-between rounded-full border border-white/10 bg-black/20 px-8 backdrop-blur">
          <nav className="flex items-center gap-2">
            <Link className={linkClass} to="/about">
              О компании
            </Link>
            <Link className={linkClass} to="/expertise">
              Виды экспертиз
            </Link>
            <Link className={linkClass} to="/team">
              Команда
            </Link>
          </nav>

          <div className="flex items-center justify-center">
            <Link to="/" aria-label="На главную">
              <Logo className="opacity-90" />
            </Link>
          </div>

          <nav className="flex items-center gap-2">
            <Link className={linkClass} to="/equipment">
              Оборудование
            </Link>
            <Link className={linkClass} to="/#projects">
              Проекты
            </Link>
            <Link className={linkClass} to="/#news">
              Новости
            </Link>
            <Link className={linkClass} to="/#contacts">
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const tileBg = 'color-mix(in srgb, var(--color-primary) 18%, transparent)';

  return (
    <footer
      id="contacts"
      className="relative border-t border-white/10 bg-black/30 backdrop-blur-md"
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="grid gap-10 py-10 lg:grid-cols-[224px_1fr]">
          <div className="space-y-4">
            <Link to="/" aria-label="На главную">
              <Logo className="opacity-90" />
            </Link>

            <div className="flex items-center gap-4">
              {[0, 1, 2].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10"
                  style={{ backgroundColor: tileBg }}
                  aria-label="Социальная сеть"
                >
                  <span className="h-3 w-3 rounded-full bg-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-white/90">Навигация</h3>
              <div className="mt-5 grid grid-cols-3 gap-8 text-sm text-white/70">
                <div className="space-y-3">
                  <Link className="block hover:text-white" to="/">
                    Главная
                  </Link>
                  <Link className="block hover:text-white" to="/about">
                    О компании
                  </Link>
                  <Link className="block hover:text-white" to="/expertise">
                    Виды экспертиз
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link className="block hover:text-white" to="/team">
                    Команда
                  </Link>
                  <Link className="block hover:text-white" to="/equipment">
                    Оборудование
                  </Link>
                  <Link className="block hover:text-white" to="/#projects">
                    Проекты
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link className="block hover:text-white" to="/#news">
                    Новости
                  </Link>
                  <Link className="block hover:text-white" to="/#contacts">
                    Контакты
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/90">Услуги</h3>
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <a className="block hover:text-white" href="#">
                  Исследование почерка и подписей
                </a>
                <a className="block hover:text-white" href="#">
                  Техническое исследование документов
                </a>
                <a className="block hover:text-white" href="#">
                  Автороведческое исследование
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="grid gap-10 py-10 lg:grid-cols-2">
          <div className="grid gap-3">
            <div className="text-sm font-semibold text-white/90">
              Судебно-экспертный отдел
            </div>
            <div className="text-sm text-white/70">
              г. Астана, ул.Оленті, 2/2
              <br />
              +7 705 413 12 57
              <br />
              forensic.kz@mail.ru
            </div>
          </div>

          <div className="grid gap-3">
            <div className="text-sm font-semibold text-white/90">
              Филиал в г.Алматы
            </div>
            <div className="text-sm text-white/70">
              г. Алматы, ул. Шевченко Nº133 Б
              <br />
              +7 747 198 48 48
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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

  return (
    <main className="min-h-screen text-white">
      <StarsBackground
        className="min-h-screen"
        starColor="var(--color-primary)"
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
