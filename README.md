# Manoj Ram Kumar — Video Editor Portfolio

A minimal, responsive GitHub Pages portfolio for a short-form video editor.

## Quick setup

1. Create a new GitHub repository, for example:
   `manoj-video-editor`
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Save. GitHub will give you your public portfolio URL.

## What to edit

Open `index.html` and search for:

- `YOUR_EMAIL@example.com`
- `YOUR_INSTAGRAM_URL`
- `VIDEO_LINK_01`
- `VIDEO_LINK_02`
- `VIDEO_LINK_03`
- `VIDEO_LINK_04`

Replace those with your actual links.

You can also change the project titles and descriptions directly in the HTML.

## Adding thumbnails

The current project cards use aesthetic gradient placeholders so the page works immediately.

To use your own thumbnails, replace a project's class such as:

`media-one`

with:

`media-one project-image`

Then add the following to `style.css`:

`.project-image { background-image: url("assets/images/your-image.jpg"); background-size: cover; background-position: center; }`

Keep images compressed for fast mobile loading.

## Recommended portfolio setup

Use your strongest 3–5 cinematic edits and 3–5 creator/talking-head edits. Avoid filling the site with every reel you've made.

For each project, show:
- Project name
- Type of edit
- 2–4 relevant editing skills
- Link to the finished reel
