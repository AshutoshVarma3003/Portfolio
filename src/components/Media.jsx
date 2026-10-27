import { img } from '../lib.js';

// Responsive image from the derived 800/1600px WebP copies.
export default function Media({ slug, item, sizes = '100vw', eager = false, className = '' }) {
  return (
    <img
      className={className}
      src={img(slug, item.name, 1600)}
      srcSet={`${img(slug, item.name, 800)} 800w, ${img(slug, item.name, 1600)} 1600w`}
      sizes={sizes}
      width={item.w}
      height={item.h}
      alt={item.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
    />
  );
}
