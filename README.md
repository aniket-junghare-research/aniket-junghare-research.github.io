# Personal Research Website

A simple, minimal static website for displaying your research profile. No build tools required - just open `index.html` in a browser!

## Structure

- `index.html` - Main page with About, News, and Publications sections
- `cv.html` - CV page
- `style.css` - Minimal, responsive CSS styling
- `script.js` - JavaScript for rendering homepage content
- `cv-script.js` - JavaScript for rendering CV content
- `data/` - JSON data files:
  - `papers.json` - Publications
  - `about.json` - About section content
  - `cv.json` - CV data
  - `news.json` - News items
- `assets/img/` - Images (profile picture and publication previews)

## Usage

### Viewing Locally

Since the site uses `fetch()` to load JSON files, you need to serve it from a local web server:

**Option 1: Python HTTP Server**
```bash
cd personal_website
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

**Option 2: VS Code Live Server**
If you use VS Code, install the "Live Server" extension and right-click `index.html` → "Open with Live Server"

### Updating Content

To update the content, edit the JSON files in the `data/` directory:

- **Papers**: Edit `data/papers.json` - add/remove/modify publication entries
- **About**: Edit `data/about.json` - update the `content` field (supports markdown links)
- **CV**: Edit `data/cv.json` - modify sections, entries, etc.
- **News**: Edit `data/news.json` - add new news items (sorted by date, newest first)

### Adding Images

- Profile picture: Replace `assets/img/vishal_pic.jpg`
- Publication previews: Add images to `assets/img/publication_preview/` and reference them in `papers.json` using the `preview` field

## Features

- Clean, minimal design
- Fully responsive (mobile-friendly)
- No dependencies - pure HTML/CSS/JavaScript
- Easy to update - just edit JSON files
- Publication preview images
- Selected papers highlighting
- Markdown link support in content

## Deployment

You can deploy this site to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Just upload all files and you're done!

