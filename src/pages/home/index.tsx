const heroBadges = ['Грация', 'Сила', 'Эмоции'];

const eventFacts = [
  { label: 'Дата и время', value: '01.05 · 17:00' },
  { label: 'Площадка', value: 'Барыс Арена, Алматы' },
  { label: 'Продолжительность', value: '2,5 часа живого шоу' },
];

const stars = [
  {
    name: 'Даниил Глейхенгауз',
    role: 'Постановщик программ',
    image:
      'https://static.tildacdn.com/tild3033-3030-4162-b332-336130643464/89F18050-E8BF-43A3-9.jpeg',
  },
  {
    name: 'Сергей Дудаков',
    role: 'Главный тренер',
    image:
      'https://static.tildacdn.com/tild3763-3562-4261-b533-653064343232/6204FCBD-2252-45CB-9.jpeg',
  },
  {
    name: 'Евгения Медведева',
    role: 'Двукратная чемпионка мира',
    image:
      'https://static.tildacdn.com/tild6362-3165-4634-a634-366330373965/44164402-41A2-4484-A.jpeg',
  },
  {
    name: 'Алина Загитова',
    role: 'Олимпийская чемпионка',
    image:
      'https://static.tildacdn.com/tild3435-6364-4666-b231-636362306236/15530058-F2AC-4322-A.jpeg',
  },
];

const reasons = [
  {
    title: 'Формат для всей семьи',
    text: 'Музыка, свет и ледовая пластика объединяют поколения зрителей.',
    image:
      'https://static.tildacdn.com/tild3961-3561-4731-a430-376531653035/1-4.png',
  },
  {
    title: 'Новая программа',
    text: 'Премьеры 2026 года с уникальными номерами и неожиданными дуэтами.',
    image:
      'https://static.tildacdn.com/tild3263-6639-4130-b736-623464366266/1-2.png',
  },
  {
    title: 'Живые эмоции',
    text: 'Каждая история рассказывается здесь и сейчас — без дублей и монтажа.',
    image:
      'https://static.tildacdn.com/tild6535-3038-4632-b238-633836616635/1-3.png',
  },
  {
    title: 'Звёздный состав',
    text: 'На одном льду выступают олимпийские чемпионы и юные таланты школы.',
    image:
      'https://static.tildacdn.com/tild6331-6131-4930-a533-613035343330/1-1.png',
  },
];

const timeline = [
  {
    title: 'Встреча гостей',
    time: '16:00',
    description: 'Фойе арены открывается за час до шоу: фотозона, мерч и бар.',
  },
  {
    title: 'I отделение',
    time: '17:00',
    description:
      'Премьерные сольные программы и дуэты ведущих фигуристов мира.',
  },
  {
    title: 'Антракт',
    time: '18:10',
    description:
      'Время, чтобы перевести дух, обсудить увиденное и сделать фото.',
  },
  {
    title: 'II отделение',
    time: '18:30',
    description: 'Большие массовые постановки, финал с участием всех звёзд.',
  },
];

const gallery = [
  {
    src: 'https://static.tildacdn.com/tild3033-3030-4162-b332-336130643464/89F18050-E8BF-43A3-9.jpeg',
    caption: 'Эмоции на льду',
  },
  {
    src: 'https://static.tildacdn.com/tild3763-3562-4261-b533-653064343232/6204FCBD-2252-45CB-9.jpeg',
    caption: 'Движение света и льда',
  },
  {
    src: 'https://static.tildacdn.com/tild6362-3165-4634-a634-366330373965/44164402-41A2-4484-A.jpeg',
    caption: 'Погружение в атмосферу',
  },
  {
    src: 'https://static.tildacdn.com/tild3435-6364-4666-b231-636362306236/15530058-F2AC-4322-A.jpeg',
    caption: 'Финальный аккорд',
  },
];

const heroPosterImages = {
  desktop:
    'https://optim.tildacdn.com/tild6436-3035-4263-b961-666533323638/-/format/webp/Mask_group.png.webp',
  mobile:
    'https://optim.tildacdn.com/tild3131-6162-4832-b637-356337613363/-/format/webp/Mask_group.png.webp',
};

const infoImage =
  'https://static.tildacdn.com/tild3963-3531-4363-b936-643132363764/FD29F7AE-0F3D-498B-9.jpeg';
const videoPreview =
  'https://static.tildacdn.com/tild6634-3766-4135-a639-323230373931/Frame_9.png';

const containerClass = 'mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8';
const eyebrowClass =
  'mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[#1847ff]';
const pillClass =
  'inline-flex items-center rounded-full border border-[#d7e1ff] bg-[rgba(24,71,255,0.08)] px-3 py-1 text-sm font-semibold text-[#1847ff]';
