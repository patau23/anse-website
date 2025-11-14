const LandingPage = () => {
  return (
    <>
      {/* Герой‑секция */}
      <section className="py-8 lg:py-16">
        <div className="container flex flex-col items-center gap-8 lg:flex-row">
          {/* Фото тренеров */}
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
              тур 2026 в&nbsp;
              <span className="text-(--color-secondary)">Алматы</span>
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

      {/* Описание шоу */}
      <section>
        <div className="xl:grid-cols-md-2 container grid grid-cols-1 items-center gap-8">
          <img
            src="/assets/skaters.jpg"
            alt="Фигуристы"
            className="w-full rounded-lg"
          />
          <div className="space-y-4">
            <p>
              Весной 2026 года легендарная команда Этери Тутберидзе выходит
              на лёд с новым грандиозным шоу, которое обещает стать главным
              спортивно‑эмоциональным событием сезона.
            </p>
            <p>
              На вас ждёт вечер, где каждая программа — маленькая история о
              мечтах, победах и вдохновении.
            </p>
            <p>
              Сложнейшие элементы сочетаются с хореографией, светом и музыкой,
              создавая магию, от которой невозможно отвести взгляд.
            </p>
          </div>
        </div>
      </section>

      {/* Видео-блок */}
      <section className="bg-(--color-light-bg)">
        <div className="container text-center">
          <div className="relative mb-6 h-0 w-full overflow-hidden rounded-lg pb-[56.25%]">
            <img
              src="/assets/video-preview.jpg"
              alt="Превью видео"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <button
              type="button"
              className="bg-opacity-90 absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-(--color-primary) text-2xl text-white"
            >
              ▶
            </button>
          </div>
          <a href="#tickets" className="btn-secondary inline-block">
            Купить билет
          </a>
        </div>
      </section>

      {/* Главные звёзды льда */}
      <section>
        <div className="container">
          <h2 className="mb-4 text-xl font-bold">Главные звёзды льда</h2>
          <div className="horizontal-scroll">
            {/* Карточка звезды */}
            <div className="card min-w-[70%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[24%]">
              <img
                src="/assets/star1.jpg"
                alt="Даниил Глейхенгауз"
                className="card-img"
              />
              <div className="bg-(--color-primary) p-2 text-center text-white">
                Даниил Глейхенгауз
              </div>
            </div>
            {/* Повторение карточек для других звёзд */}
            <div className="card min-w-[70%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[24%]">
              <img
                src="/assets/star2.jpg"
                alt="Сергей Дудаков"
                className="card-img"
              />
              <div className="bg-(--color-primary) p-2 text-center text-white">
                Сергей Дудаков
              </div>
            </div>
            <div className="card min-w-[70%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[24%]">
              <img
                src="/assets/star3.jpg"
                alt="Евгения Медведева"
                className="card-img"
              />
              <div className="bg-(--color-primary) p-2 text-center text-white">
                Евгения Медведева
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему стоит пойти */}
      <section className="bg-(--color-light-bg)">
        <div className="container">
          <h2 className="mb-6 text-xl font-bold">Почему стоит пойти</h2>
          <div className="md:grid-cols-md-2 grid grid-cols-1 gap-6">
            {/* Первая причина */}
            <div className="card">
              <img
                src="/assets/reason1.jpg"
                alt="Формат для всей семьи"
                className="card-img"
              />
              <div className="card-body">
                <h3 className="mb-2 font-semibold">Формат для всей семьи</h3>
                <p className="text-(--color-gray-text)">
                  Это шоу вдохновит и детей, и взрослых.
                </p>
              </div>
            </div>
            {/* Вторая причина */}
            <div className="card">
              <img
                src="/assets/reason2.jpg"
                alt="Новая программа"
                className="card-img"
              />
              <div className="card-body">
                <h3 className="mb-2 font-semibold">Новая программа</h3>
                <p className="text-(--color-gray-text)">
                  Музыка, свет, костюмы и постановки создают атмосферу
                  праздника.
                </p>
              </div>
            </div>
            {/* Третья причина */}
            <div className="card">
              <img
                src="/assets/reason3.jpg"
                alt="Живые эмоции"
                className="card-img"
              />
              <div className="card-body">
                <h3 className="mb-2 font-semibold">Живые эмоции</h3>
                <p className="text-(--color-gray-text)">
                  Всё, что вы видели на экранах, теперь в реальности — на
                  расстоянии вытянутой руки.
                </p>
              </div>
            </div>
            {/* Четвертая причина */}
            <div className="card">
              <img
                src="/assets/reason4.jpg"
                alt="Звёздный состав"
                className="card-img"
              />
              <div className="card-body">
                <h3 className="mb-2 font-semibold">Звёздный состав</h3>
                <p className="text-(--color-gray-text)">
                  Олимпийские чемпионы и юные таланты – на одном льду.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея / Слайдер */}
      <section>
        <div className="container">
          <div className="horizontal-scroll">
            <img
              src="/assets/gallery1.jpg"
              alt="Кадр из шоу"
              className="card-img min-w-[80%] sm:min-w-[50%] lg:min-w-[25%]"
            />
            <img
              src="/assets/gallery2.jpg"
              alt="Зрители на арене"
              className="card-img min-w-[80%] sm:min-w-[50%] lg:min-w-[25%]"
            />
            <img
              src="/assets/gallery3.jpg"
              alt="Танец на льду"
              className="card-img min-w-[80%] sm:min-w-[50%] lg:min-w-[25%]"
            />
            {/* Можно добавить ещё изображения */}
          </div>
        </div>
      </section>

      {/* Финальный блок c призывом */}
      <section className="cta py-16 text-center">
        <div className="container">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Не упустите шанс увидеть легендарных фигуристов вживую
          </h2>
          <p className="mb-4">
            Это больше, чем спорт. Это — искусство на льду.
          </p>
          <p className="mb-6 font-semibold">
            Это — ледовое шоу команды Этери Тутберидзе
          </p>
          <a
            href="#tickets"
            className="btn-primary mb-4 inline-block w-full max-w-xs"
          >
            Купить билет
          </a>
          <div className="text-base">
            01.05 – 17:00 &nbsp;•&nbsp; Барыс Арена
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
