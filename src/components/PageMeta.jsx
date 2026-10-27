import { useEffect } from 'react';

const BASE = 'Ashutosh Varma';

// Sets the document title and description for the current route.
export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — Game Designer & Developer`;
    const set = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el && val) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', 'content', description);
    set('meta[property="og:title"]', 'content', document.title);
    set('meta[property="og:description"]', 'content', description);
  }, [title, description]);
  return null;
}
