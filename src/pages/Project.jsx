import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta.jsx';
import Media from '../components/Media.jsx';
import Credit from '../components/Credit.jsx';
import Blocks from '../components/Blocks.jsx';
import ImageFigure from '../components/ImageFigure.jsx';
import VideoPlayer from '../components/VideoPlayer.jsx';
import Lightbox from '../components/Lightbox.jsx';
import AccessCallout from '../components/AccessCallout.jsx';
import { projects, getProject } from '../data/projects.js';
import { cases } from '../data/cases/index.js';

export default function Project() {
  const { slug } = useParams();
  const p = getProject(slug);
  const c = p && cases[slug];
  const [zoom, setZoom] = useState(null);
  const [active, setActive] = useState('');

  // Highlight the section being read in the sticky index.
  useEffect(() => {
    const els = [...document.querySelectorAll('[data-spy]')];
    if (!els.length || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-130px 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [slug]);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  if (!p || !c) {
    return (
      <section className="section container">
        <h1 className="h1">Project not found</h1>
        <Link to="/work" className="arrow-link">Back to work <span aria-hidden="true">→</span></Link>
      </section>
    );
  }

  const others = projects.filter((x) => x.slug !== slug);
  const idx = projects.findIndex((x) => x.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <PageMeta title={p.title} description={p.summary} />

      <header className="case-head container">
        <div className="case-head__eyebrow">
          <p className="label">{p.kicker}</p>
          {p.access && (
            <span className={`status-pill status-pill--${p.access.status}`}>
              <span className="status-pill__dot" />
              {p.access.badge}
            </span>
          )}
        </div>
        <h1 className="h1 case-head__title">{p.title}</h1>
        <p className="lead narrow">{p.summary}</p>
        <AccessCallout access={p.access} />
      </header>

      <div className="container">
        <figure className="case-hero" style={{ '--ar': c.aspect }}>
          <div className={`case-hero__frame ${p.fit === 'contain' ? 'is-contain' : ''}`} style={p.fit === 'contain' && p.bg ? { background: p.bg } : undefined}>
            <Media slug={p.media} item={p.hero} sizes="(min-width: 1200px) 1200px, 100vw" eager />
          </div>
          <Credit credit={p.cover ? p.coverCredit : p.credit} />
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

      <div className="case-main">
      <nav className="case-nav" aria-label="On this page">
        <div className="container case-nav__inner">
          {c.sections.map((s, i) => (
            <button key={s.title} type="button" className={`case-nav__btn ${active === `sec-${i}` ? 'is-active' : ''}`} aria-current={active === `sec-${i}` ? 'true' : undefined} onClick={() => goTo(`sec-${i}`)}>
              {s.title}
            </button>
          ))}
          <button type="button" className={`case-nav__btn ${active === 'media' ? 'is-active' : ''}`} aria-current={active === 'media' ? 'true' : undefined} onClick={() => goTo('media')}>
            Media
          </button>
        </div>
      </nav>

      <div className="container">
        {c.sections.map((s, i) => (
          <section key={s.title} id={`sec-${i}`} data-spy className="case-section" aria-labelledby={`s-${i}`}>
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

      <section id="media" data-spy className="section section--surface case-media" aria-labelledby="media-title">
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

      <nav className="container pn" aria-label="More projects">
        <Link to={`/work/${prev.slug}`} className="pn__link">
          <span className="label">← Previous project</span>
          <span className="pn__title">{prev.title}</span>
        </Link>
        <Link to={`/work/${next.slug}`} className="pn__link pn__link--next">
          <span className="label">Next project →</span>
          <span className="pn__title">{next.title}</span>
        </Link>
      </nav>

      <section className="section container" aria-labelledby="related-title">
        <h2 id="related-title" className="h2">Other projects</h2>
        <ul className="related">
          {others.map((o) => (
            <li key={o.slug}>
              <Link to={`/work/${o.slug}`} className="related__card">
                <span className={`related__img ${o.fit === 'contain' ? 'is-contain' : ''}`} style={o.fit === 'contain' && o.bg ? { background: o.bg } : undefined}>
                  <Media slug={o.media} item={o.hero} sizes="(min-width: 900px) 280px, 50vw" />
                </span>
                <span className="related__title">{o.title}</span>
                <span className="label">{o.kicker}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      </div>

      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </>
  );
}
