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
          <span className="text-[#2e4ecf]">
            {t('forAuthors.titlePrefix', '')}
          </span>
          <span className="text-white">{t('forAuthors.title')}</span>
        </h2>
        <p className="w-full max-w-200 text-[22px] leading-7 font-semibold tracking-[-0.26px] text-white">
          {t('forAuthors.journalName')}
        </p>
        <p className="w-full max-w-200 text-[22px] leading-7 font-normal tracking-[-0.26px] text-white">
          {t('forAuthors.lead')}
        </p>
        <p className="w-full max-w-200 text-[20px] leading-6.5 font-normal tracking-[-0.26px] text-white/90">
          {t('forAuthors.audience')}
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
            {t('forAuthors.architectureTitle')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.architectureIntro')}
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
            {t('forAuthors.requirementsTitle')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.requirementsIntro')}
          </p>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.materialsShould')}
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
            {t('forAuthors.authorsTitle')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.authorsIntro')}
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
            {t('forAuthors.reviewProcessTitle')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.reviewProcessIntro')}
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
            {t('forAuthors.copyrightTitle')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.copyrightText')}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            {t('forAuthors.submissionTitle')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.submissionContactIntro')}
          </p>
          <p className="text-[18px] leading-6 font-semibold tracking-[-0.26px] text-white">
            {t('forAuthors.contactEmail')}
          </p>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.deadline')}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
            {t('forAuthors.conclusionTitle')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.conclusionText')}
          </p>
        </div>

        <div className="pt-4">
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={guideDocUrl}
              download
              className="inline-flex items-center justify-center rounded-xl bg-[#2e4ecf] px-5 py-3 text-[15px] leading-5 font-semibold tracking-[-0.23px] text-white transition-colors hover:bg-[#2643b6] focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:outline-none"
            >
              {t('forAuthors.downloads.guide')}
            </a>
            <a
              href={studentDocUrl}
              download
              className="inline-flex items-center justify-center rounded-xl border border-[#2e4ecf] bg-[rgba(46,78,207,0.12)] px-5 py-3 text-[15px] leading-5 font-semibold tracking-[-0.23px] text-white transition-colors hover:bg-[rgba(46,78,207,0.22)] focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:outline-none"
            >
              {t('forAuthors.downloads.template')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
