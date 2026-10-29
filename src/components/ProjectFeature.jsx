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
// On touch screens, pressing and holding plays it, and dragging sideways while holding scrubs through it.
export default function ProjectFeature({ project, index }) {
  const { slug, title, kicker, summary, role, tools, credit, media, hero, fit, bg, cover, coverCredit, preview } = project;
  const num = String(index + 1).padStart(2, '0');
  const cls = ['feature', index % 2 ? 'feature--reverse' : '', fit === 'contain' ? 'feature--contain' : '']
    .filter(Boolean)
    .join(' ');

  const [hovering, setHovering] = useState(false);
  const [everHovered, setEverHovered] = useState(false);
  const vref = useRef(null);
  const timer = useRef(null);
  const held = useRef(false);
  const startX = useRef(0);

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

  const onDown = (e) => {
    if (!preview || e.pointerType !== 'touch') return;
    startX.current = e.clientX;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      held.current = true;
      setEverHovered(true);
      setHovering(true);
    }, 300);
  };

  const onMove = (e) => {
    if (e.pointerType !== 'touch') return;
    if (!held.current) {
      // moved before the hold registered: the person is scrolling, not previewing
      if (Math.abs(e.clientX - startX.current) > 10) clearTimeout(timer.current);
      return;
    }
    const v = vref.current;
    if (v && v.duration && Math.abs(e.clientX - startX.current) > 12) {
      const r = e.currentTarget.getBoundingClientRect();
      v.pause();
      v.currentTime = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * v.duration;
    }
  };

  const onUp = () => {
    clearTimeout(timer.current);
    setHovering(false);
    // keep the flag briefly so the click that follows a hold does not open the page
    setTimeout(() => { held.current = false; }, 80);
  };
  return (
    <article className={cls}>
      <div className="feature__visual">
        <figure
          className="feature__figure"
          style={fit === 'contain' && bg ? { background: bg } : undefined}
          onPointerEnter={onEnter}
          onPointerLeave={() => setHovering(false)}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onClickCapture={(e) => { if (held.current) e.preventDefault(); }}
          onContextMenu={(e) => { if (preview && held.current) e.preventDefault(); }}
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
          {preview && (
            <>
              <span className="feature__hint feature__hint--mouse" aria-hidden="true">Hover to preview</span>
              <span className="feature__hint feature__hint--touch" aria-hidden="true">Hold to preview</span>
            </>
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