const primaryButtonClass =
  'inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1847ff] to-[#6290ff] px-7 py-3 font-semibold text-white shadow-[0_20px_45px_rgba(16,45,168,0.15)] transition-transform duration-200 hover:-translate-y-0.5';
const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur';

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#f6f8fd] pb-20 text-[#0c1420] sm:pb-24 lg:pb-28">
      <section
        id="hero"
        className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f6f8fd_0%,#f8fbff_70%,rgba(248,251,255,0))] pt-4 pb-14 sm:pt-16 sm:pb-16 lg:pt-20"
      >
        <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-60 bg-[linear-gradient(180deg,rgba(246,248,253,0)_0%,#f8fbff_70%)]" />
        <div
          className={`${containerClass} relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center`}
        >
          <div className="order-2 space-y-6 lg:order-1">
            <div
              className="hidden flex-wrap gap-3 sm:flex"
              aria-label="Основные ценности шоу"
            >
              {heroBadges.map((badge) => (
                <span key={badge} className={pillClass}>
                  {badge}
                </span>
              ))}
              <p className="rounded-[50px] bg-[#edededd5] p-[6px_12px] text-sm text-[#333333]">
                Все – на одном льду.
              </p>
            </div>

            <div className="space-y-5 uppercase">
              <h1 className="text-3xl leading-tight font-semibold text-[#0c1420] sm:text-4xl lg:text-[3.2rem]">
                Ледовое шоу команды Этери Тутберидзе&nbsp;— весенний тур 2026 в{' '}
                <span className="text-[#1847ff]">Алматы</span>
              </h1>
              <p className="text-base text-[#1d2b3f] sm:text-lg">
                Окунитесь в мир, где спорт становится искусством: номера,
                созданные специально для казахстанской сцены, зазвучат всего
                один вечер.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a className={primaryButtonClass} href="#tickets">
                Купить билет
              </a>
              <div className="text-sm font-semibold text-[#7a8699]">
                <p>01 мая · 17:00</p>
                <p>Барыс Арена</p>
              </div>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {eventFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[#e1e7f0] bg-white/70 p-4 backdrop-blur"
                >
                  <dt className="text-xs font-semibold tracking-[0.08em] text-[#7a8699] uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-[#0c1420]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="order-1 space-y-4 lg:order-2">
            <div
              className="min-h-[280px] overflow-hidden rounded-[28px] bg-white shadow-[0_20px_45px_rgba(16,45,168,0.15)] sm:min-h-[360px] lg:min-h-[460px] lg:rounded-4xl"
              role="presentation"
            >
              <picture className="block h-full w-full">
                <source
                  srcSet={heroPosterImages.mobile}
                  media="(max-width: 767px)"
                />
                <img
                  src={heroPosterImages.desktop}
                  alt="Tutberidze"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="-mt-16 rounded-t-4xl bg-[#f8fbff] pt-10 pb-14 shadow-[0_-30px_80px_rgba(16,45,168,0.08)] sm:-mt-20 sm:rounded-t-[36px] lg:-mt-24 lg:rounded-t-[48px]"
      >
        <div
          className={`${containerClass} grid gap-8 md:grid-cols-2 md:items-center`}
        >
          <div className="order-1 md:order-0">
            <img
              src={infoImage}
              alt="Хореографический номер"
              loading="lazy"
              className="w-full rounded-[28px] shadow-[0_20px_45px_rgba(16,45,168,0.15)]"
            />
          </div>
          <div className="order-2 space-y-4 text-[#1d2b3f] md:order-0">
            <p>
              Весной 2026 года легендарная команда Этери Тутберидзе выходит на
              лёд с новым грандиозным шоу, которое обещает стать главным
              событием сезона.
            </p>
            <p>
              На вас ждёт вечер, где каждая программа&nbsp;— маленькая история о
              мечтах, победах и вдохновении. Сложнейшие элементы сочетаются с
              хореографией, светом и музыкой, создавая магию, от которой
              невозможно отвести взгляд.
            </p>
            <p>
              Программа подготовлена специально для весеннего тура и будет
              показана только в нескольких городах. Алматы&nbsp;— один из них.
            </p>
          </div>
        </div>
      </section>

      <section id="video" className="py-16 text-center">
        <div className={containerClass}>
          <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_45px_rgba(16,45,168,0.15)]">
            <img
              src={videoPreview}
              alt="Превью шоу"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              aria-label="Смотреть ролик"
              className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1847ff]/90 text-2xl text-white"
            >
              ▶
            </button>
          </div>
          <p className="mt-4 text-[#7a8699]">
            2 минуты, чтобы почувствовать атмосферу
          </p>
        </div>
      </section>

      <section id="stars" className="py-16 text-center">
        <div className={containerClass}>
          <header className="mx-auto mb-10 max-w-2xl space-y-2">
            <p className={eyebrowClass}>Состав</p>
            <h2 className="text-3xl font-semibold">Главные звёзды льда</h2>
            <p className="text-[#7a8699]">
              На лед выходят чемпионы Олимпийских игр, мира и Европы, а также
              юные открытия школы «Хрустальный».
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stars.map((star) => (
              <article
                key={star.name}
                className="rounded-[20px] bg-white p-6 text-left shadow-[0_10px_30px_rgba(12,20,32,0.08)]"
              >
                <img
                  src={star.image}
                  alt={star.name}
                  loading="lazy"
                  className="mb-4 h-56 w-full rounded-[18px] object-cover"
                />
                <h3 className="text-lg font-semibold">{star.name}</h3>
                <p className="mt-1 text-[#7a8699]">{star.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reasons" className="py-16">
        <div className={containerClass}>
          <header className="mb-10 max-w-xl">
            <p className={eyebrowClass}>Эмоции</p>
            <h2 className="text-3xl font-semibold">Почему стоит пойти</h2>
          </header>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="flex items-center gap-4 rounded-3xl border border-[#e1e7f0] bg-white p-5 text-left shadow-sm transition-transform duration-200 hover:-translate-y-0.5 max-sm:flex-col max-sm:text-center"
              >
                <img
                  src={reason.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-1 text-[#1d2b3f]">{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="program"
        className="bg-[linear-gradient(180deg,rgba(24,71,255,0.05),transparent)] py-16"
      >
        <div
          className={`${containerClass} grid gap-8 md:grid-cols-2 md:items-start`}
        >
          <div>
            <p className={eyebrowClass}>Маршрут вечера</p>
            <h2 className="text-3xl font-semibold">Как проходит шоу</h2>
            <p className="mt-3 text-[#1d2b3f]">
              Лёд, свет и музыка объединяются в цельный спектакль. Приезжайте
              заранее, чтобы успеть насладиться атмосферой тура.
            </p>
          </div>
          <ol className="space-y-4 md:border-l-2 md:border-[rgba(24,71,255,0.2)] md:pl-6">
            {timeline.map((item) => (
              <li
                key={item.title}
                className="relative rounded-2xl border border-[#e1e7f0] p-4 text-left md:border-none md:p-0 md:pl-6"
              >
                <span className="absolute top-4 left-4 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#1847ff] shadow-[0_0_0_6px_rgba(24,71,255,0.15)] md:top-2 md:left-0 md:block" />
                <div className="text-sm font-bold tracking-[0.08em] text-[#1847ff] uppercase">
                  {item.time}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-[#1d2b3f]">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="gallery" className="py-16">
        <div className={containerClass}>
          <header className="mb-10 max-w-2xl">
            <p className={eyebrowClass}>Фото</p>
            <h2 className="text-3xl font-semibold">
              Как это было в прошлых городах
            </h2>
          </header>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {gallery.map((item) => (
              <figure
                key={item.caption}
                className="min-w-[70%] shrink-0 snap-center rounded-[20px] bg-white shadow-[0_12px_30px_rgba(12,20,32,0.08)] sm:min-w-0"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="h-60 w-full rounded-t-[20px] object-cover"
                />
                <figcaption className="px-4 py-3 font-semibold">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="tickets" className="py-16">
        <div
          className={`${containerClass} grid gap-8 rounded-[28px] bg-linear-to-br from-[#1847ff] to-[#102da8] p-8 text-white shadow-[0_25px_80px_rgba(16,45,168,0.25)] md:grid-cols-2`}
        >
          <div>
            <p className={`${eyebrowClass} text-white/80`}>Билеты в продаже</p>
            <h2 className="text-3xl leading-tight font-semibold">
              Не упустите шанс увидеть легендарных фигуристов вживую
            </h2>
            <p className="mt-4 text-white/80">
              Это больше, чем спорт. Это искусство на льду, созданное командой,
              которая вдохновляет целое поколение.
            </p>
            <a
              className={`${secondaryButtonClass} mt-4 inline-flex`}
              href="#hero"
            >
              Выбрать места
            </a>
          </div>
          <div className="rounded-[22px] border border-white/30 p-6 text-lg leading-relaxed text-white">
            <p className="text-2xl font-semibold">01.05 · 17:00</p>
            <p>Барыс Арена · Алматы</p>
            <p>Количество мест ограничено</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
