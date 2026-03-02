import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TwoGis from '@/shared/assets/icons/socials/2gis.svg?react';
import Inst from '@/shared/assets/icons/socials/inst-icon.svg?react';
import Wp from '@/shared/assets/icons/socials/whatsapp-outlined.svg?react';
import { Logo } from '@/shared/components/logo';
import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';

const SocialLinks = [
  {
    key: 'instagram',
    href: 'https://www.instagram.com/ansesykz?igsh=azBoMHNza3Z4bmJp ',
    label: 'Instagram',
    icon: <Inst className="" />,
  },
  {
    key: 'whatsapp',
    href: 'https://api.whatsapp.com/send/?phone=77770137773&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0 ',
    label: 'WhatsApp',
    icon: <Wp className="" />,
  },
  {
    key: '2gis',
    href: 'https://2gis.kz/astana/firm/70000001051171977?m=71.402814%2C51.109861%2F16 ',
    label: '2GIS',
    icon: <TwoGis className="" />,
  },
];

export function Footer() {
  const { t } = useTranslation();
  const tileBg = 'color-mix(in srgb, var(--color-primary) 18%, transparent)';

  return (
    <footer
      id="contacts"
      className="relative border-t border-white/10 bg-black/30 backdrop-blur-md"
    >
      <div className={PAGE_CONTAINER_CLASS}>
        <div className="grid gap-10 py-10 lg:grid-cols-[224px_1fr]">
          <div className="space-y-4">
            <Link to="/" aria-label={t('aria.home')}>
              <Logo className="opacity-90" />
            </Link>

            <div className="flex items-center gap-4">
              {SocialLinks.map(({ key, href, icon }) => (
                <a
                  key={key}
                  href={href}
                  className="flex h-16 w-16 items-center justify-center gap-2.5 rounded-2xl bg-[#2E4ECF] p-[12px_16px]"
                  style={{ backgroundColor: tileBg }}
                  aria-label={t('aria.social')}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-white/90">
                {t('footer.navigationTitle')}
              </h3>
              <div className="mt-5 grid grid-cols-3 gap-8 text-sm text-white/70">
                <div className="space-y-3">
                  <Link className="block hover:text-white" to="/">
                    {t('nav.home')}
                  </Link>
                  <Link className="block hover:text-white" to="/about">
                    {t('nav.about')}
                  </Link>
                  <Link className="block hover:text-white" to="/expertise">
                    {t('nav.expertise')}
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link className="block hover:text-white" to="/team">
                    {t('nav.team')}
                  </Link>
                  <Link className="block hover:text-white" to="/equipment">
                    {t('nav.equipment')}
                  </Link>
                  <Link className="block hover:text-white" to="/#projects">
                    {t('nav.projects')}
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link className="block hover:text-white" to="/#contacts">
                    {t('nav.contacts')}
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/90">
                {t('footer.servicesTitle')}
              </h3>
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <a className="block hover:text-white" href="#">
                  {t('footer.services.handwriting')}
                </a>
                <a className="block hover:text-white" href="#">
                  {t('footer.services.technicalDocuments')}
                </a>
                <a className="block hover:text-white" href="#">
                  {t('footer.services.authorStudy')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="grid gap-10 py-10 lg:grid-cols-2">
          <div className="grid gap-3">
            <div className="text-sm font-semibold text-white/90">
              {t('footer.contact.department')}
            </div>
            <div className="text-sm text-white/70">
              {t('footer.contact.address')}
              <br />
              {t('footer.contact.phone')}
              <br />
              {t('footer.contact.email')}
            </div>
          </div>

          {/* <div className="grid gap-3">
            <div className="text-sm font-semibold text-white/90">
              Филиал в г.Алматы
            </div>
            <div className="text-sm text-white/70">
              г. Алматы, ул. Шевченко Nº133 Б
              <br />
              +7 747 198 48 48
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
