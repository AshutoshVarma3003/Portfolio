# Ashutosh Varma — portfolio

React + Vite, plain JavaScript and custom CSS. Five case studies with real simulation media.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

## How it is organised

| Path | What it holds |
|---|---|
| `src/data/site.js` | Name, email, LinkedIn, CV path, experience text, credit wording |
| `src/data/projects.js` | The five projects as shown on the homepage and Work page |
| `src/data/cases/*.js` | Full case-study text, details and media captions, one file per project |
| `src/data/media.json` | Generated list of optimised media and their sizes |
| `public/media/<project>/` | Web-sized copies of all images (WebP) and videos (MP4 + poster) |
| `public/cv/Ashutosh-Varma-CV.pdf` | The downloadable CV. Replace the file, keep the name |

The original source folders (project manuals, full-size images and videos, personal info) are not part of the site and are git-ignored so they cannot be pushed by accident.

## Deployment (GitHub Pages)

The site uses `HashRouter` (URLs like `/#/work/cpr-aed-simulation`) and a relative Vite `base` (`./`), so it works under `https://<user>.github.io/portfolio/` with no extra configuration and no 404 redirect page.

Nothing has been pushed yet. When you are ready:

1. Create a GitHub repository named `portfolio` and add it as `origin`.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Commit and push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it.
4. The site appears at `https://<your-username>.github.io/portfolio/`.

Before the first push, review `git status` to confirm only site files are staged, and read the checks below.

### Before going public

- **Permissions:** the media comes from work done at AMMACHI Labs for NCERT and L&T. Confirm you may publish it. Remove any item by deleting its entry in the matching `src/data/cases/*.js` file.
- **CV PDF:** the current file contains a phone number and photo. Swap it for the version you want public.
- **Social preview image:** add `<meta property="og:image">` in `index.html` with an absolute URL once the site address is known.
- **Videos:** about 32 MB of media in total. Videos load only when played.
