# EZFORM ENTERPRISE — uniform supply website

A responsive static website adapted for Ezform Enterprise, Taiping, Perak. It is designed around a uniform-supply and quotation workflow rather than a generic print-shop catalogue.

## Business positioning used in this version

Public business/tender sources support the following conservative positioning:

- Ezform Enterprise is based at 3A, Lorong Tupai, 34000 Taiping, Perak.
- Public business directories categorize it as a clothing/uniform-related business.
- A public catalogue entry lists a traditional baju kurung as an Ezform uniform product.
- A 2026 public procurement result names EZFORM ENTERPRISE as the successful contractor for tailoring, supplying and delivering uniforms for support-service roles in Perak.

The website therefore emphasizes uniforms, tailoring, bulk/institutional supply, quotation and delivery. It avoids unsupported claims about printing technologies, certifications, turnaround time or product breadth.

## Included

- Uniform-led landing page
- Bilingual-friendly Malay/English terminology
- Filterable uniform categories
- Original SVG illustrations
- Institutional/bulk quotation positioning
- Tailoring → supply → delivery process
- WhatsApp quotation builder using Ezform's public mobile number
- Mobile navigation and responsive layouts
- GitHub Pages compatible; no build step

## Main contact configuration

Edit `site.config.js` to change the business details:

```js
window.SITE_CONFIG = {
  brand: 'EZFORM ENTERPRISE',
  phoneDisplay: '+60 16-411 1007',
  phoneWhatsApp: '60164111007',
  landlineDisplay: '+60 5-841 1007',
  location: '3A, Lorong Tupai, 34000 Taiping, Perak, Malaysia'
};
```

## Before final launch

Confirm with the business owner:

- official logo / brand colours
- whether the mobile number is the preferred WhatsApp number
- official email and social links
- exact uniform catalogue and fabrics
- measurement / fitting arrangements
- embroidery, logo or printing capabilities (if any)
- government / MOF registration details, only if the business wants them published
- delivery coverage and lead times
- company registration number and legal footer details

## Preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages

Push the contents of this folder to a GitHub repository and enable Pages from the `main` branch `/ (root)` folder.
