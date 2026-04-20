import authorPhoto from './assets/photo_2020-08-05_22-19-35.jpg'
import {
  background,
  deliverables,
  fit,
  markers,
  profile,
  strengths,
} from './content'

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="button-icon"
      fill="none"
    >
      <path
        d="M21.5 4.5L18.4 19.1C18.17 20.14 17.58 20.39 16.7 19.9L11.98 16.42L9.7 18.62C9.45 18.87 9.24 19.08 8.76 19.08L9.1 14.27L17.86 6.35C18.24 6.01 17.78 5.82 17.28 6.15L6.45 12.97L1.79 11.51C0.78 11.19 0.76 10.49 2 10L20.19 2.99C21.04 2.68 21.78 3.19 21.5 4.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <main className="layout">
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow">{profile.target}</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <a
                href={profile.telegramUrl}
                className="button-primary"
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram
              </a>
              <a href="#materials" className="button-secondary">
                Смотреть материалы
              </a>
            </div>

            <div className="hero-facts">
              <span className="fact-pill">Филологическое образование</span>
              <span className="fact-pill">Романтическая проза</span>
              <span className="fact-pill">Контент и аудитория</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-shell">
              <img
                src={authorPhoto}
                alt={`Портрет ${profile.name}`}
                className="portrait-image"
              />
              <div className="portrait-overlay">
                <span className="portrait-caption">
                  Ищу первую роль в интерактивных историях
                </span>
              </div>
            </div>

            <aside className="portrait-card panel">
              <p className="card-label">Подача</p>
              <p className="card-accent">Romance, drama, character chemistry</p>
              <p className="card-text">{profile.note}</p>

              <div className="contact-action">
                <span className="contact-note">Контакт</span>
                <a
                  href={profile.telegramUrl}
                  className="button-primary telegram-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TelegramIcon />
                  <span>{profile.telegram}</span>
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="marker-grid">
          {markers.map((item) => (
            <article className="marker-card panel" key={item.title}>
              <p className="marker-accent">{item.accent}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="chapter-grid">
          <article className="panel section-block">
            <p className="section-kicker">Почему этот формат</p>
            <h2>Мне близки истории, в которых выбор держится на чувствах</h2>

            <div className="fit-list">
              {fit.map((item, index) => (
                <div className="fit-item" key={item}>
                  <span className="fit-index">{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel section-block">
            <p className="section-kicker">Что привношу</p>
            <h2>Сильные стороны для интерактивной романтической прозы</h2>

            <div className="tag-grid">
              {strengths.map((strength) => (
                <span className="tag" key={strength}>
                  {strength}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="panel section-block">
          <p className="section-kicker">Релевантный бэкграунд</p>
          <h2>Не игровой стаж, а база, из которой может вырасти сильный writer</h2>

          <div className="background-grid">
            {background.map((item) => (
              <article className="background-card" key={item.title}>
                <p className="background-subtitle">{item.subtitle}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel section-block" id="materials">
          <p className="section-kicker">Что могу показать</p>
          <h2>Материалы, которые готова подготовить под отклик или тестовое</h2>

          <div className="project-grid">
            {deliverables.map((item) => (
              <article className="project-card" key={item.name}>
                <p className="project-type">{item.type}</p>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="footer-cta panel">
          <div>
            <p className="section-kicker">Контакт</p>
            <h2>Открыта к тестовому заданию и первой роли автора интерактивных историй</h2>
          </div>
          <a
            href={profile.telegramUrl}
            className="button-primary telegram-button"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon />
            <span>Связаться</span>
          </a>
        </section>
      </main>
    </div>
  )
}
