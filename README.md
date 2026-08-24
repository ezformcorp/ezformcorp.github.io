# EZFORM Corporate Wear Website

This is the modular production build of the approved EZFORM website.

## Structure

- `index.html` — page structure/content only
- `css/style.css` — all site styling and responsive rules
- `js/config.js` — contact details and site-level configuration
- `js/site.js` — navigation, filters, form and WhatsApp behaviour
- `assets/images/` — website photography and logo files
- `assets/icons/` — favicon
- `backup/ezform-approved-standalone.html` — untouched all-in-one approved backup

## Common edits

### Change contact details
Edit `js/config.js`. The current phone numbers are preserved from the approved site.

### Change colours or layout
Edit `css/style.css`. The main burgundy is defined as `--red: #7c2643`.

### Replace a photo
Replace the matching file in `assets/images/` while keeping the same filename, or update that image's `src` in `index.html`.

### Edit page wording
Edit the text in `index.html`.

## Publishing

Upload the contents of this folder to the web root. `index.html` must remain beside the `css`, `js`, and `assets` folders.
