import { findVideo, video, poster } from '../lib.js';

// Click-to-play video: poster frame, native controls, nothing loads until played.
export default function VideoPlayer({ slug, name, caption }) {
  const v = findVideo(slug, name);
  if (!v) return null;
  return (
    <figure className="mfig mfig--video">
      <div className="mfig__frame">
        <video
          controls
          preload="none"
          playsInline
          poster={poster(slug, name)}
          width={v.w}
          height={v.h}
          aria-label={`Video: ${caption}`}
        >
          <source src={video(slug, name)} type="video/mp4" />
          Your browser can’t play this video.
        </video>
      </div>
      <figcaption>
        <span className="mfig__kind">Video · {v.duration}s</span> {caption}
      </figcaption>
    </figure>
  );
}
