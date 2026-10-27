import PageMeta from '../components/PageMeta.jsx';
import { site, experience, education } from '../data/site.js';
import { asset } from '../lib.js';

export default function CV() {
  const href = asset(site.cv);
  return (
    <>
      <PageMeta title="CV" description="Download the CV of Ashutosh Varma, game designer and developer." />
      <section className="section container split">
        <header>
          <p className="label">CV</p>
          <h1 className="h1">Curriculum vitae</h1>
          <p>
            <a className="button" href={href} target="_blank" rel="noopener noreferrer" download>
              Download PDF
            </a>
          </p>
        </header>
        <div>
          <h2 className="h3">Experience</h2>
          <ul className="plain-list">
            <li><strong>{experience.title}</strong>, {experience.org} ({experience.period})</li>
            <li><strong>Game Developer</strong>, Amrita AHEAD (February – April 2024): R&amp;D project under NandiDev Innovation Pvt. Ltd. and a 2D hyper-casual platformer in Unity.</li>
          </ul>
          <h2 className="h3">Education</h2>
          <ul className="plain-list">
            {education.map((e) => <li key={e.what}><strong>{e.what}</strong>, {e.where} ({e.when})</li>)}
          </ul>
          <p className="muted small">The PDF has the full details, including languages and interests.</p>
        </div>
      </section>
    </>
  );
}
