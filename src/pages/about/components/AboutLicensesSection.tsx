import licenceimg from '@/shared/assets/imgs/certificate.png';
import { cn } from '@/shared/lib/utils';
import { GLASS_CARD_CLASS } from '../about.constants';

export function AboutLicensesSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">Лицензии и </span>
          <span className="text-white">свидетельства</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          АНСЭ обладает всеми необходимыми лицензиями и сертификатами для
          проведения частных судебных экспертиз на территории Республики
          Казахстан.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <img src={licenceimg} alt="Certificate" />
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Свидетельство о государственной регистрации
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Выдано Министерством юстиции Республики Казахстан
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <img src={licenceimg} alt="Certificate" />
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Лицензия на право проведения судебных экспертиз
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Разрешение на проведение полного спектра криминалистических и
            технических экспертиз
          </p>
        </div>

        <div className={cn('flex flex-col gap-4 p-6', GLASS_CARD_CLASS)}>
          <img src={licenceimg} alt="Certificate" />
          <h3 className="text-[24px] leading-8 font-semibold text-white">
            Сертификаты экспертов
          </h3>
          <p className="text-[17px] leading-5.5 text-[#c7c7cc]">
            Все эксперты прошли аттестацию и имеют квалификационные сертификаты
          </p>
        </div>
      </div>
    </section>
  );
}
