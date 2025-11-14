import { forwardRef } from 'react';

interface HeroBlockProps {}

const HeroBlock = (props: HeroBlockProps) => {
  // const { onViewportEnter } = props;
  // const { t } = useTranslation('homePage');
  // const controlPhoneBackground = useAnimationControls();
  // const controlPhone = useAnimationControls();
  // const controlLines = useAnimationControls();
  // const controlBanner = useAnimationControls();
  // const isDesktop = window.innerWidth >= 768;

  // const firstStage = useCallback(async () => {
  //   await controlPhoneBackground.start('animated');
  // }, [controlPhoneBackground]);

  // const secondStage = useCallback(async () => {
  //   return new Promise<void>((resolve) => {
  //     controlLines.start('animated');
  //     controlPhone.start('animated');
  //     resolve();
  //   });
  // }, [controlLines, controlPhone]);

  // const thirdStage = useCallback(async () => {
  //   await controlBanner.start('animated');
  // }, [controlBanner]);

  // const startAnimation = useCallback(async () => {
  //   await firstStage();
  //   await secondStage();
  //   await thirdStage();
  // }, [firstStage, secondStage, thirdStage]);

  // useEffect(() => {
  //   startAnimation();
  // }, [startAnimation]);

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                     render                                     ||
  // ! ||--------------------------------------------------------------------------------||

  return (
    <section className="py-8 lg:py-16">
      <div className="container flex flex-col items-center gap-8 lg:flex-row">
        <img
          src="/assets/coach-team.jpg"
          alt="Команда тренеров"
          className="w-full rounded-lg lg:w-1/3"
        />

        {/* Текстовая часть */}
        <div className="flex-1">
          {/* Теги-лейблы */}
          <div className="mb-4 flex gap-2">
            <span className="tag">Грация</span>
            <span className="tag">Сила</span>
            <span className="tag">Эмоции</span>
          </div>

          {/* Заголовок */}
          <h1 className="mb-4 text-3xl leading-tight font-bold md:text-4xl">
            Ледовое шоу&nbsp;команды&nbsp;Этери&nbsp;Тутберидзе — весенний
            тур 2026 в<span className="text-(--color-secondary)">Алматы</span>
          </h1>

          {/* Подзаголовок */}
          <p className="mb-6 text-base text-(--color-gray-text)">
            Окунитесь в мир, где спорт становится искусством
          </p>

          {/* Кнопка и информация о дате/месте */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#tickets" className="btn-primary">
              Купить билет
            </a>
            <div className="text-sm leading-tight text-(--color-gray-text)">
              <div>01.05 – 17:00</div>
              <div>Барыс Арена</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
