import { findImage, img } from '../lib.js';

// Gallery image: uniform frame, click or press Enter to enlarge.
export default function ImageFigure({ slug, name, caption, fit, onZoom }) {
  const m = findImage(slug, name);
  if (!m) return null;
  return (
    <figure className={`mfig ${fit === 'contain' ? 'mfig--contain' : ''}`}>
      <button
        type="button"
        className="mfig__frame mfig__zoom"
        onClick={() => onZoom({ slug, name, caption, w: m.w, h: m.h })}
        aria-label={`Enlarge image: ${caption}`}
      >
        <img
          src={img(slug, name, 800)}
          srcSet={`${img(slug, name, 800)} 800w, ${img(slug, name, 1600)} 1600w`}
          sizes="(min-width: 900px) 580px, 100vw"
          width={m.w}
          height={m.h}
          alt={caption}
          loading="lazy"
          decoding="async"
        />
      </button>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
