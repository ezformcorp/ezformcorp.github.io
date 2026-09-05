# EZFORM Corporate Wear Website

This is the modular production build of the approved EZFORM website.

## Structure

- `index.html` — page structure/content only
- `css/style.css` — all site styling and responsive rules
- `js/config.js` — contact details and site-level configuration
- `js/site.js` — navigation, filters, form and WhatsApp behaviour
- `assets/images/` — website photography and logo files
- `assets/icons/` — favicon

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

## Image swap behaviour

Collection images switch on mouse hover on desktop/laptop. On touch devices such as phones and tablets, tap a swappable image to show the alternate photo and tap again to switch back.

The collection filter and product add-to-quote controls are not part of the current page; the quote form's design-type selector is the active product input.
