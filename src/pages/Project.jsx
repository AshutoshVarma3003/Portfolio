import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta.jsx';
import Media from '../components/Media.jsx';
import Credit from '../components/Credit.jsx';
import Blocks from '../components/Blocks.jsx';
import ImageFigure from '../components/ImageFigure.jsx';
import VideoPlayer from '../components/VideoPlayer.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { projects, getProject } from '../data/projects.js';
import { cases } from '../data/cases/index.js';

export default function Project() {
  const { slug } = useParams();
  const p = getProject(slug);
  const c = p && cases[slug];
  const [zoom, setZoom] = useState(null);

  if (!p || !c) {
    return (
      <section className="section container">
        <h1 className="h1">Project not found</h1>
        <Link to="/work" className="arrow-link">Back to work <span aria-hidden="true">→</span></Link>
      </section>
    );
  }

  const others = projects.filter((x) => x.slug !== slug);

  return (
    <>
      <PageMeta title={p.title} description={p.summary} />

      <header className="case-head container">
        <p className="label">{p.kicker}</p>
        <h1 className="h1 case-head__title">{p.title}</h1>
        <p className="lead narrow">{p.summary}</p>
      </header>

      <div className="container">
        <figure className="case-hero" style={{ '--ar': c.aspect }}>
          <div className={`case-hero__frame ${p.fit === 'contain' ? 'is-contain' : ''}`}>
            <Media slug={p.media} item={p.hero} sizes="(min-width: 1200px) 1200px, 100vw" eager />
          </div>
          <Credit credit={p.credit} />
        </figure>

        <dl className="details">
          {c.details.map((d) => (
            <div key={d.k}>
              <dt>{d.k}</dt>
              <dd>{d.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="container">
        {c.sections.map((s, i) => (
          <section key={s.title} className="case-section" aria-labelledby={`s-${i}`}>
            <h2 id={`s-${i}`} className="case-section__title">
              <span className="label">{String(i + 1).padStart(2, '0')}</span>
              {s.title}
            </h2>
            <div className="case-section__body">
              <Blocks blocks={s.blocks} />
            </div>
          </section>
        ))}
      </div>

      <section className="section section--surface" aria-labelledby="media-title">
        <div className="container">
          <header className="section__head">
            <p className="label">Selected media</p>
            <h2 id="media-title" className="h2">Screens and recordings</h2>
            <p className="lead narrow">{c.mediaIntro}</p>
          </header>
          {c.groups.map((g) => (
            <div key={g.title} className="mgroup" style={{ '--ar': c.aspect }}>
              <div className="mgroup__head">
                <h3 className="mgroup__title">{g.title}</h3>
                <p className="muted">{g.text}</p>
              </div>
              <div className="mgroup__grid">
                {g.items.map((it) =>
                  it.t === 'vid' ? (
                    <VideoPlayer key={`v-${it.n}`} slug={p.media} name={it.n} caption={it.cap} />
                  ) : (
                    <ImageFigure key={`i-${it.n}`} slug={p.media} name={it.n} caption={it.cap} fit={it.fit} onZoom={setZoom} />
                  ),
                )}
              </div>
            </div>
          ))}
          <Credit credit={p.credit} />
          {p.credit.extra && (
            <p className="credit">
              <a href={p.credit.extra} target="_blank" rel="noopener noreferrer">Related project page</a>
            </p>
          )}
        </div>
      </section>

      <section className="section container" aria-labelledby="related-title">
        <h2 id="related-title" className="h2">Other projects</h2>
        <ul className="related">
          {others.map((o) => (
            <li key={o.slug}>
              <Link to={`/work/${o.slug}`} className="related__card">
                <span className={`related__img ${o.fit === 'contain' ? 'is-contain' : ''}`}>
                  <Media slug={o.media} item={o.hero} sizes="(min-width: 900px) 280px, 50vw" />
                </span>
                <span className="related__title">{o.title}</span>
                <span className="label">{o.kicker}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </>
  );
}
