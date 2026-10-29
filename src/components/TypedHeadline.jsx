import { useEffect, useState } from 'react';

const SPEED = 35; // ms per character
const START_DELAY = 500;

// Types the headline out. Screen readers get the whole sentence at once; the
// animated copy is hidden from them. The untyped remainder stays in the layout
// (invisible) so wrapping does not jump while it types.
export default function TypedHeadline({ id, className, text, play, onDone }) {
  const [n, setN] = useState(play ? 0 : text.length);

  useEffect(() => {
    if (!play) return undefined;
    let i = 0;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i += 1;
        setN(i);
        if (i >= text.length) {
          clearInterval(timer);
          onDone();
        }
      }, SPEED);
    }, START_DELAY);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [play, text, onDone]);

  return (
    <h1 id={id} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, n)}
        {n < text.length && <span className="typed__cursor" />}
        <span className="typed__rest">{text.slice(n)}</span>
      </span>
    </h1>
  );
}
