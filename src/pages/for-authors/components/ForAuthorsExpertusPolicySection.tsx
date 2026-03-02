import guideDocUrl from '@/shared/assets/guide-1.docx?url';
import studentDocUrl from '@/shared/assets/student_doc_3.docx?url';

import { useTranslation } from 'react-i18next';

function useList(t: any, key: string) {
  const value = t(key, { returnObjects: true });
  return Array.isArray(value) ? value : [];
}

export function ForAuthorsExpertusPolicySection() {
  const { t } = useTranslation();

  const generalAccepted = useList(t, 'forAuthors.sections.general.acceptedTypes');
  const generalRequirements = useList(
    t,
    'forAuthors.sections.general.materialRequirements'
  );
  const generalReview = useList(t, 'forAuthors.sections.general.reviewStages');

  const topics = useList(t, 'forAuthors.sections.topics.items');
  const structureItems = useList(t, 'forAuthors.sections.structure.items');
  const abstractItems = useList(t, 'forAuthors.sections.abstract.items');
  const referencesInText = useList(t, 'forAuthors.sections.references.inTextExamples');
  const referencesList = useList(t, 'forAuthors.sections.references.listRules');
  const visuals = useList(t, 'forAuthors.sections.visuals.items');
  const publicationLanguages = useList(
    t,
    'forAuthors.sections.publicationLanguages.items'
  );
  const ethics = useList(t, 'forAuthors.sections.ethics.authorDuties');
  const submissionContacts = useList(t, 'forAuthors.sections.submission.contacts');

  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="min-w-full text-center text-[34px] leading-10.25 font-bold tracking-[0.4px]">
          <span className="text-[#2e4ecf]">{t('forAuthors.titlePrefix')}</span>
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
            {t('forAuthors.sections.general.title')}
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.sections.general.intro')}
          </p>
          <div className="space-y-2">
            {generalAccepted.map((item, idx) => (
              <p key={`ga-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">
                • {String(item)}
              </p>
            ))}
          </div>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.sections.general.materialsMust')}
          </p>
          <div className="space-y-2">
            {generalRequirements.map((item, idx) => (
              <p key={`gr-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">
                • {String(item)}
              </p>
            ))}
          </div>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.sections.general.reviewLabel')}
          </p>
          <div className="space-y-2">
            {generalReview.map((item, idx) => (
              <p key={`gq-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">
                • {String(item)}
              </p>
            ))}
          </div>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            {t('forAuthors.sections.general.consentNote')}
          </p>
        </div>

        {[
          'topics',
          'manuscript',
          'structure',
          'abstract',
          'references',
          'visuals',
          'publicationLanguages',
          'originality',
          'ethics',
          'copyright',
          'submission',
        ].map((section) => (
          <div key={section} className="space-y-3">
            <h3 className="text-[22px] leading-7 font-semibold tracking-[0.6px] text-white uppercase">
              {t(`forAuthors.sections.${section}.title`)}
            </h3>
            <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
              {t(`forAuthors.sections.${section}.intro`)}
            </p>

            {section === 'topics' && (
              <div className="space-y-2">
                {topics.map((item, idx) => (
                  <p key={`t-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">• {String(item)}</p>
                ))}
              </div>
            )}

            {section === 'manuscript' && (
              <div className="space-y-3 text-[17px] leading-5.5 tracking-[-0.43px] text-[#c7c7cc]">
                <p>{t('forAuthors.sections.manuscript.volume')}</p>
                <p>{t('forAuthors.sections.manuscript.abstractVolume')}</p>
                <p>{t('forAuthors.sections.manuscript.minVolume')}</p>
                <p>{t('forAuthors.sections.manuscript.format')}</p>
                <p>{t('forAuthors.sections.manuscript.font')}</p>
                <p>{t('forAuthors.sections.manuscript.lineHeight')}</p>
                <p>{t('forAuthors.sections.manuscript.margins')}</p>
                <p>{t('forAuthors.sections.manuscript.indent')}</p>
                <p>{t('forAuthors.sections.manuscript.alignment')}</p>
                <p>{t('forAuthors.sections.manuscript.fileFormat')}</p>
              </div>
            )}

            {section === 'structure' && (
              <div className="space-y-2">
                {structureItems.map((item, idx) => (
                  <p key={`s-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">• {String(item)}</p>
                ))}
              </div>
            )}

            {section === 'abstract' && (
              <div className="space-y-2">
                {abstractItems.map((item, idx) => (
                  <p key={`a-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">• {String(item)}</p>
                ))}
              </div>
            )}

            {section === 'references' && (
              <>
                <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">{t('forAuthors.sections.references.gost')}</p>
                <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">{t('forAuthors.sections.references.inTextTitle')}</p>
                <div className="space-y-2">
                  {referencesInText.map((item, idx) => (
                    <p key={`r1-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">• {String(item)}</p>
                  ))}
                </div>
                <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">{t('forAuthors.sections.references.listTitle')}</p>
                <div className="space-y-2">
                  {referencesList.map((item, idx) => (
                    <p key={`r2-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">• {String(item)}</p>
                  ))}
                </div>
              </>
            )}

            {section === 'visuals' && (
              <div className="space-y-2">
                {visuals.map((item, idx) => (
                  <p key={`v-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">• {String(item)}</p>
                ))}
              </div>
            )}

            {section === 'publicationLanguages' && (
              <div className="space-y-2">
                {publicationLanguages.map((item, idx) => (
                  <p key={`pl-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">• {String(item)}</p>
                ))}
              </div>
            )}

            {section === 'ethics' && (
              <>
                <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">{t('forAuthors.sections.ethics.dutiesLabel')}</p>
                <div className="space-y-2">
                  {ethics.map((item, idx) => (
                    <p key={`e-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">• {String(item)}</p>
                  ))}
                </div>
                <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">{t('forAuthors.sections.ethics.editorialRight')}</p>
              </>
            )}

            {section === 'submission' && (
              <>
                <div className="space-y-2">
                  {submissionContacts.map((item, idx) => (
                    <p key={`c-${idx}`} className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">{String(item)}</p>
                  ))}
                </div>
                <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">{t('forAuthors.sections.submission.deadline')}</p>
              </>
            )}
          </div>
        ))}

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
