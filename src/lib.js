import media from './data/media.json';

// Resolve a path under public/ so it works under any base (local, GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const img = (slug, name, w) => asset(`media/${slug}/${name}-${w}.webp`);
export const video = (slug, name) => asset(`media/${slug}/${name}.mp4`);
export const poster = (slug, name) => asset(`media/${slug}/${name}-poster.webp`);

// Dimensions come from the generated manifest (src/data/media.json).
export const findImage = (slug, name) => media[slug]?.images.find((i) => i.name === name);
export const findVideo = (slug, name) => media[slug]?.videos.find((v) => v.name === name);
