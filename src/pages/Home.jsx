import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta.jsx';
import ProjectFeature from '../components/ProjectFeature.jsx';
import { projects } from '../data/projects.js';
import { site, experience } from '../data/site.js';
import { asset } from '../lib.js';

export default function Home() {
  return (
    <>
      <PageMeta
        title=""
        description="Game designer and developer building interactive 3D simulations and educational experiences in Unity at AMMACHI Labs. Five case studies."
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src={asset('media/me/portrait-1280.webp')}
            srcSet={`${asset('media/me/portrait-800.webp')} 800w, ${asset('media/me/portrait-1280.webp')} 1280w`}
            sizes="100vw"
            width="1280"
            height="720"
            alt="Ashutosh Varma, with long hair and glasses, showing simulations to visitors at an exhibition stand."
            fetchPriority="high"
          />
        </div>
        <div className="container hero__inner">
          <p className="label">{site.role}</p>
          <h1 id="hero-title" className="hero__title">I design and build interactive 3D experiences.</h1>
          <p className="hero__lead">
            I make interactive simulations and educational games in Unity. At AMMACHI Labs I have
            contributed to nearly 40 simulations that teach vocational skills, from electric
            vehicles to plumbing to robotics.
          </p>
          <div className="hero__actions">
            <Link to="/work" className="button">View work</Link>
            <a className="button button--ghost" href={asset(site.cv)} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>
     </section>

      <section className="section container" aria-labelledby="work-title">
        <header className="section__head">
          <p className="label">Selected work</p>
          <h2 id="work-title" className="h2">Five simulations, from concept to classroom</h2>
        </header>
        <div className="features">
          {projects.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="exp-title">
        <div className="container split">
          <header>
            <p className="label">Experience</p>
            <h2 id="exp-title" className="h2">{experience.org}</h2>
            <p className="muted mono small">{experience.title} · {experience.period}</p>
          </header>
          <div>
            <p className="lead">{experience.summary}</p>
            <ul className="plain-list">
              {experience.extras.map((e) => <li key={e}>{e}</li>)}
            </ul>
            <Link to="/about" className="arrow-link">More about my work <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section container split" aria-labelledby="about-title">
        <header>
          <p className="label">About</p>
          <h2 id="about-title" className="h2">How I work</h2>
        </header>
        <div>
          <p className="lead">
            A simulation should let a learner do the task in the order a technician would, tell
            them why a step went wrong, and check what they learned at the end. I build that whole
            loop: the interaction logic, cameras and interface, bilingual text and narration, and
            the assessment.
          </p>
          <p className="lead">
            My background is in computer science, and I am applying to study game design and
            development at master’s level to go deeper on the design side.
          </p>
          <Link to="/about" className="arrow-link">Read more <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="contact-title">
        <div className="container split">
          <header>
            <p className="label">Contact</p>
            <h2 id="contact-title" className="h2">Get in touch</h2>
          </header>
          <ul className="contact-list">
            <li><span className="label">Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><span className="label">LinkedIn</span><a href={site.linkedin} target="_blank" rel="noopener noreferrer">Ashutosh Varma</a></li>
            <li><span className="label">CV</span><a href={asset(site.cv)} target="_blank" rel="noopener noreferrer">Download PDF</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
