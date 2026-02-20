import guideDocUrl from '@/shared/assets/guide-1.docx?url';
import studentDocUrl from '@/shared/assets/student_doc_3.docx?url';

import { useTranslation } from 'react-i18next';

type Section = {
  titleKey: string;
  descriptionKey?: string;
  bullets?: string[];
};

export function ForAuthorsExpertusPolicySection() {
  const { t } = useTranslation();

  const topicBullets: string[] = t('forAuthors.policy', { returnObjects: true })
    ? Object.keys(t('forAuthors.policy', { returnObjects: true })).map((k) =>
        t(`forAuthors.policy.${k}`)
      )
    : [];

  const architecture =
    t('forAuthors.architecture', { returnObjects: true }) || {};

  const materialRequirements: string[] = t('forAuthors.materialRequirements', {
    returnObjects: true,
  })
    ? Object.keys(
        t('forAuthors.materialRequirements', { returnObjects: true })
      ).map((k) => t(`forAuthors.materialRequirements.${k}`))
    : [];

  const authorsInvited: string[] = t('forAuthors.authorsInvited', {
    returnObjects: true,
  })
    ? Object.keys(t('forAuthors.authorsInvited', { returnObjects: true })).map(
        (k) => t(`forAuthors.authorsInvited.${k}`)
      )
    : [];

  const reviewProcess: string[] = t('forAuthors.reviewProcess', {
    returnObjects: true,
  })
    ? Object.keys(t('forAuthors.reviewProcess', { returnObjects: true })).map(
        (k) => t(`forAuthors.reviewProcess.${k}`)
      )
    : [];

  const reviewOutcomes: string[] = t('forAuthors.reviewOutcomes', {
    returnObjects: true,
  })
    ? Object.keys(t('forAuthors.reviewOutcomes', { returnObjects: true })).map(
        (k) => t(`forAuthors.reviewOutcomes.${k}`)
      )
    : [];

  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">РУКОВОДСТВО ДЛЯ АВТОРОВ</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-semibold tracking-[-0.26px] text-white">
          Научно-практический журнал «EXPERTUS»
        </p>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          Научно-практический журнал «EXPERTUS» — официальное издание ТОО
          «Альянс независимой судебной экспертизы» — является профессиональной
          площадкой для обмена опытом, анализа практики и развития методологии
          судебной экспертизы в Республике Казахстан и за рубежом.
        </p>
        <p className="w-full max-w-200 text-[20px] leading-6.5 font-normal tracking-[-0.26px] text-white/90">
          Журнал ориентирован на практикующих судебных экспертов, представителей
          экспертных организаций, научных сотрудников, юристов и разработчиков
          методик в сфере экспертной деятельности.
        </p>
      </div>

      <div className="mx-auto mt-12 w-full max-w-200 space-y-10 text-center">
        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            {t('forAuthors.title')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.topicIntro')}
          </p>
          <div className="space-y-2">
            {topicBullets.map((bullet, idx) => (
              <p
                key={String(idx)}
                className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]"
              >
                • {bullet}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            Архитектура и разделы журнала
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            Материалы принимаются в рамках следующих разделов:
          </p>

          <div className="space-y-6">
            {Object.keys(architecture).map((k) => (
              <div key={k} className="space-y-2">
                <p className="text-[18px] leading-6 font-semibold tracking-[-0.26px] text-white">
                  {t(`forAuthors.architecture.${k}.title`)}
                </p>
                {t(`forAuthors.architecture.${k}.description`) ? (
                  <p className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">
                    {t(`forAuthors.architecture.${k}.description`)}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            Требования к материалам
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            К публикации принимаются оригинальные материалы, ранее не
            опубликованные и не находящиеся на рассмотрении в других изданиях.
          </p>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            Материалы должны:
          </p>
          <div className="space-y-2">
            {materialRequirements.map((bullet, idx) => (
              <p
                key={String(idx)}
                className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]"
              >
                • {bullet}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            Авторы
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            К публикации приглашаются:
          </p>
          <div className="space-y-2">
            {authorsInvited.map((bullet, idx) => (
              <p
                key={String(idx)}
                className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]"
              >
                • {bullet}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            Порядок рассмотрения материалов
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            Все поступающие материалы проходят:
          </p>
          <div className="space-y-2">
            {reviewProcess.map((bullet, idx) => (
              <p
                key={String(idx)}
                className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]"
              >
                • {bullet}
              </p>
            ))}
          </div>

          <p className="mt-4 text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            По результатам рассмотрения материал может быть:
          </p>
          <div className="space-y-2">
            {reviewOutcomes.map((bullet, idx) => (
              <p
                key={String(idx)}
                className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]"
              >
                • {bullet}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            Авторские права
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            Авторы сохраняют авторские права на свои материалы. Журнал получает
            право первой публикации и распространения материала с обязательным
            указанием авторства.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            Подача материалов
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            Материалы направляются в редакцию журнала по электронной почте:
          </p>
          <p className="text-[18px] leading-6 font-semibold tracking-[-0.26px] text-white">
            📧 ansesykz@gmail.com
          </p>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            Срок подачи материалов в текущий номер — до 28 марта 2026 года.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            Заключение
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            Редакция журнала «EXPERTUS» приветствует профессиональный диалог,
            обмен практическим опытом и вклад авторов в развитие судебной
            экспертизы и экспертного сообщества.
          </p>
        </div>

        <div className="pt-4">
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={guideDocUrl}
              download
              className="inline-flex items-center justify-center rounded-xl bg-[#2e4ecf] px-5 py-3 text-[15px] leading-5 font-semibold tracking-[-0.23px] text-white transition-colors hover:bg-[#2643b6] focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:outline-none"
            >
              Скачать руководство (DOCX)
            </a>
            <a
              href={studentDocUrl}
              download
              className="inline-flex items-center justify-center rounded-xl border border-[#2e4ecf] bg-[rgba(46,78,207,0.12)] px-5 py-3 text-[15px] leading-5 font-semibold tracking-[-0.23px] text-white transition-colors hover:bg-[rgba(46,78,207,0.22)] focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:outline-none"
            >
              Скачать шаблон (DOCX)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
