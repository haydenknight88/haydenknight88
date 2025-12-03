# Reflection


## Introduction
This is a reflection of the progression of my web development page. It includes the architecture and infrastructure of my page.

---

## Wireframe
[![Home Wireframe](images/homePage-wireFrame.png)](images/homePage-wireFrame.png)


## Infrastructure
I built this portfolio using the following tools and technologies:

- **Languages:** HTML5, CSS3, JavaScript
- **Libraries:** Bootstrap 5, Normalize.css, jQuery, BS5 Icons, Google Fonts
- **Other Tools:** GitHub, GitHub Pages, GPT-5 mini Agent, W3Schools, VS Code, Nu HTML, Wave

## Architecture

**File structure**
- `index.html` — main page and markup
- `reflection.md` — reflection content
- `data/` — `achievements.json`, `projects.json`
- `scripts/script.js` — fetch + render logic
- `styles/style.css` — custom styles
- `images/` — image assets

**Data flow**
1. `DOMContentLoaded` -> `scripts/script.js` initialises.
2. `fetch('data/…')` -> parse JSON.
3. Renderer functions create DOM fragments and append to `#achievements-list` and `#projects-list`.


