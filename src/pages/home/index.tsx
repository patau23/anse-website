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
    image: 'https://static.tildacdn.com/tild3961-3561-4731-a430-376531653035/1-4.png',
  },
  {
    title: 'Новая программа',
    text: 'Премьеры 2026 года с уникальными номерами и неожиданными дуэтами.',
    image: 'https://static.tildacdn.com/tild3263-6639-4130-b736-623464366266/1-2.png',
  },
  {
    title: 'Живые эмоции',
    text: 'Каждая история рассказывается здесь и сейчас — без дублей и монтажа.',
    image: 'https://static.tildacdn.com/tild6535-3038-4632-b238-633836616635/1-3.png',
  },
  {
    title: 'Звёздный состав',
    text: 'На одном льду выступают олимпийские чемпионы и юные таланты школы.',
    image: 'https://static.tildacdn.com/tild6331-6131-4930-a533-613035343330/1-1.png',
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
    description: 'Премьерные сольные программы и дуэты ведущих фигуристов мира.',
  },
  {
    title: 'Антракт',
    time: '18:10',
    description: 'Время, чтобы перевести дух, обсудить увиденное и сделать фото.',
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

const infoImage =
  'https://static.tildacdn.com/tild3963-3531-4363-b936-643132363764/FD29F7AE-0F3D-498B-9.jpeg';
const videoPreview =
  'https://static.tildacdn.com/tild6634-3766-4135-a639-323230373931/Frame_9.png';

const LandingPage = () => {
  return (
    <main className="page">
      <section className="hero" id="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">ICE SHOW · 2026 TOUR</p>
            <div className="hero__tags" aria-label="Основные ценности шоу">
              {heroBadges.map((badge) => (
                <span key={badge} className="pill">
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="hero__headline">
              Ледовое шоу команды Этери Тутберидзе&nbsp;— весенний тур 2026 в{' '}
              <span>Алматы</span>
            </h1>
            <p className="hero__lead">
              Окунитесь в мир, где спорт становится искусством: номера, созданные
              специально для казахстанской сцены, зазвучат всего один вечер.
            </p>
            <div className="hero__cta">
              <a className="btn-primary" href="#tickets">
                Купить билет
              </a>
              <div className="hero__cta-details">
                <p>01 мая · 17:00</p>
                <p>Барыс Арена</p>
              </div>
            </div>
            <dl className="hero__facts">
              {eventFacts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero__media">
            <div className="hero__poster" role="presentation">
              <img src={infoImage} alt="Команда на льду" loading="lazy" />
            </div>
            <p className="hero__note">Лимитированное шоу. Мест немного.</p>
          </div>
        </div>
      </section>

      <section className="story" id="about">
        <div className="container story__grid">
          <div className="story__media">
            <img src={infoImage} alt="Хореографический номер" loading="lazy" />
          </div>
          <div className="story__content">
            <p>
              Весной 2026 года легендарная команда Этери Тутберидзе выходит на лёд
              с новым грандиозным шоу, которое обещает стать главным событием
              сезона.
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

      <section className="video" id="video">
        <div className="container">
          <div className="video__frame">
            <img src={videoPreview} alt="Превью шоу" loading="lazy" />
            <button className="video__play" type="button" aria-label="Смотреть ролик">
              ▶
            </button>
          </div>
          <p className="video__caption">2 минуты, чтобы почувствовать атмосферу</p>
        </div>
      </section>

      <section className="stars" id="stars">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Состав</p>
            <h2>Главные звёзды льда</h2>
            <p>
              На лед выходят чемпионы Олимпийских игр, мира и Европы, а также юные
              открытия школы «Хрустальный».
            </p>
          </header>
          <div className="stars__list" role="list">
            {stars.map((star) => (
              <article key={star.name} className="star-card" aria-label={star.name}>
                <img src={star.image} alt={star.name} loading="lazy" />
                <div>
                  <h3>{star.name}</h3>
                  <p>{star.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reasons" id="reasons">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Эмоции</p>
            <h2>Почему стоит пойти</h2>
          </header>
          <div className="reasons__grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="reason-card">
                <img src={reason.image} alt="" aria-hidden="true" loading="lazy" />
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="program" id="program">
        <div className="container program__grid">
          <div>
            <p className="eyebrow">Маршрут вечера</p>
            <h2>Как проходит шоу</h2>
            <p>
              Лёд, свет и музыка объединяются в цельный спектакль. Приезжайте
              заранее, чтобы успеть насладиться атмосферой тура.
            </p>
          </div>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.title}>
                <div className="timeline__time">{item.time}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="container">
          <header className="section-heading">
            <p className="eyebrow">Фото</p>
            <h2>Как это было в прошлых городах</h2>
          </header>
          <div className="gallery__track">
            {gallery.map((item) => (
              <figure key={item.caption}>
                <img src={item.src} alt={item.caption} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="tickets">
        <div className="container cta__content">
          <div>
            <p className="eyebrow">Билеты в продаже</p>
            <h2>Не упустите шанс увидеть легендарных фигуристов вживую</h2>
            <p>
              Это больше, чем спорт. Это искусство на льду, созданное командой,
              которая вдохновляет целое поколение.
            </p>
            <a className="btn-secondary" href="#hero">
              Выбрать места
            </a>
          </div>
          <div className="cta__details">
            <p className="cta__date">01.05 · 17:00</p>
            <p>Барыс Арена · Алматы</p>
            <p>Количество мест ограничено</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
