import guideDocUrl from '@/shared/assets/guide-1.docx?url';
import studentDocUrl from '@/shared/assets/student_doc_3.docx?url';

type Section = {
  title: string;
  description?: string;
  bullets?: string[];
};

const TOPIC_BULLETS = [
  'правовые и процессуальные аспекты судебной экспертизы;',
  'методология и практика экспертных исследований;',
  'анализ судебной практики и экспертных кейсов;',
  'отраслевые виды судебных экспертиз;',
  'международный опыт и стандарты в экспертной деятельности;',
  'цифровизация, автоматизация и применение искусственного интеллекта в экспертизе;',
  'профессиональные дискуссии и экспертные мнения.',
];

const ARCHITECTURE_SECTIONS: Section[] = [
  {
    title: 'I. Процессуальные вопросы',
    description:
      'Аналитика законодательных изменений, судебной практики, взаимодействия эксперта с участниками процесса, вопросов назначения, проведения и оценки экспертиз.',
  },
  {
    title: 'II. Практика судебной экспертизы',
    description:
      'Практико-ориентированные материалы, посвящённые применению методик, анализу реальных кейсов, обучению на практике, обзорам подходов и рекомендациям для экспертов.',
  },
  {
    title: 'III. Отраслевой интерес',
    description:
      'Материалы по отдельным видам судебных экспертиз, включая строительную, медицинскую, психолого-педагогическую, экономическую, экологическую, инженерную и иные специализированные направления.',
  },
  {
    title: 'IV. Экспертное мнение',
    description:
      'Авторские колонки, аналитические материалы, профессиональные дискуссии и полемика по актуальным вопросам экспертной деятельности.',
  },
  {
    title: 'V. Международная практика',
    description:
      'Обзоры зарубежных систем судебной экспертизы, международных стандартов (ISO, ENFSI и др.), участие экспертов в международных проектах, интервью и переводы ключевых исследований.',
  },
  {
    title: 'VI. Спецвыпуски и интервью номера',
    description:
      'Тематические выпуски, посвящённые отдельным отраслям или проблемам, а также интервью с ведущими экспертами, учёными, судьями и представителями государственных органов.',
  },
  {
    title: 'VII. Цифровизация и экспертиза',
    description:
      'Публикации о цифровых платформах, программных продуктах, электронных системах учёта, искусственном интеллекте, компьютерно-технической и киберэкспертизе, а также кейсы цифровой трансформации экспертных организаций.',
  },
];

const MATERIAL_REQUIREMENTS_BULLETS = [
  'соответствовать тематике журнала;',
  'иметь прикладную или методологическую ценность для экспертного сообщества;',
  'быть изложены в профессиональном, нейтральном и аргументированном стиле;',
  'соответствовать требованиям к оформлению и структуре статьи.',
];

const AUTHORS_INVITED_BULLETS = [
  'судебные эксперты различных направлений;',
  'представители экспертных организаций;',
  'научные сотрудники и преподаватели;',
  'представители юридического сообщества;',
  'разработчики методик, стандартов и цифровых решений в сфере экспертизы.',
];

const REVIEW_PROCESS_BULLETS = [
  'первичную редакционную оценку;',
  'проверку на оригинальность;',
  'рецензирование в соответствии с редакционной политикой журнала.',
];

const REVIEW_OUTCOMES_BULLETS = [
  'принят к публикации;',
  'принят с доработкой;',
  'направлен на существенную доработку;',
  'отклонён.',
];

export function ForAuthorsExpertusPolicySection() {
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
            Тематика журнала
          </h3>
          <p className="text-[18px] leading-6 font-normal tracking-[-0.26px] text-white/90">
            Журнал принимает материалы, посвящённые следующим направлениям:
          </p>
          <div className="space-y-2">
            {TOPIC_BULLETS.map((bullet) => (
              <p
                key={bullet}
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
            {ARCHITECTURE_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-2">
                <p className="text-[18px] leading-6 font-semibold tracking-[-0.26px] text-white">
                  {section.title}
                </p>
                {section.description ? (
                  <p className="text-[17px] leading-5.5 font-normal tracking-[-0.43px] text-[#c7c7cc]">
                    {section.description}
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
            {MATERIAL_REQUIREMENTS_BULLETS.map((bullet) => (
              <p
                key={bullet}
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
            {AUTHORS_INVITED_BULLETS.map((bullet) => (
              <p
                key={bullet}
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
            {REVIEW_PROCESS_BULLETS.map((bullet) => (
              <p
                key={bullet}
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
            {REVIEW_OUTCOMES_BULLETS.map((bullet) => (
              <p
                key={bullet}
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
