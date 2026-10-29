import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Media from './Media.jsx';
import Credit from './Credit.jsx';
import { video } from '../lib.js';

const SIZES = '(min-width: 900px) 700px, 100vw';

// One entry in the Selected Work list. All images share one aspect ratio and
// the entries alternate sides. DOM order is image then text so mobile reads
// image-first; desktop reordering is done in CSS.
// With a mouse, hovering the image plays a short silent loop from the project's video.
export default function ProjectFeature({ project, index }) {
  const { slug, title, kicker, summary, role, tools, credit, media, hero, fit, bg, cover, coverCredit, preview } = project;
  const num = String(index + 1).padStart(2, '0');
  const cls = ['feature', index % 2 ? 'feature--reverse' : '', fit === 'contain' ? 'feature--contain' : '']
    .filter(Boolean)
    .join(' ');

  const [hovering, setHovering] = useState(false);
  const [everHovered, setEverHovered] = useState(false);
  const vref = useRef(null);

  useEffect(() => {
    const v = vref.current;
    if (!v) return;
    if (hovering) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [hovering, everHovered]);

  const onEnter = (e) => {
    if (!preview || e.pointerType !== 'mouse') return;
    setEverHovered(true);
    setHovering(true);
  };

  return (
    <article className={cls}>
      <div className="feature__visual">
        <figure
          className="feature__figure"
          style={fit === 'contain' && bg ? { background: bg } : undefined}
          onPointerEnter={onEnter}
          onPointerLeave={() => setHovering(false)}
        >
          <Link to={`/work/${slug}`} tabIndex={-1} aria-hidden="true" className="feature__imglink">
            <Media slug={media} item={hero} sizes={SIZES} />
          </Link>
          {preview && everHovered && (
            <video
              ref={vref}
              className={`feature__preview ${hovering ? 'is-playing' : ''}`}
              src={video(media, preview)}
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              tabIndex={-1}
            />
          )}
        </figure>
        <Credit credit={cover ? coverCredit : credit} />
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
