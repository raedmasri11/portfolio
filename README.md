# Video Editor Portfolio Website

This is a ready-to-edit one-page portfolio for a video editor.

## Files

- `index.html` — website structure
- `styles.css` — full design and responsive styling
- `script.js` — video cards, modal player, mobile nav, animations
- `assets/thumbs/` — placeholder thumbnails

## How to edit your name

Open `index.html` and replace:

```html
Your Name
```

with your real name or brand name.

Also update:

```html
mailto:your@email.com
https://instagram.com/yourusername
```

## How to add your own videos

Open `script.js`.

Find this section:

```js
const videos = [
  ...
];
```

Replace the demo video details with your own.

For YouTube videos, use this format:

```js
videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

Example:

If your YouTube link is:

```txt
https://www.youtube.com/watch?v=abc123
```

Use:

```js
videoUrl: "https://www.youtube.com/embed/abc123"
```

## How to change thumbnails

Put your thumbnails inside:

```txt
assets/thumbs/
```

Then update the thumbnail path in `script.js`:

```js
thumbnail: "assets/thumbs/my-thumbnail.jpg"
```

Recommended thumbnail size:

```txt
1280x720
```

## How to run locally

Just open `index.html` in your browser.

For a cleaner local server, use VS Code:

1. Install the Live Server extension
2. Right click `index.html`
3. Click `Open with Live Server`

## How to deploy

You can deploy this on Netlify:

1. Go to Netlify
2. Drag and drop this folder
3. Your portfolio is live

## Important

The testimonial text is placeholder. Replace it with real client feedback or remove that section until you have real testimonials.
