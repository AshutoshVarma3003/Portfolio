import { Link } from 'react-router-dom';
import Media from './Media.jsx';
import Credit from './Credit.jsx';

const SIZES = '(min-width: 900px) 700px, 100vw';

// One entry in the Selected Work list. All images share one aspect ratio and
// the entries alternate sides. DOM order is image then text so mobile reads
// image-first; desktop reordering is done in CSS.
export default function ProjectFeature({ project, index }) {
  const { slug, title, kicker, summary, role, tools, credit, media, hero, fit } = project;
  const num = String(index + 1).padStart(2, '0');
  const cls = ['feature', index % 2 ? 'feature--reverse' : '', fit === 'contain' ? 'feature--contain' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={cls}>
      <div className="feature__visual">
        <figure className="feature__figure">
          <Link to={`/work/${slug}`} tabIndex={-1} aria-hidden="true" className="feature__imglink">
            <Media slug={media} item={hero} sizes={SIZES} />
          </Link>
        </figure>
        <Credit credit={credit} />
      </div>

      <div className="feature__text">
        <p className="label">{num} · {kicker}</p>
        <h3 className="feature__title">
          <Link to={`/work/${slug}`}>{title}</Link>
        </h3>
        <p className="feature__summary">{summary}</p>
        <dl className="feature__meta">
          <div><dt>Role</dt><dd>{role}</dd></div>
          <div><dt>Tools</dt><dd>{tools.join(' · ')}</dd></div>
        </dl>
        <Link to={`/work/${slug}`} className="arrow-link">
          Read case study <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
