import { profile, projects, stats, strengths, timeline } from './content'

export default function App() {
  return (
    <div className="page-shell">
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />

      <main className="layout">
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow">Online Resume</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-actions">
              <a href={`mailto:${profile.email}`} className="button-primary">
                Написать
              </a>
              <a href="#projects" className="button-secondary">
                Смотреть кейсы
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <p className="card-label">Позиционирование</p>
            <p className="card-accent">Narrative for live worlds</p>
            <p className="card-text">{profile.summary}</p>

            <div className="contact-grid">
              <div>
                <span>Локация</span>
                <strong>{profile.location}</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </div>
              <div>
                <span>Telegram</span>
                <strong>{profile.telegram}</strong>
              </div>
            </div>
          </aside>
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
              интерфейсов и событий.
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
          <a href={`mailto:${profile.email}`} className="button-primary">
            Связаться
          </a>
        </section>
      </main>
    </div>
  )
}
