import { useEffect, useRef } from 'react';
import { img } from '../lib.js';

// Native <dialog> gives focus trapping, Esc to close and a backdrop for free.
export default function Lightbox({ item, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return undefined;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
    return undefined;
  }, [item]);

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label="Enlarged image"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close();
      }}
    >
      {item && (
        <figure>
          <img src={img(item.slug, item.name, 1600)} width={item.w} height={item.h} alt={item.caption} />
          <figcaption>{item.caption}</figcaption>
        </figure>
      )}
      <button type="button" className="lightbox__close" onClick={() => ref.current.close()}>
        Close
      </button>
    </dialog>
  );
}
