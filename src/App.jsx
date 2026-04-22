import authorPhoto from './assets/photo_2020-08-05_22-19-35.jpg'
import {
  background,
  capabilities,
  competencies,
  experience,
  deliverables,
  fit,
  markers,
  profile,
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
  const contactChannels = [
    {
      label: 'Telegram',
      value: profile.telegram,
      href: profile.telegramUrl,
      external: true,
    },
    {
      label: 'VK',
      value: profile.vk,
      href: profile.vkUrl,
      external: true,
    },
    {
      label: 'Почта',
      value: profile.email,
      href: profile.emailUrl,
      external: false,
    },
  ]

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
              <span className="fact-pill">Филологическая база</span>
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
                  Открыта к тестовому и первой роли в студии
                </span>
              </div>
            </div>

            <aside className="portrait-card panel">
              <p className="card-label">Фокус</p>
              <p className="card-accent">Романтические интерактивные истории</p>
              <p className="card-text">{profile.note}</p>

              <div className="contact-action">
                <span className="contact-note">Контакт</span>
                <div className="contact-list contact-list-compact">
                  {contactChannels.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="contact-link"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                    >
                      <span className="contact-link-label">{item.label}</span>
                      <span className="contact-link-value">{item.value}</span>
                    </a>
                  ))}
                </div>
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
              {item.linkUrl ? (
                <a href={item.linkUrl} className="marker-link" target="_blank" rel="noreferrer">
                  {item.linkLabel}
                </a>
              ) : null}
            </article>
          ))}
        </section>

        <section className="chapter-grid">
          <article className="panel section-block">
            <p className="section-kicker">Почему этот формат</p>
            <h2 className="chapter-title">Мне близки истории, в которых выбор держится на чувствах</h2>

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
            <p className="section-kicker">Что могу делать уже сейчас</p>
            <h2 className="chapter-title">Прикладные навыки для тестового и рабочей задачи</h2>

            <div className="capability-list">
              {capabilities.map((item) => (
                <article className="capability-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="panel section-block">
          <p className="section-kicker">Компетенции</p>
          <h2 className="section-heading">Навыки для сценарной и контентной работы:</h2>

          <div className="competency-list">
            {competencies.map((item) => (
              <article className="competency-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel section-block">
          <p className="section-kicker">Опыт работы</p>
          <h2 className="section-heading">Где работала и с какими задачами уже сталкивалась</h2>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.period}-${item.company}`}>
                <div className="experience-meta">
                  <p className="experience-period">{item.period}</p>
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.role}</p>
                </div>

                <div className="experience-content">
                  <ul className="experience-details">
                    {item.details.map((detail) => (
                      <li key={typeof detail === 'string' ? detail : detail.text}>
                        {typeof detail === 'string' ? (
                          detail
                        ) : (
                          <>
                            <span>{detail.text}</span>
                            {detail.linkUrl ? (
                              <a
                                href={detail.linkUrl}
                                className="experience-inline-link"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {detail.linkLabel}
                              </a>
                            ) : null}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {item.linkUrl ? (
                    <a href={item.linkUrl} className="experience-link" target="_blank" rel="noreferrer">
                      {item.linkLabel}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel section-block">
          <p className="section-kicker">Опыт и база</p>
          <h2 className="section-heading">База, которую переношу в интерактивную прозу</h2>

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
          <p className="section-kicker">Что могу подготовить</p>
          <h2 className="section-heading">Материалы для отклика или тестового задания</h2>

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
          <div className="footer-copy">
            <p className="section-kicker">Контакт</p>
            <h2>Открыта к тестовому заданию и работе над романтическими интерактивными историями</h2>
          </div>
          <div className="contact-list footer-contact-list">
            {contactChannels.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-link footer-contact-link"
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                <span className="contact-link-label">{item.label}</span>
                <span className="contact-link-value">{item.value}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
