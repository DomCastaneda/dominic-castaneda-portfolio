# dominic-castaneda-portfolio

## Portfolio layout & dynamic features

- **Single-page static site**: `index.html` is the main file containing layout, styles, and scripts. No build step is required; the site is served as static files.
- **How to run locally**: serve the folder with a static server, for example:

```powershell
py -3 -m http.server 8000
# or with Node:
npx http-server -p 8000
```

- **Content sources (editable JSON)**:
	- `projects.json` — manual list of projects rendered in the Projects section.
	- `experience.json` — experience entries (role/company/logo/date/description/skills/companyUrl).
	- `cert.json` (repurposed as Research) — research/certificates entries.

- **Dynamic behaviors / client-side features**:
	- Experience, Projects, and Research are fetched at runtime from the local JSON files and rendered into the DOM by JavaScript in `index.html`.
	- Clicking a project or experience card opens the `link`/`companyUrl` in a new tab (via `window.open`). If links appear unclickable, CSS overlays or child elements may be intercepting pointer events — see `index.html` styles for `.exp-card` and header grid.
	- The bottom dock highlights the active section and includes smooth animations; its logic lives in `index.html` and uses a small `Veloxi` plugin shim (if present) for hover/mouse interactions.
	- The Skills cloud is rendered with `three.js` (sprite-based icons) inside the Skills section.

- **Assets**: images and icons live under the `asset/` directory (profile, gifs, project thumbnails, experience logos, svgs). Replace placeholders in `asset/projects/` and `asset/experience/` with your own images.

- **Notes / Decisions**:
	- The dock uses a lightweight plugin-like pattern (`Veloxi` object). If you remove or replace that runtime, adjust the dock initialization code in `index.html`.
	- A previous scroll-throttling experiment was reverted due to stability issues; if you need further smoothing, consider a short debounce (50–100ms) or a conservative rAF approach.

Edit `projects.json`, `experience.json`, and `cert.json` to update content; `index.html` contains the rendering templates and event handlers.

---

```
# dominic-castaneda-portfolio