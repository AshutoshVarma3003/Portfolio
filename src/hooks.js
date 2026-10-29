import { useEffect } from 'react';

const SELECTOR = [
  '.features .feature',
  '.section__head',
  '.split > *',
  '.case-section',
  '.mgroup',
  '.related li',
  '.pn',
].join(',');

// Eases elements in once as they scroll into view. Skipped entirely for
// people who prefer reduced motion, and elements stay visible if JS fails.
export function useReveal(key) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return undefined;
    }
    const els = [...document.querySelectorAll(SELECTOR)];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
    // Safety net: if observation never fires (e.g. a background tab), reveal what is on screen.
    const t = setTimeout(() => {
      els.forEach((el) => {
        if (!el.classList.contains('is-in') && el.getBoundingClientRect().top < window.innerHeight * 1.1) {
          el.classList.add('is-in');
        }
      });
    }, 1500);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [key]);
}
