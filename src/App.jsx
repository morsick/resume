import authorPhoto from './assets/photo_2020-08-05_22-19-35.jpg'
import { profile, projects, stats, strengths, timeline } from './content'

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
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />

      <main className="layout">
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow">Narrative Resume</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-actions">
              <a
                href={profile.telegramUrl}
                className="button-primary"
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram
              </a>
              <a href="#projects" className="button-secondary">
                Смотреть кейсы
              </a>
            </div>

            <div className="hero-facts">
              <span className="fact-pill">{profile.location}</span>
              <span className="fact-pill">MMO и live-service narrative</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-shell">
              <div className="portrait-frame">
                <img
                  src={authorPhoto}
                  alt={`Портрет ${profile.name}`}
                  className="portrait-image"
                />
              </div>
            </div>

            <aside className="portrait-card panel">
              <p className="card-label">Позиционирование</p>
              <p className="card-accent">Stories for living game worlds</p>
              <p className="card-text">{profile.summary}</p>

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

        <section className="stats">
          {stats.map((item) => (
            <article className="stat-card panel" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel section-block">
            <p className="section-kicker">Обо мне</p>
            <h2>Пишу истории, которые работают на удержание и атмосферу</h2>
            <p>
              Умею держать баланс между художественной выразительностью,
              ограничениями продакшена и игровыми системами. Работаю как с
              масштабными сюжетными рамками, так и с точечными текстами внутри
              интерфейсов, событий и коммуникаций с игроком.
            </p>
          </article>

          <article className="panel section-block">
            <p className="section-kicker">Сильные стороны</p>
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
          <p className="section-kicker">Опыт</p>
          <h2>Роли и проекты</h2>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.period + item.title}>
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <strong>{item.company}</strong>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel section-block" id="projects">
          <p className="section-kicker">Портфолио</p>
          <h2>Выбранные кейсы</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="footer-cta panel">
          <div>
            <p className="section-kicker">Контакт</p>
            <h2>Открыта к удаленной работе, проектным задачам и consulting</h2>
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
