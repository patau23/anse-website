import { Link, useLocation } from 'react-router-dom';

import { Logo } from '@/shared/components/logo';
import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import clsx from 'clsx';

export function Header() {
  const location = useLocation();

  const isActive = (path: string, hash?: string) => {
    if (hash) {
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === path;
  };

  const getLinkClass = (path: string, hash?: string) => {
    const baseClass =
      'px-3 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]';

    if (isActive(path, hash)) {
      return `${baseClass} text-(--color-primary) border-b-2 border-(--color-primary)`;
    }

    return `${baseClass} text-white/80 hover:text-white`;
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className={PAGE_CONTAINER_CLASS}>
        <div
          className={clsx(
            'mt-6 flex h-17.5 justify-between rounded-xl border border-t-2 border-white/10 border-t-[#2E4ECF] bg-[rgba(46,78,207,0.12)] p-[16px_16px_16px_32px] px-8 shadow-[inset_0_4px_40px_-14.024px_rgba(27,57,178,0.52)] backdrop-blur-[2px]',
            'items-center gap-3 self-stretch'
          )}
        >
          <nav className="flex items-center gap-2">
            <Link className={getLinkClass('/about')} to="/about">
              О компании
            </Link>
            <Link className={getLinkClass('/for-authors')} to="/for-authors">
              Для авторов
            </Link>
            <Link className={getLinkClass('/expertise')} to="/expertise">
              Виды экспертиз
            </Link>
            {/* <Link className={getLinkClass('/team')} to="/team">
              Команда
            </Link> */}
          </nav>

          <div className="flex items-center justify-center">
            <Link to="/" aria-label="На главную">
              <Logo className="opacity-90" />
            </Link>
          </div>

          <nav className="flex items-center gap-2">
            {/* <Link className={getLinkClass('/equipment')} to="/equipment">
              Оборудование
            </Link> */}
            <Link className={getLinkClass('/', '#projects')} to="/#projects">
              Проекты
            </Link>
            <Link className={getLinkClass('/', '#contacts')} to="/#contacts">
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
