import { Link, useLocation } from 'react-router-dom';

import { Logo } from '@/shared/components/logo';
import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();
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

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem('lang', lng);
    } catch (e) {}
  };

  const isDev = typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.MODE === 'development';

  const showKeys = (() => {
    try {
      return localStorage.getItem('i18n.showKeys') === 'true';
    } catch (e) {
      return false;
    }
  })();

  const toggleShowKeys = (v: boolean) => {
    try {
      localStorage.setItem('i18n.showKeys', v ? 'true' : 'false');
    } catch (e) {}
    // trigger react-i18next to re-render translations
    try {
      i18n.emit('languageChanged', i18n.language);
    } catch (e) {}
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
              {t('nav.about')}
            </Link>
            <Link className={getLinkClass('/for-authors')} to="/for-authors">
              {t('nav.forAuthors')}
            </Link>
            <Link className={getLinkClass('/expertise')} to="/expertise">
              {t('nav.expertise')}
            </Link>
          </nav>

          <div className="flex items-center justify-center">
            <Link to="/" aria-label={t('aria.home')}>
              <Logo className="opacity-90" />
            </Link>
          </div>

          <nav className="flex items-center gap-2">
            <Link className={getLinkClass('/', '#projects')} to="/#projects">
              {t('nav.projects')}
            </Link>
            <Link className={getLinkClass('/', '#contacts')} to="/#contacts">
              {t('nav.contacts')}
            </Link>

            <div className="ml-4 flex items-center gap-2">
              <label className="sr-only">Language</label>
              <select
                aria-label="Language selector"
                value={i18n.language}
                onChange={(e) => changeLang(e.target.value)}
                className="rounded bg-white/10 px-2 py-1 text-sm text-white"
              >
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="kk">KK</option>
              </select>
              {isDev && (
                <label className="ml-3 flex items-center gap-2 text-sm text-white/80">
                  <input
                    type="checkbox"
                    checked={showKeys}
                    onChange={(e) => toggleShowKeys(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span>Keys (dev)</span>
                </label>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
