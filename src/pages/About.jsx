import PageMeta from '../components/PageMeta.jsx';
import { experience, education } from '../data/site.js';

export default function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Ashutosh Varma is a game designer and developer with a computer science background, building educational simulations at AMMACHI Labs."
      />
      <section className="section container split">
        <header>
          <p className="label">About</p>
          <h1 className="h1">Designing learning that you can do with your hands</h1>
        </header>
        <div>
          <p className="lead">
            I am a game designer and developer with a background in computer science and
            professional experience creating educational simulations and interactive learning
            experiences.
          </p>
          <p className="lead">
            At AMMACHI Labs I contributed to nearly 40 simulations, taking on development,
            research, quality assurance and educational content creation. I am interested in how
            games can make learning more engaging and effective.
          </p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container split">
          <header>
            <p className="label">Experience</p>
            <h2 className="h2">{experience.org}</h2>
            <p className="muted mono small">{experience.title} · {experience.period}</p>
          </header>
          <div>
            <p className="lead">{experience.summary}</p>
            <ul className="plain-list">
              {experience.extras.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section container split">
        <header>
          <p className="label">Education and recognition</p>
          <h2 className="h2">Background</h2>
        </header>
        <div>
          <ul className="plain-list">
            {education.map((e) => (
              <li key={e.what}><strong>{e.what}</strong>, {e.where} ({e.when})</li>
            ))}
            <li><strong>Certificate of Recognition</strong>, AMMACHI Labs, 29 January 2026, for outstanding contributions, teamwork and dedication.</li>
          </ul>
          <p className="muted small">
            Skills: game development, game design, audio engineering, 3D modelling, web development.
          </p>
        </div>
      </section>
    </>
  );
}
