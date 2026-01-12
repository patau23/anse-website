import { Link } from 'react-router-dom';

import { Logo } from '@/shared/components/logo';
import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import Inst from '@/shared/assets/icons/socials/inst-icon.svg?react';
import Vk from '@/shared/assets/icons/socials/vk-icon.svg?react';
import Tg from '@/shared/assets/icons/socials/tg-icon.svg?react';

const SocialLinks = [
  {
    key: 'instagram',
    href: '#',
    label: 'Instagram',
    icon: <Inst className="" />,
  },
  {
    key: 'vk',
    href: '#',
    label: 'VK',
    icon: <Vk className="" />,
  },
  {
    key: 'telegram',
    href: '#',
    label: 'Telegram',
    icon: <Tg className="" />,
  },
];

export function Footer() {
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
              {SocialLinks.map(({ key, href, icon }) => (
                <a
                  key={key}
                  href={href}
                  className="flex h-16 w-16 items-center justify-center gap-2.5 rounded-2xl bg-[#2E4ECF] p-[12px_16px]"
                  style={{ backgroundColor: tileBg }}
                  aria-label="Социальная сеть"
                >
                  {icon}
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
