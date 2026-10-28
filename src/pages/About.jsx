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
          <h1 className="h1">Why game design</h1>
        </header>
        <div>
          <p className="lead">
            I started as a player and then wanted to know how games were made. A computer science
            elective at school introduced me to breaking a complex system into parts and seeing
            how they fit together, and that led me to game development. I experimented with
            animation and 3D modelling in Blender first, then found that engines like Unity and
            Unreal drew me towards programming and the technical side of interactive experiences.
          </p>
          <p className="lead">
            My degree was in computer science rather than games, but my final-year project let me
            apply it: a 2D game retelling a mythological story from Kerala. With my team I also
            contributed to a research paper on how games can enhance learning. That project joined
            the things I care about: technology, interactive media and education.
          </p>
          <p className="lead">
            At AMMACHI Labs I do this professionally. I design and build simulations that teach
            vocational skills to students and children, and that are released for wide public use
            on the DIKSHA platform. Much of my knowledge of game design comes from independent
            learning and real projects. I now want structured study, and to work alongside a wider
            community of designers and developers on projects that challenge me.
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
            <li><strong>Final-year project</strong>, a 2D game retelling a mythological story from Kerala; I also contributed to a team research paper on how games can enhance learning.</li>
            <li><strong>Amrita AHEAD</strong> (February – April 2024), assisting a faculty member on a 2D hyper-casual game in Unity.</li>
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
